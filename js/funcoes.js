// TOCAR O AUDIO DE UM OBJETO NO CENÁRIO


//funcoes audio
/*function toca_audio() {
  objeto = 'tela';
	if (typeof jsVars.tela == "undefined") {
		objeto_cr_ie_sf = "conteudo/audio/" + objeto + ".mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
		objeto_ff_op = "conteudo/audio/" + objeto + ".ogg"; //PARA CHROME, FIREFOX, OPERA	
	} else {
		objeto_cr_ie_sf = jsVars.caminho + "xml/tela" + jsVars.tela + "/conteudo/audio/" + objeto + ".mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
		objeto_ff_op = jsVars.caminho + "xml/tela" + jsVars.tela + "/conteudo/audio/" + objeto + ".ogg"; //PARA CHROME, FIREFOX, OPERA
	}
	$("#RC_toca_audio").html("<audio id='RC_player_audio' autoplay='autoplay'><source src='"+objeto_cr_ie_sf+"' type='audio/mpeg'/><source src='"+objeto_ff_op+"' type='audio/ogg'/></audio>");
	document.getElementById("RC_icone_audio_telas").innerHTML = '<img src="'+jsVars.caminho+'img/icon2.png" onmouseover="this.src=\''+jsVars.caminho+'img/icon2_over.png\'" onmouseout="this.src=\''+jsVars.caminho+'img/icon2.png\'" onclick="stop_audio();"/>';	
}

function stop_audio() {
	document.getElementById("RC_player_audio").pause();
	document.getElementById("RC_player_audio").currentTime = 0;
	document.getElementById("RC_icone_audio_telas").innerHTML = '<img src="'+jsVars.caminho+'img/icon2_des.png" onmouseover="this.src=\''+jsVars.caminho+'img/icon2_des_over.png\'" onmouseout="this.src=\''+jsVars.caminho+'img/icon2_des.png\'" onclick="toca_audio();"/>';
}

function pause_audio() {
	document.getElementById("RC_player_audio").pause();
	document.getElementById("RC_icone_audio_telas").innerHTML = '<img src="'+jsVars.caminho+'img/icon2_des.png" onmouseover="this.src=\''+jsVars.caminho+'img/icon2_des_over.png\'" onmouseout="this.src=\''+jsVars.caminho+'img/icon2_des.png\'" onclick="toca_audio();"/>';
}

function pause_play() {
	document.getElementById("RC_player_audio").play();
	document.getElementById("RC_icone_audio_telas").innerHTML = '<img src="'+jsVars.caminho+'img/icon2.png" onmouseover="this.src=\''+jsVars.caminho+'img/icon2_over.png\'" onmouseout="this.src=\''+jsVars.caminho+'img/icon2.png\'" onclick="stop_audio();"/>';
}

*/
//funcoes para video
var tempo_para = 1;
var gif_boca = 0;
function some_load(){
    //alert("aqui");
    tempo_para = 2;
    document.getElementById("RC_icone_audio").innerHTML = '<img src="layout_base/_itensTelas/stop.png" onclick="stop_video();"/>';
    document.getElementById("boca_guia_antes").style.display = "none";
}

function play_video(){
	document.getElementById("canvas").play();
    document.getElementById("boca_guia_antes").style.display = "none";
	document.getElementById("RC_icone_audio").innerHTML = '<img src="layout_base/_itensTelas/stop.png" onclick="stop_video();"/>';
};

function stop_video() {
	document.getElementById("canvas").currentTime = 0;
	document.getElementById("canvas").pause();
    document.getElementById("boca_guia_antes").style.display = "block";
	document.getElementById("RC_icone_audio").innerHTML = '<img src="layout_base/_itensTelas/play.png" onclick="play_video();"/>';
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


function validateKey (evt){
	if(evt.keyCode == '17'){
		return false;
		}
	return true;
}

/*************fechar popup******************/
function abre_pop(pop){
    stop_video();
    if(pop == undefined){
        $("#popup").fadeIn(300);
        $("#popup_dentro").fadeIn(300);
        $(".bt_fechar").fadeIn(300); 
    }else{
        $("#popup"+pop).fadeIn(300);
        $("#popup_dentro"+pop).fadeIn(300);
        $(".bt_fechar").fadeIn(300); 
    }
    
}

function fecha_pop(pop){
    //play_video();
    if(pop == undefined){
        $("#popup").fadeOut(300);
        $(".popup_dentro").fadeOut(150);
        $(".bt_fechar").fadeOut(100); 
    }else{
        $("#popup"+pop).fadeOut(300);
        $("#popup_dentro"+pop).fadeOut(150);
        $(".bt_fechar").fadeOut(100); 
    }
    
}

function abre_pop_instrucoes(){
        stop_video();
        $(".popup_instrucoes").fadeIn(300);
        $(".popup_dentro_instrucoes").fadeIn(300);
        $(".bt_fechar").fadeIn(300); 
}
function abre_pop_instrucoes2(){
        stop_audio();
        $(".popup_instrucoes").fadeIn(300);
        $(".popup_dentro_instrucoes").fadeIn(300);
        $(".bt_fechar").fadeIn(300); 
}

function fecha_pop_instrucoes(){
    //play_video();
        $(".popup_instrucoes").fadeOut(300);
        $(".popup_dentro_instrucoes").fadeOut(150);
        $(".bt_fechar").fadeOut(100);   
}

var caixa_aberta = 1;
function abre_caixa(caixa, tamanho){
    if(caixa_aberta == 2){
        return false;
    }
    document.getElementById("caixa_abrir"+caixa).innerHTML = '<img src="'+jsVars.caminho+'img/caixaAbrindo.gif"/>';
    if(tamanho == undefined){
        v_tamanho = "200";
    }else{
        v_tamanho = tamanho;
    }
		$('#div_caixa_cima'+caixa).animate({
			bottom: '100px'
		}, 600, function() {
			$('#div_caixa_cima'+caixa).animate({
       			left: '-40px',
       			width: v_tamanho,
       			zIndex: '100'+caixa
       		}, 600, function() {
       			$("#div_caixa_cima"+caixa+" h1").fadeIn(400);
       			$("#bt_fechar_caixa"+caixa).fadeIn(400);
       		});	
		});	
	caixa_aberta = 2;
}

function fecha_caixa(caixa){
    $("#div_caixa_cima"+caixa+" h1").fadeOut(200);
    $("#bt_fechar_caixa"+caixa).fadeOut(200);
	$('#div_caixa_cima'+caixa).animate({       			
       	zIndex: '1',
       	left: '40px',
       	width: '0px'
       }, 600, function() {
          $('#div_caixa_cima'+caixa).animate({
         	bottom: '20px'
         }, 600, function() {
         	document.getElementById("caixa_abrir"+caixa).innerHTML = '<img src="'+jsVars.caminho+'img/caixaFechando.gif"/>';	
         });	
       });
	caixa_aberta = 1;	
}


function abre_passa_mouse(){
    document.getElementById("box_passa_mouse").style.display = "block";
}

function fecha_passa_mouse(){
    document.getElementById("box_passa_mouse").style.display = "none";
}



/** Próxima página **/
function proxima_pagina() {
	if (typeof jsVars.proxima != "undefined") {
		atual = window.location.href;
		proxima = atual.substring(0,atual.length-3) + jsVars.proxima;
		window.location.href = proxima;
	}
	return false;
}


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


/*function disableselect(e){
    return false
}
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
}
*/