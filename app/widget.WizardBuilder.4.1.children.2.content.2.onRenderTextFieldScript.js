            
            var element=inputElement;
            
            
          
            
            try{
                
                var layer=MapFactory.BestLayerFromIcon(application, wizard.data.icon);
                if(layer==5){
                    
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