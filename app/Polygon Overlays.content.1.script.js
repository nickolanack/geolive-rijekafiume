
<?php  

if(GetClient()->isAdmin()){
    $link=GetWidget('polygon-icons')->modalViewParams('form');
    ?>
    var link=<?php echo json_encode($link)[url];?>;
    <?php
    
    return new Element('a', {"href":link, _target:"blank"})
    
}


?>




return null;