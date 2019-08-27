
//FUNÇÕES -------------------------------------------------------------------------
// --------------------------------------------------------------------------------
//FUNCAO INICIA EXIBIÇÃO DE OBJETOS DA CAPA  --------------------------------------
var tempo_entrada = 500;

function iniciaCapa_fc()
{		
	//TOCA AUDIO DA CAPA
 	toca_audio('audioCapa');
	
	//CRIA EFEITOS DE EXIBIÇÃO NA PÁGINA
	$('#fundo').fadeIn(tempo_entrada, function()
	{		
		$('#botaoAudio').fadeIn(tempo_entrada, function()
		{
			$('#elemento').animate({left: 0},tempo_entrada, function()
			{
				$('#titulo').fadeIn(tempo_entrada, function(){});
				$('#iniciar').fadeIn(tempo_entrada, function(){});
				
			});
				
		});
		  
		
		
		/*$('#obj1').fadeIn(tempo_entrada, function()
		{
			$( "#obj1" ).animate({right: 0}, tempo_entrada, function() {
				$('#obj2').fadeIn(tempo_entrada, function(){
					$('#obj3').fadeIn(tempo_entrada, function(){
						//$('#seta_avancarCapa').fadeIn(tempo_entrada, function(){});
					});
				});
			});
		});*/		
	});	
	
}


//AUDIO ---------------------------------------------------------------------------

//VARIAVEIS  ----------------------------------------------------------------------
var audioOn = true;
var finalizouAudio = false;

// --------------------------------------------------------------------------------
//FUNÇÕES QUE CONTROLAM BOTAO DE AUDIO --------------------------------------------
// --------------------------------------------------------------------------------
//FUNÇÃO QUE CONTROLA O PLAY E O STOP DO ÁUDIO DA CAPA ----------------------------

function verificaAudioCapa_fc() {
	
	var audio = document.getElementById('player_audio');

	somDesligado = '<img src="img/somDesligado.png">';
	somLigado = '<img src="img/somLigado.png">';
	
	//PARA O AUDIO
	if(audioOn)
	{
		audioOn = false;
		document.getElementById("player_audio").pause();
		document.getElementById("botaoAudio").innerHTML = somDesligado;		
	}
	//TOCA O AUDIO
	else
	{
		if(!finalizouAudio)
		{
			audioOn = true;
			document.getElementById("player_audio").play();
			document.getElementById("botaoAudio").innerHTML = somLigado;
		}
	}
}

// --------------------------------------------------------------------------------
//FUNÇÃO TOCA AUDIO ---------------------------------------------------------------

//function toca_audio(objeto) {
	//objeto_cr_ie_sf = "audio/" + objeto + ".mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
	//objeto_ff_op = "audio/" + objeto + ".ogg"; //PARA CHROME, FIREFOX, OPERA
	//$("#toca_audio").html("<audio id='player_audio' autoplay='autoplay'><source src='"+objeto_cr_ie_sf+"' type='audio/mpeg'/><source src='"+objeto_ff_op+"' type='audio/ogg'/></audio>");
//}


// HINTS --------------------------------------------------------------------------
// --------------------------------------------------------------------------------
//FUNÇÃO QUE CONTROLA OS HINTS

/*function hint_fc(_botao,_estado)
{	
	document.getElementById("hint").style.display = 'block';
	document.getElementById("hint").style.position = 'absolute';	
	
	//BOTAO AUDIO LIGADO --------------------------------------------
	if(_botao == 'LIGADO' && _estado == 'ON')
	{
		hintOn = '<img src="../../img/_hints/hint_audioOnCapa.png">';
		document.getElementById("hint").innerHTML = hintOn;
		
		document.getElementById("hint").style.top  = '20px';
		document.getElementById("hint").style.left = '55px';
	}
	else if(_botao == 'LIGADO' && _estado == 'OFF')
	{
		document.getElementById("hint").style.display = 'none';
	}
	
	//BOTAO AUDIO DESLIGADO -----------------------------------------
	if(_botao == 'DESLIGADO' && _estado == 'ON')
	{
		hintOff = '<img src="../../img/_hints/hint_audioOffCapa.png">';
		document.getElementById("hint").innerHTML = hintOff;
		
		document.getElementById("hint").style.top  = '20px';
		document.getElementById("hint").style.left = '55px';
	}
	else if(_botao == 'DESLIGADO' && _estado == 'OFF')
	{
		document.getElementById("hint").style.display = 'none';
	}
	
	//BOTAO AVANCAR DA CAPA -----------------------------------------
	if(_botao == 'AVANCAR' && _estado == 'ON')
	{
		hintAvanca = '<img src="../../img/_hints/hint_avancarCapa.png">';
		document.getElementById("hint").innerHTML = hintAvanca;
		
		document.getElementById("hint").style.top  = '572px';
		document.getElementById("hint").style.left = '807px';
	}
	else if(_botao == 'AVANCAR' && _estado == 'OFF')
	{
		document.getElementById("hint").style.display = 'none';
	}	
}*/




