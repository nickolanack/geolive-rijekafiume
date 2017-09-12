
<?php  

if(GetClient()->isAdmin()){
    $link=GetWidget('polygon-icons')->modalViewParams('form')['url'];
    ?>
    var link=<?php echo json_encode($link);?>;
 
    return new Element('a', {"href":link, "_target":"blank", "html":"Edit"});
 
    <?php  
}


?>




return null;