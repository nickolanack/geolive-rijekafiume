
<?php  

if(GetClient()->isAdmin()){
    $linkPoly=GetWidget('polygon-config')->modalViewParams('form')['url'];
    $linkTab=GetWidget(55)->modalViewParams('form')['url'];
    ?>
    var linkPoly=<?php echo json_encode($linkPoly);?>;
    var linkTab=<?php echo json_encode($linkTab);?>;
 
    var div=new Element('div');
    div.appendChild(new Element('a', {"href":linkPoly, "_target":"blank", "html":"Edit Polygons"}));
    div.appendChild(new Element('a', {"href":linkTab, "_target":"blank", "html":"Edit Tab"}));
    return div;
    
 
    <?php  
}


?>




return null;