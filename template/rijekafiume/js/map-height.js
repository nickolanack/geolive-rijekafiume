//jQuery(document).ready(function() {
//	var docHeight = jQuery(document).height()
//	var menuHeight = jQuery('#headcontainer').height();
//	var footerHeight = jQuery('#footercontainer').height();
//	
//	var mapHeight = docHeight - menuHeight - footerHeight;
//	
//	jQuery('#GLMap_RijekaFiume_1Container').css('height', mapHeight);
//});




function jqUpdateSize(){
    // Get the dimensions of the viewport
	var docHeight = jQuery(document).height()
	var menuHeight = jQuery('#headcontainer').height();
	var footerHeight = jQuery('#footercontainer').height();
	
	var mapHeight = docHeight - menuHeight - footerHeight;
	
	jQuery('.geolive_mediaMap_container').css('height', mapHeight);      
};
jQuery(document).ready(jqUpdateSize);    // When the page first loads
jQuery(window).resize(jqUpdateSize);     // When the browser changes size 