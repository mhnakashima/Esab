//--------------------------------------------------------------------------------


$(document).ready(function(){
	  
    /*parte video*/
	video2 = document.getElementById('canvas');
	/*
    video2.addEventListener('play', function() {
		some_load();
	}, false);	
	*/		
	video2.addEventListener('ended', function() {
	    //document.getElementById("boca_guia_antes_gif").style.display = "none";
		stop_video(); 
	}, false);	
	
   //alert(tempo_para);
   
   video2.addEventListener("timeupdate", function(){
   //alert(Math.floor(video2.currentTime));
     if(tempo_para == 1){
     //document.title = Math.floor(video2.currentTime) + " second(s)";
        some_load();
     }
   }, false);
   
   piscar('tx_aguarde');
   piscar('tx_carregando');

});




function piscar(id) {
    var i = document.getElementById(id);
    if(i != null){
        if(i.style.visibility=='hidden') {
            i.style.visibility='visible';
        } else {
            i.style.visibility='hidden';
        }
        setTimeout("piscar('"+id+"')",500);
        return true;
    }else{
        return false;
    }
} 

//FUNCÃO QUE CONTROLA A CONSTRUÇÃO DO LAYOUT PADRÃO
function montaPersonagem()
{
	// CABECALHO -----------------------------------------------------------------
	var titulo = '<img src="img/titulo.png" border="0">';
	document.getElementById("titulo").innerHTML = titulo;
	
	// PERSONAGEM ----------------------------------------------------------------
	// BUSTO
	var balao_busto = '<img src="img/balao.png" border="0">';
	document.getElementById("balao").innerHTML = balao_busto;
		
	// EXIBE CONTEUDO ------------------------------------------------------------
	// CABECALHO
	$("#barra_cabecalho").fadeIn(500,function()
	{
		//PERSONAGEM BUSTO
		
		$("#arquivos_boca_busto").fadeIn(500,function(){});
		
		$("#personagem_busto").fadeIn(500,function(){});
			
		$("#marca").fadeIn(500);
		$("#titulo").fadeIn(500,function()
		{
			inicia_boca();
		});			
	});
	
	
}


function inicia_boca(){
	
	cod_video = '<source src="video/boca.webm" type="video/webm"></source><source src="video/boca.mp4" type="video/mp4"></source>';
	document.getElementById("canvas").innerHTML = cod_video;
	document.getElementById("personagem_busto2").style.display = "block";
	//document.getElementById("troca_personagem").src = "../../layout_base/_personagens/personagem.gif";

}


function audio_tela(objeto) {
	objeto_cr_ie_sf = "audio/" + objeto + ".mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
	$("#toca_audio").html("<audio id='player_audio' autoplay='autoplay' onended='fim_audio()'><source src='"+objeto_cr_ie_sf+"' type='audio/mpeg'/></audio>");
}


//funcoes para video
var tempo_para = 1;
var gif_boca = 0;
function some_load(){
    //alert("aqui");
    tempo_para = 2;
    document.getElementById("RC_icone_audio").innerHTML = '<img src="../../layout_base/_itensTelas/stop.png" onclick="stop_video();"/>';
    //document.getElementById("boca_guia_antes").style.display = "none";
}

function play_video(){
	document.getElementById("canvas").play();
    //document.getElementById("boca_guia_antes").style.display = "none";
	document.getElementById("RC_icone_audio").innerHTML = '<img src="../../layout_base/_itensTelas/stop.png" onclick="stop_video();"/>';
	document.getElementById("personagem_busto2").style.display = "block";
	//document.getElementById("troca_personagem").src = "../../layout_base/_personagens/personagem.gif";
};

function stop_video() {
	document.getElementById("canvas").currentTime = 0;
	document.getElementById("canvas").pause();
    //document.getElementById("boca_guia_antes").style.display = "block";
	document.getElementById("RC_icone_audio").innerHTML = '<img src="../../layout_base/_itensTelas/play.png" onclick="play_video();"/>';
	document.getElementById("personagem_busto2").style.display = "none";
	//document.getElementById("troca_personagem").src = "../../layout_base/_personagens/personagem.jpg";
};



function carrega(){
	document.location.reload();
}


var tipo_efeito = 1;
function abre_balao(){
      $('#balao').css("display","block");
}

function fecha_balao(){
     $('#balao').css("display","none");
}




//AUDIO ---------------------------------------------------------------------------

//VARIAVEIS  ----------------------------------------------------------------------
var audioOn = true;
var finalizouAudio = false;

// --------------------------------------------------------------------------------
//FUNÇÕES QUE CONTROLAM BOTAO DE AUDIO --------------------------------------------
// --------------------------------------------------------------------------------
//FUNÇÃO QUE CONTROLA O PLAY E O STOP DO ÁUDIO DA CAPA ----------------------------

function verificaAudio() {
	
	var audio = document.getElementById('player_audio');

	somDesligado = '<img src="../../layout_base/_itensTelas/botao_audio_off.png" />';
	somLigado = '<img src="../../layout_base/_itensTelas/botao_audio.png" />';
	
	//PARA O AUDIO
	if(audioOn)
	{
		audioOn = false;
		document.getElementById("player_audio").pause();
		document.getElementById("personagem_tela").innerHTML = somDesligado;		
	}
	//TOCA O AUDIO
	else
	{
		if(!finalizouAudio)
		{
			audioOn = true;
			document.getElementById("player_audio").play();
			document.getElementById("personagem_tela").innerHTML = somLigado;
		}
	}
}

function fim_audio(){
	somDesligado = '<img src="../../layout_base/_itensTelas/botao_audio_off.png" />';
	audioOn = false;
	document.getElementById("personagem_tela").innerHTML = somDesligado;	
}









