<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone","#pagetwo",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
		$(this).css('color', 'red');
    	alert("Stop tapping!");
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   

	$('#taptext').on("tap",function(){
    	$.mobile.navigate("#pagetwo");
  	});

});