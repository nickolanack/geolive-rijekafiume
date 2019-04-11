if(strpos($fieldFormat['label'] 'item owner')===0){
    return false;
}

if(strpos($fieldFormat['label'] 'layer ')===0){
    return false;
}

if(in_array(array('coordinates', 'image count', 'url',	'created date',	'last modification date', 'read access'), $fieldFormat['label'])){
    return false;
}

return strpos($fieldFormat['field'], 'attributes.markerAttributes')===false;