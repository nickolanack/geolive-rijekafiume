GetPlugin('Attributes');
$categories=(new \attributes\Record('curatedAttributes'))->distinctValues('category');
$categories=array_filter($categories, function($c){
    return !!$c;
});


$buttons=array();

if(empty($categories)){
    $categories=array("Test Cat");
}
foreach($categories as $cat){
    if($cat){
        $buttons[]=array(
            
            "label"=>$cat,
            "action"=> "form",
            "view"=> "mainmap",
             "icon"=> "{categoriesIcon}",
             "data"=> array(
                "layers"=>array(
                    "id"=>36,
                    "filter"=>$cat
                )),
             
        );
    }
}


$parameters['types']=array(
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


$periods=(new \attributes\Record('curatedAttributes'))->distinctValues('period');
$periods=array_filter($periods, function($p){
    return !!$p;
});

$parameters['periods']=array(
        
    );

if(empty($periods)){
    $periods=array("Test");
}
foreach($periods as $period){
    if($period){
        $parameters['periods'][]=array(
            "type"=>"heading",
            "value"=>$period
        );
    }
}

 
 
 
return $parameters;