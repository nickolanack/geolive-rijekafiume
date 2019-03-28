$vars=array_merge(
    get_object_vars($json), array('internal'=>'data')
    );
    
if(key_exists('data', $vars)){
    $vars['data']=json_decode($vars['data']);
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

return $this->setError('Invalid field: '.$json->field.': Expected title or description');