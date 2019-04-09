GetPlugin('Attributes');
$parameters['types']=array(
        (new \attributes\Record('curatedAttributes'))->distinctValues('category')
    );
    

 
 
return $parameters;