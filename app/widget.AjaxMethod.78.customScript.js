GetPlugin('Maps');
GetPlugin('Attributes');

$attr=new \attributes\Record('curatedAttributes');

//$layer=(int)$json->layer;



return array(
    'withFilter'=>key_exists("filter",$json)?$json->filter:false,
    "items"=>array_values(array_filter((new spatial\Features())->listLayerItems(36)
        ->map(function($item)use($attr){
            
           
            $item['attributes']=$attr->getValues($item['id'], $item['type']);
            
            $item['attributes']['media']=str_replace(
                'src="components', 'src="https://rijekafiume.geolive.ca/components', $item['attributes']['media']);    
                
            $item['attributes']['media']=str_replace(
                '[', urlencode('['), $item['attributes']['media']);
                
            $item['attributes']['media']=str_replace(
                ']', urlencode(']'), $item['attributes']['media']);  
                
                
                
            $item['icon']="{markerIcon}";
            
            return $item;
            
        }), function($item)use($json){
            
            if(!key_exists("filter",$json)){
                return true;
            } 
            
            $filter=$json->filter;
            if(!is_object($filter)){
                return true;
            }
                
            error_log(json_encode($json));
            if(key_exists("filterCategory",$filter)){
               return $filter->filterCategory==$item['attributes']['category'];
            }
            
            if(key_exists("filterTour",$filter)){
                if(is_array($item['attributes']['tour'])){
                   return in_array($filter->filterTour, $item['attributes']['tour']);
                }
               return $filter->filterTour==$item['attributes']['tour'];
            }
            
            if(key_exists("filterPeriod",$filter)){
               if(is_array($item['attributes']['period'])){
                   return in_array($filter->filterPeriod, $item['attributes']['period']);
               }
               return $filter->filterPeriod==$item['attributes']['period'];
            }
            
            if(key_exists("filterResearcher",$filter)){
               if(is_array($item['attributes']['researcher'])){
                   return in_array($filter->filterResearcher, $item['attributes']['researcher']);
               }
               return in_array($filter->filterResearcher, explode(' and ', $item['attributes']['researcher']));
               //return $filter->filterResearcher==$item['attributes']['researcher'];
            }
                
            return true;
            
        }))
    );