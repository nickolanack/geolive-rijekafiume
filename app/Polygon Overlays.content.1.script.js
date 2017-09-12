
<?php  

if(GetClient()->isAdmin()){
    $linkIcons=GetWidget('polygon-config')->modalViewParams('form')['url'];
    ?>
    var link=<?php echo json_encode($link);?>;
 
    return new Element('a', {"href":link, "_target":"blank", "html":"Edit"});
 
    <?php  
}


?>




return null;