var wms_layers = [];

var format_BUILDING_GEOAI_POLEHAN_0 = new ol.format.GeoJSON();
var features_BUILDING_GEOAI_POLEHAN_0 = format_BUILDING_GEOAI_POLEHAN_0.readFeatures(json_BUILDING_GEOAI_POLEHAN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDING_GEOAI_POLEHAN_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDING_GEOAI_POLEHAN_0.addFeatures(features_BUILDING_GEOAI_POLEHAN_0);
var lyr_BUILDING_GEOAI_POLEHAN_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILDING_GEOAI_POLEHAN_0, 
                style: style_BUILDING_GEOAI_POLEHAN_0,
                popuplayertitle: 'BUILDING_GEOAI_POLEHAN',
                interactive: false,
                title: '<img src="styles/legend/BUILDING_GEOAI_POLEHAN_0.png" /> BUILDING_GEOAI_POLEHAN'
            });
var format_Background_1 = new ol.format.GeoJSON();
var features_Background_1 = format_Background_1.readFeatures(json_Background_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Background_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Background_1.addFeatures(features_Background_1);
var lyr_Background_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Background_1, 
                style: style_Background_1,
                popuplayertitle: 'Background',
                interactive: true,
                title: '<img src="styles/legend/Background_1.png" /> Background'
            });
var format_BACKGROUND_GEOAI_POLEHAN_2 = new ol.format.GeoJSON();
var features_BACKGROUND_GEOAI_POLEHAN_2 = format_BACKGROUND_GEOAI_POLEHAN_2.readFeatures(json_BACKGROUND_GEOAI_POLEHAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BACKGROUND_GEOAI_POLEHAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BACKGROUND_GEOAI_POLEHAN_2.addFeatures(features_BACKGROUND_GEOAI_POLEHAN_2);
var lyr_BACKGROUND_GEOAI_POLEHAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BACKGROUND_GEOAI_POLEHAN_2, 
                style: style_BACKGROUND_GEOAI_POLEHAN_2,
                popuplayertitle: 'BACKGROUND_GEOAI_POLEHAN',
                interactive: false,
                title: '<img src="styles/legend/BACKGROUND_GEOAI_POLEHAN_2.png" /> BACKGROUND_GEOAI_POLEHAN'
            });
var format_InfoSekolahPolehan_3 = new ol.format.GeoJSON();
var features_InfoSekolahPolehan_3 = format_InfoSekolahPolehan_3.readFeatures(json_InfoSekolahPolehan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfoSekolahPolehan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfoSekolahPolehan_3.addFeatures(features_InfoSekolahPolehan_3);
var lyr_InfoSekolahPolehan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfoSekolahPolehan_3, 
                style: style_InfoSekolahPolehan_3,
                popuplayertitle: 'InfoSekolahPolehan',
                interactive: false,
                title: '<img src="styles/legend/InfoSekolahPolehan_3.png" /> InfoSekolahPolehan'
            });
var format_JalanDesa_4 = new ol.format.GeoJSON();
var features_JalanDesa_4 = format_JalanDesa_4.readFeatures(json_JalanDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_4.addFeatures(features_JalanDesa_4);
var lyr_JalanDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_4, 
                style: style_JalanDesa_4,
                popuplayertitle: 'JalanDesa',
                interactive: false,
                title: '<img src="styles/legend/JalanDesa_4.png" /> JalanDesa'
            });
var format_POLYGON_5 = new ol.format.GeoJSON();
var features_POLYGON_5 = format_POLYGON_5.readFeatures(json_POLYGON_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLYGON_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLYGON_5.addFeatures(features_POLYGON_5);
var lyr_POLYGON_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLYGON_5, 
                style: style_POLYGON_5,
                popuplayertitle: 'POLYGON',
                interactive: false,
                title: '<img src="styles/legend/POLYGON_5.png" /> POLYGON'
            });
var format_pemukiman_6 = new ol.format.GeoJSON();
var features_pemukiman_6 = format_pemukiman_6.readFeatures(json_pemukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukiman_6.addFeatures(features_pemukiman_6);
var lyr_pemukiman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemukiman_6, 
                style: style_pemukiman_6,
                popuplayertitle: 'pemukiman',
                interactive: false,
                title: '<img src="styles/legend/pemukiman_6.png" /> pemukiman'
            });
var format_JLRaya_7 = new ol.format.GeoJSON();
var features_JLRaya_7 = format_JLRaya_7.readFeatures(json_JLRaya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JLRaya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JLRaya_7.addFeatures(features_JLRaya_7);
var lyr_JLRaya_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JLRaya_7, 
                style: style_JLRaya_7,
                popuplayertitle: 'JLRaya',
                interactive: false,
                title: '<img src="styles/legend/JLRaya_7.png" /> JLRaya'
            });
var format_FasilitasUmum_8 = new ol.format.GeoJSON();
var features_FasilitasUmum_8 = format_FasilitasUmum_8.readFeatures(json_FasilitasUmum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_8.addFeatures(features_FasilitasUmum_8);
var lyr_FasilitasUmum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_8, 
                style: style_FasilitasUmum_8,
                popuplayertitle: 'FasilitasUmum',
                interactive: false,
                title: '<img src="styles/legend/FasilitasUmum_8.png" /> FasilitasUmum'
            });
var format_TempatIbadah_9 = new ol.format.GeoJSON();
var features_TempatIbadah_9 = format_TempatIbadah_9.readFeatures(json_TempatIbadah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_9.addFeatures(features_TempatIbadah_9);
var lyr_TempatIbadah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_9, 
                style: style_TempatIbadah_9,
                popuplayertitle: 'TempatIbadah',
                interactive: false,
                title: '<img src="styles/legend/TempatIbadah_9.png" /> TempatIbadah'
            });
var format_Jl_Gang_10 = new ol.format.GeoJSON();
var features_Jl_Gang_10 = format_Jl_Gang_10.readFeatures(json_Jl_Gang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jl_Gang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jl_Gang_10.addFeatures(features_Jl_Gang_10);
var lyr_Jl_Gang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jl_Gang_10, 
                style: style_Jl_Gang_10,
                popuplayertitle: 'Jl_Gang',
                interactive: false,
                title: '<img src="styles/legend/Jl_Gang_10.png" /> Jl_Gang'
            });
var format_Sungai_11 = new ol.format.GeoJSON();
var features_Sungai_11 = format_Sungai_11.readFeatures(json_Sungai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_11.addFeatures(features_Sungai_11);
var lyr_Sungai_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_11, 
                style: style_Sungai_11,
                popuplayertitle: 'Sungai',
                interactive: false,
                title: '<img src="styles/legend/Sungai_11.png" /> Sungai'
            });
var group_model_output = new ol.layer.Group({
                                layers: [lyr_BUILDING_GEOAI_POLEHAN_0,lyr_Background_1,lyr_BACKGROUND_GEOAI_POLEHAN_2,],
                                fold: 'open',
                                title: 'model_output'});

lyr_BUILDING_GEOAI_POLEHAN_0.setVisible(true);lyr_Background_1.setVisible(true);lyr_BACKGROUND_GEOAI_POLEHAN_2.setVisible(true);lyr_InfoSekolahPolehan_3.setVisible(true);lyr_JalanDesa_4.setVisible(true);lyr_POLYGON_5.setVisible(true);lyr_pemukiman_6.setVisible(true);lyr_JLRaya_7.setVisible(true);lyr_FasilitasUmum_8.setVisible(true);lyr_TempatIbadah_9.setVisible(true);lyr_Jl_Gang_10.setVisible(true);lyr_Sungai_11.setVisible(true);
var layersList = [group_model_output,lyr_InfoSekolahPolehan_3,lyr_JalanDesa_4,lyr_POLYGON_5,lyr_pemukiman_6,lyr_JLRaya_7,lyr_FasilitasUmum_8,lyr_TempatIbadah_9,lyr_Jl_Gang_10,lyr_Sungai_11];
lyr_BUILDING_GEOAI_POLEHAN_0.set('fieldAliases', {'FID': 'FID', });
lyr_Background_1.set('fieldAliases', {});
lyr_BACKGROUND_GEOAI_POLEHAN_2.set('fieldAliases', {'FID': 'FID', });
lyr_InfoSekolahPolehan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenjang': 'Jenjang', 'Status': 'Status', 'Alamat': 'Alamat', 'Akreditasi': 'Akreditasi', });
lyr_JalanDesa_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_POLYGON_5.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'KodePos': 'KodePos', 'Penduduk': 'Penduduk', });
lyr_pemukiman_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JLRaya_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_FasilitasUmum_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_TempatIbadah_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Hektar': 'Hektar', 'M2': 'M2', });
lyr_Jl_Gang_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', });
lyr_Sungai_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'panjang': 'panjang', 'KM': 'KM', });
lyr_BUILDING_GEOAI_POLEHAN_0.set('fieldImages', {'FID': 'TextEdit', });
lyr_Background_1.set('fieldImages', {});
lyr_BACKGROUND_GEOAI_POLEHAN_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_InfoSekolahPolehan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenjang': 'TextEdit', 'Status': 'TextEdit', 'Alamat': 'TextEdit', 'Akreditasi': 'TextEdit', });
lyr_JalanDesa_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_POLYGON_5.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'KodePos': 'TextEdit', 'Penduduk': 'TextEdit', });
lyr_pemukiman_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JLRaya_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_FasilitasUmum_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_TempatIbadah_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Hektar': '', 'M2': '', });
lyr_Jl_Gang_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_Sungai_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'panjang': 'TextEdit', 'KM': 'TextEdit', });
lyr_BUILDING_GEOAI_POLEHAN_0.set('fieldLabels', {'FID': 'no label', });
lyr_Background_1.set('fieldLabels', {});
lyr_BACKGROUND_GEOAI_POLEHAN_2.set('fieldLabels', {'FID': 'no label', });
lyr_InfoSekolahPolehan_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenjang': 'no label', 'Status': 'no label', 'Alamat': 'no label', 'Akreditasi': 'no label', });
lyr_JalanDesa_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_POLYGON_5.set('fieldLabels', {'id': 'inline label - always visible', 'NAMA': 'no label', 'KodePos': 'no label', 'Penduduk': 'no label', });
lyr_pemukiman_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JLRaya_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_FasilitasUmum_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_TempatIbadah_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jenis': 'no label', 'Hektar': 'no label', 'M2': 'no label', });
lyr_Jl_Gang_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', });
lyr_Sungai_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'panjang': 'no label', 'KM': 'no label', });
lyr_Sungai_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});