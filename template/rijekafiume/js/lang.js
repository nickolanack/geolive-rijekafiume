
window.addEvent('domready',function(){

	var buttons=$$('.lang button');
	var initialLang=document.body.getAttribute('data-lang');

	var cookieLang=Cookie.read('lang');
	if(cookieLang&&cookieLang!==initialLang){
		document.body.removeClass(initialLang);
		document.body.addClass(cookieLang);
		document.body.setAttribute('data-lang', cookieLang);
		var initialLang=cookieLang;
	}


	var currentLang=initialLang;

	buttons.forEach(function(a){


		var lang=a.getAttribute('data-lang');

		a.addEvent('click',function(){

			/*
			document.body.removeClass(document.body.getAttribute('data-lang'));
			document.body.addClass(lang);
			document.body.setAttribute('data-lang', lang);

			buttons.forEach(function(b){
				b.removeClass('active');
				b.removeClass('btn-info');
			});

			a.addClass('active');
			a.addClass('btn-info')
			*/

			Cookie.write('lang', lang);


			if(lang!==currentLang){

				var activeLink=$$('.nav.'+currentLang+' .active a')[0];
				var activeMenuItems=$$('.nav.'+currentLang+' li');
				var activeMenuIndex=activeMenuItems.indexOf(activeLink.parentNode);




				var languageLink=$$('.nav.'+lang+' li')[activeMenuIndex].firstChild;
				while(languageLink.tagName!=='A'){
					languageLink=languageLink.nextSibling;
				}
				languageLink.click();
			}

			currentLang=lang;


		});


		if(lang===initialLang){
			a.addClass('active');
			a.addClass('btn-info')
		}

	});


});