/**
 * Copy the following into Timeline onRender script input (do not include the <script> tags...)
 */


//TODO: this cannot be added in english mode

var ln=Cookie.read('lang');
if(ln=='lang-hr'||ln=="lang-it"){
	AddLocalization(({
	    'lang-hr':{
    
    
    		"pin_1719":"Slobodna Luka",
    		"pin_1779":"Mađarski Corpus Separatum",
    		"pin_1809_1813":"Ilirske Provincije (do 1813)",
    		"pin_1822":"Mađarska uprava",
    		"pin_1848":"Hrvatska uprava",
    		"pin_1868":"Mađarski Corpus Separatum",
    	
    		"pin_1920":"Slobodna Država Rijeka",
    		"pin_1922":"Sušak dio Kraljevine SHS",
    	
    		"pin_april_1941_tip":"Travanj 1941",
    		"pin_april_1941":"Talijanska okupacija Sušaka",
    		
    		"pin_1943":"Kapitulacija Italije i njemačka okupacija Rijeke (OZAK)",
    		"pin_may_1945_tip":"Svibanj 1945",
    		"pin_may_1945":"Jugoslavensko zauzeće Rijeke",
    		"pin_1947":"Pariški mirovni ugovor",
    
    
    		"era_1719_1914":"Habsburška Monarhija",
    		"era_1914_1924":"Prvi svjetski rat",
    		"era_1924_1941":"Talijanska uprava",
    		"era_1941_1947":"Drugi svjetski rat",
    		"era_1947_1990":"Jugoslavenska uprava",
    		"era_1990_2015":"Hrvatska uprava"
    
        },
        'lang-it':{
            "pin_1719":"Porto Franco",
            "pin_1779":"Corpus Separatum della Corona Ungherese",
            "pin_1809_1813":"Province Illiriche (fino al 1813)",
            "pin_1822":"Amministrazione ungherese",
            "pin_1848":"Amministrazione croata",
            "pin_1868":"Corpus Separatum della Corona Ungherese",
            
            "pin_1920":"Stato Libero di Fiume",
            "pin_1922":"Sussak nel Regno SHS (Jugoslavia)",
            
            "pin_april_1941_tip":"Aprile 1941",
    		"pin_april_1941":"Occupazione italiana di Sussak",
    		
    		"pin_1943":"Armistizio e occupazione tedesca (Zona d’operazioni del Litorale Adriatico)",
        }
	    
	})[ln]);
}

var erraSpan=container.appendChild(new Element('span', {'class':'era-s'}));
var barBack=erraSpan.appendChild(new Element('div', {'class':'era-bar bk'}));
var graphBar=erraSpan.appendChild(new Element('div',{'class':'timeline-graph'}))
var bar=erraSpan.appendChild(new Element('div', {'class':'era-bar'}));
var graphBarDetail=erraSpan.appendChild(new Element('div',{'class':'timeline-graph detail'}))

var eras=[
{start:'1719', end:'1914', label:'habsburg era'},
{start:'1914', end:'1924', label:'WWI'},
{start:'1924', end:'1941', label:'italian fiume'},
{start:'1941', end:'1947', label:'WWII'},
{start:'1947', end:'1990', label:'yugoslav rijeka'},
{start:'1990', end:'2015', label:'croatian rijeka'}

];
var dateToPercent=function(time){
	return Math.round((time/span)*100.0);
}
Array.each(eras, function(era){

	var eraRange=[(new Date(era.start)).getTime(),(new Date(era.end)).getTime()];

	var s=eraRange[0]-range[0];
	var e=eraRange[1]-eraRange[0];
	var r=[dateToPercent(s), dateToPercent(e)];
	var label=Localize(era.label, "era_"+era.start+"_"+era.end)
	bar.appendChild(new Element('div', {
		'class':'era e-'+era.start+' '+era.label.replace(' ', '-').toLowerCase(),
		'data-label':label,
		'title':label,
		styles:{
			left:r[0]+'%',
			width:r[1]+'%'
		}
	})).addEvent('click',function(){
		timeline.setValue([r[0], r[0]+r[1]]);
	});
});

var eraRange=[(new Date(eras[0].start)).getTime(),(new Date(eras[eras.length-1].end)).getTime()];
var s=eraRange[0]-range[0];
var e=eraRange[1]-eraRange[0];
var r=[dateToPercent(s), dateToPercent(e)]
barBack.appendChild(new Element('div', {
	styles:{
		left:r[0]+'%',
		width:r[1]+'%'
	}
}));


var eventsBar=container.appendChild(new Element('div', {'class':'events-bar'}));




//event class: a, b, c, and d are used to alter the height and label directions

var events=[
{start:'1719', label:'free port'},
{start:'1779', label:'Corpus Separatum of Hungary'},
{start:'1809', end:'1813', label:'Illiryan Provinces (until 1813)'},
{start:'1822', label:'Hungarian administration'},
{start:'1848', end:'1867', label:'Croatian administration'},
{start:'1868', label:'Corpus Separatum of Hungary'},
{start:'1919', label:'D&#39;Annunzio'},
{start:'1920', label:'Free State of Rijeka', 'class':'b'},
{start:'1922', label:'Sušak in SHS Kingdom'},
{start:'April 1941', label:'Italian occupation of Susak'},
{start:'1943', label:'Italian surrender to Allies followed by inclusion in German Adriatic Littoral Zone', 'class':'b'},
{start:'May 1945', label:'Yugoslav capture of Rijeka', 'class':'c'},
{start:'1947', label:'Paris peace treaty', 'class':'d'},
{start:'1948', label:'Unification of Zamet and Sušak with Rijeka'},
];

Array.each(events, function(event){

	var startTime=(new Date(event.start)).getTime();

	var startOffset=startTime-range[0];
	var startPercent=dateToPercent(startOffset);
	var pin =eventsBar.appendChild(new Element('div', {
		'class':'e-'+event.start+' '+(event.class||'a'),
		'data-label':Localize(event.start, "pin_"+(event.start.toLowerCase().replace(' ','_'))+"_tip"),
		styles:{
			left:startPercent+'%',
		}
	})).addEvent('click',function(){

	});

	new UIPopover(pin, {anchor:UIPopover.AnchorTo(['top']),
		title:'',
		description:Localize(event.label,"pin_"+(event.start.toLowerCase().replace(' ','_')))//,
		//hideDelay:500,
		//margin:50
	});

});


//bar graph
<?php
Behavior('graph');
?>
(new TimelineQuery('get_timeline_graph', {})).addEvent('success',function(resp){
	var data=resp.values;


	new UIGraph(graphBar, data, {
		lineTemplate:UIGraph.UnitStepTemplate,
		//lineTemplate:UIGraph.LineTemplate,
		title:"",
		height:26,
		width:900,
		widthUnit:'%',
		padding:0,
		lineColor: '#CCCCCC',
		fillColor:'rgba(233,233,233,0.2)'
	});

	new UIGraph(graphBarDetail, data, {
		title:"",
		height:71,
		width:900,
		widthUnit:'%',
		padding:0,
		lineColor: 'rgba(0,0,0,0.5)',
		lineTemplate:UIGraph.UnitStepBarsTemplate,
                 //lineTemplate:UIGraph.LineTemplate,


    	fillGradient:true,
fillGradientArray: [

                'rgba(0, 0, 0, 0.4)',
'rgba(145, 128, 77,0.7)'],
    	highlightTemplate:UIGraph.UnitStepBarsHighlighter
	});

}).execute();