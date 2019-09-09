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
