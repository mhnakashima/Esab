
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




