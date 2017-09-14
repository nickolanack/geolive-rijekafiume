
<?php  

if(GetClient()->isAdmin()){
    $linkPoly=GetWidget('polygon-config')->modalViewParams('form')['url'];
    $linkPoly=GetWidget('tab')->modalViewParams('form')['url'];
    ?>
    var link=<?php echo json_encode($linkPoly);?>;
 
    return new Element('a', {"href":link, "_target":"blank", "html":"Edit Polygons"});
 
    <?php  
}


?>




return null;