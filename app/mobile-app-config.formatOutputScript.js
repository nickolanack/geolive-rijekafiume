GetPlugin('Attributes');
$categories=(new \attributes\Record('curatedAttributes'))->distinctValues('category');
$buttons=array();
foreach($categories as $cat){
    if($cat){
        $buttons[]=array(
            "type"=>"button",
            "value"=>$cat

            "label": $cat,
            "action": "form",
            "view": "map",
             "icon": "{categoriesIcon}"
        );
    }
}


$parameters['types']=array(
        array(
            "type"=>"fieldset",
            "fields"=>array(
                array(
                    "type"=>"buttonset",
                    "className": "btn-main",
                    "buttons"=>$buttons
                )
            )
        )
    );


$periods=(new \attributes\Record('curatedAttributes'))->distinctValues('period');
$parameters['periods']=array(
        
    );
foreach($periods as $period){
    if($period){
        $parameters['periods'][]=array(
            "type"=>"heading",
            "value"=>$period
        );
    }
}

 
 
 
return $parameters;