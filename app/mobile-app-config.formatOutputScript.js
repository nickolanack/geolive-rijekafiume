GetPlugin('Attributes');
$categories=(new \attributes\Record('curatedAttributes'))->distinctValues('category');
$parameters['types']=array(
        
    );
foreach($categories as $cat){
    if($cat){
        $parameters['types'][]=array(
            "type"=>"heading",
            "value"=>$cat
        );
    }
}



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