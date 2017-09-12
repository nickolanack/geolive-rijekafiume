
<?php  

if(GetClient()->isAdmin()){
    $link=GetWidget('polygon-icons')->getModalViewParams('form');
    ?>
    var link=<?php json_encode($link);?>;
    <?php
    
    
}


?>




return null;