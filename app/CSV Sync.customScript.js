$vars=array_merge(
    $_POST, array('internal'=>'data')
    );
    
if(key_exists('data', $vars)){
    $vars['data']=json_decode($vars['data']);
}


GetPlugin('Email')->getMailerWithTemplate('syncSheet', $vars)
		->to('nickblackwell82@gmail.com')
		->send();



return array("success"=>true);