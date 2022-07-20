application.setDefaultLoginView('loginForm');




(new AjaxControlQuery(CoreAjaxUrlRoot, 'user_function', {
	"widget": "listMarkers"
})).addEvent('onSuccess', function(resp) {
    
    var map={}
     resp.items.forEach(function(item){
         map[id]=item;
     });
	
	var initItem=function(item){
	    console.log(item);
	    if(typeof map[item.getId()]!='undefined'){
	        console.log(map[item.getId()]);
	    }
	   
	}
	var initLayer=function(layer){
	    
	    
	    layer.getItems().forEach(initItem);
	    layer.addEvent('addItem',initItem);
	    
	};
	application.getLayerManager().getLayer(36, initLayer);
	
				    
}).execute();