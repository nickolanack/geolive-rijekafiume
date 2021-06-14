GetPlugin('Maps');
GetPlugin('Attributes');

$attr=new \attributes\Record('curatedAttributes');

//$layer=(int)$json->layer;


$testItems=array();
$unpublished=array();

error_log('listLayerItems:start');

$results=(new spatial\Features())->listLayerItems(36)
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
            
        });

error_log('listLayerItems:end');


$items=(array_filter($results, function($item)use($json, &$testItems, &$unpublished){
            
            if(stripos($item['name'],'Test')!==false){
                $testItems[]=array('id'=>$item[id], 'name'=>$item['name']);
                return false;
            }
            
            if($item['attributes']['published']===false||$item['attributes']['published']==="false"){
                $unpublished[]=array('id'=>$item[id], 'name'=>$item['name']);
                return false;
            }
            
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
               
               if(stripos($item['attributes']['researcher'], ' and ')!==false){
                   $parts=explode(' and ', strtolower($item['attributes']['researcher']));
                   if(in_array(strtolower($filter->filterResearcher), $parts)){
                       return true;
                   }
                   
               }
               
               return $filter->filterResearcher==$item['attributes']['researcher'];
            }
                
            return true;
            
        }));
return array(
    'withFilter'=>key_exists("filter",$json)?$json->filter:false,
    'unfiltered'=>count($results),
    "items"=>$items,
    "test"=>$testItems,
    "unpublished"=>$unpublished
    );