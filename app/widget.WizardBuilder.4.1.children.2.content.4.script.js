
var cbx=new Element('input', {type:'checkbox', checked:true});
var label=new Element('label',{
html:'This is an ongoing event ',
styles:{
  color:"cornflowerblue",
  'margin-top': '20px',
  'text-align': 'right'
}
});
label.appendChild(cbx);


var endDateObject=moduleGroup[moduleIndex-1].TextFieldModule;
if(endDateObject&&endDateObject instanceof TextFieldModule){

	endDateObject.addEvent('change',function(){
		var v=endDateObject.getValue();
		if(v){
			if(cbx.checked){
				cbx.checked=false;
			}
		}else{
			cbx.checked=true;
		}
	});

	cbx.addEvent('click', function(){
		if(cbx.checked){
			endDateObject.setValue("");
		}
	});

}else{
	alert('CustomScript:'+moduleIndex+' Expected to find TextFieldModule (endDate) for custom script at index - 1');
}


return label;