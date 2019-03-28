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


return array("success"=>false, "message"=>'Invalid field: '.$json->field.': Expected title or description');