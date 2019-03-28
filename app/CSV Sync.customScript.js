GetPlugin('Email')->getMailerWithTemplate('syncSheet', array_merge(
		    $_POST,
			array(
			    'internal'=>'data'	
			)
		))
		->to('nickblackwell82@gmail.com')
		->send();



echo json_encode(array("success"=>true));