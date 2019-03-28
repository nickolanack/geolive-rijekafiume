$vars=array_merge(
    get_object_vars($json), array('internal'=>'data')
    );
    
if(!key_exists('data', $vars)){
    return array("success"=>false, "message"=>'Expected edit data in json');
}


GetPlugin('Email')->getMailerWithTemplate('syncSheet', $vars)
		->to('nickblackwell82@gmail.com')
		->send();

if($json->field=="title"){
    return true;
}

if($json->field=="description"){
    return true;
}

return array("success"=>false, "message"=>'Invalid field: '.$json->field.': Expected title or description');