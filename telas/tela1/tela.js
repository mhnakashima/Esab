//VARIAVEIS GLOBAIS ---------------------------------------------------------------

// DEFINE O TEMPO PADRAO DE CARREGAMENTO DAS ANIMACOES EM OBJETOS
var tempo_entrada = 500;
var num_obj = 9

var items = [];
var clicks = document.getElementsByClassName('elementos-anchor');

console.log(clicks);
//FUNÇÕES -------------------------------------------------------------------------
// --------------------------------------------------------------------------------
//FUNCAO INICIA EXIBIÇÃO DE OBJETOS DA CAPA  --------------------------------------


function iniciaScript_fc()
{		
	//TOCA AUDIO DA CAPA
 	//toca_audio('audioCapa');
	
	//CRIA EFEITOS DE EXIBIÇÃO NA PÁGINA
	$('#fundo').fadeIn(tempo_entrada, function()
	{
		//CHAMA CONSTRUÇÃO DO LAYOUT E SETA QUAL PERSONAGEM SERA USADO NA TELA: 'BUSTO' OU 'TELA'
			
	});	
	
	for(var i = 0; i < clicks.length; i++){
		items.push({
			index: i,
			seen: false
		})
	};
}

function mostrarConteudo(item, index){
	
	let desbloqueaTela = true;
	
	if(!items[index].seen){
		items[index].seen = true;
	}	
	
	for(var i = 0; i < items.length; i++){
		let item = document.getElementsByClassName('conteudo' + i)[0]
		
		console.log("item", item);

		item.style.display = "none";
		
		if(items[i].seen == false){
			desbloqueaTela = false;
		}

		if(i == index){
			item.style.display = "inline-block";
		}
	}

	if(desbloqueaTela){
		parent.habilitaAvancar();
	}
}
/*
//FUNCÃO QUE CONTROLA A CONSTRUÇÃO DO LAYOUT PADRÃO
function montaPersonagem()
{
	// CABECALHO -----------------------------------------------------------------
	var titulo = '<img src="img/titulo.png" border="0">';
	document.getElementById("titulo").innerHTML = titulo;
	parent.habilitaAvancar();
	
		
	// EXIBE CONTEUDO ------------------------------------------------------------
	// CABECALHO
	$("#barra_cabecalho").fadeIn(500,function()
	{
		//PERSONAGEM BUSTO
			
		$("#marca").fadeIn(500);
		$("#titulo").fadeIn(500,function()
		{
			abre_objetos();
		});			
	});
	
	
}



function abre_objetos(){	
	
	var tempo = 500;
	
	// Animation complete.
	$('#aparece0').fadeIn(400, function()
	{
		//$('#seta_a').fadeIn(400);
	});
}

/*
function inicia_video(){
	//stop_video();
	parent.habilitaAvancar();
	/document.getElementById("aparece0").style.display = "none";	
	document.getElementById("item1").style.display = "none";	
	$('#fundo_pop').fadeIn(400, function()
	{
		document.getElementById("elementos_tela").style.zIndex = "1100";	
		document.getElementById("video_tela").style.display = "block";	
		document.getElementById("video_tela").play();
	});
	
}



var atual = 1;
var total = 2;

function avancar(){
	atual++;
	aux = "img/texto"+atual+".png";
	document.getElementById("aparece0").src = aux;
	if(atual == total){
		$('#seta_a').fadeOut(200);	
		$('#seta_v').fadeIn(400);
		parent.habilitaAvancar();
	}else{
		$('#seta_v').fadeIn(400);
	}
}

function voltar(){
	atual--;
	aux = "img/texto"+atual+".png";
	document.getElementById("aparece0").src = aux;
	if(atual == 1){
		$('#seta_v').fadeOut(200);	
		$('#seta_a').fadeIn(400);
	}else{
		$('#seta_a').fadeIn(400);
	}
}





var certo = '<img src="img/checked.png">';
var errado = '<img src="img/errado.png">';

var resp1 = false;
var resp2 = false;
var resp3 = false;
var resp4 = false;
var resp5 = false;
var resp6 = false;

var cont = 0;


function abre_pop(popup){
	
	aux = "resp"+popup;
	window[aux] = true;
	
	if(popup == 1 || popup == 2){
		conteudo_popup = '<img src="img/botao_fechar.png" id="bt_fechar" onClick="fecharPop();" /><img src="img/popup'+popup+'.png" id="pop" />';
	}
	
	document.getElementById("conteudo_pop").innerHTML = conteudo_popup;
	
	$('#fundo_pop').fadeIn(400, function()
	{
		$('#conteudo_pop').fadeIn(400, function()
		{
			$('#bt_fechar').fadeIn(400);
			if(popup == 1){
				document.getElementById("bt_fechar").style.left = "749px";
				document.getElementById("bt_fechar").style.top = "137px";
			}
			if(popup == 2){
				document.getElementById("bt_fechar").style.left = "716px";
				document.getElementById("bt_fechar").style.top = "53px";
			}
			
			colocar_check(popup);
		});
		//parent.habilitaAvancar();
	});
	
}

function abre_item(popup){
	aux = "pop"+popup;
	document.getElementById(aux).style.display = "block";	
}

function fecha_item(popup){
	aux = "pop"+popup;
	document.getElementById(aux).style.display = "none";	
}

function fecharPop(){
	$('#bt_fechar').fadeOut(400, function()
	{
		$('#conteudo_pop').fadeOut(400, function()
		{
			$('#fundo_pop').fadeOut(400);
			if(resp1 == true && resp2 == true){
				parent.habilitaAvancar();
			}
		});
		
	});	
}


function colocar_check(popup){
	aux = "check"+popup;
	document.getElementById(aux).style.display = "block";	
}

*/




