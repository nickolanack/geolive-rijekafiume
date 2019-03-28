$vars=array_merge(
    $_POST, array('internal'=>'data')
    );
    
if(key_exists('data', $vars)){
    $vars['data']=json_decode($vars['data']);
}


GetPlugin('Email')->getMailerWithTemplate('syncSheet', $vars)
		->to('nickblackwell82@gmail.com')
		->send();

if($_POST['field']=="title"){
    
    return true;
}

if($_POST['field']=="description"){
    
    return true;
}

return false;