application.setDefaultLoginView('loginForm');




(new AjaxControlQuery(CoreAjaxUrlRoot, 'user_function', {
	"widget": "listMarkers"
})).addEvent('onSuccess', function(resp) {
    
    var map={}
     resp.items.forEach(function(item){
         map[item.id]=item;
     });
	
	var initItem=function(item){
	    console.log(item);
	    if(typeof map[item.getId()]!='undefined'){
	        console.log(map[item.getId()]);
	        var data=map[item.getId()];
	        
	        var category=data.attributes.category;
	        category=category.toLowerCase().replace(/[^0-9a-z ]/g, "").split(' ').join('-');
	        
	        var period=data.attributes.period[0];
	        period=period.toLowerCase().replace(/[^0-9a-z ]/g, "").split(' ').join('-'));
	        
	        var path='https://rijekafiume.geolive.ca/images/slideshow/markers/';
	        path+=category+'-'+period'+.png';
	        
	        item.setIcon(path);
	        
	    }
	   
	}
	var initLayer=function(layer){
	    
	    
	    layer.getItems().forEach(initItem);
	    layer.addEvent('addItem',initItem);
	    
	};
	application.getLayerManager().getLayer(36, initLayer);
	
				    
}).execute();