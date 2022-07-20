application.setDefaultLoginView('loginForm');


listMarkers

(new AjaxControlQuery(CoreAjaxUrlRoot, 'user_function', {
					"widget": "listMarkers"
				})).addEvent('onSuccess', function(resp) {
				    console.log(resp)
			}).execute();