$vars=array_merge(
		    $_POST,
			array(
			    'internal'=>'data'	
			)
		);


GetPlugin('Email')->getMailerWithTemplate('syncSheet', $vars)
		->to('nickblackwell82@gmail.com')
		->send();



echo json_encode(array("success"=>true));