            
            var element=inputElement;
            
            
          
            
            try{
                
                var layer=MapFactory.BestLayerFromIcon(application, wizard.data.icon);
                if(layer.getId()!=24){
                    
                    var fmt=function(){
                        var v=element.value;
                        v=v.substring(0, 4);
                        if(v!==element.value){
                            element.value=v;
                        }
                    };
                    element.addEvent('keyup',fmt);
                    
                    return;
                }
                
				element.type='date';
			}catch(e){
                console.error(e);
			}
			function supportsDate() {
			    var input = document.createElement('input');
			    input.setAttribute('type','date');
			    var notADateValue = 'not-a-date';
			    input.setAttribute('value', notADateValue); 
			    return (input.value !== notADateValue);
			}

			if(supportsDate()){
				return;
			}