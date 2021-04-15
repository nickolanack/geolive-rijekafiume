$url=$_SERVER['REQUEST_URI'];
$parts=explode('/mobile/', $url);
$marker=array_pop($parts);
$marker=explode('/', $marker);
$marker=array_shift($marker);
$marker=explode('#', $marker);
$marker=array_shift($marker);
$marker=intval($marker);

//echo $marker;
error_log('mobile-2');
error_log(print_r($_SERVER, true));
if(key_exists('HTTP_REFERER', $_SERVER)){
    if(strpos($_SERVER['HTTP_REFERER'], 'android-app')===0){
        header("Location: https://play.google.com/store/apps/details?id=org.rijekafiume.ca");
        return;
        
        
        // error_log('redirect-android');
        // header("Location: https://rijekafiume.geolive.ca/mobile-2/".$marker);
        // return;
        
    }
}