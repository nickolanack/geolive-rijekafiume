GetPlugin('Maps');


$layer=(int)$json->layer;

return array(
    "items"=>(new spatial\Features())->listLayerItems($layer||36)
        ->map(function($item){
            
           
            
            
            return $item;
            
        })
    );