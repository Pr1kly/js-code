var temp = groupPolyline[0][0][0]
var marshrut = groupPolyline[0]
//console.log(marshrut)

var m = L.marker([temp[0],temp[1]], {
  icon: new L.icon({
    iconUrl: "ico.png",
    iconSize: [40,40],
    iconAnchor: [20,20]
  })  
}).addTo(map)
var layersgrope0 = L.layerGroup([poliline19_0]).addTo(map)
  var marsh = []
  let p = 0
  for(i = 0; i < marshrut.length; i++){
    for(k = 0; k < marshrut[i].length; k++){
      for(j = 0; j < marshrut[i][k].length; j++){
        marsh[p] = marshrut[i][k]
        p++;
      }
    }
  }
  var drivePath= marsh.slice(1)
  console.log(drivePath)
  function simulate() {
    //fetchTodos();
    var duration= 3000;
   // m.setRotationAngle(alfa(point, point1))
    if(!drivePath.length) {
      drivePath= marsh.slice(1);
      duration= 0;
    }
    point = drivePath.shift()
    point1 = drivePath[1]
    console.log(drivePath)
    m.slideTo([point[0], point[1]], {
        duration: duration,
        rotationAngle: alfa(point, point1)
    })
    
    setTimeout(simulate, 2500);
  }
  simulate();