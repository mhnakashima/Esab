$(document).ready(function(){
	toca_audio();
	document.getElementById("RC_icone_audio_telas").style.display = "block";
	document.getElementById("icone_ajuda").innerHTML = '<a href="http://www.youtube.com/embed/nrS2FHuWPJk?rel=0&amp;" class="lytebox" title="Instruções de navegação" data-lyte-options="width:800 height:550 afterStart:stop_audio"><img src="'+jsVars.caminho+'img/icon3.png" onmouseover="this.src=\''+jsVars.caminho+'img/icon3_over.png\'" onmouseout="this.src=\''+jsVars.caminho+'img/icon3.png\'" /></a>';
});