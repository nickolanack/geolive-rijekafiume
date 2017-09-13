<?php

//'featureMetadata' => $featureMetadata,
			//	'image' => $image,
			//	'bounds' => $bounds,
			//	'xtile' => $xtile,
			//	'ytile' => $ytile,
			//	'zoom' => $zoom,
			// 'layer'=>$layer
// 			"polyStyle": {
//                 "color": "7f659ab3"
//             },
//             "lineStyle": {
//                 "color": "ff659ab3",
//                 "width": 1
//             },

            $polyconfig=GetWidget('polygon-config');
            $kmlcolor='#7f000000';
            $kmlline='#ff000000';
            $configcolor=$polyconfig->getParameter('layer-'.$layer.'-color', 'rgb(0,0,0)');
                if(!empty($configcolor)){
                    $parts=explode(',', $configcolor);
                    $rgb=array_map(function($str){
                        return intval(preg_replace("/[^0-9]/", "", $str));
                    }, $parts);
                    
                    $kmlcolor = "#5F".sprintf("%02x%02x%02x",  $rgb[2],  $rgb[1],  $rgb[0]);
                    $kmlline="#7f".sprintf("%02x%02x%02x",  $rgb[2],  $rgb[1],  $rgb[0]);
                }
                
               

				
			GetLogger('layertile')->info('custom render', $featureMetadata);
			
			$featureMetadata['polyStyle']['color']=$kmlcolor;
			$featureMetadata['lineStyle']['color']=$kmlline;
		
			SpatialRenderer::RenderFeatureOnTile($featureMetadata, $image, $bounds);
			
?>