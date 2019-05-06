            
            var element=inputElement;
            
            try{
				element.type='date';
			}catch(e){

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