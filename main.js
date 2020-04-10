/*var style = new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new Stroke({
      color: '#319FD3',
      width: 1
    }),
    text: new Text({
      font: '12px Calibri,sans-serif',
      fill: new Fill({
        color: '#000'
      }),
      stroke: new Stroke({
        color: '#fff',
        width: 3
      })
    })
  });


var gjsonFile = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'data/geojson/Ro.geojson',
        format: new ol.format.GeoJSON()
    }),
    visible:true,
    title: 'ROCounties',
    style: new ol.style.Style({
        fill: fillStyle,
        stroke: strokeStyle,
        //image: circleStyl
    })
});*/

/*
var vectorLayer = new VectorLayer({
    source: new VectorSource({
      url: 'data/geojson/countries.geojson',
      format: new GeoJSON()
    }),
    style: function(feature) {
      style.getText().setText(feature.get('Name'));
      return style;
    }
  });

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
    ],
    view: new ol.View({
        center: ol.proj.transform([25,46], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6.3//,
        //minZoom: 6.3
    })
});

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style, Text} from 'ol/style';*/


var style = new ol.style.Style({
  fill: new ol.Fill({
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new ol.Stroke({
    color: '#319FD3',
    width: 1
  }),
  text: new ol.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.Fill({
      color: '#000'
    }),
    stroke: new ol.Stroke({
      color: '#fff',
      width: 3
    })
  })
});

var vectorLayer = new ol.VectorLayer({
  source: new ol.VectorSource({
    url: 'data/geojson/Ro.geojson',
    format: new GeoJSON()
  }),
  style: function(feature) {
    style.getText().setText(feature.get('Name'));
    return style;
  }
});

var map = new ol.Map({
  layers: [vectorLayer],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 1
  })
});

var highlightStyle = new ol.Style({
  stroke: new ol.Stroke({
    color: '#f00',
    width: 1
  }),
  fill: new ol.Fill({
    color: 'rgba(255,0,0,0.1)'
  }),
  text: new ol.Text({
    font: '12px Calibri,sans-serif',
    fill: new ol.Fill({
      color: '#000'
    }),
    stroke: new ol.Stroke({
      color: '#f00',
      width: 3
    })
  })
});

var featureOverlay = new ol.VectorLayer({
  source: new ol.VectorSource(),
  map: map,
  style: function(feature) {
    highlightStyle.getText().setText(feature.get('Name'));
    return highlightStyle;
  }
});

var highlight;