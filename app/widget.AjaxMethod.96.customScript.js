$analyticUrl=escapeshellarg('https://analytic.fra.geoforms.ca/index.php?json='.urlencode(json_encode((object) array(
    'ip'=>$_SERVER['REMOTE_ADDR'],
    'request'=>'get-view',
    'args'=>$json
    ))));
$cmd  = "curl -g --max-time 60 ";
$cmd .= $analyticUrl;
$cmd .= " > /dev/null 2>&1 &";
exec($cmd);


return array();