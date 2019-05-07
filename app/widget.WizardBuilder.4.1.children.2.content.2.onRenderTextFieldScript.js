            
            var element=inputElement;
            
            
          
            
            try{
                
                var layer=MapFactory.BestLayerFromIcon(application, wizard.data.icon);
                if(layer.getId()!=24){
                    
                    input.addEvent('change',function(){
                        var v=input.value;
                        v=v.substring(0, 4);
                        if(v!==input.value){
                            input.value=v;
                        }
                    });
                    
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