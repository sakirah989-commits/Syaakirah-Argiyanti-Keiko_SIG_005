var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl= en&x={x}&y={y}&z={z}'
            })
        });
var format_Administrasi_Kota_Semarang_1 = new ol.format.GeoJSON();
var features_Administrasi_Kota_Semarang_1 = format_Administrasi_Kota_Semarang_1.readFeatures(json_Administrasi_Kota_Semarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Kota_Semarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Kota_Semarang_1.addFeatures(features_Administrasi_Kota_Semarang_1);
var lyr_Administrasi_Kota_Semarang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Kota_Semarang_1, 
                style: style_Administrasi_Kota_Semarang_1,
                popuplayertitle: 'Administrasi_Kota_Semarang',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Kota_Semarang_1.png" /> Administrasi_Kota_Semarang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Administrasi_Kota_Semarang_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Administrasi_Kota_Semarang_1];
lyr_Administrasi_Kota_Semarang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Administrasi_Kota_Semarang_1.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Administrasi_Kota_Semarang_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Administrasi_Kota_Semarang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});