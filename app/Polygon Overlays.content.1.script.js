
<?php  

if(GetClient()->isAdmin()){
    $link=GetWidget('polygon-icons')->modalViewParams('form')[url];
    ?>
    var link=<?php echo json_encode($link);?>;
    <?php
    
    return new Element('a', {"href":link, _target:"blank"})
    
}


?>




return null;