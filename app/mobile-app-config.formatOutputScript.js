GetPlugin('Attributes');


$makeFeildsetButtonset=function($categoryName, $template){

    $categories=(new \attributes\Record('curatedAttributes'))->distinctValues($categoryName);


    $categories=array_filter($categories, function($c){
        return !!$c;
    });


    $buttons=array();

    if(empty($categories)){
        $categories=array("Test Cat");
    }

    $json=json_encode($template);
    foreach($categories as $cat){
        if($cat){
            $buttons[]=json_decode(str_replace(json_encode("{value}"), json_encode($cat)));
        }
    }


    return array(
        array(
            "type"=>"fieldset",
            "fields"=>array(
                array(
                    "type"=>"buttonset",
                    "className"=> "btn-main",
                    "buttons"=>$buttons
                )
            )
        )
    );

};

$template=array(
        "label"=>"{value}",
        "action"=> "form",
        "view"=> "mainmap",
        // "icon"=> "{categoriesIcon}",
         "data"=> array(
            "layers"=>array(array(
                "id"=>36,
                "filter"=>array("filterCategory"=>"{value}")
            ))),
         
    );

$parameters['types']=$makeFeildsetButtonset(
    'category', $template);

$parameters['periods']=$makeFeildsetButtonset(
    'period', $template);

$parameters['tours']=$makeFeildsetButtonset(
    'tour', $template);

return $parameters;