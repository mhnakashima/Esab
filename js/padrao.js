
// JS PADRAO ---------------------------------------------------------------------
//VARIAVEIS GLOBAIS --------------------------------------------------------------

function getLocation()
{
	if (LMSIsInitialized())
	{
		var value = parseInt(doLMSGetValue('cmi.core.lesson_location'));

		window.lessonLocation = !isNaN(value) && value > 0 ? value : 1;

		pagina_atual = window.lessonLocation - 1;
	}
	else
	{
		setTimeout(getLocation, 100);
	}
}

//getLocation();

var pagina_atual = 0;
var pagina_inicial = 1;
var cliqueMenu_bl = false;

//VARIAVEL QUE DEFINE A QUANTIDADE DE TELAS NO CURSO
var pagina_final = 7; //<----- INSERIR AQUI A QUANTIDADE DE TELAS NO CURSO CONTANDO COM A CAPA. 

//SCRIPT PARA HABILITAR AVANÇAR DEPOIS DE TER VOLTADO NAS TELAS
var array_popup = new Array(30);
//populando array
for(p=0;p<=pagina_final;p++){
	array_popup[p] = false; 	
}

//--------------------------------------------------------------------------------
//FUNCÃO QUE CONTROLA A CONSTRUÇÃO DO LAYOUT PADRÃO
function montaLayout_fc()
{
	// RODAPE
	$("#barra_rodape").animate({bottom: 118},500, function()
	{
		$("#contagem_telas").animate({opacity:1, left: 920},500,function(){});
		$("#menu").fadeOut(500,function()
		{
			$("#menu-lista").fadeOut(500,function(){});	
		});
		
		$("#botoesRodape").fadeIn(500,function(){});
		
		/*$("#botao-rever").fadeIn(500,function()
		{
			$("#botao-voltar").fadeIn(500,function()
			{
				$("#botao-avancar").fadeIn(500,function(){});	
			});	
		});	*/		
	});
}




//--------------------------------------------------------------------------------
//FUNCÃO QUE CONTROLA EXIBIÇÃO DO BALAO DE FALA
function exibeBalao_fc(_tipo,_estado)
{
	//PERSONAGEM BUSTO -----------------------------------------------------------
	if(_tipo = 'BUSTO' && _estado == 'ON')
	{
		document.getElementById("balao_busto").style.display = 'block';
	}
	else if(_tipo = 'BUSTO' && _estado == 'OFF')
	{
		document.getElementById("balao_busto").style.display = 'none';
	}
	
	//PERSONAGEM TELA ------------------------------------------------------------
	if(_tipo = 'TELA' && _estado == 'ON')
	{
		document.getElementById("balao_tela").style.display = 'block';
	}
	else if(_tipo = 'TELA' && _estado == 'OFF')
	{
		document.getElementById("balao_tela").style.display = 'none';
	}
}


//--------------------------------------------------------------------------------
//FUNCÃO QUE CONTROLA EXIBIÇÃO DO MENU
function cliqueMenu_fc()
{
	if(cliqueMenu_bl == false)
	{
		cliqueMenu_bl = true;
		$("#menu").fadeIn(200,function(){
			$("#menu-lista").fadeIn(300);	
		});
	}
	else
	{
		cliqueMenu_bl = false;
		$("#menu-lista").fadeOut(100,function(){
			$("#menu").fadeOut(300);	
		});
	}	
}



//--------------------------------------------------------------------------------
//FUNCÃO QUE CONTROLA ESTADO DO MENU
function menu_fc(_estado)
{	
	setTimeout(function(){
		if(_estado == 'ATIVAR')
		{
			$("#barra-menu").animate({bottom: "0px"},500);
			$("#menu-topo").fadeIn(300);
			$("#botao-audio").fadeIn(300);
			$("#botao-fala").fadeIn(300);
			montaLayout_fc();
		}
		else if (_estado == 'DESATIVAR')
		{
			$("#barra-menu").animate({bottom: "-70px"}, 500);
		}
	},1000);	
}


//função menu topo

function abre_menu(){
	var estado = document.getElementById("menu-lista").style.display;
	
	if(estado == "none"){
		document.getElementById("menu-topo").style.backgroundColor = "#191919";	
		document.getElementById("seta_menu").src = "img/_menu/seta_menu2.png";
		document.getElementById("menu-lista").style.display = "block";
		//$("menu-lista").fadeIn(300);
	}else{
		document.getElementById("menu-topo").style.backgroundColor = "#515151";	
		document.getElementById("seta_menu").src = "img/_menu/seta_menu1.png";
		document.getElementById("menu-lista").style.display = "none";
		//$("menu-lista").fadeOut(300);
	}	
}


function aparece_balao(){
	document.getElementById("balao-fala").style.display = "block";	
}


function some_balao(){
	document.getElementById("balao-fala").style.display = "none";	
}

// --------------------------------------------------------------------------------
//NAVEGAÇÃO -----------------------------------------------------------------------
// --------------------------------------------------------------------------------
//FUNÇÃO QUE CONTROLA NAVEGACAO ENTRE TELAS  --------------------------------------

$(document).ready(function(){

	//var tela = /*document.getElementById("conteudo-curso").src = "telas/tela"+pagina_atual+"/tela.html";*/
	
	var telas = window.array_popup;
	var menuList = $(".menu-items");

	document.onselectstart=new Function ("return false");
	
	if(pagina_atual <= 9){
		atual_txt = "0"+pagina_atual;
	}else{
		atual_txt = pagina_atual;
	}
	if(pagina_final <= 9){
		final_txt = "0"+pagina_final;
	}else{
		final_txt = pagina_final;
	}
	
	//document.getElementById("apertaTecla").focus();	

	$("#botao-avancar").hover(function(){
		let itm = $(this).children('img');

		itm.attr('src', '../layout_base/_itensTelas/botaoAvancarTela_over.png');
	}, function(){
		let itm = $(this).children('img');

		itm.attr('src', '../layout_base/_itensTelas/botaoAvancarTela.png');
	})

	$("#botao-ajuda")
		.click(function(){
			var open = $('.alpha:visible').length;
			if(open == 0){
				$(".alpha, .ajuda")
					.css('display', 'block');
			}else{
				$(".alpha, .ajuda")
					.css('display', 'none');
			}
		})

	$("#botaoMenu")
		.click(function(){
			
			var open = $('.menu:visible').length;
			if(open == 0){
				$(".alpha, .menu")
					.css('display', 'block');

					window.carregaMenu();
			}
		})
	
	$(".fechar")
		.click(function(){
			$(".alpha, .ajuda, .menu, .glossary")
				.css("display", "none");
		})
	
	$(".botao-items")
	.click(function(){
			
		var open = $('.menu:visible').length;
		if(open == 0){
			$(".alpha, .menu")
				.css('display', 'block');

				window.carregaMenu();
		}
	})

	window.glossario();
});

function glossario(){
	let list = document.getElementById('glossary-letters');
	let opt = '';

	const TOTAL_LETTERS = 26;

	for(var i = 0; i < TOTAL_LETTERS; i++){
		opt += 
		`<li class="glossary-item menu-item" id="link_menu">
			<a class="menu-anchor" href="#" onclick="carregaLetra(this, ${i})">
				<span class="menu-name">
					${String.fromCharCode(65 + i)}
				</span>
			</a>
		</li>`
	}

	list.innerHTML = '';
	list.innerHTML = opt;
}

function carregaLetra(el, value){
	console.log(el, value);
}

function carregaMenu(){

	let list = document.getElementById('menu-items');
	
	let opt = '';
	
	array_popup.forEach((tela, index) => {

		let path = './layout_base/_itensTelas/'; 
		let image = path + ( index == pagina_atual ? 'locker_current' : index < pagina_atual ? 'locker_no' : 'locker_locked' ) + '.png'; 

		opt += 
		`<li class="menu-item" id="link_menu">
			<a class="menu-anchor" href="#" onclick="${index > pagina_atual ? null : 'carregaTela(' + index + ')'}">
				<span class="menu-name">
					Tela ${index + 1}
				</span>
				<span class="menu-status">
					<img src="${image}" alt="" />
				</span>
			</a>
		</li>`

	});

	list.innerHTML = '';
	list.innerHTML = opt;
}

function carregaTela(index){

	pagina_atual = index;

	document.getElementById("conteudo-curso").src = `telas/tela${index}/tela.html`;

	$(".alpha, .menu, .glossary")
		.css("display", "none");
}

function navegacaoTelas_fc(_botao)
{
	//document.getElementById("marca").style.display = "none";
	if(_botao == 'REVER')
	{
		document.getElementById("conteudo-curso").src = "telas/tela"+pagina_atual+"/tela.html";
		
		if(pagina_atual == 1){
			
			menu_fc('ATIVAR');
			
			document.getElementById("botao-voltar").style.opacity = '0.4';
			document.getElementById("botao-voltar").style.cursor = 'default';
			document.getElementById("botao-voltar").setAttribute("onclick","");
		}	
	}
	
	if(_botao == 'DEFAULT')
	{
		//BOTAO VOLTAR
		document.getElementById("botao-voltar").style.opacity = '1';
		document.getElementById("botao-voltar").style.cursor = 'pointer';
		document.getElementById("botao-voltar").setAttribute("onclick","navegacaoTelas_fc(\'VOLTAR\')");
		
		// BOTAO AVANCAR
		document.getElementById("botao-avancar").style.opacity = '1';
		document.getElementById("botao-avancar").style.cursor = 'pointer';
		document.getElementById("botao-avancar").setAttribute("onclick","navegacaoTelas_fc(\'AVANCAR\')");
	}
	
	if(_botao == 'VOLTAR')
	{
		pagina_atual = pagina_atual - 1;		
		
		if(pagina_atual == pagina_inicial)
		{			
			document.getElementById("botao-voltar").style.opacity = '0.4';
			document.getElementById("botao-voltar").style.cursor = 'default';
			document.getElementById("botao-voltar").setAttribute("onclick","");
		}
		else
		{			
			document.getElementById("botao-voltar").style.opacity = '1';
			document.getElementById("botao-voltar").style.cursor = 'pointer';
			document.getElementById("botao-voltar").setAttribute("onclick","navegacaoTelas_fc(\'VOLTAR\')");
		}
		
		document.getElementById("botao-avancar").style.opacity = '1';
		document.getElementById("botao-avancar").style.cursor = 'pointer';
		document.getElementById("botao-avancar").setAttribute("onclick","navegacaoTelas_fc(\'AVANCAR\')");
		
		document.getElementById("conteudo-curso").src = "telas/tela"+pagina_atual+"/tela.html";
		
		aux_tela = "tela"+pagina_atual;
		//toca_audio(aux_tela);
		
	}
	
	if(_botao == 'AVANCAR')
	{
		pagina_atual = pagina_atual + 1;				
		
		document.getElementById("botao-avancar").style.opacity = '0.4';
		document.getElementById("botao-avancar").style.cursor = 'default';
		document.getElementById("botao-avancar").setAttribute("onclick","");
		
		document.getElementById("botao-voltar").style.opacity = '1';
		document.getElementById("botao-voltar").style.cursor = 'pointer';	
		document.getElementById("botao-voltar").setAttribute("onclick","navegacaoTelas_fc(\'VOLTAR\')");
				
			
		menu_fc('ATIVAR');
		
		if(pagina_atual == 1){	
			document.getElementById("botao-voltar").style.opacity = '0.4';
			document.getElementById("botao-voltar").style.cursor = 'default';
			document.getElementById("botao-voltar").setAttribute("onclick","");
		}	
		
		document.getElementById("conteudo-curso").src = "telas/tela"+pagina_atual+"/tela.html";
		
		if(pagina_atual < pagina_final){
			//habilitaAvancar();
		}
		
		aux_tela = "tela"+pagina_atual;
		//toca_audio(aux_tela);
	}
	
	/*doLMSSetValue('cmi.core.lesson_location', pagina_atual);

	if (pagina_atual == pagina_final)
	{
		doLMSSetValue('cmi.core.lesson_status', 'completed');
		doLMSCommit('');
	}
		*/
	if(pagina_atual <= 9){
		atual_txt = "0"+pagina_atual;
	}else{
		atual_txt = pagina_atual;
	}
	if(pagina_final <= 9){
		final_txt = "0"+pagina_final;
	}else{
		final_txt = pagina_final;
	}
	
	if(array_popup[pagina_atual] == true){
		habilitaAvancar();
	}
	
	var _nb = pagina_atual - 1;
	
	array_popup[_nb] = true;
	
	/*
	switch (pagina_atual){
		case 1:
			document.getElementById("link_menu1").style.opacity = '1';
			document.getElementById("link_menu1").style.cursor = 'pointer';	
			document.getElementById("link_menu1").setAttribute("onclick","menu(01)");
		break;
		
		case 2:
			document.getElementById("link_menu2").style.opacity = '1';
			document.getElementById("link_menu2").style.cursor = 'pointer';	
			document.getElementById("link_menu2").setAttribute("onclick","menu(02)");
		
		break;

		case 3:
			document.getElementById("link_menu3").style.opacity = '1';
			document.getElementById("link_menu3").style.cursor = 'pointer';	
			document.getElementById("link_menu3").setAttribute("onclick","menu(03)");
		
		break;

		case 4:
			document.getElementById("link_menu4").style.opacity = '1';
			document.getElementById("link_menu4").style.cursor = 'pointer';	
			document.getElementById("link_menu4").setAttribute("onclick","menu(04)");
		
		break;
		case 5:
			document.getElementById("link_menu5").style.opacity = '1';
			document.getElementById("link_menu5").style.cursor = 'pointer';	
			document.getElementById("link_menu5").setAttribute("onclick","menu(07)");
		
		break;
		case 7:
			document.getElementById("link_menu5").style.opacity = '1';
			document.getElementById("link_menu5").style.cursor = 'pointer';	
			document.getElementById("link_menu5").setAttribute("onclick","menu(07)");
		
		break;	
		case 10:
			document.getElementById("link_menu8").style.opacity = '1';
			document.getElementById("link_menu8").style.cursor = 'pointer';	
			document.getElementById("link_menu8").setAttribute("onclick","menu(10)");
		
		break;	
	}*/

	//PAGINAS
	document.getElementById("num_paginas").innerHTML = atual_txt;
	document.getElementById("total_paginas").innerHTML = final_txt;	
	
	/*aux_tela = "tela"+pagina_atual;
	
	cod_video = '<source src="telas/'+aux_tela+'/video/boca.webm" type="video/webm; codecs="vp8, vorbis""></source><source src="telas/'+aux_tela+'/video/boca.mp4" type="video/mp4"></source>';
		
	document.getElementById("canvas").innerHTML = cod_video;*/
	//inicia_boca(pagina_atual);
		
}



function habilitaAvancar(){
	document.getElementById("botao-avancar").style.opacity = '1';
	document.getElementById("botao-avancar").style.cursor = 'pointer';
	document.getElementById("botao-avancar").setAttribute("onclick","navegacaoTelas_fc(\'AVANCAR\')");
}

function apertaEnter(event){
	
	var chCode = ('charCode' in event) ? event.keyCode : event.charCode;
	//alert(chCode);
	
	if (chCode == 13){
		document.getElementById("conteudo-curso").src = "telas/tela"+document.getElementById("apertaTecla").value+"/tela.html";
		pagina_atual = document.getElementById("apertaTecla").value;
		pagina_atual = parseInt(pagina_atual);
		document.getElementById("apertaTecla").value = "";
		menu_fc('ATIVAR');
		habilitaAvancar();
		if(pagina_atual <= 9){
			atual_txt = "0"+pagina_atual;
		}else{
			atual_txt = pagina_atual;
		}
		if(pagina_final <= 9){
			final_txt = "0"+pagina_final;
		}else{
			final_txt = pagina_final;
		}
		
		//PAGINAS
		document.getElementById("num_paginas").innerHTML = atual_txt;
		document.getElementById("total_paginas").innerHTML = final_txt;	
		
		//setTimeout("inicia_boca(pagina_atual)", 2000);
	}
	
	return false;
	
}

// --------------------------------------------------------------------------------
//POPUP ---------------------------------------------------------------------------

// --------------------------------------------------------------------------------
//FUNÇÃO QUE CONTROLA O BOTAO FECHAR DO POPUP  ------------------------------------

function botaoFechar_fc()
{
	$("#botaoFecharPopup").fadeOut(50, function()
	{
		toca_audio('zoomout');
		
		$("#popup").fadeOut(500, function()
		{
			$("#alpha").fadeOut(500);
			
			//habilitaAvancar();	
		})	
	})	
}
// --------------------------------------------------------------------------------

function abre_marca(){
	$('#marca').fadeIn(500, function(){});
}


function menu(tela){
	
	document.getElementById("conteudo-curso").src = "telas/tela"+tela+"/tela.html";
	pagina_atual = parseInt(tela);
	menu_fc('ATIVAR');
	habilitaAvancar();
	
	if(pagina_atual == 1){
		document.getElementById("botao-voltar").style.opacity = '0.8';
		document.getElementById("botao-voltar").style.cursor = 'default';
		document.getElementById("botao-voltar").setAttribute("onclick","");
	}else{
		document.getElementById("botao-voltar").style.opacity = '1';
		document.getElementById("botao-voltar").style.cursor = 'pointer';
		document.getElementById("botao-voltar").setAttribute("onclick","navegacaoTelas_fc(\'VOLTAR\')");
	}
	
	if(pagina_atual == pagina_final){
		document.getElementById("botao-avancar").style.opacity = '0.8';
		document.getElementById("botao-avancar").style.cursor = 'default';
		document.getElementById("botao-avancar").setAttribute("onclick","");
	}	
	
	if(pagina_atual <= 9){
		atual_txt = "0"+pagina_atual;
	}else{
		atual_txt = pagina_atual;
	}
	if(pagina_final <= 9){
		final_txt = "0"+pagina_final;
	}else{
		final_txt = pagina_final;
	}
	
	//PAGINAS
	document.getElementById("num_paginas").innerHTML = atual_txt;
	document.getElementById("total_paginas").innerHTML = final_txt;	
	
}








