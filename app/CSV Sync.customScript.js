$vars=array_merge(
    get_object_vars($json), array('internal'=>'data')
    );
    
if(!key_exists('data', $vars)){
    return array("success"=>false, "message"=>'Expected edit data in json');
}


GetPlugin('Email')->getMailerWithTemplate('syncSheet', $vars)
		->to('nickblackwell82@gmail.com')
		->send();

if(!key_exists('id', $json)){
    return array("success"=>false, "message"=>'missing id');
}

if(!key_exists('type', $json)){
    return array("success"=>false, "message"=>'type');
}

if($json->type!=="marker"){
    return array("success"=>false, "message"=>'Expected type to be marker: '.$json->type);
}


$updateInfo=array();

GetPlugin('Maps');
try {
    $feature = (new \spatial\FeatureLoader())->fromId((int) $json->id);
} catch (Exception $e) {
    return array("success"=>false, "message"=>'Item '.((int) $json->id).': not found');
}

if(key_exists('title', $json)){
    $feature->setName($json->title);
}
if(key_exists('description', $json)){
    $feature->setDescription($json->title);
}

GetPlugin('Attributes');
$attributes=(new \attributes\Record('markerAttributes'))->getValues((int) $json->id, $json->type);

if(key_exists('attributes', $json)&&key_exists('markerAttributes', $json->attributes)){
    $attributes=array_merge($attributes,  get_object_vars($json->attributes->markerAttributes));
}



return array(
    'marker'=>$feature->getMetadata(),
    'attributes'=>array("markerAttributes"=>$attributes)
    );

//return array("success"=>false, "message"=>'Invalid field: '.$json->field.': Expected title or description');