GetPlugin('Attributes');
$categories=(new \attributes\Record('curatedAttributes'))->distinctValues('category');
$categories=array_filter($categories, function($c){
    return !!$c;
});


$catButtons=array();

if(empty($categories)){
    $categories=array("Test Cat");
}
foreach($categories as $cat){
    if($cat){
        $catButtons[]=array(
            
            "label"=>$cat,
            "action"=> "form",
            "view"=> "mainmap",
            // "icon"=> "{categoriesIcon}",
             "data"=> array(
                "layers"=>array(array(
                    "id"=>36,
                    "filter"=>array("filterCategory"=>$cat)
                ))),
             
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
                    "buttons"=>$catButtons
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
    
$perButtons=array();

if(empty($periods)){
    $periods=array("Test");
}
foreach($periods as $period){
    if($period){
        $perButtons[]=array(
            
            "label"=>$period,
            "action"=> "form",
            "view"=> "mainmap",
           
             "data"=> array(
                "layers"=>array(array(
                    "id"=>36,
                    "filter"=>array("filterPeriod"=>$period)
                )))
        );
    }
}

$parameters['periods']=array(
        array(
            "type"=>"fieldset",
            "fields"=>array(
                array(
                    "type"=>"buttonset",
                    "className"=> "btn-main",
                    "buttons"=>$perButtons
                )
            )
        )
    );

 
 
 
return $parameters;