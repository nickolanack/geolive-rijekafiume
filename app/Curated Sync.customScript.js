$vars = array_merge(
			get_object_vars($json), array('internal' => 'data')
		);

		// if(!key_exists('data', $vars)){
		//     return array("success"=>false, "message"=>'Expected edit data in json');
		// }

		GetPlugin('Email')->getMailerWithTemplate('syncSheet', $vars)
			->to('nickblackwell82@gmail.com')
			->send();

		if (!(key_exists('secret', $json) && $json->secret === GetWidget('csvSyncConfig')->getParameter('csvSecret'))) {
			return array("success" => false, "message" => 'missing secret');
		}
		
		
		
		return true;