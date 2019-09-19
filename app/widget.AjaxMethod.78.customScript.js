GetPlugin('Maps');
GetPlugin('Attributes');

$attr=new \attributes\Record('curatedAttributes');

//$layer=(int)$json->layer;



return array(
    'withFilter'=>key_exists("filter",$json)?$json->filter||false,
    "items"=>array_values(array_filter((new spatial\Features())->listLayerItems(36)
        ->map(function($item)use($attr){
            
           
            $item['attributes']=$attr->getValues($item['id'], $item['type']);
            $item['icon']="{markerIcon}";
            
            return $item;
            
        }), function($item)use($json){
            
            if(!key_exists("filter",$json)){
                return true;
            } 
            
            $filter=$json->filter;
                
            error_log(json_encode($json));
            if(key_exists("filterCategory",$filter)){
               return $filter->filterCategory==$item['attributes']['category'];
            }
            
            if(key_exists("filterTour",$filter)){
               return $filter->filterCategory==$item['attributes']['tour'];
            }
            
            if(key_exists("filterPeriod",$filter)){
               if(is_array($item['attributes']['category'])){
                   return in_array($filter->filterPeriod, $item['attributes']['category']);
               }
               return $filter->filterPeriod==$item['attributes']['category'];
            }
                
            return true;
            
        }))
    );