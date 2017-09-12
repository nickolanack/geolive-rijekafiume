//'featureMetadata' => $featureMetadata,
			//	'image' => $image,
			//	'bounds' => $bounds,
			//	'xtile' => $xtile,
			//	'ytile' => $ytile,
			//	'zoom' => $zoom,
			$featureMedatadata['']='';
			SpatialRenderer::RenderFeatureOnTile($featureMetadata, $image, $bounds);