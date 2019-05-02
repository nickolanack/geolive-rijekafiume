$vars = array_merge(
			get_object_vars($json), array('internal' => 'data')
		);

		// if(!key_exists('data', $vars)){
		//     return array("success"=>false, "message"=>'Expected edit data in json');
		// }

		GetPlugin('Email')->getMailerWithTemplate('syncCuratedSheet', $vars)
			->to('nickblackwell82@gmail.com')
			->send();

		if (!(key_exists('secret', $json) && $json->secret === GetWidget('csvSyncConfig')->getParameter('csvSecret'))) {
			return array("success" => false, "message" => 'missing secret');
		}
		
		if(!key_exists('updates', $json)){
		    return true;
		}
		GetPlugin('Maps');
		GetPlugin('Attributes');
		foreach($json->updates as $update){
		    if($update->type!="marker"){
		        return array("success" => false, "message" => 'invalid type: '.$update->type);
		    }
		    
		    $feature = (new \spatial\FeatureLoader())->fromId((int) $update->id);
		    $feature->setName($update->title);
		    $feature->setDescription($update->description);
		    (new \spatial\FeatureLoader())->save($feature);
		    (new \attributes\Record('curatedAttributes'))->setValues((int) $update->id, $update->type, array(
		       "keywords"=>$update->Keywords,
		       "priority"=>$update->Priority,
		       "category"=>$update->Category,
		       "period"=>$update->Period,
		       "address"=>$update->Address,
		       "researcher"=>$update->Researcher
		    ));
		    
		    
		    
		}
		
		
		return true;