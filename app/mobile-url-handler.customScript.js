$url=$_SERVER['REQUEST_URI'];
$parts=explode('/mobile/', $url);
$marker=array_pop($parts);
$marker=explode('/', $marker);
$marker=array_shift($marker);
$marker=explode('#', $marker);
$marker=array_shift($marker);
$marker=intval($marker);

//echo $marker;

//header("Location: rijekafiumeapp://rijekafiume.geolive.ca/mobile/".$marker);