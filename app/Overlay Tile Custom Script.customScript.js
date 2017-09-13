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
				
			GetLogger('layertile')->info('custom render', $featureMetadata);
			
			$featureMedatadata['polyStyle']['color']='7f00ff00';
			$featureMedatadata['lineStyle']['color']='ff699ab3';
		
			SpatialRenderer::RenderFeatureOnTile($featureMetadata, $image, $bounds);
			
?>