//VARIAVEIS GLOBAIS ---------------------------------------------------------------

// DEFINE O TEMPO PADRAO DE CARREGAMENTO DAS ANIMACOES EM OBJETOS
var tempo_entrada = 500;
var num_obj = 9

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
		
		abre_objetos();
		montaPersonagem();
		
	});		
	
}


function abre_objetos(){	
	
	var tempo = 500;
	
	// Animation complete.
	$('#aparece1').fadeIn(400, function()
	{
		$('#aparece2').fadeIn(400, function()
		{
					
		});
		$('#caixa').fadeIn(400, function()
		{
					
		});
		$('#check1').fadeIn(400, function()
			{
				
			});	
		
	});
}


var item1 = true;
var item2 = false;
var item3 = false;
var item4 = false;
var item5 = false;
var item6 = false;
var item7 = false;
var item8 = false;

function mostra(caixa){
	
	aux = "img/texto"+caixa+".png";
	document.getElementById("caixa").src = aux;	
	
	aux1 = "img/ilustra"+caixa+".png";
	document.getElementById("aparece2").src = aux1;	
	
	aux2 = "item"+caixa;
	window[aux2] = true;
	
	aux3 = "check"+caixa;
	document.getElementById(aux3).style.display = "block";
	
	if(item2 == true && item3 == true){
		parent.habilitaAvancar();	
	}
	
}

function some(caixa){
	
	aux = "aparece"+caixa;
	document.getElementById(aux).style.display = "none";	
}



