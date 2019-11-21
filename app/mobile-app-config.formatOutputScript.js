GetPlugin('Attributes');

$makeFieldObject = function ($categoryName, $template, $colors=array(
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

			$button = str_replace(json_encode("{value}"), json_encode($cat), $json);
			$button = str_replace(json_encode("{value-kabob}"), json_encode(implode('-', explode(' ',strtolower($cat)))), $button);

            $style="";
            if(!empty($colors)){
                $color=$colors[$i%count($colors)];
                $style = "border-color: ".$color."; border-width: 0 0 0 3; padding-left: 20px;";

                $tint=ltrim($color, '#');
                $tint=str_split($tint, 2);
				
				$tint=array_map(function($h){return hexdec($h);},$tint);
				$tint=implode(', ',  $tint);
				$tint='?tint=('.$tint.')';

				//$tint=array_map(function($h){return hexdec($h);},$tint);

                $button = str_replace("{tint}", $tint, $button);
            }

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


$templateButton = array(
	"action" => "form",
	"form" => "{section-views.{Name}}",
	"remember" => false,
	"icon"=> "{section-icons.{Name}.{value-kabob}}",
	"data" => array(
		"layers" => array(array(
			"id" => 36,
			"filter" => array("filter{Name}" => "{value}"),
		))
	)
);



$template = array(
    "type" => "card",
    "fields" => array(
        "style"=>"{style} orientation:horizontal; vertical-align: middle;",
        "fields"=>
        array(
        	array(
	        	"type"=>"icon",
	        	"icon"=>"{tourAltIcon.0}{tint}",
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
				            "align"=>"right",
				            "style"=>"horizontal-align:right;",
				            "className"=>"filter-card-menu",
				            "buttons" =>array(
				            	array(
					            	"action" => "form",
									"form" => "mainmap",
									"remember" => false,
									"icon"=> "{mapIcon}",
									"data" => array(
										"layers" => array(array(
											"id" => 36,
											"filter" => array("filter{Name}" => "{value}"),
										))
									)
								),
					            array(
					            	"action" => "form",
									"form" => "augmented",
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
					            	"action" => "form",
									"form" => "marker-list",
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

$parameters['types'] = $makeFieldObject(
	'category', $template);

$parameters['periods'] = $makeFieldObject(
	'period', $template);

$parameters['tours'] = $makeFieldObject(
	'tour', $template);


$parameters['sections-buttons']=array(
	'categories'=>$makeFieldObject('category', $templateButton),
	'periods'=>$makeFieldObject('period', $templateButton),
	'tours'=>$makeFieldObject('tour', $templateButton)
);

return $parameters;