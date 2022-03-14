$analyticUrl=escapeshellarg('https://analytic.fra.geoforms.ca?json='.json_encode((object), array()));
//$cmd  = "curl --max-time 60 ";
//$cmd .= "'" . $analyticUrl . "'";
//$cmd .= " > /dev/null 2>&1 &";
//exec($cmd, $output, $exit);
   







$parameters['elevation']=array_map(function($ob){
    $ob->alt->elevation=$ob->alt->elevation+40;
   return $ob; 
},$parameters['elevation']);


return $parameters;

GetPlugin('Attributes');

$makeFieldObject = function ($categoryName, $template, $colors = null) {

	if (is_null($colors)) {
		$colors = array(
			"#fff7f3",
			"#fde0dd",
			"#fcc5c0",
			"#fa9fb5",
			"#f768a1",
			"#dd3497",
			"#ae017e",
			"#7a0177",
			"#49006a",
		);
	}

	$categories = (new \attributes\Record('curatedAttributes'))->distinctValues($categoryName);

	$categories = array_filter($categories, function ($c) {
		return !!$c;
	});

	$buttons = array();

	if (empty($categories)) {
		$categories = array("Empty list: " . $categoryName);
	}

	$json = json_encode($template);

	foreach ($categories as $i => $cat) {
		if ($cat) {

			

			$button = str_replace(json_encode("{value}"), json_encode($cat), $json);

			$preg = "/[^A-Za-z0-9 ]/";
			$kabob = (implode('-', explode(' ', preg_replace($preg, '', strtolower($cat)))));

			$button = str_replace(json_encode("{value-kabob}"), json_encode($kabob), $button);
			$button = str_replace(("{value-kabob}"), $kabob, $button);

			$style = "";
			if (!empty($colors)) {
				$color = $colors[$i % count($colors)];
				$style = "border-color: " . $color . "; border-width: 0 0 0 3; padding-left: 20px;";

				$tint = ltrim($color, '#');
				$tint = str_split($tint, 2);

				$tint = array_map(function ($h) {return hexdec($h);}, $tint);
				$tint = implode(', ', $tint);
				$tint = '?tint=(' . $tint . ')';

				//$tint=array_map(function($h){return hexdec($h);},$tint);

				$button = str_replace("{tint}", $tint, $button);
			}

			$button = str_replace("{Name}", ucfirst($categoryName), $button);
			$button = str_replace("{name}", ($categoryName), $button);

			$button = str_replace("{style}", $style, $button);

		
			$buttons[] = json_decode($button);
		}
	}

	return $buttons;
};

$templateButton = array(
	"action" => "form",
	"label"=>"{section-names.{name}.{value-kabob}}",
	"form" => "{section-views.{name}}",
	"remember" => false,
	"icon" => "{section-icons.{name}.{value-kabob}}",
	"data" => array(
		"layers" => array(array(
			"id" => 36,
			"filter" => array("filter{Name}" => "{value}"),
		)),
	),
);

$template = array(
	"type" => "card",
	"fields" => array(
		"style" => "{style} orientation:horizontal; vertical-align: middle;",
		"fields" => array(
			array(
				"type" => "icon",
				"icon" => "{tourAltIcon.0}{tint}",
			),
			array(
				"type" => "fieldset",
				"style" => "",
				"fields" => array(

					array(
						"type" => "label",
						"value" => "{value}",
					),
					array(
						"type" => "html",
						"value" => "inline description of content",
					),
					array(
						"type" => "buttonset",
						"align" => "right",
						"style" => "horizontal-align:right;",
						"className" => "filter-card-menu",
						"buttons" => array(
							array(
								"action" => "form",
								"form" => "mainmap",
								"remember" => false,
								"icon" => "{mapIcon}",
								"data" => array(
									"layers" => array(array(
										"id" => 36,
										"filter" => array("filter{Name}" => "{value}"),
									)),
								),
							),
							array(
								"action" => "form",
								"form" => "augmented",
								"remember" => false,
								"icon" => "{augmentedIcon}",
								"data" => array(
									"layers" => array(array(
										"id" => 36,
										"filter" => array("filter{Name}" => "{value}"),
									)),
								),
							),
							array(
								"action" => "form",
								"form" => "marker-list",
								"remember" => false,
								"icon" => "{listIcon}",
								"data" => array(
									"layers" => array(array(
										"id" => 36,
										"filter" => array("filter{Name}" => "{value}"),
									)),
								),
							),
						),
					),
				),
			),
		),
	),

	"action" => "form",
	"view" => "mainmap",
	"remember" => false,
	// "icon"=> "{categoriesIcon}",
	"data" => array(
		"layers" => array(array(
			"id" => 36,
			"filter" => array("filter{Name}" => "{value}"),
		)),
	),

);


$kabobCat=function($category, $template="{value}")use($makeFieldObject){
	return array_combine($makeFieldObject($category,"{value-kabob}"), $makeFieldObject($category, $template));

};

$parameters['types'] = array(
	"type" => "fieldset",
	"fields" => $makeFieldObject(
		'category', $template),
);

$parameters['elevation']=array_map(function($ob){
    $ob->elevation=$ob->elevation+40;
   return $ob; 
},$parameters['elevation']);

$parameters['periods'] = array(
	"type" => "fieldset",
	"fields" => $makeFieldObject(
		'period', $template));

$parameters['tours'] = array(
	"type" => "fieldset",
	"fields" => $makeFieldObject(
		'tour', $template));

$parameters['section-buttons'] = array(
	'category' => $kabobCat('category', $templateButton),
	'period' => $kabobCat('period', $templateButton),
	'tour' => $kabobCat('tour', $templateButton),
);
$parameters['section-names'] = array(
	'category' => $kabobCat('category'),
	'period' => $kabobCat('period'),
	'tour' => $kabobCat('tour'),
);
$parameters['section-icons'] = array(
	'category' => $kabobCat('category', "~/section-icons/category/{value-kabob}.png"),
	'period' => $kabobCat('period', "~/section-icons/period/{value-kabob}.png"),
	'tour' => $kabobCat('tour', "~/section-icons/tour/{value-kabob}.png"),
);
$parameters['section-views'] = array(
	'category' =>"",
	'period' =>"",
	'tour' =>"",
);

return $parameters;