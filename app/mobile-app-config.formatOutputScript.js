GetPlugin('Attributes');
$categories=(new \attributes\Record('curatedAttributes'))->distinctValues('category');
$parameters['types']=array(
        
    );
foreach($categories as $cat){
    if($cat){
        $parameters['types'][]=array(
            "type":"html",
            "html":$cat
        );
    }
}

 
 
return $parameters;