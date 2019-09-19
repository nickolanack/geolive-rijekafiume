GetPlugin('Attributes');

$makeFeildsetButtonset = function ($categoryName, $template) {

	$categories = (new \attributes\Record('curatedAttributes'))->distinctValues($categoryName);

	$categories = array_filter($categories, function ($c) {
		return !!$c;
	});

	$buttons = array();

	if (empty($categories)) {
		$categories = array("Empty list: " . $categoryName);
	}

	$json = json_encode($template);

    $colors=array(
    "#fff7f3",
    "#fde0dd",
    "#fcc5c0",
    "#fa9fb5",
    "#f768a1",
    "#dd3497",
    "#ae017e",
    "#7a0177",
    "#49006a"
    );


	foreach ($categories as $i=>$cat) {
		if ($cat) {

            $color=$colors[$i%count($colors)];

			$button = str_replace(json_encode("{value}"), json_encode($cat), $json);
			$button = str_replace("{Name}", ucfirst($categoryName), $button);

            $button = str_replace("{style}", "border-color: ".$color."; border-width: 0 0 0 3; padding-left: 20px;", $button);

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
        "style"=>"{style}",
        "fields"=>array(
            "type"=>"label",
            "value" => "{value}",
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
		))),

);

$parameters['types'] = $makeFeildsetButtonset(
	'category', $template);

$parameters['periods'] = $makeFeildsetButtonset(
	'period', $template);

$parameters['tours'] = $makeFeildsetButtonset(
	'tour', $template);

return $parameters;