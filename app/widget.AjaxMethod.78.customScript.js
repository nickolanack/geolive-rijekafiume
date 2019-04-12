GetPlugin('Maps');
GetPlugin('Attributes');

$attr=new \attributes\Record('curatedAttributes');

//$layer=(int)$json->layer;

error_log(json_encode($json));

return array(
    "items"=>array_filter((new spatial\Features())->listLayerItems(36)
        ->map(function($item)use($attr){
            
           
            $item['attributes']=$attr->getValues($item['id'], $item['type']);
            
            return $item;
            
        }), function($item)use($json){
                
            if(key_exists("filterCategory",$json)){
               return $json->filterCategory==$item['attributes']['category'];
            }
            if(key_exists("filterPeriod",$json)){
               if(is_array($item['attributes']['category'])){
                   return in_array($json->filterPeriod, $item['attributes']['category']);
               }
               return $json->filterPeriod==$item['attributes']['category'];
            }
                
            return true;
            
        })
    );