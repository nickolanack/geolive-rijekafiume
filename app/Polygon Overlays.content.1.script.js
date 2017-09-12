
<?php  

if(GetClient()->isAdmin()){
    $link=GetWidget('polygon-icons')->modalViewParams('form');
    ?>
    var link=<?php json_encode($link);?>;
    <?php
    
    
}


?>




return null;