$url=$_SERVER['REQUEST_URI'];
$parts=explode('/mobile/', $url);
$marker=array_pop($parts);
$marker=explode('/', $marker);
$marker=array_shift($marker);
$marker=explode('#', $marker);
$marker=array_shift($marker);
$marker=intval($marker);

//echo $marker;
error_log('mobile');
error_log(print_r($_SERVER, true));

if(key_exists('HTTP_REFERER', $_SERVER)){
    if(strpos($_SERVER['HTTP_REFERER'], 'android-app')===0){
        //header("Location: https://play.google.com/store/apps/details?id=org.rijekafiume.ca");
        //return;
        
        
        error_log('redirect-android');
        header("Location: https://rijekafiume.geolive.ca/mobile-2/".$marker);
        return;
        
    }
}


if(key_exists('HTTP_USER_AGENT', $_SERVER)){
    if(stripos($_SERVER['HTTP_USER_AGENT'], 'iphone')!==false){
        
        
        error_log('redirect-ios');
        header("Location: https://rijekafiume.geolive.ca/mobile-2/".$marker);
        return;
        
       // header("Location: https://apps.apple.com/app/rijeka-fiume-in-flux/id1471481859");
        //return;
    }
}


error_log('redirect-alt');
header("Location: https://rijekafiume.geolive.ca/mobile-2/".$marker);