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
			
			
			$featureMedatadata->polyStyle->color='7f699ab3';
			$featureMedatadata->lineStyle->color='ff699ab3';
			Emit('onCustomRender', $featureMetadata);
			SpatialRenderer::RenderFeatureOnTile($featureMetadata, $image, $bounds);
			
?>