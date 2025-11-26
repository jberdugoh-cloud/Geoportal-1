var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 0.486000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_veredas_con_datos_1 = new ol.format.GeoJSON();
var features_veredas_con_datos_1 = format_veredas_con_datos_1.readFeatures(json_veredas_con_datos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_veredas_con_datos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_veredas_con_datos_1.addFeatures(features_veredas_con_datos_1);
var lyr_veredas_con_datos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_veredas_con_datos_1, 
                style: style_veredas_con_datos_1,
                popuplayertitle: 'veredas_con_datos',
                interactive: true,
                title: '<img src="styles/legend/veredas_con_datos_1.png" /> veredas_con_datos'
            });
var format_puntocritico38_2 = new ol.format.GeoJSON();
var features_puntocritico38_2 = format_puntocritico38_2.readFeatures(json_puntocritico38_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico38_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico38_2.addFeatures(features_puntocritico38_2);
var lyr_puntocritico38_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico38_2, 
                style: style_puntocritico38_2,
                popuplayertitle: 'punto critico 38',
                interactive: true,
                title: '<img src="styles/legend/puntocritico38_2.png" /> punto critico 38'
            });
var format_Puntocritico37_3 = new ol.format.GeoJSON();
var features_Puntocritico37_3 = format_Puntocritico37_3.readFeatures(json_Puntocritico37_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntocritico37_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntocritico37_3.addFeatures(features_Puntocritico37_3);
var lyr_Puntocritico37_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntocritico37_3, 
                style: style_Puntocritico37_3,
                popuplayertitle: 'Punto critico 37',
                interactive: true,
                title: '<img src="styles/legend/Puntocritico37_3.png" /> Punto critico 37'
            });
var format_puntocritico36_4 = new ol.format.GeoJSON();
var features_puntocritico36_4 = format_puntocritico36_4.readFeatures(json_puntocritico36_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico36_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico36_4.addFeatures(features_puntocritico36_4);
var lyr_puntocritico36_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico36_4, 
                style: style_puntocritico36_4,
                popuplayertitle: 'punto critico 36',
                interactive: true,
                title: '<img src="styles/legend/puntocritico36_4.png" /> punto critico 36'
            });
var format_puntocritico35_5 = new ol.format.GeoJSON();
var features_puntocritico35_5 = format_puntocritico35_5.readFeatures(json_puntocritico35_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico35_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico35_5.addFeatures(features_puntocritico35_5);
var lyr_puntocritico35_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico35_5, 
                style: style_puntocritico35_5,
                popuplayertitle: 'punto critico 35',
                interactive: true,
                title: '<img src="styles/legend/puntocritico35_5.png" /> punto critico 35'
            });
var format_puntocritico34_6 = new ol.format.GeoJSON();
var features_puntocritico34_6 = format_puntocritico34_6.readFeatures(json_puntocritico34_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico34_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico34_6.addFeatures(features_puntocritico34_6);
var lyr_puntocritico34_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico34_6, 
                style: style_puntocritico34_6,
                popuplayertitle: 'punto critico 34',
                interactive: true,
                title: '<img src="styles/legend/puntocritico34_6.png" /> punto critico 34'
            });
var format_puntocritico33_7 = new ol.format.GeoJSON();
var features_puntocritico33_7 = format_puntocritico33_7.readFeatures(json_puntocritico33_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico33_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico33_7.addFeatures(features_puntocritico33_7);
var lyr_puntocritico33_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico33_7, 
                style: style_puntocritico33_7,
                popuplayertitle: 'punto critico 33',
                interactive: true,
                title: '<img src="styles/legend/puntocritico33_7.png" /> punto critico 33'
            });
var format_puntocritico32_8 = new ol.format.GeoJSON();
var features_puntocritico32_8 = format_puntocritico32_8.readFeatures(json_puntocritico32_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico32_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico32_8.addFeatures(features_puntocritico32_8);
var lyr_puntocritico32_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico32_8, 
                style: style_puntocritico32_8,
                popuplayertitle: 'punto critico 32',
                interactive: true,
                title: '<img src="styles/legend/puntocritico32_8.png" /> punto critico 32'
            });
var format_puntocritico311_9 = new ol.format.GeoJSON();
var features_puntocritico311_9 = format_puntocritico311_9.readFeatures(json_puntocritico311_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico311_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico311_9.addFeatures(features_puntocritico311_9);
var lyr_puntocritico311_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico311_9, 
                style: style_puntocritico311_9,
                popuplayertitle: 'punto critico 31.1',
                interactive: true,
                title: '<img src="styles/legend/puntocritico311_9.png" /> punto critico 31.1'
            });
var format_puntocritico30_10 = new ol.format.GeoJSON();
var features_puntocritico30_10 = format_puntocritico30_10.readFeatures(json_puntocritico30_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico30_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico30_10.addFeatures(features_puntocritico30_10);
var lyr_puntocritico30_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico30_10, 
                style: style_puntocritico30_10,
                popuplayertitle: 'punto critico 30',
                interactive: true,
                title: '<img src="styles/legend/puntocritico30_10.png" /> punto critico 30'
            });
var format_puntocritico29_11 = new ol.format.GeoJSON();
var features_puntocritico29_11 = format_puntocritico29_11.readFeatures(json_puntocritico29_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico29_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico29_11.addFeatures(features_puntocritico29_11);
var lyr_puntocritico29_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico29_11, 
                style: style_puntocritico29_11,
                popuplayertitle: 'punto critico 29',
                interactive: true,
                title: '<img src="styles/legend/puntocritico29_11.png" /> punto critico 29'
            });
var format_puntocritico28_12 = new ol.format.GeoJSON();
var features_puntocritico28_12 = format_puntocritico28_12.readFeatures(json_puntocritico28_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico28_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico28_12.addFeatures(features_puntocritico28_12);
var lyr_puntocritico28_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico28_12, 
                style: style_puntocritico28_12,
                popuplayertitle: 'punto critico 28',
                interactive: true,
                title: '<img src="styles/legend/puntocritico28_12.png" /> punto critico 28'
            });
var format_puntocritico27_13 = new ol.format.GeoJSON();
var features_puntocritico27_13 = format_puntocritico27_13.readFeatures(json_puntocritico27_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico27_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico27_13.addFeatures(features_puntocritico27_13);
var lyr_puntocritico27_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico27_13, 
                style: style_puntocritico27_13,
                popuplayertitle: 'punto critico 27',
                interactive: true,
                title: '<img src="styles/legend/puntocritico27_13.png" /> punto critico 27'
            });
var format_puntocritico26_14 = new ol.format.GeoJSON();
var features_puntocritico26_14 = format_puntocritico26_14.readFeatures(json_puntocritico26_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico26_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico26_14.addFeatures(features_puntocritico26_14);
var lyr_puntocritico26_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico26_14, 
                style: style_puntocritico26_14,
                popuplayertitle: 'punto critico 26',
                interactive: true,
                title: '<img src="styles/legend/puntocritico26_14.png" /> punto critico 26'
            });
var format_Puntocritico25_15 = new ol.format.GeoJSON();
var features_Puntocritico25_15 = format_Puntocritico25_15.readFeatures(json_Puntocritico25_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntocritico25_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntocritico25_15.addFeatures(features_Puntocritico25_15);
var lyr_Puntocritico25_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntocritico25_15, 
                style: style_Puntocritico25_15,
                popuplayertitle: 'Punto critico 25',
                interactive: true,
                title: '<img src="styles/legend/Puntocritico25_15.png" /> Punto critico 25'
            });
var format_puntocritico24_16 = new ol.format.GeoJSON();
var features_puntocritico24_16 = format_puntocritico24_16.readFeatures(json_puntocritico24_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico24_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico24_16.addFeatures(features_puntocritico24_16);
var lyr_puntocritico24_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico24_16, 
                style: style_puntocritico24_16,
                popuplayertitle: 'punto critico 24',
                interactive: true,
                title: '<img src="styles/legend/puntocritico24_16.png" /> punto critico 24'
            });
var format_puntocritico23_17 = new ol.format.GeoJSON();
var features_puntocritico23_17 = format_puntocritico23_17.readFeatures(json_puntocritico23_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico23_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico23_17.addFeatures(features_puntocritico23_17);
var lyr_puntocritico23_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico23_17, 
                style: style_puntocritico23_17,
                popuplayertitle: 'punto critico 23',
                interactive: true,
                title: '<img src="styles/legend/puntocritico23_17.png" /> punto critico 23'
            });
var format_puntocritico22_18 = new ol.format.GeoJSON();
var features_puntocritico22_18 = format_puntocritico22_18.readFeatures(json_puntocritico22_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico22_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico22_18.addFeatures(features_puntocritico22_18);
var lyr_puntocritico22_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico22_18, 
                style: style_puntocritico22_18,
                popuplayertitle: 'punto critico 22',
                interactive: true,
                title: '<img src="styles/legend/puntocritico22_18.png" /> punto critico 22'
            });
var format_puntocritico21_19 = new ol.format.GeoJSON();
var features_puntocritico21_19 = format_puntocritico21_19.readFeatures(json_puntocritico21_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico21_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico21_19.addFeatures(features_puntocritico21_19);
var lyr_puntocritico21_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico21_19, 
                style: style_puntocritico21_19,
                popuplayertitle: 'punto critico 21',
                interactive: true,
                title: '<img src="styles/legend/puntocritico21_19.png" /> punto critico 21'
            });
var format_puntocritico20_20 = new ol.format.GeoJSON();
var features_puntocritico20_20 = format_puntocritico20_20.readFeatures(json_puntocritico20_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico20_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico20_20.addFeatures(features_puntocritico20_20);
var lyr_puntocritico20_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico20_20, 
                style: style_puntocritico20_20,
                popuplayertitle: 'punto critico 20',
                interactive: true,
                title: '<img src="styles/legend/puntocritico20_20.png" /> punto critico 20'
            });
var format_puntocritico19_21 = new ol.format.GeoJSON();
var features_puntocritico19_21 = format_puntocritico19_21.readFeatures(json_puntocritico19_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico19_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico19_21.addFeatures(features_puntocritico19_21);
var lyr_puntocritico19_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico19_21, 
                style: style_puntocritico19_21,
                popuplayertitle: 'punto critico 19',
                interactive: true,
                title: '<img src="styles/legend/puntocritico19_21.png" /> punto critico 19'
            });
var format_puntocritico18_22 = new ol.format.GeoJSON();
var features_puntocritico18_22 = format_puntocritico18_22.readFeatures(json_puntocritico18_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico18_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico18_22.addFeatures(features_puntocritico18_22);
var lyr_puntocritico18_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico18_22, 
                style: style_puntocritico18_22,
                popuplayertitle: 'punto critico 18',
                interactive: true,
                title: '<img src="styles/legend/puntocritico18_22.png" /> punto critico 18'
            });
var format_puntocritico17_23 = new ol.format.GeoJSON();
var features_puntocritico17_23 = format_puntocritico17_23.readFeatures(json_puntocritico17_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico17_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico17_23.addFeatures(features_puntocritico17_23);
var lyr_puntocritico17_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico17_23, 
                style: style_puntocritico17_23,
                popuplayertitle: 'punto critico 17',
                interactive: true,
                title: '<img src="styles/legend/puntocritico17_23.png" /> punto critico 17'
            });
var format_puntocritico16_24 = new ol.format.GeoJSON();
var features_puntocritico16_24 = format_puntocritico16_24.readFeatures(json_puntocritico16_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico16_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico16_24.addFeatures(features_puntocritico16_24);
var lyr_puntocritico16_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico16_24, 
                style: style_puntocritico16_24,
                popuplayertitle: 'punto critico 16',
                interactive: true,
                title: '<img src="styles/legend/puntocritico16_24.png" /> punto critico 16'
            });
var format_puntocritico15_25 = new ol.format.GeoJSON();
var features_puntocritico15_25 = format_puntocritico15_25.readFeatures(json_puntocritico15_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico15_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico15_25.addFeatures(features_puntocritico15_25);
var lyr_puntocritico15_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico15_25, 
                style: style_puntocritico15_25,
                popuplayertitle: 'punto critico 15',
                interactive: true,
                title: '<img src="styles/legend/puntocritico15_25.png" /> punto critico 15'
            });
var format_puntocritico14_26 = new ol.format.GeoJSON();
var features_puntocritico14_26 = format_puntocritico14_26.readFeatures(json_puntocritico14_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico14_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico14_26.addFeatures(features_puntocritico14_26);
var lyr_puntocritico14_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico14_26, 
                style: style_puntocritico14_26,
                popuplayertitle: 'punto critico 14',
                interactive: true,
                title: '<img src="styles/legend/puntocritico14_26.png" /> punto critico 14'
            });
var format_puntocritico13_27 = new ol.format.GeoJSON();
var features_puntocritico13_27 = format_puntocritico13_27.readFeatures(json_puntocritico13_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico13_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico13_27.addFeatures(features_puntocritico13_27);
var lyr_puntocritico13_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico13_27, 
                style: style_puntocritico13_27,
                popuplayertitle: 'punto critico 13',
                interactive: true,
                title: '<img src="styles/legend/puntocritico13_27.png" /> punto critico 13'
            });
var format_puntocritico12_28 = new ol.format.GeoJSON();
var features_puntocritico12_28 = format_puntocritico12_28.readFeatures(json_puntocritico12_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico12_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico12_28.addFeatures(features_puntocritico12_28);
var lyr_puntocritico12_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico12_28, 
                style: style_puntocritico12_28,
                popuplayertitle: 'punto critico 12',
                interactive: true,
                title: '<img src="styles/legend/puntocritico12_28.png" /> punto critico 12'
            });
var format_puntocritico11_29 = new ol.format.GeoJSON();
var features_puntocritico11_29 = format_puntocritico11_29.readFeatures(json_puntocritico11_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico11_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico11_29.addFeatures(features_puntocritico11_29);
var lyr_puntocritico11_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico11_29, 
                style: style_puntocritico11_29,
                popuplayertitle: 'punto critico 11',
                interactive: true,
                title: '<img src="styles/legend/puntocritico11_29.png" /> punto critico 11'
            });
var format_puntocritico10_30 = new ol.format.GeoJSON();
var features_puntocritico10_30 = format_puntocritico10_30.readFeatures(json_puntocritico10_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico10_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico10_30.addFeatures(features_puntocritico10_30);
var lyr_puntocritico10_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico10_30, 
                style: style_puntocritico10_30,
                popuplayertitle: 'punto critico 10',
                interactive: true,
                title: '<img src="styles/legend/puntocritico10_30.png" /> punto critico 10'
            });
var format_puntocritico9_31 = new ol.format.GeoJSON();
var features_puntocritico9_31 = format_puntocritico9_31.readFeatures(json_puntocritico9_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico9_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico9_31.addFeatures(features_puntocritico9_31);
var lyr_puntocritico9_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico9_31, 
                style: style_puntocritico9_31,
                popuplayertitle: 'punto critico 9',
                interactive: true,
                title: '<img src="styles/legend/puntocritico9_31.png" /> punto critico 9'
            });
var format_Puntocritico8_32 = new ol.format.GeoJSON();
var features_Puntocritico8_32 = format_Puntocritico8_32.readFeatures(json_Puntocritico8_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntocritico8_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntocritico8_32.addFeatures(features_Puntocritico8_32);
var lyr_Puntocritico8_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntocritico8_32, 
                style: style_Puntocritico8_32,
                popuplayertitle: 'Punto critico 8',
                interactive: true,
                title: '<img src="styles/legend/Puntocritico8_32.png" /> Punto critico 8'
            });
var format_puntocritico7_33 = new ol.format.GeoJSON();
var features_puntocritico7_33 = format_puntocritico7_33.readFeatures(json_puntocritico7_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico7_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico7_33.addFeatures(features_puntocritico7_33);
var lyr_puntocritico7_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico7_33, 
                style: style_puntocritico7_33,
                popuplayertitle: 'punto critico 7',
                interactive: true,
                title: '<img src="styles/legend/puntocritico7_33.png" /> punto critico 7'
            });
var format_puntocritico6_34 = new ol.format.GeoJSON();
var features_puntocritico6_34 = format_puntocritico6_34.readFeatures(json_puntocritico6_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico6_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico6_34.addFeatures(features_puntocritico6_34);
var lyr_puntocritico6_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico6_34, 
                style: style_puntocritico6_34,
                popuplayertitle: 'punto critico 6',
                interactive: true,
                title: '<img src="styles/legend/puntocritico6_34.png" /> punto critico 6'
            });
var format_puntocritico5_35 = new ol.format.GeoJSON();
var features_puntocritico5_35 = format_puntocritico5_35.readFeatures(json_puntocritico5_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico5_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico5_35.addFeatures(features_puntocritico5_35);
var lyr_puntocritico5_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico5_35, 
                style: style_puntocritico5_35,
                popuplayertitle: 'punto critico5',
                interactive: true,
                title: '<img src="styles/legend/puntocritico5_35.png" /> punto critico5'
            });
var format_puntocritico4_36 = new ol.format.GeoJSON();
var features_puntocritico4_36 = format_puntocritico4_36.readFeatures(json_puntocritico4_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico4_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico4_36.addFeatures(features_puntocritico4_36);
var lyr_puntocritico4_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico4_36, 
                style: style_puntocritico4_36,
                popuplayertitle: 'punto critico 4',
                interactive: true,
                title: '<img src="styles/legend/puntocritico4_36.png" /> punto critico 4'
            });
var format_puntocritico3_37 = new ol.format.GeoJSON();
var features_puntocritico3_37 = format_puntocritico3_37.readFeatures(json_puntocritico3_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntocritico3_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntocritico3_37.addFeatures(features_puntocritico3_37);
var lyr_puntocritico3_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntocritico3_37, 
                style: style_puntocritico3_37,
                popuplayertitle: 'punto critico 3',
                interactive: true,
                title: '<img src="styles/legend/puntocritico3_37.png" /> punto critico 3'
            });
var format_Puntocritico2_38 = new ol.format.GeoJSON();
var features_Puntocritico2_38 = format_Puntocritico2_38.readFeatures(json_Puntocritico2_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntocritico2_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntocritico2_38.addFeatures(features_Puntocritico2_38);
var lyr_Puntocritico2_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntocritico2_38, 
                style: style_Puntocritico2_38,
                popuplayertitle: 'Punto critico2 ',
                interactive: true,
                title: '<img src="styles/legend/Puntocritico2_38.png" /> Punto critico2 '
            });
var format_Puntocritico1_39 = new ol.format.GeoJSON();
var features_Puntocritico1_39 = format_Puntocritico1_39.readFeatures(json_Puntocritico1_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntocritico1_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntocritico1_39.addFeatures(features_Puntocritico1_39);
cluster_Puntocritico1_39 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Puntocritico1_39
});
var lyr_Puntocritico1_39 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Puntocritico1_39, 
                style: style_Puntocritico1_39,
                popuplayertitle: 'Punto critico 1.',
                interactive: true,
                title: '<img src="styles/legend/Puntocritico1_39.png" /> Punto critico 1.'
            });

lyr_ESRITopo_0.setVisible(true);lyr_veredas_con_datos_1.setVisible(true);lyr_puntocritico38_2.setVisible(true);lyr_Puntocritico37_3.setVisible(true);lyr_puntocritico36_4.setVisible(true);lyr_puntocritico35_5.setVisible(true);lyr_puntocritico34_6.setVisible(true);lyr_puntocritico33_7.setVisible(true);lyr_puntocritico32_8.setVisible(true);lyr_puntocritico311_9.setVisible(true);lyr_puntocritico30_10.setVisible(true);lyr_puntocritico29_11.setVisible(true);lyr_puntocritico28_12.setVisible(true);lyr_puntocritico27_13.setVisible(true);lyr_puntocritico26_14.setVisible(true);lyr_Puntocritico25_15.setVisible(true);lyr_puntocritico24_16.setVisible(true);lyr_puntocritico23_17.setVisible(true);lyr_puntocritico22_18.setVisible(true);lyr_puntocritico21_19.setVisible(true);lyr_puntocritico20_20.setVisible(true);lyr_puntocritico19_21.setVisible(true);lyr_puntocritico18_22.setVisible(true);lyr_puntocritico17_23.setVisible(true);lyr_puntocritico16_24.setVisible(true);lyr_puntocritico15_25.setVisible(true);lyr_puntocritico14_26.setVisible(true);lyr_puntocritico13_27.setVisible(true);lyr_puntocritico12_28.setVisible(true);lyr_puntocritico11_29.setVisible(true);lyr_puntocritico10_30.setVisible(true);lyr_puntocritico9_31.setVisible(true);lyr_Puntocritico8_32.setVisible(true);lyr_puntocritico7_33.setVisible(true);lyr_puntocritico6_34.setVisible(true);lyr_puntocritico5_35.setVisible(true);lyr_puntocritico4_36.setVisible(true);lyr_puntocritico3_37.setVisible(true);lyr_Puntocritico2_38.setVisible(true);lyr_Puntocritico1_39.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_veredas_con_datos_1,lyr_puntocritico38_2,lyr_Puntocritico37_3,lyr_puntocritico36_4,lyr_puntocritico35_5,lyr_puntocritico34_6,lyr_puntocritico33_7,lyr_puntocritico32_8,lyr_puntocritico311_9,lyr_puntocritico30_10,lyr_puntocritico29_11,lyr_puntocritico28_12,lyr_puntocritico27_13,lyr_puntocritico26_14,lyr_Puntocritico25_15,lyr_puntocritico24_16,lyr_puntocritico23_17,lyr_puntocritico22_18,lyr_puntocritico21_19,lyr_puntocritico20_20,lyr_puntocritico19_21,lyr_puntocritico18_22,lyr_puntocritico17_23,lyr_puntocritico16_24,lyr_puntocritico15_25,lyr_puntocritico14_26,lyr_puntocritico13_27,lyr_puntocritico12_28,lyr_puntocritico11_29,lyr_puntocritico10_30,lyr_puntocritico9_31,lyr_Puntocritico8_32,lyr_puntocritico7_33,lyr_puntocritico6_34,lyr_puntocritico5_35,lyr_puntocritico4_36,lyr_puntocritico3_37,lyr_Puntocritico2_38,lyr_Puntocritico1_39];
lyr_veredas_con_datos_1.set('fieldAliases', {'alt_min': 'alt_min', 'alt_max': 'alt_max', 'municip': 'municip', 'crrgmnt': 'crrgmnt', 'vereda': 'vereda', 'NOM_SUB': 'NOM_SUB', 'NOM_DPT': 'NOM_DPT', 'COD_DAN': 'COD_DAN', 'NOM_MPI': 'NOM_MPI', 'ID_UBP': 'ID_UBP', 'NOMBRE_': 'NOMBRE_', 'COD_VER': 'COD_VER', 'PRESIDE': 'PRESIDE', 'CEDULA_': 'CEDULA_', 'NUM_CON': 'NUM_CON', 'FUENTE': 'FUENTE', 'ESTADO': 'ESTADO', 'AREA_HA': 'AREA_HA', 'MPIO_FI': 'MPIO_FI', 'ALTITUD': 'ALTITUD', 'TEMPERA': 'TEMPERA', 'HUMEDAD': 'HUMEDAD', 'PRECIPI': 'PRECIPI', 'MORFOLO': 'MORFOLO', 'CLIMA': 'CLIMA', 'TIPO_SU': 'TIPO_SU', 'COBERTU': 'COBERTU', 'FUENTES': 'FUENTES', 'RIESGO_': 'RIESGO_', 'PRODUCTO_P': 'PRODUCTO_P', 'PRODUCTO_S': 'PRODUCTO_S', 'PRODUCTO_T': 'PRODUCTO_T', 'AREA_CU': 'AREA_CU', 'PRODUCC': 'PRODUCC', 'RENDIMI': 'RENDIMI', 'DESTINO': 'DESTINO', 'TIPO_TE': 'TIPO_TE', 'SISTEMA': 'SISTEMA', 'PRECIO_': 'PRECIO_', 'POBLACI': 'POBLACI', 'HOGARES': 'HOGARES', 'ASISTEN': 'ASISTEN', 'ACCESO_': 'ACCESO_', });
lyr_puntocritico38_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADO': 'P-AFECTADO', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_Puntocritico37_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'PN_AFECTAD': 'PN_AFECTAD', 'P-AFECTADA': 'P-AFECTADA', });
lyr_puntocritico36_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico35_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico34_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico33_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico32_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico311_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico30_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico29_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico28_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico27_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'PN_AFECTAD': 'PN_AFECTAD', 'P-AFECTADA': 'P-AFECTADA', });
lyr_puntocritico26_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_Puntocritico25_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFETADA': 'PN_AFETADA', });
lyr_puntocritico24_16.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico23_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico22_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico21_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico20_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN-AFECTAD': 'PN-AFECTAD', });
lyr_puntocritico19_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico18_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN AFECTAD': 'PN AFECTAD', });
lyr_puntocritico17_23.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'p-AFECTADA': 'p-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico16_24.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P_AFECTADA': 'P_AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico15_25.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'PN AFECTAD': 'PN AFECTAD', 'p_AFECTADA': 'p_AFECTADA', });
lyr_puntocritico14_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P_AFECTADA': 'P_AFECTADA', 'PN AFECTAD': 'PN AFECTAD', });
lyr_puntocritico13_27.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P_AFECTADA': 'P_AFECTADA', 'PN-AFECTAD': 'PN-AFECTAD', });
lyr_puntocritico12_28.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'vereda': 'vereda', 'p_AFECTADA': 'p_AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico11_29.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P_AFECTADA': 'P_AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico10_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P-AFECTADA': 'P-AFECTADA', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico9_31.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'P_AFECTADA': 'P_AFECTADA', 'PN-AFECTAD': 'PN-AFECTAD', });
lyr_Puntocritico8_32.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'vereda': 'vereda', 'P_AFECTADA': 'P_AFECTADA', 'PN_AFECTA': 'PN_AFECTA', });
lyr_puntocritico7_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'vereda': 'vereda', 'P_AFECATDA': 'P_AFECATDA', 'PN-AFECTAD': 'PN-AFECTAD', });
lyr_puntocritico6_34.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'verda': 'verda', 'P_afectada': 'P_afectada', 'PN_AFECTAD': 'PN_AFECTAD', });
lyr_puntocritico5_35.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'p_afectada': 'p_afectada', 'PN-afecatd': 'PN-afecatd', });
lyr_puntocritico4_36.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'PN_Afectad': 'PN_Afectad', 'P_AECTADA': 'P_AECTADA', 'Descripcio': 'Descripcio', });
lyr_puntocritico3_37.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Vereda': 'Vereda', 'PN_AFECTAD': 'PN_AFECTAD', 'pb_afectad': 'pb_afectad', });
lyr_Puntocritico2_38.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'vereda': 'vereda', 'P_Afectada': 'P_Afectada', 'PN_afectad': 'PN_afectad', });
lyr_Puntocritico1_39.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'extrude': 'extrude', 'drawOrder': 'drawOrder', 'icon': 'icon', 'CORREGIMIE': 'CORREGIMIE', 'Vereda': 'Vereda', 'P_AFECTADA': 'P_AFECTADA', 'NP_AFECT': 'NP_AFECT', });
lyr_veredas_con_datos_1.set('fieldImages', {'alt_min': 'TextEdit', 'alt_max': 'TextEdit', 'municip': 'TextEdit', 'crrgmnt': 'TextEdit', 'vereda': 'TextEdit', 'NOM_SUB': 'TextEdit', 'NOM_DPT': 'TextEdit', 'COD_DAN': 'TextEdit', 'NOM_MPI': 'TextEdit', 'ID_UBP': 'TextEdit', 'NOMBRE_': 'TextEdit', 'COD_VER': 'TextEdit', 'PRESIDE': 'TextEdit', 'CEDULA_': 'TextEdit', 'NUM_CON': 'TextEdit', 'FUENTE': 'TextEdit', 'ESTADO': 'TextEdit', 'AREA_HA': 'TextEdit', 'MPIO_FI': 'TextEdit', 'ALTITUD': 'TextEdit', 'TEMPERA': 'TextEdit', 'HUMEDAD': 'TextEdit', 'PRECIPI': 'CheckBox', 'MORFOLO': 'CheckBox', 'CLIMA': 'TextEdit', 'TIPO_SU': 'TextEdit', 'COBERTU': 'TextEdit', 'FUENTES': 'TextEdit', 'RIESGO_': 'TextEdit', 'PRODUCTO_P': 'TextEdit', 'PRODUCTO_S': 'TextEdit', 'PRODUCTO_T': 'TextEdit', 'AREA_CU': 'TextEdit', 'PRODUCC': 'TextEdit', 'RENDIMI': 'TextEdit', 'DESTINO': 'TextEdit', 'TIPO_TE': 'TextEdit', 'SISTEMA': 'TextEdit', 'PRECIO_': 'TextEdit', 'POBLACI': 'TextEdit', 'HOGARES': 'TextEdit', 'ASISTEN': 'TextEdit', 'ACCESO_': 'TextEdit', });
lyr_puntocritico38_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADO': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_Puntocritico37_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'PN_AFECTAD': 'TextEdit', 'P-AFECTADA': 'TextEdit', });
lyr_puntocritico36_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico35_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico34_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico33_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico32_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico311_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico30_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico29_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico28_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico27_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'PN_AFECTAD': 'Range', 'P-AFECTADA': 'TextEdit', });
lyr_puntocritico26_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_Puntocritico25_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFETADA': 'TextEdit', });
lyr_puntocritico24_16.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico23_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico22_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'Range', });
lyr_puntocritico21_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico20_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN-AFECTAD': 'TextEdit', });
lyr_puntocritico19_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico18_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN AFECTAD': 'TextEdit', });
lyr_puntocritico17_23.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'p-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico16_24.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico15_25.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'PN AFECTAD': 'TextEdit', 'p_AFECTADA': 'TextEdit', });
lyr_puntocritico14_26.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'PN AFECTAD': 'TextEdit', });
lyr_puntocritico13_27.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'PN-AFECTAD': 'TextEdit', });
lyr_puntocritico12_28.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'vereda': 'TextEdit', 'p_AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico11_29.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico10_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P-AFECTADA': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico9_31.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'PN-AFECTAD': 'TextEdit', });
lyr_Puntocritico8_32.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'PN_AFECTA': 'TextEdit', });
lyr_puntocritico7_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'vereda': 'TextEdit', 'P_AFECATDA': 'TextEdit', 'PN-AFECTAD': 'TextEdit', });
lyr_puntocritico6_34.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'verda': 'TextEdit', 'P_afectada': 'TextEdit', 'PN_AFECTAD': 'TextEdit', });
lyr_puntocritico5_35.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'p_afectada': 'TextEdit', 'PN-afecatd': 'TextEdit', });
lyr_puntocritico4_36.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'PN_Afectad': 'TextEdit', 'P_AECTADA': 'TextEdit', 'Descripcio': 'TextEdit', });
lyr_puntocritico3_37.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Vereda': 'TextEdit', 'PN_AFECTAD': 'TextEdit', 'pb_afectad': 'TextEdit', });
lyr_Puntocritico2_38.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'vereda': 'TextEdit', 'P_Afectada': 'TextEdit', 'PN_afectad': 'TextEdit', });
lyr_Puntocritico1_39.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'altitudeMo': 'TextEdit', 'extrude': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'CORREGIMIE': 'TextEdit', 'Vereda': 'TextEdit', 'P_AFECTADA': 'TextEdit', 'NP_AFECT': 'TextEdit', });
lyr_veredas_con_datos_1.set('fieldLabels', {'alt_min': 'inline label - always visible', 'alt_max': 'inline label - always visible', 'municip': 'inline label - always visible', 'crrgmnt': 'inline label - always visible', 'vereda': 'inline label - always visible', 'NOM_SUB': 'inline label - always visible', 'NOM_DPT': 'inline label - always visible', 'COD_DAN': 'inline label - always visible', 'NOM_MPI': 'inline label - always visible', 'ID_UBP': 'inline label - always visible', 'NOMBRE_': 'inline label - always visible', 'COD_VER': 'inline label - always visible', 'PRESIDE': 'inline label - always visible', 'CEDULA_': 'no label', 'NUM_CON': 'inline label - always visible', 'FUENTE': 'no label', 'ESTADO': 'inline label - always visible', 'AREA_HA': 'inline label - always visible', 'MPIO_FI': 'inline label - always visible', 'ALTITUD': 'inline label - always visible', 'TEMPERA': 'inline label - always visible', 'HUMEDAD': 'inline label - always visible', 'PRECIPI': 'no label', 'MORFOLO': 'no label', 'CLIMA': 'inline label - always visible', 'TIPO_SU': 'no label', 'COBERTU': 'no label', 'FUENTES': 'no label', 'RIESGO_': 'no label', 'PRODUCTO_P': 'inline label - always visible', 'PRODUCTO_S': 'inline label - always visible', 'PRODUCTO_T': 'inline label - always visible', 'AREA_CU': 'inline label - always visible', 'PRODUCC': 'inline label - always visible', 'RENDIMI': 'no label', 'DESTINO': 'no label', 'TIPO_TE': 'no label', 'SISTEMA': 'no label', 'PRECIO_': 'no label', 'POBLACI': 'no label', 'HOGARES': 'no label', 'ASISTEN': 'no label', 'ACCESO_': 'no label', });
lyr_puntocritico38_2.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADO': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_Puntocritico37_3.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', });
lyr_puntocritico36_4.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico35_5.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico34_6.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico33_7.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico32_8.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico311_9.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico30_10.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico29_11.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico28_12.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico27_13.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', });
lyr_puntocritico26_14.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_Puntocritico25_15.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFETADA': 'inline label - always visible', });
lyr_puntocritico24_16.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'inline label - always visible', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico23_17.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico22_18.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico21_19.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico20_20.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN-AFECTAD': 'inline label - always visible', });
lyr_puntocritico19_21.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico18_22.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P-AFECTADA': 'inline label - always visible', 'PN AFECTAD': 'inline label - always visible', });
lyr_puntocritico17_23.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'p-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico16_24.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico15_25.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'PN AFECTAD': 'inline label - always visible', 'p_AFECTADA': 'inline label - always visible', });
lyr_puntocritico14_26.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'PN AFECTAD': 'inline label - always visible', });
lyr_puntocritico13_27.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'PN-AFECTAD': 'inline label - always visible', });
lyr_puntocritico12_28.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'vereda': 'inline label - always visible', 'p_AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico11_29.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico10_30.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'no label', 'P-AFECTADA': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico9_31.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'PN-AFECTAD': 'inline label - always visible', });
lyr_Puntocritico8_32.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'PN_AFECTA': 'inline label - always visible', });
lyr_puntocritico7_33.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'vereda': 'inline label - always visible', 'P_AFECATDA': 'inline label - always visible', 'PN-AFECTAD': 'inline label - always visible', });
lyr_puntocritico6_34.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'verda': 'inline label - always visible', 'P_afectada': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', });
lyr_puntocritico5_35.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'p_afectada': 'inline label - always visible', 'PN-afecatd': 'inline label - always visible', });
lyr_puntocritico4_36.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'PN_Afectad': 'inline label - always visible', 'P_AECTADA': 'inline label - always visible', 'Descripcio': 'inline label - always visible', });
lyr_puntocritico3_37.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Vereda': 'inline label - always visible', 'PN_AFECTAD': 'inline label - always visible', 'pb_afectad': 'inline label - always visible', });
lyr_Puntocritico2_38.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'vereda': 'inline label - always visible', 'P_Afectada': 'inline label - always visible', 'PN_afectad': 'inline label - always visible', });
lyr_Puntocritico1_39.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'descriptio': 'inline label - always visible', 'altitudeMo': 'no label', 'extrude': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'CORREGIMIE': 'inline label - always visible', 'Vereda': 'inline label - always visible', 'P_AFECTADA': 'inline label - always visible', 'NP_AFECT': 'inline label - always visible', });
lyr_Puntocritico1_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});