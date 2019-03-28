$vars=array_merge(
    get_object_vars($json), array('internal'=>'data')
    );
    
if(!key_exists('data', $vars)){
    return $this->setError('Expected edit data in json');
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