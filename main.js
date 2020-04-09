/*var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({wrapX: false}),
        })
    ],
    view: new ol.View({
        center: ol.proj.transform([25,46], 'EPSG:4326', 'EPSG:3857'),
        //center: ol.proj.fromLonLat([25, 46]),
        zoom: 6.3,
        minZoom: 6.3
    })
});*/
/*var RO = new ol.layer.Vector({
    title: 'added Layer',
    source: new ol.source.GeoJSON({
       projection : 'EPSG:3857',
       url: 'Ro.geojson'
    })
});

map.addLayer(RO);*/



/*
//Vector Layers
var RO = new ol.layer.Vector({
    source: new ol.source.Vector({
        url:'Ro.json',
        format: new ol.format.JSON()
    }),
    visible: true,
    title: 'RomaniaCountiesGeoJSON'
});

map.addLayer([RO]);*/



/*var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({wrapX: false}),
        }),
        RO
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([25, 46]),
        zoom: 6.3,
        minZoom: 6.3
    })
});*/

/*var vS=new ol.source.GeoJSON(
	({
		url: 'Ro.geojson',
         projection: 'EPSG:3857'
	})
);
var vL= new ol.layer.Vector({source: vS});*/

/*
var RO = new ol.layer.Vector({
    title: 'added Layer',
    source: new ol.source.GeoJSON({
       projection : 'EPSG:3857',
       url: 'data/geojson/Ro.geojson'
    })
});*/


var gjsonFile = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'data/geojson/Ro.geojson',
        format: new ol.format.GeoJSON()
    }) 
});

var map = new ol.Map({
    target: 'map',  // The DOM element that will contains the map
    //renderer: 'canvas', // Force the renderer to be used
    layers: [
        // Add a new Tile layer getting tiles from OpenStreetMap source
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        gjsonFile
    ],
    view: new ol.View({
        center: ol.proj.transform([25,46], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6.3//,
        //minZoom: 6.3
    })
});

//map.addLayer(gjsonFile);