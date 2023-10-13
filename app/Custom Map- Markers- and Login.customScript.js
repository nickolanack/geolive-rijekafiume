application.setDefaultLoginView('loginForm');



(new AjaxControlQuery(CoreAjaxUrlRoot, 'user_function', {
	"widget": "listMarkers",
	"origin":"web"
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
	        
	       var period="undefined";
	            
	        try{
	            
	            if(!(data.attributes.period&&data.attributes.period.length>0)){
	                
	                item.hide();
	                return;
	            }

    	        var period_=data.attributes.period[0];
    	        period=period_.toLowerCase().replace(/[^0-9a-z ]/g, "").split(' ').join('-');
    	        
	        }catch(e){
	            console.error(e);
	            item.hide();
	        }
	        
	        try{
	            
	          
    	        var category=data.attributes.category;
    	        category=category.toLowerCase().replace(/[^0-9a-z ]/g, "").split(' ').join('-');
    	        
    	        var path='https://rijekafiume.geolive.ca/images/slideshow/markers/';
    	        path+=category+'-'+period+'.png';
    	        
    	        console.log(path);
    	        
    	        item.getMapObject().setIcon({url:path, scaledSize:new google.maps.Size(50,50)});
	        }catch(e){
	            console.error(e);
	            item.hide();
	        }
	        
	    }
	   
	};
	var initLayer=function(layer){
	    
	    
	    layer.getItems().forEach(initItem);
	    layer.addEvent('addItem',initItem);
	    
	};
	application.getLayerManager().getLayer(36, initLayer);
	
				    
}).execute();


application.getBaseMap().setOptions({styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "lightness": -80
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2b3544"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "lightness": -20
      }
    ]
  }
]});