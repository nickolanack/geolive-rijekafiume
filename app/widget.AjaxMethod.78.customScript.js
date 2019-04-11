GetPlugin('Maps');
GetPlugin('Attributes');

$attr=new \attributes\Record('curatedAttributes');

//$layer=(int)$json->layer;

return array(
    "items"=>(new spatial\Features())->listLayerItems(36)
        ->map(function($item)use($attr){
            
           
            $item['attributes']=$attr->getValues($item['id'], $item['type']);
            
            return $item;
            
        })
    );