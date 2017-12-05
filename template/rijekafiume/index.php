<?php

// temporary fix to set base url doe seo friendly sites
$this->setBase(JURI::base());

if(!defined('DS'))define('DS', DIRECTORY_SEPARATOR); //Joomla 3 doesn't define this but I really like it.

/**
 * check for component specific css file.
*/
if($component=JRequest::getVar('option',false)){
	$component=str_replace(array('com_',' '), '', $component);


	//checks for existing css file
	$file='css'.DS.'com'.DS.$component.'.css';
	if(!file_exists(dirname(__FILE__).DS.$file)){
		//die(dirname(__FILE__).DS.$file);
		$file=false;
	}

	//checks for the same file as above, but with .php extension.
	//this allows for dynamic css to be generated, to support
	//theme setting controls.
	//note* I am importing controls from com_geolive so that must exist!
	$filep='css'.DS.'com'.DS.$component.'.php';
	if(!file_exists(dirname(__FILE__).DS.$filep)){
		//die(dirname(__FILE__).DS.$file);
		$filep=false;
	}
}

//include mootools
JHTML::_('behavior.framework', true);
JHTML::_('jquery.framework');

$doc = JFactory::getDocument();
$doc->addStyleSheet($this->baseurl . '/media/jui/css/bootstrap.min.css');
include_once dirname(dirname(__DIR__)).'/administrator/components/com_geolive/core.php';
Behavior('modal');

$doc->addScript($this->baseurl . '/templates/' . $this->template . '/js/pushmenu.js');
$doc->addStyleSheet($this->baseurl . '/templates/' . $this->template . '/css/pushmenu.css');


?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"
	xml:lang="<?php echo $this->language; ?>"
	lang="<?php echo $this->language; ?>">


<head>

<meta charset="utf-8">
<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<meta http-equiv="cleartype" content="on">

<link rel="shortcut icon" href="/templates/rijekafiume/favicon.ico">

<!-- Responsive and mobile friendly stuff -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<jdoc:include type="head" />

<!--  Stylesheets -->
<link rel="stylesheet" href="/templates/rijekafiume/css/html5reset.css" media="all" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/system.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/general.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this -> template; ?>/css/template.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this -> template; ?>/css/lang.css" type="text/css" />
<link rel="stylesheet" href="/templates/rijekafiume/css/responsivegridsystem.css" media="all" />
<link rel="stylesheet" href="/templates/rijekafiume/css/col.css" media="all" />
<link rel="stylesheet" href="/templates/rijekafiume/css/2cols.css" media="all" />
<link rel="stylesheet" href="/templates/rijekafiume/css/3cols.css" media="all" />
<link rel="stylesheet" href="/templates/rijekafiume/css/4cols.css" media="all" />

<!-- Responsive Stylesheets -->
<link rel="stylesheet" media="only screen and (max-width: 1024px) and (min-width: 769px)" href="/templates/rijekafiume/css/1024.css" />
<link rel="stylesheet" media="only screen and (max-width: 768px) and (min-width: 481px)" href="/templates/rijekafiume/css/768.css" />
<link rel="stylesheet" media="only screen and (max-width: 480px)" href="/templates/rijekafiume/css/480.css" />

<!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements and feature detects -->
<script src="/templates/rijekafiume/js/modernizr-2.5.3-min.js"></script>
<script src="/templates/rijekafiume/js/lang.js"></script>


<?php 
$component=JRequest::getVar('option','');
$item=JRequest::getVar('Itemid','');
if(file_exists((dirname(__FILE__)).DS.'css'.DS.$component.'.css')){
	?>

<link rel="stylesheet"
	href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/<?php echo $component; ?>.css"
	type="text/css" />
<?php 

}else{
?>
<!-- did not find <?php echo $component ?>.css -->
<?php 	

}

$ln='lang-'.(key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER)?substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2):'en');


?>
</head>


<body data-lang="<?php echo ($ln);?>" class="<?php echo $component;?> <?php echo "item_".$item;

	echo ' '.($ln);
	echo ' '.JFactory::getLanguage()->getTag();

 ?>">
	<div id="wrapper">
		<div id="headcontainer">
			<header class="group"> 
			<div class="lang"><button class="btn" data-lang="lang-en">En</button><button class="btn" data-lang="lang-hr">Hr</button><button class="btn" data-lang="lang-it">It</button></div>
			<div id="toplogo">
			<img class="toplogo" src="/templates/rijekafiume/images/rijeka-logo-grey.png" alt="rijeka logo" title="rijeka logo" />
			</div>
			<nav>

			<jdoc:include type="modules" name="top" />

			<div id="pushmenu-parent" style="visibility: hidden; pointer-events: none;     position: absolute;">
				<div id="pushmenu">
						<h3 id="pushmenu-message"><?php echo JFactory::getUser()->guest?'User Login':'Sign out'; ?></h3>
						<jdoc:include type="modules" name="login" />
						<script type="text/javascript">
							window.addEvent('domready',function(){
								$$('.nav.menu li').forEach(function(a){
									a.addClass('btn');
								});
							});

						</script>
				</div>		

			</div>

			</nav> </header> <!-- end header -->
		</div> <!-- end headcontainer -->
		<jdoc:include type="message" />
		<div id="maincontentcontainer">
			<div id="maincontent">
				<div class="background">
					<jdoc:include type="component" />
				</div> <!-- end background -->
			</div> <!-- end maincontent -->
		</div> <!-- end maincontentcontainer -->

		<div id="footercontainer">
		</div> <!-- end footercontainer -->
	</div> <!-- end wrapper -->

	<!--[if (lt IE 9) & (!IEMobile)]>
<script src="js/selectivizr-min.js"></script>
<![endif]-->

	<!-- More Scripts-->
	<script src="/templates/rijekafiume/js/responsivegridsystem.js"></script>
</body>
</html>
