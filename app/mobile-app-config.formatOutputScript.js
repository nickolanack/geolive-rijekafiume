GetPlugin('Attributes');

$makeFeildsetButtonset = function ($categoryName, $template, $colors=array(
    "#fff7f3",
    "#fde0dd",
    "#fcc5c0",
    "#fa9fb5",
    "#f768a1",
    "#dd3497",
    "#ae017e",
    "#7a0177",
    "#49006a"
    )) {

	$categories = (new \attributes\Record('curatedAttributes'))->distinctValues($categoryName);

	$categories = array_filter($categories, function ($c) {
		return !!$c;
	});

	$buttons = array();

	if (empty($categories)) {
		$categories = array("Empty list: " . $categoryName);
	}

	$json = json_encode($template);



	foreach ($categories as $i=>$cat) {
		if ($cat) {

            $style="";
            if(!empty($colors)){
                $color=$colors[$i%count($colors)];
                $style = "border-color: ".$color."; border-width: 0 0 0 3; padding-left: 20px;";
            }

			$button = str_replace(json_encode("{value}"), json_encode($cat), $json);
			$button = str_replace("{Name}", ucfirst($categoryName), $button);

            $button = str_replace("{style}", $style, $button);

			$buttons[] = json_decode($button);
		}
	}

	

	return array(

		"type" => "fieldset",
		"fields" => $buttons
	);

};




$template = array(
    "type" => "card",
    "fields" => array(
        "style"=>"{style} orientation:horizontal; vertical-align: middle;",
        "fields"=>
        array(
        	array(
	        	"type"=>"icon",
	        	"icon"=>"{tourAltIcon}",
	        ),
        	array(
        		"type"=>"fieldset",
        		"style"=>"",
		        "fields"=>array(
			        	
				        array(
				            "type"=>"label",
				            "value" => "{value}",
				        ),
			        	array(
				            "type"=>"html",
				            "value" => "inline description of content",
				        ),
				        array(
				            "type"=>"buttonset",
				            "buttons" =>array(
				            	"action" => "view",
								"view" => "mainmap",
								"remember" => false,
								"icon"=> "{mapIcon}",
								"data" => array(
									"layers" => array(array(
										"id" => 36,
										"filter" => array("filter{Name}" => "{value}"),
									))
								),
					            array(
					            	"action" => "view",
									"view" => "augmented",
									"remember" => false,
									"icon"=> "{augmentedIcon}",
									"data" => array(
										"layers" => array(array(
											"id" => 36,
											"filter" => array("filter{Name}" => "{value}"),
										))
									)
					            ),
					            array(
					            	"action" => "view",
									"view" => "marker-list",
									"remember" => false,
									"icon"=> "{listIcon}",
									"data" => array(
										"layers" => array(array(
											"id" => 36,
											"filter" => array("filter{Name}" => "{value}"),
										))
									)
					            )
				            )
				        )
			    	)
		    	)
    	)
    ),
	
	"action" => "form",
	"view" => "mainmap",
	"remember" => false,
	// "icon"=> "{categoriesIcon}",
	"data" => array(
		"layers" => array(array(
			"id" => 36,
			"filter" => array("filter{Name}" => "{value}"),
		))
	),

);

$parameters['types'] = $makeFeildsetButtonset(
	'category', $template);

$parameters['periods'] = $makeFeildsetButtonset(
	'period', $template);

$parameters['tours'] = $makeFeildsetButtonset(
	'tour', $template);

return $parameters;