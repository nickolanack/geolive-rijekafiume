application.setDefaultLoginView('loginForm');




(new AjaxControlQuery(CoreAjaxUrlRoot, 'user_function', {
	"widget": "listMarkers"
})).addEvent('onSuccess', function(resp) {
	
	var initItem=function(item){
	    console.log(item);
	}
	var initLayer=function(layer){
	    
	    
	    layer.getItems().forEach(initItem);
	    layer.addEvent('addItem',initItem);
	    
	};
	application.getLayerManager().getLayer(36, initLayer);
	
				    
}).execute();