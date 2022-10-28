var map = L.map('map', {
  center:  [56.870961, 53.180364],
  zoom: 18  
});
// https://a.tiles.mapbox.com/v4/mapbox.streets/2/1/1.png?access_token=pk.eyJ1IjoibGllZG1hbiIsImEiOiJjaXZ0NzEzMm0wMDNrMnlxZGtwZDhlb3V0In0.M3hMRRUB0CoqFEneKWVHKA

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);



var baseMaps = {
  OSM: osmLayer
};


var myIcon = L.icon({
  iconUrl: 'https://w7.pngwing.com/pngs/689/459/png-transparent-bus-computer-icons-transport-bus-school-bus-public-transport-transport.png',
  iconSize: [16, 16],
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

var marker_a = L.marker([56.87342458, 53.18041331], {draggable: false, icon: myIcon}).bindPopup('9-я Подлесная').addTo(map);
var marker_a = L.marker([56.87067464, 53.18068685], {draggable: false, icon: myIcon}).bindPopup('ИжГТУ').addTo(map);
//var line = L.polyline([marker_a.getLatLng(), marker_b.getLatLng()], {color: 'black', weight: 10}).addTo(map);
 
var latlngs = [
  [56.87342458, 53.18041331],
  [56.87067464, 53.18068685]
];
var polyline = L.polyline(latlngs, {color: 'red'});

polyline.addTo(map);
