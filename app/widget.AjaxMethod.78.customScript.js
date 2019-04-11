GetPlugin('Maps');


$layer=(int)$json->layer;

return array(
    "items"=>(new spatial\Features())->listLayerItems($layer)
        ->map(function($item){
            
           
            
            
            return $item;
            
        })
    );