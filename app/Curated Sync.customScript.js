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
		
		GetPlugin('Maps');
		GetPlugin('Attributes');
		
		if(key_exists('media', $json)){
		    
		    foreach($json->media as $update){
    		    if($update->type!="marker"){
    		        return array("success" => false, "message" => 'invalid type: '.$update->type);
    		    }
    		    
    		    $feature = (new \spatial\FeatureLoader())->fromId((int) $update->id);
    		    (new \spatial\FeatureLoader())->save($feature);
    		    (new \attributes\Record('curatedAttributes'))->setValues((int) $update->id, $update->type, array(
    		       "media"=>$update->Media,
    
    		    ));

    		}
		    
		    
		    return true;
		}
		
		
		if(key_exists('updates', $json)){
		    
	
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
    		       "researcher"=>$update->Researcher,
    		       "tour"=>$update->Tour,
    		       
    		       
    		        "titleit"=>$update->{'title it'},
    		        "titlehr"=>$update->{'title hr'},
    		        "titlefr"=>$update->{'title fr'},
    		        
    		        "descriptionit"=>$update->{'description it'},
    		        "descriptionhr"=>$update->{'description hr'},
    		        "descriptionfr"=>$update->{'description fr'},
    		        
    		        "citations"=>$update->References
    		       
    		    ));
    		    
    		    
    		    
    		}
    		
    		return true;
		}
		
		if(key_exists('captions', $json)){
		    
	
    		foreach($json->captions as $update){
    		    if($update->type!="marker"){
    		        return array("success" => false, "message" => 'invalid type: '.$update->type);
    		    }
    		    
    		    $feature = (new \spatial\FeatureLoader())->fromId((int) $update->id);
    		    
    		    (new \attributes\Record('curatedAttributes'))->setValues((int) $update->id, $update->type, array(
    		       "imageCaptionData"=>json_encode($update->captions)
    		    ));
    		    
    		    
    		    
    		}
    		
    		return true;
		}
		
		
		if(key_exists('new_marker', $json)){
		    
		        $geom=$json->new_marker;
		    
		        error_log(json_encode($geom));
		        $marker=(new Marker())
    		        ->setName($geom->name)
    		        ->setDescription($geom->description)
    		        ->setIcon("DEFAULT")
    		        ->setCoordinates($geom->coordinates[0], $geom->coordinates[1])
    		        ->setLayerId(36);
	        
	            (new \spatial\FeatureLoader())->save($marker);
	        
    		   return array("marker"=> $marker->getMetadata());
    	
		}
		
		
		return array("missingActionError"=>"Expected some sync item data");