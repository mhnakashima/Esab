// JavaScript Document
// --------------------------------------------------------------------------------
//FUNÇÃO TOCA AUDIO ---------------------------------------------------------------

function toca_audio(objeto) {
	objeto_cr_ie_sf = "audio/" + objeto + ".mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
	objeto_ff_op = "audio/" + objeto + ".ogg"; //PARA CHROME, FIREFOX, OPERA
	$("#toca_audio").html("<audio id='player_audio' autoplay='autoplay' loop><source src='"+objeto_cr_ie_sf+"' type='audio/mpeg'/><source src='"+objeto_ff_op+"' type='audio/ogg'/></audio>");
}

//FUNÇÃO TOCA AUDIO EFEITO DO CLIQUE BALAO ----------------------------------------
function toca_efeito() {
	objeto_cr_ie_sf = "../../audio/avancarBalao.mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
	objeto_ff_op = "../../audio/avancarBalao.ogg"; //PARA CHROME, FIREFOX, OPERA
	$("#toca_audio").html("<audio id='player_audio' autoplay='autoplay'><source src='"+objeto_cr_ie_sf+"' type='audio/mpeg'/><source src='"+objeto_ff_op+"' type='audio/ogg'/></audio>");
}

//FUNÇÃO TOCA AUDIO EFEITO DO ZOOM ----------------------------------------
function toca_sfx(objeto) {
	objeto_cr_ie_sf = "../../audio/"+objeto+".mp3"; // PARA GOOGLE CHROME, INTERNET EXPLORER, SAFARI
	objeto_ff_op = "../../audio/"+objeto+".ogg"; //PARA CHROME, FIREFOX, OPERA
	$("#toca_audio").html("<audio id='player_audio' autoplay='autoplay'><source src='"+objeto_cr_ie_sf+"' type='audio/mpeg'/><source src='"+objeto_ff_op+"' type='audio/ogg'/></audio>");
}