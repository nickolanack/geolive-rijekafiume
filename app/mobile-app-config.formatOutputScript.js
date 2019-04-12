GetPlugin('Attributes');
$categories=(new \attributes\Record('curatedAttributes'))->distinctValues('category');
$buttons=array();

if(empty($categories)||(!is_array($categories))){
    $categories=array("Test Cat");
}
foreach($categories as $cat){
    if($cat){
        $buttons[]=array(
            
            "label"=>$cat,
            "action"=> "form",
            "view"=> "mainmap",
             "icon"=> "{categoriesIcon}"
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
$parameters['periods']=array(
        
    );

if(empty($periods)){
    $periods[]="Test";
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