var map = L.map('map').setView([50.036693, -122.970884], 13);

L.esri.basemapLayer('Imagery').addTo(map);

var trailFeatures = omnivore.gpx('assets/data/hike.gpx').addTo(map);

// var photoFeatures = omnivore.csv('assets/data/photoLatLong.csv');

/* photoFeatures.on('ready', function() {
  photoFeatures.eachLayer(function(layer) {
    // console.log(layer.feature.properties.SourceFile);
    layer.bindPopup('<img class="mthoodimage" src="assets/photos/' + layer.feature.properties.SourceFile + '">');

  });
}).addTo(map);
*/
//gpx.on('click', function() { alert('Clicked on a group!'); })

//photoFeatures.on('click', function(e) {console.log('Clicked on a group!', e.target); })
