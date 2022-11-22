function setGroup(arrSubroute, arrStage, obj ){
  var group = [];
  for(i = 0; i < obj.arrayOfStop.length-1; i++){
      var start = obj.arrayOfStop[i]
      var end = obj.arrayOfStop[i+1]
      for(j = 0; j< stage.length;j++){
        var g = stage[j]
        if(g.idStart == start){
          if(g.idEnd == end){
             
            group.push(g.coordTop)
          }
        }
      }
    }

  return group
}

function alfa(point, point1, angle1){
 var angle = Math.atan2(point1[1]-point[1], point1[0]-point[0])
 return angle * (180/Math.PI);
}
function Marsh_19_0(){
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
    //var angle1 = alfa(point, point1)
    //console.log(alfa(point, point1))
   // console.log(drivePath)
    setTimeout(simulate, 2500);
    
  }
  //var point = drivePath.shift();
  simulate();
}
function Marsh_19_1(){
var temp = groupPolyline[1][0][0]
var marshrut = groupPolyline[1]
//console.log(marshrut)
var m = L.marker([temp[0],temp[1]], {
  icon: new L.icon({
    iconUrl: "ico.png",
    iconSize: [40,40],
    iconAnchor: [20,20]
  })  
}).addTo(map)
var layersgrope1 = L.layerGroup([poliline19_1]).addTo(map)
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
    //var angle1 = alfa(point, point1)
    //console.log(alfa(point, point1))
   // console.log(drivePath)
    setTimeout(simulate, 2500);
    
  }
  //var point = drivePath.shift();
  simulate();
}
function Marsh_74_0(){
  var temp = groupPolyline[2][0][0]
  var marshrut = groupPolyline[2]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope2 = L.layerGroup([poliline74_0]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_74_1(){
  var temp = groupPolyline[3][0][0]
  var marshrut = groupPolyline[3]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope3 = L.layerGroup([poliline74_1]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_78_0(){
  var temp = groupPolyline[4][0][0]
  var marshrut = groupPolyline[4]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope4 = L.layerGroup([poliline78_0]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_78_1(){
  var temp = groupPolyline[5][0][0]
  var marshrut = groupPolyline[5]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope5 = L.layerGroup([poliline78_1]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_84_0(){
  var temp = groupPolyline[6][0][0]
  var marshrut = groupPolyline[6]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico2.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope6 = L.layerGroup([poliline84_0]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_84_1(){
  var temp = groupPolyline[7][0][0]
  var marshrut = groupPolyline[7]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico2.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope7 = L.layerGroup([poliline84_1]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_87_0(){
  var temp = groupPolyline[8][0][0]
  var marshrut = groupPolyline[8]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico2.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope8 = L.layerGroup([poliline87_0]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
function Marsh_87_1(){
  var temp = groupPolyline[9][0][0]
  var marshrut = groupPolyline[9]
  //console.log(marshrut)
  var m = L.marker([temp[0],temp[1]], {
    icon: new L.icon({
      iconUrl: "ico2.png",
      iconSize: [40,40],
      iconAnchor: [20,20]
    })  
  }).addTo(map)
  var layersgrope9 = L.layerGroup([poliline87_1]).addTo(map)
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
      //var angle1 = alfa(point, point1)
      //console.log(alfa(point, point1))
     // console.log(drivePath)
      setTimeout(simulate, 2500);
      
    }
    //var point = drivePath.shift();
    simulate();
}
let sTop = [
  {
     idStop: "5",
     fullNameStop: "микрорайон Столичный",
     shortNameStop: "мкрн Столичный",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.89012953",
     longitude: "53.2540828",
     typeOfStop: "0"
  },
  {
     idStop: "7",
     fullNameStop: "Баня",
     shortNameStop: "Баня",
     direction: "в сторону улицы Дзержинского",
     type: "2",
     latitude: "56.88973869",
     longitude: "53.25738941",
     typeOfStop: "0"
  },
  {
    idStop: "8",
     fullNameStop: "улица 9 Января",
     shortNameStop: "ул. 9 Января",
     direction: "в сторону улицы Ворошилова",
     type: "2",
     latitude: "56.88421278",
     longitude: "53.2583153",
     typeOfStop: "0"
  },
  {
    idStop: "10",
     fullNameStop: "Баня",
     shortNameStop: "Баня",
     direction: "в сторону Воткинского шоссе",
     type: "2",
     latitude: "56.88946728",
     longitude: "53.25792912",
     typeOfStop: "0"
  },
  {
    idStop: "11",
     fullNameStop: "микрорайон Столичный",
     shortNameStop: "мкрн Столичный",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.89000058",
     longitude: "53.25461388",
     typeOfStop: "0"
  },
  {
    idStop: "12",
     fullNameStop: "Русский дом",
     shortNameStop: "Русский дом",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.88855298",
     longitude: "53.24640634",
     typeOfStop: "0"
  },
  {
    idStop: "41",
     fullNameStop: "улица Аристов Ключ",
     shortNameStop: "ул. Аристов Ключ",
     direction: "в сторону улицы Баранова",
     type: "2",
     latitude: "56.8358119",
     longitude: "53.1159989",
     typeOfStop: "0"
  },
  {
    idStop: "42",
     fullNameStop: "Автокооператив Искра",
     shortNameStop: "Автокооператив Искра",
     direction: "в сторону улицы Олега Кошевого",
     type: "2",
     latitude: "56.8337624",
     longitude: "53.12114184",
     typeOfStop: "0"
  },
  {
    idStop: "43",
     fullNameStop: "Ветеринарная лечебница",
     shortNameStop: "Ветлечебница",
     direction: "в сторону улицы Шевченко",
     type: "2",
     latitude: "56.8338341",
     longitude: "53.12634174",
     typeOfStop: "0"
  },
  {
    idStop: "44",
     fullNameStop: "поселок Машиностроителей",
     shortNameStop: "пос. Машиностроителей",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.83257678",
     longitude: "53.11109966",
     typeOfStop: "0"
  },
  {
    idStop: "59",
     fullNameStop: "улица Школьная",
     shortNameStop: "ул. Школьная",
     direction: "в сторону сквера Металлургов",
     type: "2",
     latitude: "56.88136654",
     longitude: "53.19212043",
     typeOfStop: "0"
  },
  {
    idStop: "60",
     fullNameStop: "Городок Металлургов",
     shortNameStop: "гор. Металлургов",
     direction: "в сторону сквера Металлургов",
     type: "2",
     latitude: "56.88113709",
     longitude: "53.18606201",
     typeOfStop: "0"
  },
  {
    idStop: "61",
     fullNameStop: "Сквер металлургов",
     shortNameStop: "Сквер металлургов",
     direction: "конечная остановка",
     type: "3",
     latitude: "56.87573169",
     longitude: "53.18454044",
     typeOfStop: "0"
  },
  {
    idStop: "62",
     fullNameStop: "Сквер металлургов",
     shortNameStop: "Сквер металлургов",
     direction: "в сторону улицы Тарасова",
     type: "2",
     latitude: "56.87624501",
     longitude: "53.18318461",
     typeOfStop: "0"
  },
  {
    idStop: "63",
     fullNameStop: "Сквер металлургов",
     shortNameStop: "Сквер металлургов",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "2",
     latitude: "56.87677006",
     longitude: "53.18371974",
     typeOfStop: "0"
  },
  {
    idStop: "64",
     fullNameStop: "улица Фруктовая",
     shortNameStop: "ул. Фруктовая",
     direction: "в сторону сквера Металлургов",
     type: "2",
     latitude: "56.87842168",
     longitude: "53.19373946",
     typeOfStop: "0"
  },
  {
    idStop: "65",
     fullNameStop: "улица 6-я Подлесная",
     shortNameStop: "ул. 6-я Подлесная",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.86931751",
     longitude: "53.18513593",
     typeOfStop: "0"
  },
  {
    idStop: "114",
     fullNameStop: "Ветеринарная лечебница",
     shortNameStop: "Ветлечебница",
     direction: "в сторону улицы Олега Кошевого",
     type: "2",
     latitude: "56.83368023",
     longitude: "53.12608778",
     typeOfStop: "0"
  },
  {
    idStop: "119",
     fullNameStop: "улица Новая",
     shortNameStop: "ул. Новая",
     direction: "в сторону поселка Машиностроителей",
     type: "2",
     latitude: "56.83712435",
     longitude: "53.11372786",
     typeOfStop: "0"
  },
  {
    idStop: "120",
     fullNameStop: "улица Селтинская",
     shortNameStop: "ул. Селтинская",
     direction: "в сторону Новошестнадцатой улицы",
     type: "2",
     latitude: "56.83004982",
     longitude: "53.13912333",
     typeOfStop: "0"
  },
  {
    idStop: "121",
     fullNameStop: "магазин Родина",
     shortNameStop: "м-н Родина",
     direction: "в сторону улицы Кузебая Герда",
     type: "2",
     latitude: "56.83041082",
     longitude: "53.14308768",
     typeOfStop: "0"
  },
  {
    idStop: "122",
     fullNameStop: "улица Селтинская",
     shortNameStop: "ул. Селтинская",
     direction: "в сторону улицы Кузебая Герда",
     type: "2",
     latitude: "56.83012025",
     longitude: "53.13735311",
     typeOfStop: "0"
  },
  {
    idStop: "124",
     fullNameStop: "завод Керамблоков",
     shortNameStop: "з-д Керамблоков",
     direction: "в сторону Новошестнадцатой улицы",
     type: "2",
     latitude: "56.82955676",
     longitude: "53.12939763",
     typeOfStop: "0"
  },
  {
    idStop: "125",
     fullNameStop: "завод Керамблоков",
     shortNameStop: "з-д Керамблоков",
     direction: "в сторону улицы Баранова",
     type: "2",
     latitude: "56.83052529",
     longitude: "53.12780976",
     typeOfStop: "0"
  },
  {
    idStop: "331",
     fullNameStop: "Электросети",
     shortNameStop: "Электросети",
     direction: "в сторону Механизаторской улицы",
     type: "2",
     latitude: "56.79048995",
     longitude: "53.18351735",
     typeOfStop: "0"
  },
  {
    idStop: "333",
     fullNameStop: "улица Механизаторская",
     shortNameStop: "ул. Механизаторская",
     direction: "в сторону Транссельхозтехники",
     type: "2",
     latitude: "56.78899198",
     longitude: "53.18310474",
     typeOfStop: "0"
  },
  {
    idStop: "334",
     fullNameStop: "Железнодорожная больница",
     shortNameStop: "Ж/д больница",
     direction: "в сторону Локомотивной улицы",
     type: "2",
     latitude: "56.7889387",
     longitude: "53.17790486",
     typeOfStop: "0"
  },
  {
    idStop: "361",
     fullNameStop: "микрорайон Нагорный",
     shortNameStop: "мкрн Нагорный",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.78986075",
     longitude: "53.17457577",
     typeOfStop: "0"
  },
  {
    idStop: "362",
     fullNameStop: "улица Динамовская",
     shortNameStop: "ул. Динамовская",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.79180366",
     longitude: "53.17512292",
     typeOfStop: "0"
  },
  {
    idStop: "366",
     fullNameStop: "улица Московская",
     shortNameStop: "ул. Московская",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.79582294",
     longitude: "53.18503082",
     typeOfStop: "0"
  },
  {
    idStop: "367",
     fullNameStop: "Железнодорожный вокзал",
     shortNameStop: "Ж/д вокзал",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.80141833",
     longitude: "53.18673449",
     typeOfStop: "0"
  },
  {
    idStop: "370",
     fullNameStop: "улица Московская",
     shortNameStop: "ул. Московская",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.79464774",
     longitude: "53.17599554",
     typeOfStop: "0"
  },
  {
    idStop: "393",
     fullNameStop: "улица Молодежная",
     shortNameStop: "ул. Молодежная",
     direction: "в сторону улицы Петрова",
     type: "2",
     latitude: "56.8528493",
     longitude: "53.29225069",
     typeOfStop: "0"
  },
  {
    idStop: "394",
     fullNameStop: "Проспект Калашникова",
     shortNameStop: "пр-т Калашникова",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.85655377",
     longitude: "53.29186441",
     typeOfStop: "0"
  },
  {
    idStop: "395",
     fullNameStop: "улица Молодежная",
     shortNameStop: "ул. Молодежная",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.85149413",
     longitude: "53.29149431",
     typeOfStop: "0"
  },
  {
    idStop: "396",
     fullNameStop: "Проспект Калашникова",
     shortNameStop: "пр-т Калашникова",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.85624583",
     longitude: "53.29149431",
     typeOfStop: "0"
  },
  {
    idStop: "405",
     fullNameStop: "Госархив",
     shortNameStop: "Госархив",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.84199191",
     longitude: "53.28260539",
     typeOfStop: "0"
  },
  {
    idStop: "406",
     fullNameStop: "улица Первомайская",
     shortNameStop: "ул. Первомайская",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.8447733",
     longitude: "53.28726711",
     typeOfStop: "0"
  },
  {
    idStop: "407",
     fullNameStop: "Спортивная",
     shortNameStop: "Спортивная",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.84789187",
     longitude: "53.28965429",
     typeOfStop: "0"
  },
  {
    idStop: "408",
     fullNameStop: "Радиотехника",
     shortNameStop: "Радиотехника",
     direction: "в сторону улицы Молодежной",
     type: "2",
     latitude: "56.84603188",
     longitude: "53.29241697",
     typeOfStop: "0"
  },
  {
    idStop: "409",
     fullNameStop: "улица Маслюкова",
     shortNameStop: "ул. Маслюкова",
     direction: "в сторону улицы 40 лет Победы",
     type: "2",
     latitude: "56.84842807",
     longitude: "53.28332512",
     typeOfStop: "0"
  },
  {
    idStop: "410",
     fullNameStop: "Госархив",
     shortNameStop: "Госархив",
     direction: "в сторону улицы 40 лет Победы",
     type: "2",
     latitude: "56.84213862",
     longitude: "53.28344765",
     typeOfStop: "0"
  },
  {
    idStop: "411",
     fullNameStop: "Рембыттехника",
     shortNameStop: "Рембыттехника",
     direction: "в сторону улицы Молодежной",
     type: "2",
     latitude: "56.84450338",
     longitude: "53.2974434",
     typeOfStop: "0"
  },
  {
    idStop: "412",
     fullNameStop: "Рембыттехника",
     shortNameStop: "Рембыттехника",
     direction: "в сторону Аэропорта",
     type: "2",
     latitude: "56.84425109",
     longitude: "53.29741124",
     typeOfStop: "0"
  },
  {
    idStop: "413",
     fullNameStop: "Радиотехника",
     shortNameStop: "Радиотехника",
     direction: "в сторону улицы Молодежной",
     type: "2",
     latitude: "56.84583242",
     longitude: "53.29226138",
     typeOfStop: "0"
  },
  {
    idStop: "414",
     fullNameStop: "Спортивная",
     shortNameStop: "Спортивная",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.8483084",
     longitude: "53.28950948",
     typeOfStop: "0"
  },
  {
    idStop: "415",
     fullNameStop: "улица Маслюкова",
     shortNameStop: "ул. Маслюкова",
     direction: "в сторону улицы Молодежной",
     type: "2",
     latitude: "56.8478619",
     longitude: "53.28478829",
     typeOfStop: "0"
  },
  {
    idStop: "416",
     fullNameStop: "улица Первомайская",
     shortNameStop: "ул. Первомайская",
     direction: "в сторону улицы Первомайской",
     type: "2",
     latitude: "56.84438605",
     longitude: "53.28657513",
     typeOfStop: "0"
  },
  {
    idStop: "459",
     fullNameStop: "улица Татьяны Барамзиной",
     shortNameStop: "ул. Татьяны Барамзиной",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.86245561",
     longitude: "53.2774522",
     typeOfStop: "0"
  },
  {
    idStop: "460",
     fullNameStop: "улица Татьяны Барамзиной",
     shortNameStop: "ул. Татьяны Барамзиной",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.86226311",
     longitude: "53.27742534",
     typeOfStop: "0"
  },
  {
    idStop: "461",
     fullNameStop: "Торгово-развлекательный центр Италмас",
     shortNameStop: "ТРЦ Италмас",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.86809241",
     longitude: "53.27525277",
     typeOfStop: "0"
  },
  {
    idStop: "1091",
     fullNameStop: "завод Пластмасс",
     shortNameStop: "з-д Пластмасс",
     direction: "начальная остановка",
     type: "2",
     latitude: "56.88405181",
     longitude: "53.31558055",
     typeOfStop: "0"
  },
  {
    idStop: "1104",
     fullNameStop: "улица Сабурова",
     shortNameStop: "ул. Сабурова",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.87423808",
     longitude: "53.301751",
     typeOfStop: "0"
  },
  {
    idStop: "1125",
     fullNameStop: "улица Планерная",
     shortNameStop: "ул. Планерная",
     direction: "в сторону улицы Магистральной",
     type: "2",
     latitude: "56.80572103",
     longitude: "53.18848333",
     typeOfStop: "0"
  },
  {
    idStop: "1126",
     fullNameStop: "улица Гагарина",
     shortNameStop: "ул. Гагарина",
     direction: "в сторону улицы Магистральной",
     type: "2",
     latitude: "56.81058815",
     longitude: "53.19003364",
     typeOfStop: "0"
  },
  {
    idStop: "1127",
     fullNameStop: "улица Гагарина",
     shortNameStop: "ул. Гагарина",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.81095007",
     longitude: "53.18980834",
     typeOfStop: "0"
  },
  {
    idStop: "1128",
     fullNameStop: "улица Планерная",
     shortNameStop: "ул. Планерная",
     direction: "в сторону Московской улицы",
     type: "2",
     latitude: "56.80660976",
     longitude: "53.18839745",
     typeOfStop: "0"
  },
  {
    idStop: "1134",
     fullNameStop: "Железнодорожный вокзал",
     shortNameStop: "Ж/д вокзал",
     direction: "в сторону улицы Магистральной",
     type: "2",
     latitude: "56.80119689",
     longitude: "53.18693158",
     typeOfStop: "0"
  },
  {
    idStop: "1136",
     fullNameStop: "улица Леваневского",
     shortNameStop: "ул. Леваневского",
     direction: "в сторону улицы Гагарина",
     type: "2",
     latitude: "56.79468374",
     longitude: "53.18193874",
     typeOfStop: "0"
  },
  {
    idStop: "1142",
     fullNameStop: "Автопарк №1",
     shortNameStop: "Автопарк №1",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.81589144",
     longitude: "53.18823629",
     typeOfStop: "0"
  },
  {
    idStop: "1143",
     fullNameStop: "Администрация Ленинского района",
     shortNameStop: "Адм. Ленинского р-на",
     direction: "в сторону улицы Новоажимова",
     type: "2",
     latitude: "56.81886911",
     longitude: "53.17958312",
     typeOfStop: "0"
  },
  {
    idStop: "1144",
     fullNameStop: "Администрация Ленинского района",
     shortNameStop: "Адм. Ленинского р-на",
     direction: "в сторону деревни Пирогово",
     type: "2",
     latitude: "56.81955833",
     longitude: "53.17995833",
     typeOfStop: "0"
  },
  {
    idStop: "1146",
     fullNameStop: "Автопарк №1",
     shortNameStop: "Автопарк №1",
     direction: "в сторону улицы Гагарина",
     type: "2",
     latitude: "56.81558901",
     longitude: "53.18899267",
     typeOfStop: "0"
  },
  {
    idStop: "1174",
     fullNameStop: "улица 6-я Подлесная",
     shortNameStop: "ул. 6-я Подлесная",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "3",
     latitude: "56.87018564",
     longitude: "53.18513054",
     typeOfStop: "0"
  },
  {
    idStop: "1175",
     fullNameStop: "Сквер им. В.С. Тарасова",
     shortNameStop: "Сквер им. Тарасова",
     direction: "в сторону улицы Тарасова",
     type: "2",
     latitude: "56.87651745",
     longitude: "53.19091336",
     typeOfStop: "0"
  },
  {
    idStop: "1176",
     fullNameStop: "Ижевский Государственный Технический Университет им. М.Т. Калашникова",
     shortNameStop: "ИжГТУ им. Калашникова",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.87037265",
     longitude: "53.18038106",
     typeOfStop: "0"
  },
  {
    idStop: "1177",
     fullNameStop: "улица 9-я Подлесная",
     shortNameStop: "ул. 9-я Подлесная",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "3",
     latitude: "56.8730234",
     longitude: "53.18481946",
     typeOfStop: "0"
  },
  {
    idStop: "1178",
     fullNameStop: "Сквер металлургов",
     shortNameStop: "Сквер металлургов",
     direction: "начальная остановка",
     type: "3",
     latitude: "56.87552449",
     longitude: "53.18448295",
     typeOfStop: "0"
  },
  {
    idStop: "1179",
     fullNameStop: "Ижевский Государственный Технический Университет им. М.Т. Калашникова",
     shortNameStop: "ИжГТУ им. Калашникова",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "2",
     latitude: "56.87067464",
     longitude: "53.18068685",
     typeOfStop: "0"
  },
  {
    idStop: "1180",
     fullNameStop: "улица 9-я Подлесная",
     shortNameStop: "ул. 9-я Подлесная",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "2",
     latitude: "56.87342458",
     longitude: "53.18041331",
     typeOfStop: "0"
  },
  {
    idStop: "1181",
     fullNameStop: "улица 9-я Подлесная",
     shortNameStop: "ул. 9-я Подлесная",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.87333916",
     longitude: "53.18472819",
     typeOfStop: "0"
  },
  {
    idStop: "1182",
     fullNameStop: "улица 9-я Подлесная",
     shortNameStop: "ул. 9-я Подлесная",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.87244538",
     longitude: "53.18018792",
     typeOfStop: "0"
  },
  {
    idStop: "1183",
     fullNameStop: "улица Пушкинская",
     shortNameStop: "ул. Пушкинская",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.87585039",
     longitude: "53.20517546",
     typeOfStop: "0"
  },
  {
    idStop: "1184",
     fullNameStop: "улица Холмогорова",
     shortNameStop: "ул. Холмогорова",
     direction: "в сторону улицы Холмогорова",
     type: "2",
     latitude: "56.87249084",
     longitude: "53.20807756",
     typeOfStop: "0"
  },
  {
    idStop: "1185",
     fullNameStop: "Зоопарк",
     shortNameStop: "Зоопарк",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.8644918",
     longitude: "53.17681843",
     typeOfStop: "0"
  },
  {
    idStop: "1186",
     fullNameStop: "улица 30 лет Победы",
     shortNameStop: "ул. 30 лет Победы",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.86628115",
     longitude: "53.18151492",
     typeOfStop: "0"
  },
  {
    idStop: "1187",
     fullNameStop: "улица 4-я Подлесная",
     shortNameStop: "ул. 4-я Подлесная",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "2",
     latitude: "56.86661676",
     longitude: "53.1810919",
     typeOfStop: "0"
  },
  {
    idStop: "1188",
     fullNameStop: "Сельскохозяйственная Академия",
     shortNameStop: "С/х Академия",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "2",
     latitude: "56.86182974",
     longitude: "53.18338512",
     typeOfStop: "0"
  },
  {
    idStop: "1189",
     fullNameStop: "Сельскохозяйственная Академия",
     shortNameStop: "С/х Академия",
     direction: "в сторону улицы Горького",
     type: "2",
     latitude: "56.86105104",
     longitude: "53.18446265",
     typeOfStop: "0"
  },
  {
    idStop: "1190",
     fullNameStop: "Парк имени Кирова",
     shortNameStop: "Парк им. Кирова",
     direction: "в сторону улицы Карла Маркса",
     type: "3",
     latitude: "56.86094816",
     longitude: "53.17888636",
     typeOfStop: "0"
  },
  {
    idStop: "1191",
     fullNameStop: "Сельскохозяйственная Академия",
     shortNameStop: "С/х Академия",
     direction: "в сторону улицы Карла Маркса",
     type: "3",
     latitude: "56.86109656",
     longitude: "53.18253953",
     typeOfStop: "0"
  },
  {
    idStop: "1192",
     fullNameStop: "Парк имени Кирова",
     shortNameStop: "Парк им. Кирова",
     direction: "в сторону улицы 30 лет Победы",
     type: "2",
     latitude: "56.86079538",
     longitude: "53.17890782",
     typeOfStop: "0"
  },
  {
    idStop: "1193",
     fullNameStop: "Сельскохозяйственная Академия",
     shortNameStop: "С/х Академия",
     direction: "в сторону улицы Песочной",
     type: "2",
     latitude: "56.86127551",
     longitude: "53.18226932",
     typeOfStop: "0"
  },
  {
    idStop: "1194",
     fullNameStop: "улица 4-я Подлесная",
     shortNameStop: "ул. 4-я Подлесная",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.86537939",
     longitude: "53.18114822",
     typeOfStop: "0"
  },
  {
    idStop: "1195",
     fullNameStop: "улица 30 лет Победы",
     shortNameStop: "ул. 30 лет Победы",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "3",
     latitude: "56.86621064",
     longitude: "53.18050907",
     typeOfStop: "0"
  },
  {
    idStop: "1196",
     fullNameStop: "Сельскохозяйственная Академия",
     shortNameStop: "С/х Академия",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "3",
     latitude: "56.86116266",
     longitude: "53.18273537",
     typeOfStop: "0"
  },
  {
    idStop: "1197",
     fullNameStop: "Парк имени Кирова",
     shortNameStop: "Парк им. Кирова",
     direction: "в сторону Песочной улицы",
     type: "3",
     latitude: "56.86099957",
     longitude: "53.17910896",
     typeOfStop: "0"
  },
  {
    idStop: "1201",
     fullNameStop: "Зоопарк",
     shortNameStop: "Зоопарк",
     direction: "в сторону улицы 50 лет ВЛКСМ",
     type: "3",
     latitude: "56.86434783",
     longitude: "53.17692569",
     typeOfStop: "0"
  },
  {
    idStop: "1203",
     fullNameStop: "Радиозавод",
     shortNameStop: "Радиозавод",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.85538061",
     longitude: "53.2230443",
     typeOfStop: "0"
  },
  {
    idStop: "1204",
     fullNameStop: "Радиозавод",
     shortNameStop: "Радиозавод",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.85566804",
     longitude: "53.22243273",
     typeOfStop: "0"
  },
  {
    idStop: "1205",
     fullNameStop: "магазин Подарки",
     shortNameStop: "м-н Подарки",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.85883747",
     longitude: "53.19731655",
     typeOfStop: "0"
  },
  {
    idStop: "1206",
     fullNameStop: "переулок Широкий",
     shortNameStop: "пер. Широкий",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.85670328",
     longitude: "53.20262928",
     typeOfStop: "0"
  },
  {
    idStop: "1207",
     fullNameStop: "Центральный универмаг",
     shortNameStop: "ЦУМ",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.85204202",
     longitude: "53.20322477",
     typeOfStop: "0"
  },
  {
    idStop: "1208",
     fullNameStop: "переулок Широкий",
     shortNameStop: "пер. Широкий",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.85647111",
     longitude: "53.20279026",
     typeOfStop: "0"
  },
  {
    idStop: "1209",
     fullNameStop: "Центральный универмаг",
     shortNameStop: "ЦУМ",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.85225092",
     longitude: "53.20334667",
     typeOfStop: "0"
  },
  {
    idStop: "1210",
     fullNameStop: "Филармония",
     shortNameStop: "Филармония",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.8572254",
     longitude: "53.21000337",
     typeOfStop: "0"
  },
  {
    idStop: "1211",
     fullNameStop: "Центральная площадь",
     shortNameStop: "Центр. площадь",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.85233015",
     longitude: "53.21156446",
     typeOfStop: "0"
  },
  {
    idStop: "1212",
     fullNameStop: "Филармония",
     shortNameStop: "Филармония",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.8566799",
     longitude: "53.21056131",
     typeOfStop: "0"
  },
  {
    idStop: "1213",
     fullNameStop: "Центральная площадь",
     shortNameStop: "Центр. площадь",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.85191362",
     longitude: "53.21219741",
     typeOfStop: "0"
  },
  {
    idStop: "1214",
     fullNameStop: "переулок Широкий",
     shortNameStop: "пер. Широкий",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.85693799",
     longitude: "53.19797097",
     typeOfStop: "0"
  },
  {
    idStop: "1215",
     fullNameStop: "Дворец культуры Аксион",
     shortNameStop: "ДК Аксион",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.85010521",
     longitude: "53.1991378",
     typeOfStop: "0"
  },
  {
    idStop: "1216",
     fullNameStop: "магазин Подарки",
     shortNameStop: "м-н Подарки",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.85935171",
     longitude: "53.19759018",
     typeOfStop: "0"
  },
  {
    idStop: "1217",
     fullNameStop: "переулок Широкий",
     shortNameStop: "пер. Широкий",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.85668869",
     longitude: "53.19766528",
     typeOfStop: "0"
  },
  {
    idStop: "1219",
     fullNameStop: "улица Кирова",
     shortNameStop: "ул. Кирова",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.8601963",
     longitude: "53.20916659",
     typeOfStop: "0"
  },
  {
    idStop: "1222",
     fullNameStop: "улица Кирова",
     shortNameStop: "ул. Кирова",
     direction: "в сторону улицы Майской",
     type: "2",
     latitude: "56.86179748",
     longitude: "53.2090861",
     typeOfStop: "0"
  },
  {
    idStop: "1224",
     fullNameStop: "Администрация города",
     shortNameStop: "Гор. Администрация",
     direction: "в сторону Майской улицы",
     type: "2",
     latitude: "56.86773433",
     longitude: "53.20829037",
     typeOfStop: "0"
  },
  {
    idStop: "1225",
     fullNameStop: "магазин Океан",
     shortNameStop: "м-н Океан",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.86017091",
     longitude: "53.20230606",
     typeOfStop: "0"
  },
  {
    idStop: "1226",
     fullNameStop: "Монтажный техникум",
     shortNameStop: "Монтажный техникум",
     direction: "в сторону улицы 30 лет Победы",
     type: "3",
     latitude: "56.86033258",
     longitude: "53.19647097",
     typeOfStop: "0"
  },
  {
    idStop: "1227",
     fullNameStop: "магазин Океан",
     shortNameStop: "м-н Океан",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.85998729",
     longitude: "53.2022404",
     typeOfStop: "0"
  },
  {
    idStop: "1228",
     fullNameStop: "улица Бабушкина",
     shortNameStop: "ул. Бабушкина",
     direction: "в сторону улицы 40 лет Победы",
     type: "3",
     latitude: "56.84934223",
     longitude: "53.26591595",
     typeOfStop: "0"
  },
  {
    idStop: "1229",
     fullNameStop: "улица Молдавская",
     shortNameStop: "ул. Молдавская",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.85240501",
     longitude: "53.2790883",
     typeOfStop: "0"
  },
  {
    idStop: "1230",
     fullNameStop: "проспект имени М.Т. Калашникова",
     shortNameStop: "пр-т Калашникова",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.85570703",
     longitude: "53.27873967",
     typeOfStop: "0"
  },
  {
    idStop: "1231",
     fullNameStop: "проспект имени М.Т. Калашникова",
     shortNameStop: "пр-т Калашникова",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.85560414",
     longitude: "53.27868873",
     typeOfStop: "0"
  },
  {
    idStop: "1232",
     fullNameStop: "улица Молдавская",
     shortNameStop: "ул. Молдавская",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.85222425",
     longitude: "53.27905076",
     typeOfStop: "0"
  },
  {
    idStop: "1233",
     fullNameStop: "улица Мельничная",
     shortNameStop: "ул. Мельничная",
     direction: "в сторону улицы Промышленной",
     type: "2",
     latitude: "56.83467067",
     longitude: "53.25642704",
     typeOfStop: "0"
  },
  {
    idStop: "1234",
     fullNameStop: "улица Промышленная",
     shortNameStop: "ул. Промышленная",
     direction: "в сторону улицы 40 лет Победы",
     type: "2",
     latitude: "56.83539847",
     longitude: "53.2498503",
     typeOfStop: "0"
  },
  {
    idStop: "1236",
     fullNameStop: "улица Мельничная",
     shortNameStop: "ул. Мельничная",
     direction: "в сторону улицы 40 лет Победы",
     type: "2",
     latitude: "56.83457681",
     longitude: "53.25572968",
     typeOfStop: "0"
  },
  {
    idStop: "1237",
     fullNameStop: "улица Промышленная",
     shortNameStop: "ул. Промышленная",
     direction: "в сторону улицы Орджоникидзе",
     type: "2",
     latitude: "56.83567524",
     longitude: "53.24767646",
     typeOfStop: "0"
  },
  {
    idStop: "1239",
     fullNameStop: "Механический завод",
     shortNameStop: "Механический з-д",
     direction: "в сторону улицы Чугуевского",
     type: "2",
     latitude: "56.83481678",
     longitude: "53.24006118",
     typeOfStop: "0"
  },
  {
    idStop: "1243",
     fullNameStop: "улица Карла Либкнехта",
     shortNameStop: "ул. Карла Либкнехта",
     direction: "в сторону улицы Воровского",
     type: "2",
     latitude: "56.83840947",
     longitude: "53.2310136",
     typeOfStop: "0"
  },
  {
    idStop: "1244",
     fullNameStop: "улица Карла Либкнехта",
     shortNameStop: "ул. Карла Либкнехта",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.8385171",
     longitude: "53.23065332",
     typeOfStop: "0"
  },
  {
    idStop: "1245",
     fullNameStop: "Механический завод",
     shortNameStop: "Механический з-д",
     direction: "в сторону улицы Орджоникидзе",
     type: "2",
     latitude: "56.83473033",
     longitude: "53.24103998",
     typeOfStop: "0"
  },
  {
    idStop: "1246",
     fullNameStop: "Школа искусств",
     shortNameStop: "Школа искусств",
     direction: "в сторону улицы Карла Либкнехта",
     type: "2",
     latitude: "56.8348642",
     longitude: "53.23464236",
     typeOfStop: "0"
  },
  {
    idStop: "1247",
     fullNameStop: "Школа искусств",
     shortNameStop: "Школа искусств",
     direction: "в сторону Промышленной улицы",
     type: "2",
     latitude: "56.83514588",
     longitude: "53.23413805",
     typeOfStop: "0"
  },
  {
    idStop: "1251",
     fullNameStop: "завод Нефтемаш",
     shortNameStop: "з-д Нефтемаш",
     direction: "в сторону перекрестка улиц Камбарской и 40 лет Победы",
     type: "2",
     latitude: "56.83226918",
     longitude: "53.26758547",
     typeOfStop: "0"
  },
  {
    idStop: "1252",
     fullNameStop: "улица Ракетная",
     shortNameStop: "ул. Ракетная",
     direction: "в сторону перекрестка улиц Камбарской и 40 лет Победы",
     type: "2",
     latitude: "56.83278373",
     longitude: "53.27871209",
     typeOfStop: "0"
  },
  {
    idStop: "1253",
     fullNameStop: "улица Ракетная",
     shortNameStop: "ул. Ракетная",
     direction: "в сторону улицы Орджоникидзе",
     type: "2",
     latitude: "56.83317694",
     longitude: "53.27914005",
     typeOfStop: "0"
  },
  {
    idStop: "1254",
     fullNameStop: "улица Ильфата Закирова",
     shortNameStop: "ул. Ильфата Закирова",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.83753702",
     longitude: "53.2812033",
     typeOfStop: "0"
  },
  {
    idStop: "1255",
     fullNameStop: "улица Ильфата Закирова",
     shortNameStop: "ул. Ильфата Закирова",
     direction: "в сторону улицы Орджоникидзе",
     type: "2",
     latitude: "56.83736646",
     longitude: "53.28083104",
     typeOfStop: "0"
  },
  {
    idStop: "1256",
     fullNameStop: "завод Нефтемаш",
     shortNameStop: "з-д Нефтемаш",
     direction: "в сторону улицы Промышленной",
     type: "2",
     latitude: "56.83239337",
     longitude: "53.2679659",
     typeOfStop: "0"
  },
  {
    idStop: "1257",
     fullNameStop: "улица Смирнова",
     shortNameStop: "ул. Смирнова",
     direction: "в сторону улицы Воровского",
     type: "2",
     latitude: "56.84914092",
     longitude: "53.26544667",
     typeOfStop: "0"
  },
  {
    idStop: "1258",
     fullNameStop: "улица 40 лет Победы",
     shortNameStop: "ул. 40 лет Победы",
     direction: "в сторону улицы Халтурина",
     type: "2",
     latitude: "56.84943193",
     longitude: "53.27531179",
     typeOfStop: "0"
  },
  {
    idStop: "1259",
     fullNameStop: "улица 40 лет Победы",
     shortNameStop: "ул. 40 лет Победы",
     direction: "в сторону улицы 40 лет Победы",
     type: "2",
     latitude: "56.84917324",
     longitude: "53.27543252",
     typeOfStop: "0"
  },
  {
    idStop: "1260",
     fullNameStop: "улица Смирнова",
     shortNameStop: "ул. Смирнова",
     direction: "в сторону улицы 40 лет Победы",
     type: "2",
     latitude: "56.8489734",
     longitude: "53.26658924",
     typeOfStop: "0"
  },
  {
    idStop: "1261",
     fullNameStop: "улица 40 лет Победы",
     shortNameStop: "ул. 40 лет Победы",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.8495789",
     longitude: "53.27555316",
     typeOfStop: "0"
  },
  {
    idStop: "1262",
     fullNameStop: "улица 40 лет Победы",
     shortNameStop: "ул. 40 лет Победы",
     direction: "в сторону улицы Халтурина",
     type: "3",
     latitude: "56.84963476",
     longitude: "53.27526355",
     typeOfStop: "0"
  },
  {
    idStop: "1263",
     fullNameStop: "улица Бабушкина",
     shortNameStop: "ул. Бабушкина",
     direction: "в сторону улицы Халтурина",
     type: "3",
     latitude: "56.84933196",
     longitude: "53.26536878",
     typeOfStop: "0"
  },
  {
    idStop: "1265",
     fullNameStop: "Ижевский ипподром",
     shortNameStop: "Ипподром",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.84746983",
     longitude: "53.24942315",
     typeOfStop: "0"
  },
  {
    idStop: "1266",
     fullNameStop: "улица Халтурина",
     shortNameStop: "ул. Халтурина",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.84833405",
     longitude: "53.25492964",
     typeOfStop: "0"
  },
  {
    idStop: "1267",
     fullNameStop: "Ижевский ипподром",
     shortNameStop: "Ипподром",
     direction: "в сторону улицы Халтурина",
     type: "2",
     latitude: "56.84734913",
     longitude: "53.24929235",
     typeOfStop: "0"
  },
  {
    idStop: "1268",
     fullNameStop: "Ижевский ипподром",
     shortNameStop: "Ипподром",
     direction: "в сторону улицы Воровского",
     type: "2",
     latitude: "56.8475193",
     longitude: "53.24897588",
     typeOfStop: "0"
  },
  {
    idStop: "1269",
     fullNameStop: "улица Халтурина",
     shortNameStop: "ул. Халтурина",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.84835168",
     longitude: "53.25443081",
     typeOfStop: "0"
  },
  {
    idStop: "1270",
     fullNameStop: "Ижевский ипподром",
     shortNameStop: "Ипподром",
     direction: "в сторону улицы Воровского",
     type: "3",
     latitude: "56.84743308",
     longitude: "53.24900471",
     typeOfStop: "0"
  },
  {
    idStop: "1288",
     fullNameStop: "магазин Электротехника в быту",
     shortNameStop: "м-н Э/техника в быту",
     direction: "в сторону улицы Бумашевской",
     type: "2",
     latitude: "56.87422041",
     longitude: "53.22269755",
     typeOfStop: "0"
  },
  {
    idStop: "1289",
     fullNameStop: "улица Димитрова",
     shortNameStop: "ул. Димитрова",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87011956",
     longitude: "53.2230355",
     typeOfStop: "0"
  },
  {
    idStop: "1290",
     fullNameStop: "улица Димитрова",
     shortNameStop: "ул. Димитрова",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.86973764",
     longitude: "53.22134577",
     typeOfStop: "0"
  },
  {
    idStop: "1291",
     fullNameStop: "Мебельный комбинат",
     shortNameStop: "Мебельный комбинат",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.87205111",
     longitude: "53.22709444",
     typeOfStop: "0"
  },
  {
    idStop: "1292",
     fullNameStop: "Троллейбусный парк",
     shortNameStop: "Троллейбусный парк",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87738022",
     longitude: "53.22229434",
     typeOfStop: "0"
  },
  {
    idStop: "1293",
     fullNameStop: "магазин Электротехника в быту",
     shortNameStop: "м-н Э/техника в быту",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87420867",
     longitude: "53.22231137",
     typeOfStop: "0"
  },
  {
    idStop: "1294",
     fullNameStop: "Мебельный комбинат",
     shortNameStop: "Мебельный комбинат",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.87185468",
     longitude: "53.22758798",
     typeOfStop: "0"
  },
  {
    idStop: "1295",
     fullNameStop: "Школа №83",
     shortNameStop: "Школа №83",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.87576098",
     longitude: "53.21291472",
     typeOfStop: "0"
  },
  {
    idStop: "1296",
     fullNameStop: "Школа №83",
     shortNameStop: "Школа №83",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.8756452",
     longitude: "53.21472949",
     typeOfStop: "0"
  },
  {
    idStop: "1297",
     fullNameStop: "улица Щорса",
     shortNameStop: "ул. Щорса",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.86943795",
     longitude: "53.21373362",
     typeOfStop: "0"
  },
  {
    idStop: "1298",
     fullNameStop: "улица Щорса",
     shortNameStop: "ул. Щорса",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.86953491",
     longitude: "53.21290214",
     typeOfStop: "0"
  },
  {
    idStop: "1301",
     fullNameStop: "улица Димитрова",
     shortNameStop: "ул. Димитрова",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.869579",
     longitude: "53.22024605",
     typeOfStop: "0"
  },
  {
    idStop: "1302",
     fullNameStop: "Северный микрорайон",
     shortNameStop: "Северный мкрн",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87891346",
     longitude: "53.22309838",
     typeOfStop: "0"
  },
  {
    idStop: "1303",
     fullNameStop: "Северный микрорайон",
     shortNameStop: "Северный мкрн",
     direction: "в сторону улицы Бумашевской",
     type: "2",
     latitude: "56.87968158",
     longitude: "53.22415471",
     typeOfStop: "0"
  },
  {
    idStop: "1311",
     fullNameStop: "Торгово-развлекательный центр Италмас",
     shortNameStop: "ТРЦ Италмас",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.8679705",
     longitude: "53.27521791",
     typeOfStop: "0"
  },
  {
    idStop: "1315",
     fullNameStop: "улица Чехова",
     shortNameStop: "ул. Чехова",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.87184585",
     longitude: "53.24864332",
     typeOfStop: "0"
  },
  {
    idStop: "1316",
     fullNameStop: "Торговый техникум",
     shortNameStop: "Торговый техникум",
     direction: "в сторону улицы Ворошилова",
     type: "2",
     latitude: "56.87443744",
     longitude: "53.25783794",
     typeOfStop: "0"
  },
  {
    idStop: "1318",
     fullNameStop: "улица Ворошилова",
     shortNameStop: "ул. Ворошилова",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87756233",
     longitude: "53.25761264",
     typeOfStop: "0"
  },
  {
    idStop: "1319",
     fullNameStop: "Торговый техникум",
     shortNameStop: "Торговый техникум",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87347588",
     longitude: "53.25730685",
     typeOfStop: "0"
  },
  {
    idStop: "1322",
     fullNameStop: "улица Чехова",
     shortNameStop: "ул. Чехова",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.87214493",
     longitude: "53.2473237",
     typeOfStop: "0"
  },
  {
    idStop: "1337",
     fullNameStop: "улица Петрова",
     shortNameStop: "ул. Петрова",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.86976989",
     longitude: "53.28911171",
     typeOfStop: "0"
  },
  {
    idStop: "1338",
     fullNameStop: "4-й микрорайон",
     shortNameStop: "4-й мкрн",
     direction: "в сторону улицы Автозаводской",
     type: "2",
     latitude: "56.87399768",
     longitude: "53.28565777",
     typeOfStop: "0"
  },
  {
    idStop: "1340",
     fullNameStop: "4-й микрорайон",
     shortNameStop: "4-й мкрн",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.87281628",
     longitude: "53.28746563",
     typeOfStop: "0"
  },
  {
    idStop: "1341",
     fullNameStop: "Торгово-развлекательный комплекс Петровский",
     shortNameStop: "ТРК Петровский",
     direction: "в сторону улицы Петрова",
     type: "2",
     latitude: "56.87262236",
     longitude: "53.29118771",
     typeOfStop: "0"
  },
  {
    idStop: "1342",
     fullNameStop: "Торгово-развлекательный комплекс Петровский",
     shortNameStop: "ТРК Петровский",
     direction: "в сторону улицы Союзной",
     type: "2",
     latitude: "56.87261357",
     longitude: "53.29280243",
     typeOfStop: "0"
  },
  {
    idStop: "1343",
     fullNameStop: "Дом моделей",
     shortNameStop: "Дом моделей",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.87682067",
     longitude: "53.28683259",
     typeOfStop: "0"
  },
  {
    idStop: "1344",
     fullNameStop: "микрорайон Восток",
     shortNameStop: "мкрн Восток",
     direction: "в сторону Автозаводской улицы",
     type: "2",
     latitude: "56.87539653",
     longitude: "53.30816236",
     typeOfStop: "0"
  },
  {
    idStop: "1345",
     fullNameStop: "улица Ворошилова",
     shortNameStop: "ул. Ворошилова",
     direction: "начальная остановка",
     type: "3",
     latitude: "56.87240066",
     longitude: "53.27882016",
     typeOfStop: "0"
  },
  {
    idStop: "1347",
     fullNameStop: "магазин Корпорация Центр",
     shortNameStop: "м-н Корпорация Центр",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.87670345",
     longitude: "53.26996888",
     typeOfStop: "0"
  },
  {
    idStop: "1348",
     fullNameStop: "магазин Корпорация Центр",
     shortNameStop: "м-н Корпорация Центр",
     direction: "в сторону улицы Автозаводской",
     type: "2",
     latitude: "56.87632233",
     longitude: "53.27161199",
     typeOfStop: "0"
  },
  {
    idStop: "1349",
     fullNameStop: "улица Цветочная",
     shortNameStop: "ул. Цветочная",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.87625493",
     longitude: "53.27392578",
     typeOfStop: "0"
  },
  {
    idStop: "1354",
     fullNameStop: "улица Ворошилова",
     shortNameStop: "ул. Ворошилова",
     direction: "конечная остановка",
     type: "3",
     latitude: "56.87372277",
     longitude: "53.28115111",
     typeOfStop: "0"
  },
  {
    idStop: "1355",
     fullNameStop: "магазин Корпорация Центр",
     shortNameStop: "м-н Корпорация Центр",
     direction: "в сторону улицы Автозаводской",
     type: "2",
     latitude: "56.87642782",
     longitude: "53.27061423",
     typeOfStop: "0"
  },
  {
    idStop: "1356",
     fullNameStop: "Ремзавод",
     shortNameStop: "Ремзавод",
     direction: "в сторону улицы Бумашевской",
     type: "2",
     latitude: "56.88627012",
     longitude: "53.23151469",
     typeOfStop: "0"
  },
  {
    idStop: "1357",
     fullNameStop: "Администрация Индустриального района",
     shortNameStop: "Адм. Индустриального р-на",
     direction: "в сторону Славянского шоссе",
     type: "2",
     latitude: "56.8873925",
     longitude: "53.23816124",
     typeOfStop: "0"
  },
  {
    idStop: "1358",
     fullNameStop: "Автопарк №2",
     shortNameStop: "Автопарк №2",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.88218173",
     longitude: "53.23265735",
     typeOfStop: "0"
  },
  {
    idStop: "1360",
     fullNameStop: "Ижевский индустриальный техникум им. Е.Ф.Драгунова",
     shortNameStop: "ИИТ им. Драгунова",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.88133758",
     longitude: "53.24222207",
     typeOfStop: "0"
  },
  {
    idStop: "1361",
     fullNameStop: "Администрация Индустриального района",
     shortNameStop: "Адм. Индустриального р-на",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.8872692",
     longitude: "53.23878902",
     typeOfStop: "0"
  },
  {
    idStop: "1362",
     fullNameStop: "Ремзавод",
     shortNameStop: "Ремзавод",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.886156",
     longitude: "53.23212078",
     typeOfStop: "0"
  },
  {
    idStop: "1363",
     fullNameStop: "Автопарк №2",
     shortNameStop: "Автопарк №2",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.88226919",
     longitude: "53.23148245",
     typeOfStop: "0"
  },
  {
    idStop: "1364",
     fullNameStop: "Ижевский индустриальный техникум им. Е.Ф.Драгунова",
     shortNameStop: "ИИТ им. Драгунова",
     direction: "в сторону Буммашевской улицы",
     type: "2",
     latitude: "56.88133758",
     longitude: "53.24155157",
     typeOfStop: "0"
  },
  {
    idStop: "1367",
     fullNameStop: "16-й микрорайон",
     shortNameStop: "16-й мкрн",
     direction: "в сторону улицы Майской",
     type: "2",
     latitude: "56.86572979",
     longitude: "53.22342519",
     typeOfStop: "0"
  },
  {
    idStop: "1368",
     fullNameStop: "улица Авангардная",
     shortNameStop: "ул. Авангардная",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.86064206",
     longitude: "53.22061418",
     typeOfStop: "0"
  },
  {
    idStop: "1369",
     fullNameStop: "улица Димитрова",
     shortNameStop: "ул. Димитрова",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.86901247",
     longitude: "53.22275334",
     typeOfStop: "0"
  },
  {
    idStop: "1370",
     fullNameStop: "улица Авангардная",
     shortNameStop: "ул. Авангардная",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.86032389",
     longitude: "53.22100045",
     typeOfStop: "0"
  },
  {
    idStop: "1374",
     fullNameStop: "Монтажный техникум",
     shortNameStop: "Монтажный техникум",
     direction: "в сторону улицы Карла Маркса",
     type: "3",
     latitude: "56.86027379",
     longitude: "53.19609547",
     typeOfStop: "0"
  },
  {
    idStop: "1376",
     fullNameStop: "Городская Администрация",
     shortNameStop: "Гор. Администрация",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.86706687",
     longitude: "53.20794344",
     typeOfStop: "0"
  },
  {
    idStop: "1378",
     fullNameStop: "улица Пушкинская",
     shortNameStop: "ул. Пушкинская",
     direction: "в сторону улицы Тарасова",
     type: "2",
     latitude: "56.87586242",
     longitude: "53.20626638",
     typeOfStop: "0"
  },
  {
    idStop: "1379",
     fullNameStop: "улица Холмогорова",
     shortNameStop: "ул. Холмогорова",
     direction: "в сторону улицы 10 лет Октября",
     type: "2",
     latitude: "56.87352915",
     longitude: "53.20774527",
     typeOfStop: "0"
  },
  {
    idStop: "1763",
     fullNameStop: "Долгий мост",
     shortNameStop: "Долгий мост",
     direction: "в сторону улицы Карла Либкнехта",
     type: "2",
     latitude: "56.83950224",
     longitude: "53.20075986",
     typeOfStop: "0"
  },
  {
    idStop: "1776",
     fullNameStop: "улица Коммунаров",
     shortNameStop: "ул. Коммунаров",
     direction: "в сторону улицы Воровского",
     type: "2",
     latitude: "56.83803858",
     longitude: "53.22296579",
     typeOfStop: "0"
  },
  {
    idStop: "1777",
     fullNameStop: "Торговый центр Медведь",
     shortNameStop: "ТЦ Медведь",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.83767158",
     longitude: "53.21358993",
     typeOfStop: "0"
  },
  {
    idStop: "1778",
     fullNameStop: "улица Коммунаров",
     shortNameStop: "ул. Коммунаров",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.83815027",
     longitude: "53.22126528",
     typeOfStop: "0"
  },
  {
    idStop: "1779",
     fullNameStop: "Центральный рынок",
     shortNameStop: "Центр. рынок",
     direction: "в сторону улицы Карла Маркса",
     type: "2",
     latitude: "56.83783859",
     longitude: "53.21278401",
     typeOfStop: "0"
  },
  {
    idStop: "1785",
     fullNameStop: "Долгий мост",
     shortNameStop: "Долгий мост",
     direction: "в сторону улицы Карла Либкнехта",
     type: "2",
     latitude: "56.83977058",
     longitude: "53.20072536",
     typeOfStop: "0"
  },
  {
    idStop: "1786",
     fullNameStop: "улица Карла Маркса",
     shortNameStop: "ул. Карла Маркса",
     direction: "в сторону улицы Горького",
     type: "2",
     latitude: "56.83732548",
     longitude: "53.20418228",
     typeOfStop: "0"
  },
  {
    idStop: "1787",
     fullNameStop: "улица Карла Маркса",
     shortNameStop: "ул. Карла Маркса",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.83733083",
     longitude: "53.20674185",
     typeOfStop: "0"
  },
  {
    idStop: "1789",
     fullNameStop: "Долгий мост",
     shortNameStop: "Долгий мост",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.84041085",
     longitude: "53.20089206",
     typeOfStop: "0"
  },
  {
    idStop: "1793",
     fullNameStop: "МУП ИжГорЭлектроТранс",
     shortNameStop: "ИжГЭТ",
     direction: "в сторону улицы Карла Либкнехта",
     type: "2",
     latitude: "56.83339441",
     longitude: "53.19979994",
     typeOfStop: "0"
  },
  {
    idStop: "1794",
     fullNameStop: "Свято-Михайловский собор",
     shortNameStop: "Св.-Михайловский соб.",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.84828959",
     longitude: "53.20396858",
     typeOfStop: "0"
  },
  {
    idStop: "1795",
     fullNameStop: "улица Красноармейская",
     shortNameStop: "ул. Красноармейская",
     direction: "в сторону улицы Пушкинской",
     type: "3",
     latitude: "56.84400539",
     longitude: "53.21260174",
     typeOfStop: "0"
  },
  {
    idStop: "1796",
     fullNameStop: "Центр",
     shortNameStop: "Центр",
     direction: "начальная остановка",
     type: "2",
     latitude: "56.84353816",
     longitude: "53.20296525",
     typeOfStop: "0"
  },
  {
    idStop: "1797",
     fullNameStop: "Собор Александра Невского",
     shortNameStop: "Собор А. Невского",
     direction: "начальная остановка",
     type: "2",
     latitude: "56.84459805",
     longitude: "53.20159154",
     typeOfStop: "0"
  },
  {
    idStop: "1798",
     fullNameStop: "улица Красноармейская",
     shortNameStop: "ул. Красноармейская",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.84544219",
     longitude: "53.21193996",
     typeOfStop: "0"
  },
  {
    idStop: "1799",
     fullNameStop: "Собор Александра Невского",
     shortNameStop: "Собор А. Невского",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.84392605",
     longitude: "53.20218407",
     typeOfStop: "0"
  },
  {
    idStop: "1800",
     fullNameStop: "Летний сад имени М. Горького",
     shortNameStop: "Летний сад",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.84584116",
     longitude: "53.19997826",
     typeOfStop: "0"
  },
  {
    idStop: "1801",
     fullNameStop: "Дворец культуры Аксион",
     shortNameStop: "ДК Аксион",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.84854602",
     longitude: "53.19911363",
     typeOfStop: "0"
  },
  {
    idStop: "1802",
     fullNameStop: "Центр",
     shortNameStop: "Центр",
     direction: "в сторону улицы Кирова",
     type: "3",
     latitude: "56.84461834",
     longitude: "53.20453901",
     typeOfStop: "0"
  },
  {
    idStop: "1803",
     fullNameStop: "Центр",
     shortNameStop: "Центр",
     direction: "в сторону улицы Пушкинской",
     type: "3",
     latitude: "56.84352622",
     longitude: "53.20544559",
     typeOfStop: "0"
  },
  {
    idStop: "1804",
     fullNameStop: "Свято-Михайловский собор",
     shortNameStop: "Св.-Михайловский соб.",
     direction: "в сторону улицы Ленина",
     type: "3",
     latitude: "56.84842075",
     longitude: "53.20381478",
     typeOfStop: "0"
  },
  {
    idStop: "1805",
     fullNameStop: "Пирожковая",
     shortNameStop: "Пирожковая",
     direction: "в сторону улицы Карла Либкнехта",
     type: "2",
     latitude: "56.84272689",
     longitude: "53.20021874",
     typeOfStop: "0"
  },
  {
    idStop: "1806",
     fullNameStop: "Центр",
     shortNameStop: "Центр",
     direction: "в сторону Станкостроя",
     type: "2",
     latitude: "56.84350121",
     longitude: "53.19935698",
     typeOfStop: "0"
  },
  {
    idStop: "1809",
     fullNameStop: "улица Красноармейская",
     shortNameStop: "ул. Красноармейская",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.84545983",
     longitude: "53.21028768",
     typeOfStop: "0"
  },
  {
    idStop: "1810",
     fullNameStop: "улица Труда",
     shortNameStop: "ул. Труда",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.86129889",
     longitude: "53.29060713",
     typeOfStop: "0"
  },
  {
    idStop: "1811",
     fullNameStop: "улица Татьяны Барамзиной",
     shortNameStop: "ул. Татьяны Барамзиной",
     direction: "в сторону улицы Ворошилова",
     type: "2",
     latitude: "56.86471066",
     longitude: "53.29013632",
     typeOfStop: "0"
  },
  {
    idStop: "1812",
     fullNameStop: "улица Труда",
     shortNameStop: "ул. Труда",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.86227779",
     longitude: "53.29066741",
     typeOfStop: "0"
  },
  {
    idStop: "1814",
     fullNameStop: "улица Труда",
     shortNameStop: "ул. Труда",
     direction: "начальная остановка",
     type: "2",
     latitude: "56.86058814",
     longitude: "53.29165987",
     typeOfStop: "0"
  },
  {
    idStop: "1815",
     fullNameStop: "улица Труда",
     shortNameStop: "ул. Труда",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.86027375",
     longitude: "53.29176713",
     typeOfStop: "0"
  },
  {
    idStop: "1816",
     fullNameStop: "улица Татьяны Барамзиной",
     shortNameStop: "ул. Татьяны Барамзиной",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.86537208",
     longitude: "53.28975616",
     typeOfStop: "0"
  },
  {
    idStop: "1817",
     fullNameStop: "Металлкомплект",
     shortNameStop: "Металлкомплект",
     direction: "в сторону Двенадцатой улицы",
     type: "2",
     latitude: "56.83225394",
     longitude: "53.16525343",
     typeOfStop: "0"
  },
  {
    idStop: "1818",
     fullNameStop: "улица Новоажимова",
     shortNameStop: "ул. Новоажимова",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.83150849",
     longitude: "53.17110066",
     typeOfStop: "0"
  },
  {
    idStop: "1819",
     fullNameStop: "улица Новоажимова",
     shortNameStop: "ул. Новоажимова",
     direction: "в сторону Двенадцатой улицы",
     type: "2",
     latitude: "56.83170483",
     longitude: "53.17105871",
     typeOfStop: "0"
  },
  {
    idStop: "1820",
     fullNameStop: "Металлкомплект",
     shortNameStop: "Металлкомплект",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.83203676",
     longitude: "53.1639445",
     typeOfStop: "0"
  },
  {
    idStop: "1821",
     fullNameStop: "Акционерное общество Ижсталь",
     shortNameStop: "АО Ижсталь",
     direction: "в сторону Двенадцатой улицы",
     type: "2",
     latitude: "56.83198098",
     longitude: "53.18442582",
     typeOfStop: "0"
  },
  {
    idStop: "1822",
     fullNameStop: "Акционерное общество Ижсталь",
     shortNameStop: "АО Ижсталь",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.83176661",
     longitude: "53.18387784",
     typeOfStop: "0"
  },
  {
    idStop: "1823",
     fullNameStop: "Домостроительный комбинат",
     shortNameStop: "ДСК",
     direction: "в сторону улицы Маяковского",
     type: "2",
     latitude: "56.83186652",
     longitude: "53.18628192",
     typeOfStop: "0"
  },
  {
    idStop: "1829",
     fullNameStop: "Банк Зенит",
     shortNameStop: "Банк Зенит",
     direction: "в сторону улицы Удмуртской",
     type: "3",
     latitude: "56.84466393",
     longitude: "53.22032654",
     typeOfStop: "0"
  },
  {
    idStop: "1830",
     fullNameStop: "магазин Светлана",
     shortNameStop: "м-н Светлана",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.84591751",
     longitude: "53.21770669",
     typeOfStop: "0"
  },
  {
    idStop: "1831",
     fullNameStop: "Дворец спорта",
     shortNameStop: "Дворец спорта",
     direction: "в сторону улицы Удмуртской",
     type: "2",
     latitude: "56.84691981",
     longitude: "53.22837553",
     typeOfStop: "0"
  },
  {
    idStop: "1833",
     fullNameStop: "Дворец спорта",
     shortNameStop: "Дворец спорта",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.84681753",
     longitude: "53.22879019",
     typeOfStop: "0"
  },
  {
    idStop: "1834",
     fullNameStop: "Удмуртский государственный университет",
     shortNameStop: "УдГУ",
     direction: "в сторону улицы Чугуевского",
     type: "2",
     latitude: "56.85033255",
     longitude: "53.2246",
     typeOfStop: "0"
  },
  {
    idStop: "1835",
     fullNameStop: "Удмуртский государственный университет",
     shortNameStop: "УдГУ",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.84967838",
     longitude: "53.22532952",
     typeOfStop: "0"
  },
  {
    idStop: "1837",
     fullNameStop: "стадион Динамо",
     shortNameStop: "стадион Динамо",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.84839938",
     longitude: "53.21332938",
     typeOfStop: "0"
  },
  {
    idStop: "1838",
     fullNameStop: "стадион Динамо",
     shortNameStop: "стадион Динамо",
     direction: "в сторону улицы Советской",
     type: "2",
     latitude: "56.84933515",
     longitude: "53.21264271",
     typeOfStop: "0"
  },
  {
    idStop: "1841",
     fullNameStop: "магазин Светлана",
     shortNameStop: "м-н Светлана",
     direction: "в сторону улицы Пушкинской",
     type: "2",
     latitude: "56.84595563",
     longitude: "53.21649432",
     typeOfStop: "0"
  },
  {
    idStop: "1843",
     fullNameStop: "Банк Зенит",
     shortNameStop: "Банк Зенит",
     direction: "в сторону улицы Пушкинской",
     type: "3",
     latitude: "56.84475065",
     longitude: "53.22067248",
     typeOfStop: "0"
  },
  {
    idStop: "1844",
     fullNameStop: "улица Красноармейская",
     shortNameStop: "ул. Красноармейская",
     direction: "в сторону улицы Карла Маркса",
     type: "3",
     latitude: "56.84407594",
     longitude: "53.21292092",
     typeOfStop: "0"
  },
  {
    idStop: "1866",
     fullNameStop: "улица Автозаводская",
     shortNameStop: "ул. Автозаводская",
     direction: "в сторону улицы Ворошилова",
     type: "2",
     latitude: "56.88008977",
     longitude: "53.29476772",
     typeOfStop: "0"
  },
  {
    idStop: "1867",
     fullNameStop: "улица Автозаводская",
     shortNameStop: "ул. Автозаводская",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.87944529",
     longitude: "53.29264839",
     typeOfStop: "0"
  },
  {
    idStop: "1868",
     fullNameStop: "Дом моделей",
     shortNameStop: "Дом моделей",
     direction: "в сторону улицы Петрова",
     type: "2",
     latitude: "56.87597061",
     longitude: "53.28488531",
     typeOfStop: "0"
  },
  {
    idStop: "1869",
     fullNameStop: "Поликлиника Нефтяников",
     shortNameStop: "поликл. Нефтяников",
     direction: "в сторону улицы Союзной",
     type: "2",
     latitude: "56.87281333",
     longitude: "53.29567237",
     typeOfStop: "0"
  },
  {
    idStop: "1870",
     fullNameStop: "улица Петрова",
     shortNameStop: "ул. Петрова",
     direction: "в сторону улицы Ленина",
     type: "2",
     latitude: "56.86962648",
     longitude: "53.28888183",
     typeOfStop: "0"
  },
  {
    idStop: "1871",
     fullNameStop: "улица Сабурова",
     shortNameStop: "ул. Сабурова",
     direction: "в сторону Автозаводской улицы",
     type: "2",
     latitude: "56.87446331",
     longitude: "53.30196163",
     typeOfStop: "0"
  },
  {
    idStop: "1872",
     fullNameStop: "Поликлиника Нефтяников",
     shortNameStop: "поликл. Нефтяников",
     direction: "в сторону улицы Петрова",
     type: "2",
     latitude: "56.87303361",
     longitude: "53.29771622",
     typeOfStop: "0"
  },
  {
    idStop: "1874",
     fullNameStop: "микрорайон Восток",
     shortNameStop: "мкрн Восток",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.87477231",
     longitude: "53.30815608",
     typeOfStop: "0"
  },
  {
    idStop: "1875",
     fullNameStop: "Разворотное кольцо",
     shortNameStop: "Разворотное кольцо",
     direction: "в сторону улицы Берша",
     type: "2",
     latitude: "56.88184187",
     longitude: "53.30557585",
     typeOfStop: "0"
  },
  {
    idStop: "1876",
     fullNameStop: "Автозавод",
     shortNameStop: "Автозавод",
     direction: "в сторону завода Пластмасс",
     type: "2",
     latitude: "56.88112212",
     longitude: "53.30138649",
     typeOfStop: "0"
  },
  {
    idStop: "1877",
     fullNameStop: "Автозавод",
     shortNameStop: "Автозавод",
     direction: "в сторону улицы Сабурова",
     type: "2",
     latitude: "56.88044669",
     longitude: "53.30044954",
     typeOfStop: "0"
  },
  {
    idStop: "1878",
     fullNameStop: "Автозавод",
     shortNameStop: "Автозавод",
     direction: "в сторону Дома моделей",
     type: "2",
     latitude: "56.88086279",
     longitude: "53.29916633",
     typeOfStop: "0"
  },
  {
    idStop: "1879",
     fullNameStop: "Разворотное кольцо",
     shortNameStop: "Разворотное кольцо",
     direction: "в сторону улицы Союзной",
     type: "2",
     latitude: "56.88200943",
     longitude: "53.30597141",
     typeOfStop: "0"
  },
  {
    idStop: "1881",
     fullNameStop: "улица Архитектора Берша",
     shortNameStop: "ул. Архитектора Берша",
     direction: "в сторону Автозаводской улицы",
     type: "2",
     latitude: "56.8786962",
     longitude: "53.30748801",
     typeOfStop: "0"
  },
  {
    idStop: "1882",
     fullNameStop: "улица Архитектора Берша",
     shortNameStop: "ул. Архитектора Берша",
     direction: "в сторону улицы Автозаводской",
     type: "2",
     latitude: "56.87839124",
     longitude: "53.30742337",
     typeOfStop: "0"
  },
  {
    idStop: "1895",
     fullNameStop: "Речка Карлутка",
     shortNameStop: "р. Карлутка",
     direction: "в сторону улицы Ворошилова",
     type: "3",
     latitude: "56.84662765",
     longitude: "53.24209802",
     typeOfStop: "0"
  },
  {
    idStop: "1898",
     fullNameStop: "Речка Карлутка",
     shortNameStop: "р. Карлутка",
     direction: "в сторону улицы Орджоникидзе",
     type: "3",
     latitude: "56.84663939",
     longitude: "53.24167419",
     typeOfStop: "0"
  },
  {
    idStop: "1901",
     fullNameStop: "улица Воровского",
     shortNameStop: "ул. Воровского",
     direction: "в сторону улицы Удмуртской",
     type: "3",
     latitude: "56.845831",
     longitude: "53.23097759",
     typeOfStop: "0"
  },
  {
    idStop: "1902",
     fullNameStop: "улица Воровского",
     shortNameStop: "ул. Воровского",
     direction: "в сторону улицы Орджоникидзе",
     type: "3",
     latitude: "56.84571343",
     longitude: "53.23021582",
     typeOfStop: "0"
  },
  {
    idStop: "1904",
     fullNameStop: "улица Клубная",
     shortNameStop: "ул. Клубная",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.83073195",
     longitude: "53.14893024",
     typeOfStop: "0"
  },
  {
    idStop: "1906",
     fullNameStop: "Швейная фабрика Зангари",
     shortNameStop: "Шв. ф-ка Зангари",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.83170217",
     longitude: "53.15670255",
     typeOfStop: "0"
  },
  {
    idStop: "1911",
     fullNameStop: "Швейная фабрика Зангари",
     shortNameStop: "Шв. ф-ка Зангари",
     direction: "в сторону улицы Азина",
     type: "2",
     latitude: "56.83139402",
     longitude: "53.15565107",
     typeOfStop: "0"
  },
  {
    idStop: "1914",
     fullNameStop: "улица Клубная",
     shortNameStop: "ул. Клубная",
     direction: "в сторону улицы Новошестнадцатой",
     type: "2",
     latitude: "56.83103849",
     longitude: "53.1501037",
     typeOfStop: "0"
  },
  {
    idStop: "1928",
     fullNameStop: "Акционерное общество Ижсталь",
     shortNameStop: "АО Ижсталь",
     direction: "в сторону Областной улицы",
     type: "2",
     latitude: "56.83061945",
     longitude: "53.185214",
     typeOfStop: "0"
  },
  {
    idStop: "1929",
     fullNameStop: "завод ВЭМ",
     shortNameStop: "завод ВЭМ",
     direction: "в сторону улицы Областной",
     type: "2",
     latitude: "56.82768116",
     longitude: "53.18491845",
     typeOfStop: "0"
  },
  {
    idStop: "1930",
     fullNameStop: "завод ВЭМ",
     shortNameStop: "завод ВЭМ",
     direction: "в сторону улицы Новоажимова",
     type: "2",
     latitude: "56.82690032",
     longitude: "53.18515435",
     typeOfStop: "0"
  },
  {
    idStop: "1933",
     fullNameStop: "Заводоуправление",
     shortNameStop: "Заводоуправление",
     direction: "в сторону Станкостроя",
     type: "2",
     latitude: "56.8441067",
     longitude: "53.18761573",
     typeOfStop: "0"
  },
  {
    idStop: "1934",
     fullNameStop: "Станкострой",
     shortNameStop: "Станкострой",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.84353378",
     longitude: "53.17871199",
     typeOfStop: "0"
  },
  {
    idStop: "1935",
     fullNameStop: "Заводоуправление",
     shortNameStop: "Заводоуправление",
     direction: "в сторону улицы Горького",
     type: "2",
     latitude: "56.84400112",
     longitude: "53.18732073",
     typeOfStop: "0"
  },
  {
    idStop: "1949",
     fullNameStop: "Русский дом",
     shortNameStop: "Русский дом",
     direction: "в сторону Славянского шоссе",
     type: "2",
     latitude: "56.88877277",
     longitude: "53.246283",
     typeOfStop: "0"
  },
  {
    idStop: "1951",
     fullNameStop: "улица Ворошилова",
     shortNameStop: "ул. Ворошилова",
     direction: "в сторону улицы Дзержинского",
     type: "2",
     latitude: "56.87962293",
     longitude: "53.25836363",
     typeOfStop: "0"
  },
  {
    idStop: "1952",
     fullNameStop: "Трамвайное кольцо",
     shortNameStop: "Трамвайное кольцо",
     direction: "в сторону Буммашевской улицы",
     type: "2",
     latitude: "56.88320166",
     longitude: "53.24887401",
     typeOfStop: "0"
  },
  {
    idStop: "1953",
     fullNameStop: "Трамвайное кольцо",
     shortNameStop: "Трамвайное кольцо",
     direction: "в сторону улицы 9 Января",
     type: "2",
     latitude: "56.88333648",
     longitude: "53.2501453",
     typeOfStop: "0"
  },
  {
    idStop: "1954",
     fullNameStop: "улица 9 Января",
     shortNameStop: "ул. 9 Января",
     direction: "в сторону Буммашевской улицы",
     type: "2",
     latitude: "56.88499821",
     longitude: "53.25594968",
     typeOfStop: "0"
  },
  {
    idStop: "1956",
     fullNameStop: "улица 9 Января",
     shortNameStop: "ул. 9 Января",
     direction: "в сторону Воткинского шоссе",
     type: "2",
     latitude: "56.88618512",
     longitude: "53.25891619",
     typeOfStop: "0"
  },
  {
    idStop: "1957",
     fullNameStop: "улица Ворошилова",
     shortNameStop: "ул. Ворошилова",
     direction: "в сторону улицы Ворошилова",
     type: "2",
     latitude: "56.87931517",
     longitude: "53.25795059",
     typeOfStop: "0"
  },
  {
    idStop: "2201",
     fullNameStop: "Центр",
     shortNameStop: "Центр",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.84356063",
     longitude: "53.20342086",
     typeOfStop: "0"
  },
  {
    idStop: "2206",
     fullNameStop: "поселок Машиностроителей",
     shortNameStop: "пос. Машиностроителей",
     direction: "начальная остановка",
     type: "2",
     latitude: "56.83253363",
     longitude: "53.11122979",
     typeOfStop: "0"
  },
  {
    idStop: "2208",
     fullNameStop: "Станкострой",
     shortNameStop: "Станкострой",
     direction: "начальная остановка",
     type: "2",
     latitude: "56.84336519",
     longitude: "53.17832667",
     typeOfStop: "0"
  },
  {
    idStop: "2216",
     fullNameStop: "Парк имени Кирова",
     shortNameStop: "Парк им. Кирова",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.86078937",
     longitude: "53.17873511",
     typeOfStop: "0"
  },
  {
    idStop: "2218",
     fullNameStop: "завод Пластмасс",
     shortNameStop: "з-д Пластмасс",
     direction: "конечная остановка",
     type: "2",
     latitude: "56.88354033",
     longitude: "53.31511368",
     typeOfStop: "0"
  },
  {
    idStop: "2228",
     fullNameStop: "Пирожковая",
     shortNameStop: "Пирожковая",
     direction: "в сторону улицы Карла Либкнехта",
     type: "2",
     latitude: "56.84287026",
     longitude: "53.20020039",
     typeOfStop: "0"
  },
  {
    idStop: "2246",
     fullNameStop: "ТЦ Мой порт",
     shortNameStop: "ТЦ Мой порт",
     direction: "в сторону улицы Кирова",
     type: "2",
     latitude: "56.86450202",
     longitude: "53.22305778",
     typeOfStop: "0"
  },
  {
    idStop: "2247",
     fullNameStop: "Новый город",
     shortNameStop: "Новый город",
     direction: "в сторону улицы Тарасова",
     type: "2",
     latitude: "56.87690183",
     longitude: "53.19731832",
     typeOfStop: "0"
  }
];
let subroute = [
  {
    id: "19",
     direction: "-1",
     arrayOfStop: [1192,1188,1187,1179,1180,62,1175,1183,1296,1303,1363,1360,1953,8,1957,1355,1340,1870,1816,1810,396,395,414,413,412],
     changedOfStop: " 1"
  },
  {
    id: "19",
     direction: " 1",
     arrayOfStop: [411,408,407,393,394,1812,1811,1337,1338,1349,1347,1951,1954,1952,1364,1358,1302,1292,1295,1378,2247,64,59,60,63,1182,1176,1194,1193,2216],
     changedOfStop: "1"
  },
  {
    id: "74",
     direction: "-1",
     arrayOfStop: [60,63,1182,1176,1194,1189,1205,1217,1801,1805,1785,1787,1777,1776,1243,1247,1245,1234,1236,1251],
     changedOfStop: "1"
  },
  {
    id: "74",
     direction: "1",
     arrayOfStop: [1256,1233,1237,1239,1246,1244,1778,1779,1786,1789,1800,1215,1214,1216,1188,1187,1179,1180,62,1175,64,59,60],
     changedOfStop: "1"
  },
  {
    id: "78",
     direction: "-1",
     arrayOfStop: [1812,1811,1337,1338,1349,1347,1951,1954,1952,1364,1358,1302,1292,1293,1369,2246,1368,1204,1834,1833,1896,1248,1244,1778,1779,1786,1821,1819,1817,1906,1914,121,122,2207],
     changedOfStop: "1"
  },
  {
    id: "78",
     direction: "1",
     arrayOfStop: [123,124,120,1904,1911,1820,1818,1822,1793,1787,1777,1776,1242,1897,1831,1835,1203,1370,1367,1289,1288,1303,1363,1360,1953,8,1957,1348,1340,1870,1816,1810],
     changedOfStop: "1"
  },
  {
    id: "84",
     direction: "-1",
     arrayOfStop: [1950,1320,1321,1313,1282,1283,1284,1371,1372,1373,1220,1377,1226,1196,1197,1201,1195,1174,1177,61],
     changedOfStop: "1"
  },
  {
    id: "84",
     direction: "1",
     arrayOfStop: [1178,1181,65,1186,1185,1190,1191,1374,1221,1218,1366,1365,1279,1276,1277,1278,1312,1314,1317,1958],
     changedOfStop: "1"
  },
  {
    id: "87",
     direction: "-1",
     arrayOfStop: [1345,1311,460,1231,1232,1262,1263,1269,1270,1898,1901,1843,1844,1802,1794,1209,1208,1225,1226,1196,1197,1201,1195,1174,1177,61],
     changedOfStop: "1"
  },
  {
    id: "87",
     direction: " 1",
     arrayOfStop: [1178,1181,65,1186,1185,1190,1191,1374,1227,1206,1207,1804,1803,1795,1829,1902,1895,1265,1266,1228,1261,1229,1230,459,461,1354],
     changedOfStop: "1"
  },
  
]
let route = [
  {
    id: "19",
    signatureOfType: "bus",
    signatureLink: "29",
    number: "29",
    first: "парк им. Кирова",
    second: "Рембыттехника"
  },
  {
    id: "74",
    signatureOfType: "trolleybus",
    signatureLink: "6",
    number: "6",
    first: "г. Металлургов",
    second: "ул. Труда"
  },
  {
    id: "78",
    signatureOfType: "trolleybus",
    signatureLink: "14",
    number: "14",
    first: "ул. Труда",
    second: "ул. К. Герда"
  },
  {
    id: "84",
    signatureOfType: "tram",
    signatureLink: "7",
    number: "7",
    first: "Буммаш",
    second: "к/т Аврора"
  },
  {
    id: "87",
    signatureOfType: "tram",
    signatureLink: "10",
    number: "10",
    first: "ул. Ворошилова",
    second: "к/т Аврора"
  }
]
let stage = [
  {
    idStart: "8",
    idEnd: "1957",
    lenght: "545.04",
    coordTop : [
      [56.8842127773,53.2583153027],
      [56.8793151684,53.2579505867]
  ]
  },
  {
    idStart: "59",
    idEnd: "60",
    lenght: "438.847",
    coordTop : [
      [56.8813665429,53.1921204257],
      [56.8816279018,53.1893952964],
      [56.8818422883,53.1873621394],
      [56.8819010382,53.1868525252],
      [56.8818922527,53.1865252689],
      [56.8818568163,53.1863470432],
      [56.8812646971,53.1861125458],
      [56.8811370855,53.1860620077]
  ]
  },
  {
    idStart: "59",
    idEnd: "2205",
    lenght: "424.329",
    coordTop : [
      [56.8813665429,53.1921204257],
      [56.8816279018,53.1893952964],
      [56.8818422883,53.1873621394],
      [56.8819010382,53.1868525252],
      [56.8818922527,53.1865252689],
      [56.8818568163,53.1863470432],
      [56.8812646971,53.1861125458]
  ]
  },
  {
    idStart: "60",
    idEnd: "63",
    lenght: "512.323",
    coordTop : [
      [56.8811370855,53.1860620077],
      [56.8801216154,53.1857032206],
      [56.8793429501,53.1853933917],
      [56.8786468791,53.1850876051],
      [56.8783003359,53.1849588766],
      [56.8777297597,53.1846624325],
      [56.8772752658,53.1844385723],
      [56.8770496612,53.1841903678],
      [56.8768141768,53.1837940001],
      [56.8767700588,53.1837197405]
  ]
  },
  {
    idStart: "60",
    idEnd: "2204",
    lenght: "505.659",
    coordTop : [
      [56.8811370855,53.1860620077],
      [56.8801216154,53.1857032206],
      [56.8793429501,53.1853933917],
      [56.8786468791,53.1850876051],
      [56.8783003359,53.1849588766],
      [56.8777297597,53.1846624325],
      [56.8772752658,53.1844385723],
      [56.8770496612,53.1841903678],
      [56.8768141768,53.1837940001]]
  },
  {
    idStart: "62",
    idEnd: "1175",
    lenght: "470.592",
    coordTop : [
      [56.8762450133,53.183184614],
      [56.87625434,53.1834239252],
      [56.8765174527,53.1909133594]]
    
  },
  {
    idStart: "63",
    idEnd: "1175",
    lenght: "521.747",
    coordTop : [
      [56.8767700588,53.1837197405],
      [56.8764312541,53.1833152291],
      [56.87625434,53.1834239252],
      [56.8765174527,53.1909133594]]
    
  },
  {
    idStart: "63",
    idEnd: "1182",
    lenght: "692.482",
    coordTop :  [
      [56.8767700588,53.1837197405],
      [56.8764312541,53.1833152291],
      [56.8763088772,53.1797500852],
      [56.8756098044,53.1798465643],
      [56.8734948834,53.1800504818],
      [56.8724453803,53.1801879241]]
    
  },
  {
    idStart: "64",
    idEnd: "59",
    lenght: "387.517",
    coordTop : [
      [56.8784216755,53.1937394593],
      [56.881111023,53.193429271],
      [56.8812666616,53.193155734],
      [56.8813430328,53.1924261224],
      [56.8813665429,53.1921204257]
  ]
  },
  {
    idStart: "65",
    idEnd: "1186",
    lenght: "555.124",
    coordTop : [
      [56.8693175116,53.1851359345],
      [56.8666149422,53.185416658],
      [56.8665299482,53.1854005782],
      [56.866447851,53.1853415589],
      [56.8663957546,53.1851949538],
      [56.8663663429,53.184910637],
      [56.8663002524,53.1823303162],
      [56.866281152,53.1815149154]
  ]
  },
  {
    idStart: "120",
    idEnd: "1904",
    lenght: "601.741",
    coordTop : [
      [56.8300498213,53.1391233273],
      [56.8301814913,53.1419920074],
      [56.8302108331,53.1426142704],
      [56.8302659289,53.1432825271],
      [56.8303405366,53.1443251118],
      [56.8305900142,53.1472970981],
      [56.8306640806,53.1481257041],
      [56.8306816757,53.1483617814],
      [56.8307319542,53.1489302353]
  ]
  },
  {
    idStart: "121",
    idEnd: "118",
    lenght: "467.501",
    coordTop : [
      [56.8304108191,53.1430876825],
      [56.8303399468,53.1422495544],
      [56.8340617385,53.1415695297]
  ]
  },
  {
    idStart: "121",
    idEnd: "122",
    lenght: "350.48",
    coordTop : [
      [56.8304108191,53.1430876825],
      [56.8303399468,53.1422495544],
      [56.8301202518,53.1373531072]
  ]
  },
  {
    idStart: "122",
    idEnd: "39",
    lenght: "4374.97",
    coordTop : [
      [56.8301202518,53.1373531072],
      [56.830002245,53.1354363719],
      [56.8296183888,53.1279492733],
      [56.8305252858,53.127809765],
      [56.8316835971,53.1275231126],
      [56.8338612315,53.127201336],
      [56.833834104,53.1263417381],
      [56.8337056904,53.1229688338],
      [56.8337592575,53.1219975753],
      [56.8341554064,53.1204687325],
      [56.8345985809,53.1191491073],
      [56.8348627239,53.1187415417],
      [56.8356785328,53.118097809],
      [56.8363129098,53.1162609966],
      [56.8370613526,53.1166332855],
      [56.8416085235,53.1191304224],
      [56.8417083086,53.1191864008],
      [56.8417468398,53.1189737885],
      [56.8419085293,53.1185565007],
      [56.8420856871,53.1180779292],
      [56.8423656471,53.117691191],
      [56.8434078598,53.1168669366],
      [56.8437857068,53.1165880097],
      [56.846822888,53.1142940853],
      [56.8521723381,53.1101710726],
      [56.8523490722,53.1100470145],
      [56.8537355737,53.1093465105],
      [56.8545348009,53.1089514045],
      [56.8574969813,53.1074428799]
  ]
  },
  {
    idStart: "122",
    idEnd: "123",
    lenght: "437.621",
    coordTop : [
      [56.8301202518,53.1373531072],
      [56.830002245,53.1354363719],
      [56.8298613344,53.1354149022],
      [56.8297762078,53.1353129434],
      [56.8281921489,53.1318050639],
      [56.8280975226,53.1315957147]
  ]
  },
  {
    idStart: "122",
    idEnd: "125",
    lenght: "676.038",
    coordTop : [
      [56.8301202518,53.1373531072],
      [56.830002245,53.1354363719],
      [56.8296183888,53.1279492733],
      [56.8305252858,53.127809765]
  ]
  },
  {
    idStart: "122",
    idEnd: "2207",
    lenght: "421.101",
    coordTop : [
      [56.8301202518,53.1373531072],
      [56.830002245,53.1354363719],
      [56.8298613344,53.1354149022],
      [56.8297762078,53.1353129434],
      [56.8281921489,53.1318050639]
  ]
  },
  {
    idStart: "123",
    idEnd: "124",
    lenght: "578.798",
    coordTop : [
      [56.8280975226,53.1315957147],
      [56.8276336763,53.1306298462],
      [56.8271356568,53.1294015429],
      [56.8270832938,53.1291497712],
      [56.8270745945,53.1288237906],
      [56.8271003214,53.1286160092],
      [56.8271460632,53.128474299],
      [56.8272292282,53.1284375655],
      [56.8282002001,53.1282575702],
      [56.8294793935,53.1279736177],
      [56.8295567552,53.1293976271]
  ]
  },
  {
    idStart: "123",
    idEnd: "125",
    lenght: "608.463",
    coordTop : [
      [56.8280975226,53.1315957147],
      [56.8276336763,53.1306298462],
      [56.8271356568,53.1294015429],
      [56.8270832938,53.1291497712],
      [56.8270745945,53.1288237906],
      [56.8271003214,53.1286160092],
      [56.8271460632,53.128474299],
      [56.8272292282,53.1284375655],
      [56.8282002001,53.1282575702],
      [56.8294793935,53.1279736177],
      [56.8296183888,53.1279492733],
      [56.8305252858,53.127809765]
  ]
  },
  {
    idStart: "124",
    idEnd: "120",
    lenght: "594.227",
    coordTop : [
      [56.8295567552,53.1293976271],
      [56.8298613344,53.1354149022],
      [56.8299295535,53.1366753284],
      [56.8300498213,53.1391233273]
  ]
  },
  {
    idStart: "124",
    idEnd: "1911",
    lenght: "1611.41",
    coordTop : [
      [56.8295567552,53.1293976271],
      [56.8298613344,53.1354149022],
      [56.8299295535,53.1366753284],
      [56.8300498213,53.1391233273],
      [56.8301814913,53.1419920074],
      [56.8302108331,53.1426142704],
      [56.8302659289,53.1432825271],
      [56.8303405366,53.1443251118],
      [56.8305900142,53.1472970981],
      [56.8306640806,53.1481257041],
      [56.8306816757,53.1483617814],
      [56.8307319542,53.1489302353],
      [56.8313940227,53.1556510709]
  ]
  },
  {
    idStart: "393",
    idEnd: "394",
    lenght: "412.788",
    coordTop : [
      [56.852849297,53.2922506897],
      [56.8533776673,53.2922694644],
      [56.8565537733,53.2918644141]
  ]
  },
  {
    idStart: "393",
    idEnd: "1812",
    lenght: "1053.49",
    coordTop : [
      [56.852849297,53.2922506897],
      [56.8533776673,53.2922694644],
      [56.8565537733,53.2918644141],
      [56.8570435862,53.2917196057],
      [56.8602090681,53.291112614],
      [56.860532354,53.2910482946],
      [56.8622777945,53.290667409]
  ]
  },
  {
    idStart: "394",
    idEnd: "1812",
    lenght: "640.706",
    coordTop : [
      [56.8565537733,53.2918644141],
      [56.8570435862,53.2917196057],
      [56.8602090681,53.291112614],
      [56.860532354,53.2910482946],
      [56.8622777945,53.290667409]
  ]
  },
  {
    idStart: "394",
    idEnd: "1815",
    lenght: "449.517",
    coordTop : [
      [56.8565537733,53.2918644141],
      [56.8570435862,53.2917196057],
      [56.8602090681,53.291112614],
      [56.8602737452,53.2917671265]
  ]
  },
  {
    idStart: "395",
    idEnd: "413",
    lenght: "803.657",
    coordTop : [
      [56.851494126,53.2914943082],
      [56.8499211937,53.290748976],
      [56.8483084041,53.2895094806],
      [56.8470856125,53.2886204179],
      [56.8469054647,53.2884636619],
      [56.8468242087,53.2887528296],
      [56.8458324198,53.2922613796]
  ]
  },
  {
    idStart: "395",
    idEnd: "414",
    lenght: "375.206",
    coordTop : [
      [56.851494126,53.2914943082],
      [56.8499211937,53.290748976],
      [56.8483084041,53.2895094806]
  ]
  },
  {
    idStart: "396",
    idEnd: "395",
    lenght: "530.066",
    coordTop : [
      [56.8562458259,53.2914943082],
      [56.8533479506,53.2917624553],
      [56.8524678853,53.2917698215],
      [56.8517864305,53.2915770122],
      [56.851494126,53.2914943082]
  ]
  },
  {
    idStart: "405",
    idEnd: "406",
    lenght: "541.243",
    coordTop : [
      [56.8419919129,53.2826053886],
      [56.8420447312,53.2844722674],
      [56.8419566843,53.2846654052],
      [56.8418862761,53.2848370733],
      [56.8418569434,53.2850784506],
      [56.8418745332,53.2852125691],
      [56.8419156088,53.285405617],
      [56.8419537855,53.2855129657],
      [56.8420095027,53.2856148347],
      [56.8420521504,53.2856810405],
      [56.8420961737,53.28572928],
      [56.8421372491,53.2857829094],
      [56.8421871192,53.285815159],
      [56.8422311424,53.2858419288],
      [56.8422722176,53.2858473186],
      [56.8423426251,53.2858366287],
      [56.8423954429,53.2857990791],
      [56.8424482606,53.2857668296],
      [56.8424834888,53.2857132002],
      [56.8425304105,53.2856649606],
      [56.8425963464,53.2854378665],
      [56.844773297,53.287267106]
  ]
  },
  {
    idStart: "406",
    idEnd: "407",
    lenght: "376.08",
    coordTop : [
      [56.844773297,53.287267106],
      [56.8468242087,53.2887528296],
      [56.847006322,53.2889222519],
      [56.8478918705,53.289654289]
  ]
  },
  {
    idStart: "407",
    idEnd: "393",
    lenght: "578.127",
    coordTop : [
      [56.8478918705,53.289654289],
      [56.84981666,53.2911215972],
      [56.8514182833,53.2920335669],
      [56.8524773654,53.2921641819],
      [56.852849297,53.2922506897]
  ]
  },
  {
    idStart: "407",
    idEnd: "2203",
    lenght: "637.114",
    coordTop : [
      [56.8478918705,53.289654289],
      [56.84981666,53.2911215972],
      [56.8514182833,53.2920335669],
      [56.8524773654,53.2921641819],
      [56.8524678853,53.2917698215],
      [56.8517864305,53.2915770122]
  ]
  },
  {
    idStart: "408",
    idEnd: "407",
    lenght: "346.607",
    coordTop : [
      [56.8460318802,53.2924169678],
      [56.847006322,53.2889222519],
      [56.8478918705,53.289654289]
  ]
  },
  {
    idStart: "408",
    idEnd: "409",
    lenght: "614.205",
    coordTop : [
      [56.8460318802,53.2924169678],
      [56.847006322,53.2889222519],
      [56.8470856125,53.2886204179],
      [56.8483302647,53.2839069576],
      [56.8484280725,53.2833251188]
  ]
  },
  {
    idStart: "410",
    idEnd: "1255",
    lenght: "701.034",
    coordTop : [
      [56.8421386248,53.283447649],
      [56.8420263733,53.2808007688],
      [56.842010671,53.2804305119],
      [56.8373664604,53.2808310363]
  ]
  },
  {
    idStart: "411",
    idEnd: "407",
    lenght: "696.624",
    coordTop : [
      [56.8445033775,53.2974434012],
      [56.8451245235,53.2956261992],
      [56.8460318802,53.2924169678],
      [56.847006322,53.2889222519],
      [56.8478918705,53.289654289]
  ]
  },
  {
    idStart: "411",
    idEnd: "408",
    lenght: "350.016",
    coordTop : [
      [56.8445033775,53.2974434012],
      [56.8451245235,53.2956261992],
      [56.8460318802,53.2924169678]
  ]
  },
  {
    idStart: "411",
    idEnd: "409",
    lenght: "964.222",
    coordTop : [
      [56.8445033775,53.2974434012],
      [56.8451245235,53.2956261992],
      [56.8460318802,53.2924169678],
      [56.847006322,53.2889222519],
      [56.8470856125,53.2886204179],
      [56.8483302647,53.2839069576],
      [56.8484280725,53.2833251188]
  ]
  },
  {
    idStart: "411",
    idEnd: "1268",
    lenght: "3090.68",
    coordTop : [
      [56.8445033775,53.2974434012],
      [56.8451245235,53.2956261992],
      [56.8460318802,53.2924169678],
      [56.847006322,53.2889222519],
      [56.8470856125,53.2886204179],
      [56.8483302647,53.2839069576],
      [56.8484280725,53.2833251188],
      [56.8489408991,53.2800406136],
      [56.8489871415,53.2796958714],
      [56.8491841382,53.2782426146],
      [56.8492663463,53.2774721642],
      [56.8494319261,53.2753117872],
      [56.8494276033,53.2731468473],
      [56.8494159118,53.2693598196],
      [56.849140917,53.2654466684],
      [56.848863906,53.2624007507],
      [56.8484009555,53.2536959858],
      [56.8483180817,53.2527445801],
      [56.8475193001,53.248975878]
  ]
  },
  {
    idStart: "412",
    idEnd: "390",
    lenght: "1022.23",
    coordTop : [
      [56.8442510939,53.2974112415],
      [56.84310683,53.300554806],
      [56.8430452186,53.3005654959],
      [56.8429307901,53.3005815758],
      [56.842795824,53.3006245152],
      [56.84270488,53.3007156942],
      [56.8426080399,53.3009034421],
      [56.8425552716,53.3011395194],
      [56.8425435289,53.3011877589],
      [56.8425287399,53.3013744288],
      [56.8425464277,53.3015901143],
      [56.8426048091,53.3018885015],
      [56.8417948357,53.3042072581],
      [56.8407063816,53.3073232375],
      [56.8401852872,53.3082326956],
      [56.8396446015,53.3088198374],
      [56.8395597231,53.308987123],
      [56.8395706875,53.3094368991],
      [56.8395741798,53.3108222802]
  ]
  },
  {
    idStart: "412",
    idEnd: "1936",
    lenght: "891.401",
    coordTop : [
      [56.8442510939,53.2974112415],
      [56.84310683,53.300554806],
      [56.8430452186,53.3005654959],
      [56.8429307901,53.3005815758],
      [56.842795824,53.3006245152],
      [56.84270488,53.3007156942],
      [56.8426080399,53.3009034421],
      [56.8425552716,53.3011395194],
      [56.8425435289,53.3011877589],
      [56.8425287399,53.3013744288],
      [56.8425464277,53.3015901143],
      [56.8426048091,53.3018885015],
      [56.8426926151,53.3020457994],
      [56.842802753,53.3021579867],
      [56.8428733995,53.3021693842],
      [56.843005324,53.3021082059],
      [56.8430855967,53.3020445818],
      [56.84316682,53.3019782556],
      [56.8432506497,53.3019291396],
      [56.8432976196,53.3018556193],
      [56.843352536,53.3017846687],
      [56.843466555,53.3018533381],
      [56.8456911006,53.3035617638],
      [56.8470547064,53.3044427745]
  ]
  },
  {
    idStart: "412",
    idEnd: "1940",
    lenght: "1807.68",
    coordTop : [
      [56.8442510939,53.2974112415],
      [56.84310683,53.300554806],
      [56.8430452186,53.3005654959],
      [56.8429307901,53.3005815758],
      [56.842795824,53.3006245152],
      [56.84270488,53.3007156942],
      [56.8426080399,53.3009034421],
      [56.8425552716,53.3011395194],
      [56.8425435289,53.3011877589],
      [56.8425287399,53.3013744288],
      [56.8425464277,53.3015901143],
      [56.8426048091,53.3018885015],
      [56.8417948357,53.3042072581],
      [56.8407063816,53.3073232375],
      [56.8401852872,53.3082326956],
      [56.8396446015,53.3088198374],
      [56.8395597231,53.308987123],
      [56.8395706875,53.3094368991],
      [56.8395741798,53.3108222802],
      [56.8397062094,53.3135474094],
      [56.8408241427,53.3198988578],
      [56.8409913974,53.3214974997],
      [56.8410647554,53.3229029139],
      [56.8410676543,53.3233696786]
  ]
  },
  {
    idStart: "412",
    idEnd: "2202",
    lenght: "521.808",
    coordTop : [
      [56.8442510939,53.2974112415],
      [56.84310683,53.300554806],
      [56.8430452186,53.3005654959],
      [56.8429307901,53.3005815758],
      [56.842795824,53.3006245152],
      [56.84270488,53.3007156942],
      [56.8426080399,53.3009034421],
      [56.8425552716,53.3011395194],
      [56.8425435289,53.3011877589],
      [56.8425287399,53.3013744288],
      [56.8425464277,53.3015901143],
      [56.8426048091,53.3018885015],
      [56.8417948357,53.3042072581]
  ]
  },
  {
    idStart: "413",
    idEnd: "412",
    lenght: "359.785",
    coordTop : [
      [56.8458324198,53.2922613796],
      [56.844960235,53.2954491412],
      [56.8442510939,53.2974112415]
  ]
  },
  {
    idStart: "414",
    idEnd: "409",
    lenght: "501.621",
    coordTop : [
      [56.8483084041,53.2895094806],
      [56.8470856125,53.2886204179],
      [56.8483302647,53.2839069576],
      [56.8484280725,53.2833251188]
  ]
  },
  {
    idStart: "414",
    idEnd: "412",
    lenght: "788.236",
    coordTop : [
      [56.8483084041,53.2895094806],
      [56.8470856125,53.2886204179],
      [56.8469054647,53.2884636619],
      [56.8468242087,53.2887528296],
      [56.8458324198,53.2922613796],
      [56.844960235,53.2954491412],
      [56.8442510939,53.2974112415]
  ]
  },
  {
    idStart: "414",
    idEnd: "413",
    lenght: "428.451",
    coordTop : [
      [56.8483084041,53.2895094806],
      [56.8470856125,53.2886204179],
      [56.8469054647,53.2884636619],
      [56.8468242087,53.2887528296],
      [56.8458324198,53.2922613796]
  ]
  },
  {
    idStart: "414",
    idEnd: "416",
    lenght: "471.278",
    coordTop : [
      [56.8483084041,53.2895094806],
      [56.8470856125,53.2886204179],
      [56.8469054647,53.2884636619],
      [56.8443860548,53.2865751337]
  ]
  },
  {
    idStart: "416",
    idEnd: "410",
    lenght: "354.758",
    coordTop : [
      [56.8443860548,53.2865751337],
      [56.8426285773,53.2852715884],
      [56.8426390917,53.2852144555],
      [56.842630297,53.2851178866],
      [56.8426214531,53.2850267076],
      [56.8426068116,53.2849409185],
      [56.8426109879,53.2849013927],
      [56.8425875025,53.2848048238],
      [56.8425640663,53.2847136448],
      [56.8425288382,53.2846546254],
      [56.8424701738,53.2845473666],
      [56.8423968186,53.2844990372],
      [56.842335206,53.284429328],
      [56.8422647985,53.2844132481],
      [56.8421591624,53.2843863885],
      [56.8421386248,53.283447649]
  ]
  },
  {
    idStart: "459",
    idEnd: "461",
    lenght: "644.442",
    coordTop : [
      [56.8624556095,53.277452203],
      [56.8652983735,53.2768674896],
      [56.8656068356,53.2767682257],
      [56.8659755924,53.2765697879],
      [56.8677163599,53.2754271308],
      [56.8680924116,53.2752527679]
  ]
  },
  {
    idStart: "460",
    idEnd: "1231",
    lenght: "744.543",
    coordTop : [
      [56.8622631116,53.2774253434],
      [56.8615240972,53.2775755417],
      [56.8599813961,53.2779108828],
      [56.8583798447,53.2782353543],
      [56.8565204738,53.2785899193],
      [56.8556041377,53.278688734]
  ]
  },
  {
    idStart: "461",
    idEnd: "1354",
    lenght: "746.637",
    coordTop : [
      [56.8680924116,53.2752527679],
      [56.8682510504,53.2752339931],
      [56.8684802432,53.2752581577],
      [56.8691765034,53.2754673754],
      [56.8696391968,53.2756229636],
      [56.8699902881,53.2757623821],
      [56.8703237016,53.2759930695],
      [56.8705278919,53.2761486577],
      [56.8708177528,53.2764887598],
      [56.8710547762,53.2767733977],
      [56.8710991671,53.2768267061],
      [56.8711668201,53.276910429],
      [56.8713274364,53.2771612565],
      [56.8714003645,53.277275145],
      [56.8718086341,53.2779478035],
      [56.8723216649,53.278806054],
      [56.8725444506,53.2791816396],
      [56.8726722401,53.2793918454],
      [56.8731249244,53.2801363691],
      [56.8736232588,53.2809678497],
      [56.8737227677,53.281151106]
  ]
  },
  {
    idStart: "1174",
    idEnd: "1177",
    lenght: "316.111",
    coordTop : [
      [56.8701856429,53.1851305446],
      [56.8709846771,53.1850474504],
      [56.8711257276,53.1850312808],
      [56.8724036019,53.1848837774],
      [56.8730234011,53.184819458]
  ]
  },
  {
    idStart: "1175",
    idEnd: "64",
    lenght: "379.261",
    coordTop : [
      [56.8765174527,53.1909133594],
      [56.8766349201,53.1938745659],
      [56.8767873571,53.1938530962],
      [56.8784216755,53.1937394593]
  ]
  },
  {
    idStart: "1175",
    idEnd: "1183",
    lenght: "882.153",
    coordTop : [
      [56.8765174527,53.1909133594],
      [56.8766349201,53.1938745659],
      [56.8767759002,53.1980749085],
      [56.8767831161,53.1987408297],
      [56.8766893095,53.2001140842],
      [56.8765849978,53.2009180764],
      [56.8758503898,53.205175462]
  ]
  },
  {
    idStart: "1176",
    idEnd: "1194",
    lenght: "558.113",
    coordTop : [
      [56.8703726504,53.1803810619],
      [56.8684217667,53.1805791404],
      [56.8672254592,53.180707869],
      [56.8662344074,53.1808151278],
      [56.8653793929,53.1811482231]
  ]
  },
  {
    idStart: "1177",
    idEnd: "61",
    lenght: "301.625",
    coordTop : [
      [56.8730234011,53.184819458],
      [56.8757316926,53.1845404413]
  ]
  },
  {
    idStart: "1178",
    idEnd: "1181",
    lenght: "243.453",
    coordTop : [
      [56.8755244872,53.1844829491],
      [56.8733391634,53.1847281892]
  ]
  },
  {
    idStart: "1179",
    idEnd: "1180",
    lenght: "306.239",
    coordTop : [
      [56.8706746391,53.1806868484],
      [56.8708181947,53.1806776856],
      [56.8709075974,53.1806642109],
      [56.8734245837,53.1804133114]
  ]
  },
  {
    idStart: "1180",
    idEnd: "62",
    lenght: "490.967",
    coordTop : [
      [56.8734245837,53.1804133114],
      [56.876143302,53.1800954874],
      [56.8762450133,53.183184614]
  ]
  },
  {
    idStart: "1180",
    idEnd: "1175",
    lenght: "961.559",
    coordTop : [
      [56.8734245837,53.1804133114],
      [56.876143302,53.1800954874],
      [56.8762450133,53.183184614],
      [56.87625434,53.1834239252],
      [56.8765174527,53.1909133594]
  ]
  },
  {
    idStart: "1181",
    idEnd: "65",
    lenght: "447.875",
    coordTop : [
      [56.8733391634,53.1847281892],
      [56.8711007382,53.1849642665],
      [56.8693175116,53.1851359345]
  ]
  },
  {
    idStart: "1182",
    idEnd: "1176",
    lenght: "230.776",
    coordTop : [
      [56.8724453803,53.1801879241],
      [56.8703726504,53.1803810619]
  ]
  },
  {
    idStart: "1183",
    idEnd: "1296",
    lenght: "587.077",
    coordTop : [
      [56.8758503898,53.205175462],
      [56.8754721056,53.2075719906],
      [56.8754600329,53.2078917878],
      [56.8756215858,53.2131482797],
      [56.8756333181,53.2138570504],
      [56.8756451977,53.2147294942]
  ]
  },
  {
    idStart: "1183",
    idEnd: "1379",
    lenght: "367.878",
    coordTop : [
      [56.8758503898,53.205175462],
      [56.8754721056,53.2075719906],
      [56.8735291478,53.2077452714]
  ]
  },
  {
    idStart: "1185",
    idEnd: "1190",
    lenght: "458.612",
    coordTop : [
      [56.8644918031,53.1768184333],
      [56.863275384,53.1770705006],
      [56.8615975622,53.1773521224],
      [56.8614492078,53.1773923669],
      [56.8613375365,53.1774459963],
      [56.8612949108,53.1774674661],
      [56.8612376017,53.1775157954],
      [56.8611538724,53.1776311391],
      [56.8611039293,53.1777437879],
      [56.8610422002,53.1778966811],
      [56.8609893105,53.1781407534],
      [56.8609746271,53.1782855618],
      [56.8609569972,53.1784303702],
      [56.8609511041,53.1786637525],
      [56.8609481576,53.1788863551]
  ]
  },
  {
    idStart: "1186",
    idEnd: "1185",
    lenght: "502.436",
    coordTop : [
      [56.866281152,53.1815149154],
      [56.8661680221,53.1773575123],
      [56.866129821,53.1767218644],
      [56.8661063504,53.1766011308],
      [56.8660754654,53.1764536275],
      [56.8660314212,53.1763651434],
      [56.8659902738,53.1762738746],
      [56.8659447564,53.1762068602],
      [56.8659006629,53.1761639208],
      [56.8658007894,53.1761049015],
      [56.8657155481,53.1760754367],
      [56.8656582949,53.1760861267],
      [56.8655877348,53.1761156812],
      [56.8654863874,53.1761907804],
      [56.8650794728,53.176593046],
      [56.8648869884,53.1767352493],
      [56.8644918031,53.1768184333]
  ]
  },
  {
    idStart: "1187",
    idEnd: "1179",
    lenght: "451.887",
    coordTop : [
      [56.8666167589,53.1810918988],
      [56.8696366929,53.180787819],
      [56.8706746391,53.1806868484]
  ]
  },
  {
    idStart: "1188",
    idEnd: "1187",
    lenght: "551.223",
    coordTop : [
      [56.8618297422,53.183385118],
      [56.8637373156,53.182289892],
      [56.8650861999,53.1816461593],
      [56.8662825268,53.1811311551],
      [56.8666167589,53.1810918988]
  ]
  },
  {
    idStart: "1189",
    idEnd: "1205",
    lenght: "929.737",
    coordTop : [
      [56.8610510397,53.1844626472],
      [56.8610995096,53.1854872656],
      [56.861139189,53.1864340899],
      [56.8611274031,53.1870161084],
      [56.8610671963,53.1876840058],
      [56.8609848907,53.1881668503],
      [56.8606704974,53.1894462309],
      [56.86054856,53.1899156006],
      [56.8604559895,53.1903715855],
      [56.8603619454,53.1910207081],
      [56.860316372,53.1916054215],
      [56.8602693744,53.192270624],
      [56.8602091172,53.193075245],
      [56.8601576996,53.1938664811],
      [56.8601092285,53.1951298717],
      [56.8601621195,53.1970208254],
      [56.8588374659,53.1973165508]
  ]
  },
  {
    idStart: "1189",
    idEnd: "1287",
    lenght: "1176.64",
    coordTop : [[56.8610510397,53.1844626472],[56.8610995096,53.1854872656],[56.861139189,53.1864340899],[56.8611274031,53.1870161084],[56.8610671963,53.1876840058],[56.8609848907,53.1881668503],[56.8606704974,53.1894462309],[56.86054856,53.1899156006],[56.8604559895,53.1903715855],[56.8603619454,53.1910207081],[56.860316372,53.1916054215],[56.8602693744,53.192270624],[56.8602091172,53.193075245],[56.8601576996,53.1938664811],[56.8601092285,53.1951298717],[56.8601621195,53.1970208254],[56.8601723833,53.1974338707],[56.8602326406,53.1985148135],[56.8603576238,53.2011789472],[56.8604088626,53.2024069005],[56.8604545162,53.2035010023]]
  },
  {
    idStart: "1189",
    idEnd: "1375",
    lenght: "1244.86",
    coordTop : [[56.8610510397,53.1844626472],[56.8610995096,53.1854872656],[56.861139189,53.1864340899],[56.8611274031,53.1870161084],[56.8610671963,53.1876840058],[56.8609848907,53.1881668503],[56.8606704974,53.1894462309],[56.86054856,53.1899156006],[56.8604559895,53.1903715855],[56.8603619454,53.1910207081],[56.860316372,53.1916054215],[56.8602693744,53.192270624],[56.8602091172,53.193075245],[56.8601576996,53.1938664811],[56.8601092285,53.1951298717],[56.8601621195,53.1970208254],[56.8601723833,53.1974338707],[56.8602326406,53.1985148135],[56.8603576238,53.2011789472],[56.8604088626,53.2024069005],[56.8607047509,53.2023114063],[56.8606244824,53.2006478632]]
  },
  {
    idStart: "1189",
    idEnd: "2259",
    lenght: "1174.06",
    coordTop : [[56.8610510397,53.1844626472],[56.8610995096,53.1854872656],[56.861139189,53.1864340899],[56.8611274031,53.1870161084],[56.8610671963,53.1876840058],[56.8609848907,53.1881668503],[56.8606704974,53.1894462309],[56.86054856,53.1899156006],[56.8604559895,53.1903715855],[56.8603619454,53.1910207081],[56.860316372,53.1916054215],[56.8602693744,53.192270624],[56.8602091172,53.193075245],[56.8601576996,53.1938664811],[56.8601092285,53.1951298717],[56.8601621195,53.1970208254],[56.8601723833,53.1974338707],[56.8602326406,53.1985148135],[56.8603576238,53.2011789472],[56.8603873876,53.2018845604],[56.8606818461,53.2018367099],[56.860631958,53.2008027921]]
  },
  {
    idStart: "1190",
    idEnd: "1191",
    lenght: "222.679",
    coordTop : [[56.8609481576,53.1788863551],[56.8610965631,53.1825395338]]
  },
  {
    idStart: "1191",
    idEnd: "1374",
    lenght: "842.321",
    coordTop : [[56.8610965631,53.1825395338],[56.8611288763,53.1830599279],[56.8611582921,53.1837625901],[56.8612008689,53.18464779],[56.8612346553,53.1854148614],[56.8612655442,53.1864073201],[56.861264071,53.1867988958],[56.8612346553,53.1871958613],[56.8611729755,53.1877000857],[56.8611054026,53.1881212159],[56.8610025207,53.1886522999],[56.8606851809,53.1898592763],[56.8605514574,53.1904788443],[56.8604721464,53.191125272],[56.8604383593,53.1914927728],[56.8602914245,53.1938182416],[56.8602473243,53.1946497222],[56.860240007,53.1951700264],[56.8602737943,53.1960954708]]
  },
  {
    idStart: "1192",
    idEnd: "1188",
    lenght: "393.03",
    coordTop : [[56.8607953809,53.1789078248],[56.8610113602,53.1834488086],[56.8610260436,53.1838216094],[56.8613242774,53.1836714111],[56.8618297422,53.183385118]]
  },
  {
    idStart: "1192",
    idEnd: "1189",
    lenght: "338.863",
    coordTop : [[56.8607953809,53.1789078248],[56.8610113602,53.1834488086],[56.8610260436,53.1838216094],[56.8610510397,53.1844626472]]
  },
  {
    idStart: "1192",
    idEnd: "2214",
    lenght: "4002.04",
    coordTop : [[56.8607953809,53.1789078248],[56.8610113602,53.1834488086],[56.8610260436,53.1838216094],[56.8610510397,53.1844626472],[56.8610995096,53.1854872656],[56.861139189,53.1864340899],[56.8611274031,53.1870161084],[56.8610671963,53.1876840058],[56.8609848907,53.1881668503],[56.8606704974,53.1894462309],[56.86054856,53.1899156006],[56.8604559895,53.1903715855],[56.8603619454,53.1910207081],[56.860316372,53.1916054215],[56.8602693744,53.192270624],[56.8602091172,53.193075245],[56.8601576996,53.1938664811],[56.8601092285,53.1951298717],[56.8601621195,53.1970208254],[56.8588374659,53.1973165508],[56.8566886898,53.1976652768],[56.8485460212,53.1991136305],[56.8446080735,53.1998880681],[56.8444640243,53.1999202278],[56.8444866733,53.2001916987],[56.844598051,53.2015915434],[56.8446286589,53.2020660335],[56.8446639341,53.2023503503],[56.8448256201,53.2042976283],[56.8448537222,53.2046201235],[56.845222487,53.2088627768],[56.8438523166,53.2092202629],[56.8404002046,53.2101042485],[56.8404241211,53.2106852502]]
  },
  {
    idStart: "1193",
    idEnd: "1193",
    lenght: "827.956",
    coordTop : [[56.8612755132,53.1822693206],[56.8611179252,53.1785292747],[56.8611061883,53.1780893698],[56.8610878218,53.1776452427],[56.860818904,53.177389672],[56.8607759132,53.177790531],[56.8607893673,53.1787351128],[56.8607953809,53.1789078248],[56.8610113602,53.1834488086],[56.8610260436,53.1838216094],[56.8613242774,53.1836714111],[56.8613066476,53.1833013052],[56.8612755132,53.1822693206]]
  },
  {
    idStart: "1193",
    idEnd: "1199",
    lenght: "2110.74",
    coordTop : [[56.8612755132,53.1822693206],[56.8611179252,53.1785292747],[56.8611061883,53.1780893698],[56.8610878218,53.1776452427],[56.8613165674,53.1773770057],[56.8615658387,53.1772697469],[56.8625995894,53.1770785854],[56.8630300526,53.1767057846],[56.8646720137,53.1765443573],[56.8648010576,53.1764907279],[56.8651646174,53.1761581716],[56.8682022952,53.1723707845],[56.8692961051,53.1709498294],[56.8699113899,53.1700501404],[56.8708860495,53.1695029135],[56.8711546457,53.1694484046],[56.8715126226,53.1693656963],[56.8743681427,53.1693337976],[56.8756517784,53.1695314668],[56.8762618997,53.1697507581]]
  },
  {
    idStart: "1193",
    idEnd: "1200",
    lenght: "1309.72",
    coordTop : [[56.8612755132,53.1822693206],[56.8611179252,53.1785292747],[56.8611061883,53.1780893698],[56.8610878218,53.1776452427],[56.8613165674,53.1773770057],[56.8615658387,53.1772697469],[56.8625995894,53.1770785854],[56.8630300526,53.1767057846],[56.8646720137,53.1765443573],[56.8648010576,53.1764907279],[56.8651646174,53.1761581716],[56.8682022952,53.1723707845],[56.8692961051,53.1709498294]]
  },
  {
    idStart: "1193",
    idEnd: "2216",
    lenght: "397.834",
    coordTop : [[56.8612755132,53.1822693206],[56.8611179252,53.1785292747],[56.8611061883,53.1780893698],[56.8610878218,53.1776452427],[56.860818904,53.177389672],[56.8607759132,53.177790531],[56.8607893673,53.1787351128]]
  },
  {
    idStart: "1194",
    idEnd: "1189",
    lenght: "567.305",
    coordTop : [[56.8653793929,53.1811482231],[56.8638416632,53.1818879858],[56.8621407865,53.1828427152],[56.8613066476,53.1833013052],[56.8610113602,53.1834488086],[56.8610260436,53.1838216094],[56.8610510397,53.1844626472]]
  },
  {
    idStart: "1194",
    idEnd: "1193",
    lenght: "534.31",
    coordTop : [[56.8653793929,53.1811482231],[56.8638416632,53.1818879858],[56.8621407865,53.1828427152],[56.8613066476,53.1833013052],[56.8612755132,53.1822693206]]
  },
  {
    idStart: "1194",
    idEnd: "2216",
    lenght: "932.144",
    coordTop : [[56.8653793929,53.1811482231],[56.8638416632,53.1818879858],[56.8621407865,53.1828427152],[56.8613066476,53.1833013052],[56.8612755132,53.1822693206],[56.8611179252,53.1785292747],[56.8611061883,53.1780893698],[56.8610878218,53.1776452427],[56.860818904,53.177389672],[56.8607759132,53.177790531],[56.8607893673,53.1787351128]]
  },
  {
    idStart: "1195",
    idEnd: "1174",
    lenght: "719.975",
    coordTop : [[56.8662106422,53.1805090718],[56.8663251959,53.184910637],[56.8663560807,53.1852217236],[56.8664015976,53.1853531471],[56.866467737,53.185441721],[56.8665749739,53.1854899606],[56.8676164912,53.1853800068],[56.8692264357,53.1852325034],[56.8701856429,53.1851305446]]
  },
  {
    idStart: "1196",
    idEnd: "1197",
    lenght: "221.183",
    coordTop : [[56.8611626628,53.1827353666],[56.8609995742,53.1791089576]]
  },
  {
    idStart: "1197",
    idEnd: "1201",
    lenght: "449.98",
    coordTop : [[56.8609995742,53.1791089576],[56.8609848907,53.1787254668],[56.8609819442,53.1785189441],[56.8610098869,53.1782104627],[56.8610686696,53.1779610005],[56.8611802926,53.1776900686],[56.8612332311,53.1775908946],[56.8613199068,53.1775131005],[56.8614080555,53.1774674661],[56.8615079407,53.1774380013],[56.8643478305,53.1769256921]]
  },
  {
    idStart: "1201",
    idEnd: "1195",
    lenght: "449.726",
    coordTop : [[56.8643478305,53.1769256921],[56.8646592958,53.1768559829],[56.8648179492,53.1768157383],[56.8649031925,53.1767942686],[56.8650882623,53.1766493704],[56.8655789455,53.1761826956],[56.8656993934,53.176145146],[56.8657670071,53.1761720056],[56.8658254386,53.1762076687],[56.8658870125,53.1762506082],[56.865936851,53.1763096275],[56.8659896355,53.1763900267],[56.8660277385,53.1764919855],[56.8660687876,53.1766207141],[56.8660981013,53.1767602225],[56.8661157288,53.1770391494],[56.8661333072,53.1775166039],[56.8662106422,53.1805090718]]
  },
  {
    idStart: "1203",
    idEnd: "1370",
    lenght: "564.012",
    coordTop : [[56.8553806126,53.2230443005],[56.8598220347,53.2210948665],[56.8602329844,53.2210058435],[56.8603238858,53.2210004536]]
  },
  {
    idStart: "1204",
    idEnd: "1834",
    lenght: "608.074",
    coordTop : [[56.8556680369,53.2224327275],[56.8549066916,53.2228546661],[56.8540091771,53.2232408519],[56.8503325469,53.2246000029]]
  },
  {
    idStart: "1205",
    idEnd: "1217",
    lenght: "239.872",
    coordTop : [[56.8588374659,53.1973165508],[56.8566886898,53.1976652768]]
  },
  {
    idStart: "1206",
    idEnd: "1207",
    lenght: "519.62",
    coordTop : [[56.8567032767,53.2026292772],[56.8562654226,53.2026668268],[56.8559333082,53.2027043763],[56.8556129785,53.2027580058],[56.8552573809,53.2027902553],[56.8537525861,53.2029886931],[56.8533205425,53.2030316326],[56.8520420161,53.2032247704]]
  },
  {
    idStart: "1207",
    idEnd: "1804",
    lenght: "404.277",
    coordTop : [[56.8520420161,53.2032247704],[56.8514189219,53.2033105595],[56.8509839041,53.2033964384],[56.8493702269,53.2036645856],[56.8484207529,53.2038147839]]
  },
  {
    idStart: "1208",
    idEnd: "1225",
    lenght: "412.553",
    coordTop : [[56.856471114,53.2027902553],[56.857049087,53.20273977],[56.8575995969,53.2026158923],[56.8600092904,53.2023248381],[56.8601709101,53.2023060633]]
  },
  {
    idStart: "1209",
    idEnd: "1208",
    lenght: "470.514",
    coordTop : [[56.8522509235,53.2033466718],[56.8526474661,53.20326762],[56.856471114,53.2027902553]]
  },
  {
    idStart: "1214",
    idEnd: "1216",
    lenght: "269.389",
    coordTop : [[56.8569379919,53.1979709735],[56.859351706,53.1975901776]]
  },
  {
    idStart: "1215",
    idEnd: "1214",
    lenght: "763.076",
    coordTop : [[56.8501052078,53.1991377952],[56.8569379919,53.1979709735]]
  },
  {
    idStart: "1216",
    idEnd: "1188",
    lenght: "1037.94",
    coordTop : [[56.859351706,53.1975901776],[56.8601723833,53.1974338707],[56.8604927231,53.1973748514],[56.8604794636,53.1969698011],[56.8603972058,53.1950923221],[56.8605208625,53.1927440361],[56.8606205537,53.1912419632],[56.8606674527,53.1907698086],[56.8607612995,53.190297744],[56.86086099,53.1899437179],[56.8609313625,53.1895896919],[56.8610545264,53.1892141961],[56.8612891652,53.188162718],[56.8613888543,53.1872507483],[56.8614181717,53.1863494686],[56.8613829614,53.1852980804],[56.8613242774,53.1836714111],[56.8618297422,53.183385118]]
  },
  {
    idStart: "1216",
    idEnd: "1193",
    lenght: "1064.51",
    coordTop : [[56.859351706,53.1975901776],[56.8601723833,53.1974338707],[56.8604927231,53.1973748514],[56.8604794636,53.1969698011],[56.8603972058,53.1950923221],[56.8605208625,53.1927440361],[56.8606205537,53.1912419632],[56.8606674527,53.1907698086],[56.8607612995,53.190297744],[56.86086099,53.1899437179],[56.8609313625,53.1895896919],[56.8610545264,53.1892141961],[56.8612891652,53.188162718],[56.8613888543,53.1872507483],[56.8614181717,53.1863494686],[56.8613829614,53.1852980804],[56.8613242774,53.1836714111],[56.8613066476,53.1833013052],[56.8612755132,53.1822693206]]
  },
  {
    idStart: "1217",
    idEnd: "1801",
    lenght: "909.696",
    coordTop : [[56.8566886898,53.1976652768],[56.8485460212,53.1991136305]]
  },
  {
    idStart: "1218",
    idEnd: "1366",
    lenght: "395.491",
    coordTop : [[56.8609363716,53.2102453738],[56.86097777,53.2109098576],[56.8610568836,53.2124520853],[56.8611712567,53.2146782903],[56.8612684416,53.2167229457]]
  },
  {
    idStart: "1220",
    idEnd: "1227",
    lenght: "513.549",
    coordTop : [[56.8609393181,53.2097760041],[56.8608761155,53.2085314781],[56.8608100153,53.2071367538],[56.860738022,53.2057554144],[56.8606983421,53.204910459],[56.8606028745,53.2030195053],[56.8605955082,53.2028263676],[56.860582347,53.202637362],[56.8605558773,53.2025327083],[56.8605146748,53.2024252698],[56.8604838834,53.2023610402],[56.8604471498,53.2023154957],[56.8604074697,53.2022671663],[56.8603839955,53.2022456966],[56.8603531058,53.2022296167],[56.8602825848,53.2022055419],[56.8599872893,53.2022403965]]
  },
  {
    idStart: "1220",
    idEnd: "1377",
    lenght: "412.414",
    coordTop : [[56.8609393181,53.2097760041],[56.8608761155,53.2085314781],[56.8608100153,53.2071367538],[56.860738022,53.2057554144],[56.8606983421,53.204910459],[56.8606028745,53.2030195053]]
  },
  {
    idStart: "1221",
    idEnd: "1218",
    lenght: "538.061",
    coordTop: [[56.8605000403,53.2014303856],[56.8605132998,53.2017790218],[56.8605647169,53.2028036402],[56.8605852935,53.2034071284],[56.8606352373,53.204415667],[56.8606654883,53.2049501646],[56.8606881275,53.205477835],[56.8609363716,53.2102453738]]
  },
  {
    idStart: "1225",
    idEnd: "1218",
    lenght: "515.967",
    coordTop : [[56.8601709101,53.2023060633],[56.8602899512,53.2022967209],[56.8603672001,53.202321694],[56.8603871876,53.2023242093],[56.8604071259,53.2023331925],[56.8604265731,53.2023539436],[56.8604522081,53.2023766709],[56.8604962098,53.2024531176],[56.8605426669,53.2026238873],[56.8605647169,53.2028036402],[56.8605852935,53.2034071284],[56.8606352373,53.204415667],[56.8606654883,53.2049501646],[56.8606881275,53.205477835],[56.8609363716,53.2102453738]]
  },
  {
    idStart: "1225",
    idEnd: "1226",
    lenght: "382.142",
    coordTop : [[56.8601709101,53.2023060633],[56.8602899512,53.2022967209],[56.8603898395,53.2022243167],[56.8604471498,53.2021518226],[56.86048683,53.2020660335],[56.8605161972,53.2019560797],[56.8605411937,53.2018085763],[56.860554404,53.2016449033],[56.8605338273,53.2011460688],[56.8604706731,53.1996681605],[56.8604250998,53.1986059925],[56.860370736,53.1974338707],[56.8603325781,53.1964709666]]
  },
  {
    idStart: "1226",
    idEnd: "1196",
    lenght: "853.252",
    coordTop : [[56.8603325781,53.1964709666],[56.8603002151,53.1956689507],[56.860288478,53.1952425204],[56.8602870047,53.1946014827],[56.8603516325,53.193423971],[56.8604250998,53.1922920937],[56.8605088799,53.1911306619],[56.8605926107,53.1904654594],[56.8606866542,53.1900014796],[56.8609114245,53.189177994],[56.8609805201,53.188912452],[56.8610995096,53.1884109225],[56.8612199719,53.1876760108],[56.8612919643,53.1869785588],[56.8613095941,53.1865521285],[56.8612713881,53.1854282463],[56.8612346553,53.1844331825],[56.8611993956,53.1835453775],[56.8611626628,53.1827353666]]
  },
  {
    idStart: "1227",
    idEnd: "1206",
    lenght: "365.93",
    coordTop : [[56.8599872893,53.2022403965],[56.8567032767,53.2026292772]]
  },
  {
    idStart: "1228",
    idEnd: "1261",
    lenght: "587.983",
    coordTop : [[56.8493422264,53.2659159483],[56.8493995537,53.2665462961],[56.849499471,53.2676808683],[56.8495200537,53.2679518002],[56.8495935423,53.269298285],[56.8495935423,53.2701377606],[56.8495876475,53.2713662068],[56.8495789036,53.2755531645]]
  },
  {
    idStart: "1229",
    idEnd: "1230",
    lenght: "367.779",
    coordTop : [[56.8524050122,53.2790883046],[56.8557070345,53.2787396685]]
  },
  {
    idStart: "1230",
    idEnd: "459",
    lenght: "754.613",
    coordTop : [[56.8557070345,53.2787396685],[56.8565181164,53.2786564845],[56.8573689132,53.2785089811],[56.8578949605,53.2784097173],[56.858553209,53.2782676038],[56.8596008429,53.2780476064],[56.8624556095,53.277452203]]
  },
  {
    idStart: "1231",
    idEnd: "1232",
    lenght: "376.47",
    coordTop : [[56.8556041377,53.278688734],[56.8522242514,53.279050755]]
  },
  {
    idStart: "1232",
    idEnd: "1262",
    lenght: "504.114",
    coordTop : [[56.8522242514,53.279050755],[56.85179946,53.2790978268],[56.851126258,53.279167536],[56.8506114628,53.2792264655],[56.8505102712,53.2792372453],[56.8504178724,53.2792372453],[56.8503576975,53.2792371555],[56.8502608772,53.2792156857],[56.8501963794,53.279191521],[56.8500922394,53.2791298966],[56.85004965,53.279103037],[56.8499777833,53.2790306328],[56.8498228495,53.2789059466],[56.8496626588,53.2785626105],[56.8495862721,53.2783051534],[56.8494965727,53.2778518635],[56.8495039412,53.2774307333],[56.8496359358,53.2756160466],[56.8496347568,53.2752635476]]
  },
  {
    idStart: "1233",
    idEnd: "1237",
    lenght: "548.609",
    coordTop : [[56.8346706737,53.2564270439],[56.8357586827,53.2489198231],[56.8356752404,53.2476764649]]
  },
  {
    idStart: "1234",
    idEnd: "1236",
    lenght: "369.125",
    coordTop : [[56.8353984737,53.2498502981],[56.8345768106,53.2557296818]]
  },
  {
    idStart: "1234",
    idEnd: "1251",
    lenght: "1138.92",
    coordTop : [[56.8353984737,53.2498502981],[56.8345768106,53.2557296818],[56.8334110697,53.2636239867],[56.8322691775,53.2675854672]]
  },
  {
    idStart: "1236",
    idEnd: "1251",
    lenght: "769.798",
    coordTop : [[56.8345768106,53.2557296818],[56.8334110697,53.2636239867],[56.8322691775,53.2675854672]]
  },
  {
    idStart: "1237",
    idEnd: "1239",
    lenght: "472.963",
    coordTop : [[56.8356752404,53.2476764649],[56.8348167754,53.2400611768]]
  },
  {
    idStart: "1239",
    idEnd: "1244",
    lenght: "990.198",
    coordTop : [[56.8348167754,53.2400611768],[56.8342822458,53.2350684302],[56.8343820069,53.2348001933],[56.8348641981,53.2346423593],[56.8386413116,53.2332655115],[56.8388086252,53.2332121515],[56.8387276548,53.2328306543],[56.8385170997,53.2306533177]]
  },
  {
    idStart: "1239",
    idEnd: "1246",
    lenght: "383.672",
    coordTop : [[56.8348167754,53.2400611768],[56.8342822458,53.2350684302],[56.8343820069,53.2348001933],[56.8348641981,53.2346423593]]
  },
  {
    idStart: "1239",
    idEnd: "1782",
    lenght: "1013.71",
    coordTop : [[56.8348167754,53.2400611768],[56.8342822458,53.2350684302],[56.8343820069,53.2348001933],[56.8332606377,53.2237359134]]
  },
  {
    idStart: "1239",
    idEnd: "1784",
    lenght: "2248.41",
    coordTop : [[56.8348167754,53.2400611768],[56.8342822458,53.2350684302],[56.8343820069,53.2348001933],[56.8332606377,53.2237359134],[56.8327375369,53.2183359606],[56.8341411056,53.2178656926],[56.8374578596,53.2167699276],[56.83749609,53.2169362057],[56.8375637055,53.2171185637],[56.8376548585,53.2172259124],[56.8377636522,53.2173438612],[56.8379635978,53.2173010116],[56.8381429533,53.2171185637],[56.8382370041,53.2168181671],[56.8382693862,53.2165874797],[56.8403637953,53.2159190433]]
  },
  {
    idStart: "1242",
    idEnd: "1897",
    lenght: "682.105",
    coordTop : [[56.8391933208,53.233072733],[56.8452116442,53.2309020273]]
  },
  {
    idStart: "1243",
    idEnd: "1242",
    lenght: "201.879",
    coordTop : [[56.8384094696,53.2310135975],[56.8386089789,53.2328953157],[56.8386413116,53.2332655115],[56.8388086252,53.2332121515],[56.8391933208,53.233072733]]
  },
  {
    idStart: "1243",
    idEnd: "1245",
    lenght: "1024.91",
    coordTop : [[56.8384094696,53.2310135975],[56.8386089789,53.2328953157],[56.835145883,53.2341380451],[56.83417069,53.2345319564],[56.8340767765,53.2350094109],[56.8340992843,53.2352736953],[56.8347303332,53.2410399811]]
  },
  {
    idStart: "1243",
    idEnd: "1247",
    lenght: "509.011",
    coordTop : [[56.8384094696,53.2310135975],[56.8386089789,53.2328953157],[56.835145883,53.2341380451]]
  },
  {
    idStart: "1244",
    idEnd: "1778",
    lenght: "582.211",
    coordTop : [[56.8385170997,53.2306533177],[56.8385192011,53.2301036029],[56.8385759184,53.2294566481],[56.8386549292,53.2292458918],[56.8386745068,53.2290351382],[56.838666466,53.2288602945],[56.8386098615,53.2285528203],[56.8385701337,53.2284313882],[56.8384992874,53.2282385967],[56.8384091929,53.2278560193],[56.838150275,53.2212652769]]
  },
  {
    idStart: "1244",
    idEnd: "1832",
    lenght: "480.78",
    coordTop : [[56.8385170997,53.2306533177],[56.8385192011,53.2301036029],[56.8385759184,53.2294566481],[56.8386549292,53.2292458918],[56.8386745068,53.2290351382],[56.8389971162,53.2289857578],[56.8420282716,53.2279442511]]
  },
  {
    idStart: "1244",
    idEnd: "2213",
    lenght: "2023.29",
    coordTop : [[56.8385170997,53.2306533177],[56.8385192011,53.2301036029],[56.8385759184,53.2294566481],[56.8386549292,53.2292458918],[56.8386745068,53.2290351382],[56.8389971162,53.2289857578],[56.8420282716,53.2279442511],[56.8452777124,53.2268582504],[56.845460615,53.2268013245],[56.8454253405,53.2264580782],[56.8448257183,53.220605644],[56.844314079,53.2146509815],[56.8442846991,53.2143130353],[56.8441024251,53.2143881344],[56.840884059,53.2153963224]]
  },
  {
    idStart: "1245",
    idEnd: "1234",
    lenght: "547.57",
    coordTop : [[56.8347303332,53.2410399811],[56.8350510873,53.2439138714],[56.8355039322,53.2480873543],[56.8355532215,53.2486730559],[56.8355591185,53.2488875736],[56.8353984737,53.2498502981]]
  },
  {
    idStart: "1245",
    idEnd: "1251",
    lenght: "1686.49",
    coordTop : [[56.8347303332,53.2410399811],[56.8350510873,53.2439138714],[56.8355039322,53.2480873543],[56.8355532215,53.2486730559],[56.8355591185,53.2488875736],[56.8353984737,53.2498502981],[56.8345768106,53.2557296818],[56.8334110697,53.2636239867],[56.8322691775,53.2675854672]]
  },
  {
    idStart: "1246",
    idEnd: "1242",
    lenght: "490.758",
    coordTop : [[56.8348641981,53.2346423593],[56.8386413116,53.2332655115],[56.8388086252,53.2332121515],[56.8391933208,53.233072733]]
  },
  {
    idStart: "1246",
    idEnd: "1244",
    lenght: "606.526",
    coordTop : [[56.8348641981,53.2346423593],[56.8386413116,53.2332655115],[56.8388086252,53.2332121515],[56.8387276548,53.2328306543],[56.8385170997,53.2306533177]]
  },
  {
    idStart: "1247",
    idEnd: "1245",
    lenght: "515.901",
    coordTop : [[56.835145883,53.2341380451],[56.83417069,53.2345319564],[56.8340767765,53.2350094109],[56.8340992843,53.2352736953],[56.8347303332,53.2410399811]]
  },
  {
    idStart: "1248",
    idEnd: "1244",
    lenght: "265.59",
    coordTop : [[56.8398865393,53.2324338512],[56.8387276548,53.2328306543],[56.8385170997,53.2306533177]]
  },
  {
    idStart: "1248",
    idEnd: "1247",
    lenght: "537.3",
    coordTop : [[56.8398865393,53.2324338512],[56.8387276548,53.2328306543],[56.8386089789,53.2328953157],[56.835145883,53.2341380451]]
  },
  {
    idStart: "1251",
    idEnd: "312",
    lenght: "4634.32",
    coordTop : [[56.8322691775,53.2675854672],[56.8318084791,53.2692532794],[56.83177329,53.2704066264],[56.8318232231,53.271678012],[56.8320948324,53.2736412048],[56.832119203,53.2738301856],[56.8327837336,53.2787120902],[56.8328627643,53.279252876],[56.8329717497,53.280744337],[56.8330934521,53.2814038979],[56.8331702016,53.2816636848],[56.8339788253,53.2833428072],[56.8345674088,53.284644929],[56.8352324956,53.2858712702],[56.8367120516,53.2878675203],[56.837685307,53.2893331727],[56.8381159516,53.2902035294],[56.8382463643,53.2905263957],[56.8383651606,53.2908318342],[56.8387507277,53.2921202712],[56.8389647688,53.292992444],[56.8390474268,53.2934667487],[56.8391336077,53.2947594472],[56.8393232371,53.3018090157],[56.8395597231,53.308987123],[56.8395706875,53.3094368991],[56.8395741798,53.3108222802],[56.8397062094,53.3135474094],[56.8408241427,53.3198988578],[56.8409913974,53.3214974997],[56.8410647554,53.3229029139],[56.8410676543,53.3233696786],[56.8410737642,53.3247967482],[56.8408396258,53.328269812],[56.8407972293,53.3288647108],[56.8405059067,53.3326070259],[56.8400524955,53.3383352664]]
  },
  {
    idStart: "1251",
    idEnd: "1250",
    lenght: "864.41",
    coordTop : [[56.8322691775,53.2675854672],[56.8318084791,53.2692532794],[56.83177329,53.2704066264],[56.8318232231,53.271678012],[56.8320948324,53.2736412048],[56.8318070487,53.2741905659],[56.8316456007,53.2742925646],[56.8309368112,53.2744103261],[56.8304214801,53.2744345251],[56.8303278842,53.2744817727],[56.8302536566,53.2745978818],[56.8302226535,53.2749573879],[56.8305457899,53.2787617769]]
  },
  {
    idStart: "1251",
    idEnd: "1252",
    lenght: "702.514",
    coordTop : [[56.8322691775,53.2675854672],[56.8318084791,53.2692532794],[56.83177329,53.2704066264],[56.8318232231,53.271678012],[56.8320948324,53.2736412048],[56.832119203,53.2738301856],[56.8327837336,53.2787120902]]
  },
  {
    idStart: "1251",
    idEnd: "1939",
    lenght: "2829.5",
    coordTop : [[56.8322691775,53.2675854672],[56.8318084791,53.2692532794],[56.83177329,53.2704066264],[56.8318232231,53.271678012],[56.8320948324,53.2736412048],[56.832119203,53.2738301856],[56.8327837336,53.2787120902],[56.8328627643,53.279252876],[56.833185741,53.2797032913],[56.8334912212,53.2801150799],[56.8341180012,53.2809599819],[56.8344462937,53.2812825354],[56.8347411493,53.2814124957],[56.8350760643,53.2814498632],[56.8375370229,53.2812032981],[56.8419215048,53.2808083089],[56.8420263733,53.2808007688],[56.8487612851,53.2800538139],[56.8485054441,53.2816035874],[56.8482620791,53.2822642085],[56.8477976475,53.2843241353]]
  },
  {
    idStart: "1252",
    idEnd: "388",
    lenght: "970.249",
    coordTop : [[56.8327837336,53.2787120902],[56.8328627643,53.279252876],[56.8329717497,53.280744337],[56.8330934521,53.2814038979],[56.8331702016,53.2816636848],[56.8339788253,53.2833428072],[56.8345674088,53.284644929],[56.8352324956,53.2858712702],[56.8367120516,53.2878675203],[56.837685307,53.2893331727],[56.8381159516,53.2902035294],[56.8382463643,53.2905263957]]
  },
  {
    idStart: "1252",
    idEnd: "1254",
    lenght: "594.562",
    coordTop : [[56.8327837336,53.2787120902],[56.8328627643,53.279252876],[56.833185741,53.2797032913],[56.8334912212,53.2801150799],[56.8341180012,53.2809599819],[56.8344462937,53.2812825354],[56.8347411493,53.2814124957],[56.8350760643,53.2814498632],[56.8375370229,53.2812032981]]
  },
  {
    idStart: "1253",
    idEnd: "1256",
    lenght: "714.972",
    coordTop : [[56.833176944,53.2791400476],[56.8329349969,53.2787902501],[56.8328990575,53.2785372883],[56.8322209445,53.273418354],[56.8320169588,53.2716352522],[56.831970024,53.2703907262],[56.8320111104,53.2693714977],[56.8323933694,53.2679659038]]
  },
  {
    idStart: "1254",
    idEnd: "405",
    lenght: "597.699",
    coordTop : [[56.8375370229,53.2812032981],[56.8419215048,53.2808083089],[56.8419919129,53.2826053886]]
  },
  {
    idStart: "1254",
    idEnd: "415",
    lenght: "1555.57",
    coordTop : [[56.8375370229,53.2812032981],[56.8419215048,53.2808083089],[56.8420263733,53.2808007688],[56.8487612851,53.2800538139],[56.8485054441,53.2816035874],[56.8481717379,53.2836251561],[56.8478619038,53.2847882948]]
  },
  {
    idStart: "1255",
    idEnd: "1253",
    lenght: "500.816",
    coordTop : [[56.8373664604,53.2808310363],[56.8350419612,53.2810522572],[56.8348335008,53.2810115197],[56.8345937221,53.2808977138],[56.8343266689,53.2806909513],[56.833176944,53.2791400476]]
  },
  {
    idStart: "1256",
    idEnd: "1233",
    lenght: "751.136",
    coordTop : [[56.8323933694,53.2679659038],[56.8336307945,53.2637248675],[56.8346706737,53.2564270439]]
  },
  {
    idStart: "1256",
    idEnd: "1237",
    lenght: "1299.75",
    coordTop : [[56.8323933694,53.2679659038],[56.8336307945,53.2637248675],[56.8346706737,53.2564270439],[56.8357586827,53.2489198231],[56.8356752404,53.2476764649]]
  },
  {
    idStart: "1256",
    idEnd: "1239",
    lenght: "1772.71",
    coordTop : [[56.8323933694,53.2679659038],[56.8336307945,53.2637248675],[56.8346706737,53.2564270439],[56.8357586827,53.2489198231],[56.8356752404,53.2476764649],[56.8348167754,53.2400611768]]
  },
  {
    idStart: "1256",
    idEnd: "1779",
    lenght: "4034.33",
    coordTop : [[56.8323933694,53.2679659038],[56.8336307945,53.2637248675],[56.8346706737,53.2564270439],[56.8357586827,53.2489198231],[56.8356752404,53.2476764649],[56.8348167754,53.2400611768],[56.8342822458,53.2350684302],[56.8343820069,53.2348001933],[56.8332606377,53.2237359134],[56.8327375369,53.2183359606],[56.8341411056,53.2178656926],[56.8374578596,53.2167699276],[56.83749609,53.2169362057],[56.8375637055,53.2171185637],[56.8376548585,53.2172259124],[56.8377636522,53.2173438612],[56.8379635978,53.2173010116],[56.8381429533,53.2171185637],[56.8382370041,53.2168181671],[56.8382693862,53.2165874797],[56.8382429007,53.2163085528],[56.8381635423,53.2160778655],[56.838057649,53.2159169772],[56.837987086,53.2158633478],[56.8379165229,53.2157882486],[56.8378385889,53.2127840128]]
  },
  {
    idStart: "1261",
    idEnd: "1229",
    lenght: "513.131",
    coordTop : [[56.8495789036,53.2755531645],[56.8495759562,53.275687283],[56.849543633,53.2762640014],[56.849509836,53.2768084703],[56.8494730917,53.2773368593],[56.8494525089,53.2776184812],[56.84945693,53.2778330887],[56.8495009938,53.2781039307],[56.8495597946,53.2783560878],[56.8496494447,53.2786404046],[56.849802316,53.2789568811],[56.8500154114,53.2791741836],[56.8502181898,53.2792814424],[56.8503769535,53.2793029121],[56.8505429866,53.2792868323],[56.8507370184,53.2792626676],[56.8524050122,53.2790883046]]
  },
  {
    idStart: "1262",
    idEnd: "1263",
    lenght: "604.154",
    coordTop : [[56.8496347568,53.2752635476],[56.8496376551,53.269298285],[56.8495553243,53.2678713112],[56.8493319595,53.2653687844]]
  },
  {
    idStart: "1263",
    idEnd: "1269",
    lenght: "678.072",
    coordTop : [[56.8493319595,53.2653687844],[56.8491589946,53.2633120018],[56.8490225772,53.2611902709],[56.8489448136,53.25994835],[56.8488949034,53.2591918787],[56.8488479897,53.2586179451],[56.8487834402,53.2582879939],[56.8485427298,53.2573436849],[56.8484472312,53.2568528454],[56.8483840074,53.2551871892],[56.8483516832,53.2544308077]]
  },
  {
    idStart: "1265",
    idEnd: "1266",
    lenght: "351.129",
    coordTop : [[56.8474698301,53.2494231492],[56.8480959376,53.2523118616],[56.8482061747,53.2529207397],[56.8482517628,53.2533150103],[56.8482870347,53.2537334456],[56.8483340473,53.2549296422]]
  },
  {
    idStart: "1266",
    idEnd: "1228",
    lenght: "680.948",
    coordTop : [[56.8483340473,53.2549296422],[56.8483487357,53.2551925791],[56.8483840074,53.2559354858],[56.8484045908,53.2564263253],[56.8484192791,53.2568796152],[56.8484825028,53.2571934865],[56.8485177744,53.2573651546],[56.8487456635,53.2583100924],[56.8488087393,53.2586454335],[56.8488527056,53.2591361832],[56.848901093,53.2598523201],[56.8489509541,53.2606542462],[56.8490037626,53.2615071965],[56.8490476796,53.2621669193],[56.8490873227,53.2627516327],[56.8491151269,53.2631994429],[56.849148875,53.2636313529],[56.8491957884,53.2641919016],[56.8493422264,53.2659159483]]
  },
  {
    idStart: "1266",
    idEnd: "1271",
    lenght: "528.191",
    coordTop : [[56.8483340473,53.2549296422],[56.8483487357,53.2551925791],[56.8484516033,53.255612272],[56.8486205924,53.2561567409],[56.8487764154,53.2564075505],[56.8489704073,53.2565269366],[56.8492761058,53.2565966459],[56.8496729256,53.2566556652],[56.8525529529,53.2571612233]]
  },
  {
    idStart: "1269",
    idEnd: "1270",
    lenght: "347.575",
    coordTop : [[56.8483516832,53.2544308077],[56.8483266786,53.2537656052],[56.8482870347,53.2532962355],[56.8482473416,53.2528858851],[56.8481444734,53.2523333314],[56.8474330837,53.2490047139]]
  },
  {
    idStart: "1270",
    idEnd: "1898",
    lenght: "456.544",
    coordTop : [[56.8474330837,53.2490047139],[56.8471097337,53.2474704812],[56.8470186037,53.2468052788],[56.8466393925,53.2416741917]]
  },
  {
    idStart: "1276",
    idEnd: "1277",
    lenght: "532.981",
    coordTop : [[56.8611185636,53.2346347236],[56.8627405733,53.2357692958],[56.8627905141,53.2358470899],[56.8628272454,53.2359543488],[56.8628389818,53.2360590025],[56.8628360354,53.2362065059],[56.8621484963,53.239567283],[56.8621176081,53.239752336],[56.8621220277,53.239918704],[56.8621352375,53.240009883],[56.8621646525,53.240090372],[56.8621940184,53.2401600813],[56.8622910042,53.24027273],[56.8626259595,53.2404980275]]
  },
  {
    idStart: "1277",
    idEnd: "1278",
    lenght: "486.053",
    coordTop : [[56.8626259595,53.2404980275],[56.8635971703,53.2411238837],[56.8652116088,53.2422280929],[56.8667262049,53.2432687911]]
  },
  {
    idStart: "1278",
    idEnd: "1312",
    lenght: "541.955",
    coordTop : [[56.8667262049,53.2432687911],[56.8668026058,53.2433170307],[56.8672888475,53.2436657567],[56.8674342818,53.2437649307],[56.8676502227,53.2439339038],[56.8678764241,53.2441002718],[56.8681746524,53.2443255692],[56.868359706,53.2444596877],[56.8687783685,53.2447788591],[56.869067752,53.244969302],[56.869558383,53.2452776936],[56.8712930924,53.2463747162]]
  },
  {
    idStart: "1279",
    idEnd: "1276",
    lenght: "324.037",
    coordTop : [[56.8608026981,53.2305779318],[56.8605476269,53.2318333274],[56.8603555121,53.2327747618],[56.8602120147,53.2335296162],[56.8601988042,53.2336422649],[56.8601958577,53.2337254489],[56.8602046974,53.2337978531],[56.8602296449,53.2338998119],[56.8602752184,53.2339963808],[56.860332529,53.2340794749],[56.8604588869,53.2341760438],[56.8611185636,53.2346347236]]
  },
  {
    idStart: "1282",
    idEnd: "1283",
    lenght: "491.742",
    coordTop : [[56.8665646136,53.2430944282],[56.8663193038,53.2429146753],[56.864519645,53.2416956614],[56.8624173555,53.2402861149]]
  },
  {
    idStart: "1283",
    idEnd: "1284",
    lenght: "529.541",
    coordTop : [[56.8624173555,53.2402861149],[56.8623042139,53.2402083208],[56.8622395895,53.2401359166],[56.8621867015,53.2399938031],[56.8621631793,53.2398864544],[56.8621602329,53.2397362561],[56.8621852282,53.2395645881],[56.8628639767,53.2362467504],[56.8628786594,53.2361180218],[56.8628742398,53.2359999832],[56.8628537136,53.2359167992],[56.8628331382,53.235844395],[56.8628125627,53.2357853757],[56.8627817242,53.2357317463],[56.8627273637,53.2356808118],[56.8609334251,53.2344308959]]
  },
  {
    idStart: "1284",
    idEnd: "1371",
    lenght: "444.493",
    coordTop : [[56.8609334251,53.2344308959],[56.8603560032,53.2340366253],[56.8602663788,53.2338917271],[56.8602325915,53.2337388338],[56.8602370114,53.2335618657],[56.8605429125,53.2320554808],[56.8608331946,53.2306392867],[56.8609422646,53.23008835],[56.861309545,53.2282912702]]
  },
  {
    idStart: "1288",
    idEnd: "1303",
    lenght: "624.476",
    coordTop : [[56.8742204068,53.2226975508],[56.8758345421,53.2225760087],[56.8759937725,53.2225637029],[56.8767132398,53.2225346771],[56.8769565498,53.2225549317],[56.8773817224,53.2226273986],[56.8777982656,53.2227963114],[56.8796815812,53.224154708]]
  },
  {
    idStart: "1289",
    idEnd: "1288",
    lenght: "456.456",
    coordTop : [[56.8701195592,53.223035497],[56.87189828,53.2228943717],[56.8720947048,53.2228782918],[56.8742204068,53.2226975508]]
  },
  {
    idStart: "1289",
    idEnd: "1294",
    lenght: "483.24",
    coordTop : [[56.8701195592,53.223035497],[56.87189828,53.2228943717],[56.8718546844,53.2275879792]]
  },
  {
    idStart: "1292",
    idEnd: "1293",
    lenght: "353.13",
    coordTop : [[56.8773802217,53.2222943428],[56.8769731003,53.2222250076],[56.8766971184,53.2221951564],[56.8759689863,53.2221688954],[56.8758196944,53.2221702878],[56.874208674,53.2223113651]]
  },
  {
    idStart: "1292",
    idEnd: "1295",
    lenght: "719.975",
    coordTop : [[56.8773802217,53.2222943428],[56.8769731003,53.2222250076],[56.8766971184,53.2221951564],[56.8759689863,53.2221688954],[56.8759603157,53.2217661515],[56.8758251621,53.2159919865],[56.8757609777,53.2129147201]]
  },
  {
    idStart: "1293",
    idEnd: "1290",
    lenght: "572.453",
    coordTop : [[56.874208674,53.2223113651],[56.8721083529,53.2225045029],[56.8719026984,53.2225151928],[56.8697913974,53.22267132],[56.8697376363,53.221345766]]
  },
  {
    idStart: "1293",
    idEnd: "1294",
    lenght: "565.034",
    coordTop : [[56.874208674,53.2223113651],[56.8721083529,53.2225045029],[56.8719026984,53.2225151928],[56.87189828,53.2228943717],[56.8718546844,53.2275879792]]
  },
  {
    idStart: "1293",
    idEnd: "1369",
    lenght: "578.431",
    coordTop : [[56.874208674,53.2223113651],[56.8721083529,53.2225045029],[56.8719026984,53.2225151928],[56.8697913974,53.22267132],[56.8696436156,53.2226868609],[56.8690124678,53.2227533362]]
  },
  {
    idStart: "1293",
    idEnd: "1809",
    lenght: "4085.78",
    coordTop : [[56.874208674,53.2223113651],[56.8721083529,53.2225045029],[56.8719026984,53.2225151928],[56.8697913974,53.22267132],[56.8696436156,53.2226868609],[56.8690124678,53.2227533362],[56.8670940668,53.2229182669],[56.8652175012,53.2231006249],[56.8645020167,53.2230577752],[56.8639741964,53.2228646374],[56.8616868397,53.221126577],[56.861428779,53.2209012796],[56.8606420634,53.220614178],[56.8604965045,53.220612022],[56.8597751347,53.2206549615],[56.8556680369,53.2224327275],[56.8549066916,53.2228546661],[56.8540091771,53.2232408519],[56.8503325469,53.2246000029],[56.8467492408,53.2260200597],[56.8460849384,53.2181799232],[56.8460700526,53.2179159084],[56.8459556334,53.2164943244],[56.8459362769,53.2163337955],[56.845765114,53.2142041595],[56.8457443818,53.2138323468],[56.8454598289,53.2102876845]]
  },
  {
    idStart: "1293",
    idEnd: "2246",
    lenght: "1080.54",
    coordTop : [[56.874208674,53.2223113651],[56.8721083529,53.2225045029],[56.8719026984,53.2225151928],[56.8697913974,53.22267132],[56.8696436156,53.2226868609],[56.8690124678,53.2227533362],[56.8670940668,53.2229182669],[56.8652175012,53.2231006249],[56.8645020167,53.2230577752]]
  },
  {
    idStart: "1295",
    idEnd: "1378",
    lenght: "408.834",
    coordTop : [[56.8757609777,53.2129147201],[56.8755976417,53.2078837382],[56.8756479957,53.2075538416],[56.8758624165,53.2062663761]]
  },
  {
    idStart: "1295",
    idEnd: "1379",
    lenght: "562.944",
    coordTop : [[56.8757609777,53.2129147201],[56.8755976417,53.2078837382],[56.8756479957,53.2075538416],[56.8754721056,53.2075719906],[56.8735291478,53.2077452714]]
  },
  {
    idStart: "1296",
    idEnd: "1303",
    lenght: "922.096",
    coordTop : [[56.8756451977,53.2147294942],[56.8756715094,53.2161314949],[56.8758090569,53.2218277121],[56.8758196944,53.2221702878],[56.8758345421,53.2225760087],[56.8759937725,53.2225637029],[56.8767132398,53.2225346771],[56.8769565498,53.2225549317],[56.8773817224,53.2226273986],[56.8777982656,53.2227963114],[56.8796815812,53.224154708]]
  },
  {
    idStart: "1302",
    idEnd: "1292",
    lenght: "177.573",
    coordTop : [[56.87891346,53.2230983791],[56.878113157,53.222606308],[56.8775873282,53.2223682804],[56.8773802217,53.2222943428]]
  },
  {
    idStart: "1302",
    idEnd: "1368",
    lenght: "2067.51",
    coordTop : [[56.87891346,53.2230983791],[56.878113157,53.222606308],[56.8775873282,53.2223682804],[56.8773802217,53.2222943428],[56.8769731003,53.2222250076],[56.8766971184,53.2221951564],[56.8759689863,53.2221688954],[56.8758196944,53.2221702878],[56.874208674,53.2223113651],[56.8721083529,53.2225045029],[56.8719026984,53.2225151928],[56.8697913974,53.22267132],[56.8696436156,53.2226868609],[56.8690124678,53.2227533362],[56.8670940668,53.2229182669],[56.8652175012,53.2231006249],[56.8645020167,53.2230577752],[56.8639741964,53.2228646374],[56.8616868397,53.221126577],[56.861428779,53.2209012796],[56.8606420634,53.220614178]]
  },
  {
    idStart: "1303",
    idEnd: "1304",
    lenght: "817.943",
    coordTop : [[56.8796815812,53.224154708],[56.883271991,53.22662777],[56.8834302709,53.2267564986],[56.8848282583,53.2277757271],[56.8852072902,53.2281489868],[56.8853551402,53.228341016],[56.8854838741,53.2285948455],[56.8857941854,53.2287936441],[56.8859761081,53.2288239884],[56.8865016517,53.2289397641]]
  },
  {
    idStart: "1303",
    idEnd: "1361",
    lenght: "2156.02",
    coordTop : [[56.8796815812,53.224154708],[56.883271991,53.22662777],[56.8822691926,53.2314824455],[56.8819218485,53.2331810698],[56.8803849953,53.2384616366],[56.8809768817,53.2407022145],[56.8810381853,53.2409638938],[56.8811637861,53.2408180972],[56.8815854464,53.2404983868],[56.8870868089,53.2376922035],[56.8872691991,53.2387890155]]
  },
  {
    idStart: "1303",
    idEnd: "1362",
    lenght: "930.004",
    coordTop : [[56.8796815812,53.224154708],[56.883271991,53.22662777],[56.8834302709,53.2267564986],[56.8848282583,53.2277757271],[56.8852072902,53.2281489868],[56.8853551402,53.228341016],[56.8854838741,53.2285948455],[56.8856725963,53.2291873853],[56.8861559993,53.2321207832]]
  },
  {
    idStart: "1303",
    idEnd: "1363",
    lenght: "741.877",
    coordTop : [[56.8796815812,53.224154708],[56.883271991,53.22662777],[56.8822691926,53.2314824455]]
  },
  {
    idStart: "1303",
    idEnd: "2181",
    lenght: "702.214",
    coordTop : [[56.8796815812,53.224154708],[56.883271991,53.22662777],[56.8834302709,53.2267564986],[56.8848282583,53.2277757271],[56.8852072902,53.2281489868],[56.8853551402,53.228341016],[56.8854838741,53.2285948455]]
  },
  {
    idStart: "1311",
    idEnd: "460",
    lenght: "652.437",
    coordTop : [[56.8679704984,53.2752179132],[56.8676869983,53.2753788015],[56.8663090416,53.2762746913],[56.8660446295,53.2764517493],[56.8657772695,53.2766153325],[56.8655980463,53.2767092064],[56.8653306831,53.2767976905],[56.8622631116,53.2774253434]]
  },
  {
    idStart: "1312",
    idEnd: "1314",
    lenght: "412.349",
    coordTop : [[56.8712930924,53.2463747162],[56.8716999884,53.2466483431],[56.8718248351,53.2467985414],[56.8718953343,53.2469433498],[56.8719320567,53.2471097178],[56.8719540999,53.2473188456],[56.8719584692,53.2475790875],[56.8719658333,53.2478446295],[56.8720084469,53.2480350724],[56.8720760001,53.2482120405],[56.8721685419,53.2483407691],[56.872241986,53.2484132631],[56.8723124844,53.2484427279],[56.8733508964,53.2488523596],[56.8742820651,53.2492205791]]
  },
  {
    idStart: "1313",
    idEnd: "1280",
    lenght: "517.391",
    coordTop : [[56.8711183142,53.2462030482],[56.8698330806,53.2453850423],[56.8694849336,53.2451597448],[56.8691881887,53.244974602],[56.8687358003,53.2446929802],[56.8684698834,53.2444918474],[56.868192279,53.2442853247],[56.8678250171,53.243987623],[56.8676707955,53.2438775794],[56.8673182094,53.2436174273],[56.8671918746,53.2436094323],[56.8670934776,53.2436522819],[56.8670244424,53.2437113013],[56.866962723,53.2438105651],[56.866949515,53.2438561097],[56.8669304148,53.243907134],[56.8668761095,53.2441606386]]
  },
  {
    idStart: "1313",
    idEnd: "1282",
    lenght: "540.661",
    coordTop : [[56.8711183142,53.2462030482],[56.8698330806,53.2453850423],[56.8694849336,53.2451597448],[56.8691881887,53.244974602],[56.8687358003,53.2446929802],[56.8684698834,53.2444918474],[56.868192279,53.2442853247],[56.8678250171,53.243987623],[56.8676707955,53.2438775794],[56.8673182094,53.2436174273],[56.8668172869,53.2432767862],[56.8665646136,53.2430944282]]
  },
  {
    idStart: "1314",
    idEnd: "1317",
    lenght: "415.893",
    coordTop : [[56.8742820651,53.2492205791],[56.876896803,53.2502328906],[56.8774249809,53.2504195605],[56.8775366041,53.2504033908],[56.8777157701,53.2503202966],[56.8779331242,53.2501674034]]
  },
  {
    idStart: "1317",
    idEnd: "1958",
    lenght: "479.062",
    coordTop : [[56.8779331242,53.2501674034],[56.8786233673,53.2496657841],[56.8792122384,53.2492742085],[56.8793238563,53.2492474387],[56.8797849516,53.2492662135],[56.8802710246,53.2492822933],[56.8806689881,53.2492929833],[56.8810654749,53.2493037631],[56.8813356706,53.2493225378],[56.881497198,53.2493761673],[56.881663093,53.2494324916],[56.8817747037,53.249499506],[56.8819450638,53.2496336244],[56.8820977541,53.2498025975]]
  },
  {
    idStart: "1320",
    idEnd: "1321",
    lenght: "417.334",
    coordTop : [[56.8777642183,53.250204953],[56.8776247146,53.2502988269],[56.8775439671,53.2503390714],[56.8774631704,53.2503524563],[56.8772179321,53.2502827471],[56.8757605079,53.2497104304],[56.8750935787,53.2494609682],[56.8740940954,53.2490864606]]
  },
  {
    idStart: "1321",
    idEnd: "1313",
    lenght: "411.827",
    coordTop : [[56.8740940954,53.2490864606],[56.8738135381,53.248968422],[56.8733538419,53.2488075337],[56.8722742896,53.2483810136],[56.8721714384,53.2482818396],[56.8720715816,53.2481234666],[56.8720025556,53.2478740943],[56.8719878765,53.2475603128],[56.8719819853,53.2473162405],[56.8719638205,53.2470961532],[56.8719350023,53.2469594297],[56.8718552735,53.2467794073],[56.871810156,53.2466992776],[56.8717660694,53.2466456481],[56.8716926243,53.2465732439],[56.8711183142,53.2462030482]]
  },
  {
    idStart: "1337",
    idEnd: "1338",
    lenght: "547.429",
    coordTop : [[56.8697698929,53.2891117066],[56.8723579941,53.2885967024],[56.8724784202,53.2885645427],[56.8739976801,53.2856577741]]
  },
  {
    idStart: "1337",
    idEnd: "1342",
    lenght: "546.632",
    coordTop : [[56.8697698929,53.2891117066],[56.8723579941,53.2885967024],[56.8726135738,53.2928024349]]
  },
  {
    idStart: "1338",
    idEnd: "1343",
    lenght: "420.553",
    coordTop : [[56.8739976801,53.2856577741],[56.8747381172,53.2841990898],[56.8748143544,53.2842419394],[56.874902275,53.2842848789],[56.8750078186,53.2842956587],[56.8751309361,53.2843063486],[56.8752247467,53.2842741889],[56.875336131,53.28417762],[56.8768206681,53.2868325909]]
  },
  {
    idStart: "1338",
    idEnd: "1347",
    lenght: "1095.45",
    coordTop : [[56.8739976801,53.2856577741],[56.8747381172,53.2841990898],[56.8748143544,53.2842419394],[56.874902275,53.2842848789],[56.8750078186,53.2842956587],[56.8751309361,53.2843063486],[56.8752247467,53.2842741889],[56.875336131,53.28417762],[56.8754944445,53.2839737923],[56.8755940958,53.2836840856],[56.8756292928,53.2833300596],[56.8756175604,53.2830403529],[56.8755647895,53.2827184865],[56.8754651382,53.282493189],[56.8753068246,53.2822785815],[56.8754761342,53.2808585247],[56.875809646,53.2778208716],[56.8762549291,53.2739257765],[56.8767034467,53.2699688773]]
  },
  {
    idStart: "1338",
    idEnd: "1349",
    lenght: "849.906",
    coordTop : [[56.8739976801,53.2856577741],[56.8747381172,53.2841990898],[56.8748143544,53.2842419394],[56.874902275,53.2842848789],[56.8750078186,53.2842956587],[56.8751309361,53.2843063486],[56.8752247467,53.2842741889],[56.875336131,53.28417762],[56.8754944445,53.2839737923],[56.8755940958,53.2836840856],[56.8756292928,53.2833300596],[56.8756175604,53.2830403529],[56.8755647895,53.2827184865],[56.8754651382,53.282493189],[56.8753068246,53.2822785815],[56.8754761342,53.2808585247],[56.875809646,53.2778208716],[56.8762549291,53.2739257765]]
  },
  {
    idStart: "1338",
    idEnd: "1352",
    lenght: "729.168",
    coordTop : [[56.8739976801,53.2856577741],[56.8747381172,53.2841990898],[56.8748143544,53.2842419394],[56.874902275,53.2842848789],[56.8750078186,53.2842956587],[56.8751309361,53.2843063486],[56.8752247467,53.2842741889],[56.875336131,53.28417762],[56.8754944445,53.2839737923],[56.8755940958,53.2836840856],[56.8756292928,53.2833300596],[56.8756175604,53.2830403529],[56.8755647895,53.2827184865],[56.8754651382,53.282493189],[56.8753068246,53.2822785815],[56.8751571992,53.2821925229],[56.8750692301,53.282181833],[56.874957845,53.282181833],[56.8748699245,53.2822354624],[56.8747526479,53.2823212515],[56.8746705688,53.2824392901],[56.8725506749,53.2788279616]]
  },
  {
    idStart: "1338",
    idEnd: "1353",
    lenght: "496.435",
    coordTop : [[56.8739976801,53.2856577741],[56.8747381172,53.2841990898],[56.8748143544,53.2842419394],[56.874902275,53.2842848789],[56.8750078186,53.2842956587],[56.8751309361,53.2843063486],[56.8752247467,53.2842741889],[56.875336131,53.28417762],[56.8754944445,53.2839737923],[56.8755940958,53.2836840856],[56.8756292928,53.2833300596],[56.8756175604,53.2830403529],[56.8755647895,53.2827184865],[56.8754651382,53.282493189],[56.8753068246,53.2822785815],[56.8754761342,53.2808585247],[56.8751427177,53.2806091524],[56.8750634375,53.2805340532],[56.8750487105,53.2800968432]]
  },
  {
    idStart: "1340",
    idEnd: "1342",
    lenght: "348.356",
    coordTop : [[56.8728162788,53.2874656336],[56.8723334473,53.2883498454],[56.8723579941,53.2885967024],[56.8726135738,53.2928024349]]
  },
  {
    idStart: "1340",
    idEnd: "1810",
    lenght: "1310.59",
    coordTop : [[56.8728162788,53.2874656336],[56.8723334473,53.2883498454],[56.8696264807,53.2888818277],[56.8653720766,53.2897561579],[56.8612988886,53.290607132]]
  },
  {
    idStart: "1340",
    idEnd: "1870",
    lenght: "378.69",
    coordTop : [[56.8728162788,53.2874656336],[56.8723334473,53.2883498454],[56.8696264807,53.2888818277]]
  },
  {
    idStart: "1345",
    idEnd: "1311",
    lenght: "560.344",
    coordTop : [[56.8724006563,53.2788201575],[56.8721280395,53.2783606692],[56.8716765704,53.277582818],[56.8711977009,53.2768057753],[56.8711417589,53.2767386762],[56.870795218,53.2763230207],[56.8705278919,53.2760520888],[56.8700872047,53.2757463023],[56.8699168396,53.2756605132],[56.8696465614,53.2755558594],[56.8693410293,53.2754592905],[56.8687225929,53.2752688477],[56.8684846129,53.2751937485],[56.8682819335,53.2751722788],[56.8681497102,53.2751508989],[56.8679704984,53.2752179132]]
  },
  {
    idStart: "1347",
    idEnd: "1318",
    lenght: "885.216",
    coordTop : [[56.8767034467,53.2699688773],[56.8779521696,53.2586854984],[56.8781189639,53.2585459002],[56.8782420712,53.2584493313],[56.8783182522,53.2583850119],[56.8784094532,53.258283143],[56.878459275,53.2580739253],[56.8784504887,53.2578754875],[56.8783654725,53.2577198993],[56.8781690806,53.2576394102],[56.8779345968,53.2576341102],[56.8777000624,53.2576287203],[56.8775623255,53.2576126404]]
  },
  {
    idStart: "1347",
    idEnd: "1951",
    lenght: "891.023",
    coordTop : [[56.8767034467,53.2699688773],[56.8779521696,53.2586854984],[56.8781189639,53.2585459002],[56.8782420712,53.2584493313],[56.8783182522,53.2583850119],[56.8784094532,53.258283143],[56.8787514796,53.2583057805],[56.8796229259,53.258363632]]
  },
  {
    idStart: "1347",
    idEnd: "1959",
    lenght: "794.059",
    coordTop : [[56.8767034467,53.2699688773],[56.8779521696,53.2586854984],[56.8781189639,53.2585459002],[56.8782420712,53.2584493313],[56.8783182522,53.2583850119],[56.8784094532,53.258283143],[56.8787514796,53.2583057805]]
  },
  {
    idStart: "1348",
    idEnd: "1340",
    lenght: "1105.37",
    coordTop : [[56.8763223274,53.2716119858],[56.8756397488,53.2778534804],[56.8752954849,53.2809383849],[56.8751571992,53.2821925229],[56.8750692301,53.282181833],[56.874957845,53.282181833],[56.8748699245,53.2822354624],[56.8747526479,53.2823212515],[56.8746705688,53.2824392901],[56.8745532425,53.2826699775],[56.8745034155,53.2828147859],[56.874485841,53.2829436043],[56.8744594793,53.2830723329],[56.8744594793,53.2832386111],[56.8744535885,53.283426359],[56.8744770538,53.283598027],[56.8745268808,53.283775085],[56.8745737623,53.2839091136],[56.8728162788,53.2874656336]]
  },
  {
    idStart: "1348",
    idEnd: "1350",
    lenght: "471.989",
    coordTop : [[56.8763223274,53.2716119858],[56.8756397488,53.2778534804],[56.8761728533,53.2788610309]]
  },
  {
    idStart: "1349",
    idEnd: "1347",
    lenght: "245.547",
    coordTop : [[56.8762549291,53.2739257765],[56.8767034467,53.2699688773]]
  },
  {
    idStart: "1355",
    idEnd: "1340",
    lenght: "1167.12",
    coordTop : [[56.8764278179,53.270614227],[56.8763223274,53.2716119858],[56.8756397488,53.2778534804],[56.8752954849,53.2809383849],[56.8751571992,53.2821925229],[56.8750692301,53.282181833],[56.874957845,53.282181833],[56.8748699245,53.2822354624],[56.8747526479,53.2823212515],[56.8746705688,53.2824392901],[56.8745532425,53.2826699775],[56.8745034155,53.2828147859],[56.874485841,53.2829436043],[56.8744594793,53.2830723329],[56.8744594793,53.2832386111],[56.8744535885,53.283426359],[56.8744770538,53.283598027],[56.8745268808,53.283775085],[56.8745737623,53.2839091136],[56.8728162788,53.2874656336]]
  },
  {
    idStart: "1355",
    idEnd: "1343",
    lenght: "1200.72",
    coordTop : [[56.8764278179,53.270614227],[56.8763223274,53.2716119858],[56.8756397488,53.2778534804],[56.8752954849,53.2809383849],[56.8751571992,53.2821925229],[56.8750692301,53.282181833],[56.874957845,53.282181833],[56.8748699245,53.2822354624],[56.8747526479,53.2823212515],[56.8746705688,53.2824392901],[56.8745532425,53.2826699775],[56.8745034155,53.2828147859],[56.874485841,53.2829436043],[56.8744594793,53.2830723329],[56.8744594793,53.2832386111],[56.8744535885,53.283426359],[56.8744770538,53.283598027],[56.8745268808,53.283775085],[56.8745737623,53.2839091136],[56.8747381172,53.2841990898],[56.8748143544,53.2842419394],[56.874902275,53.2842848789],[56.8750078186,53.2842956587],[56.8751309361,53.2843063486],[56.8752247467,53.2842741889],[56.875336131,53.28417762],[56.8768206681,53.2868325909]]
  },
  {
    idStart: "1358",
    idEnd: "1302",
    lenght: "960.405",
    coordTop : [[56.8821817311,53.232657352],[56.8834302709,53.2267564986],[56.8835181712,53.2263326734],[56.8833482109,53.2262200247],[56.87891346,53.2230983791]]
  },
  {
    idStart: "1358",
    idEnd: "1362",
    lenght: "868.604",
    coordTop : [[56.8821817311,53.232657352],[56.8834302709,53.2267564986],[56.8848282583,53.2277757271],[56.8852072902,53.2281489868],[56.8853551402,53.228341016],[56.8854838741,53.2285948455],[56.8856725963,53.2291873853],[56.8861559993,53.2321207832]]
  },
  {
    idStart: "1360",
    idEnd: "1953",
    lenght: "530.194",
    coordTop : [[56.8813375847,53.2422220742],[56.883336481,53.2501453048]]
  },
  {
    idStart: "1363",
    idEnd: "1360",
    lenght: "725.556",
    coordTop : [[56.8822691926,53.2314824455],[56.8819218485,53.2331810698],[56.8803849953,53.2384616366],[56.8809768817,53.2407022145],[56.8810381853,53.2409638938],[56.8813375847,53.2422220742]]
  },
  {
    idStart: "1364",
    idEnd: "1358",
    lenght: "603.376",
    coordTop : [[56.8813375847,53.2415515717],[56.8811637861,53.2408180972],[56.8811073419,53.2405912726],[56.8805559508,53.2383736915],[56.8820331148,53.2332827591],[56.8821817311,53.232657352]]
  },
  {
    idStart: "1364",
    idEnd: "1361",
    lenght: "803.999",
    coordTop : [[56.8813375847,53.2415515717],[56.8811637861,53.2408180972],[56.8815854464,53.2404983868],[56.8870868089,53.2376922035],[56.8872691991,53.2387890155]]
  },
  {
    idStart: "1365",
    idEnd: "1279",
    lenght: "502.79",
    coordTop : [[56.861663661,53.222629189],[56.861691554,53.2230904739],[56.8617518089,53.2243457797],[56.8617782286,53.2253220687],[56.8617767554,53.2255232914],[56.8617620723,53.2257512838],[56.8617341793,53.2259899662],[56.8617062372,53.2261696292],[56.8616445581,53.2264888905],[56.8609327867,53.229947584],[56.8608026981,53.2305779318]]
  },
  {
    idStart: "1366",
    idEnd: "1365",
    lenght: "361.768",
    coordTop : [[56.8612684416,53.2167229457],[56.8613054199,53.217345568],[56.861339108,53.2180563151],[56.8614505829,53.2196787623],[56.8615387804,53.2209473631],[56.8616210356,53.2219103571],[56.861663661,53.222629189]]
  },
  {
    idStart: "1367",
    idEnd: "1289",
    lenght: "488.7",
    coordTop : [[56.8657297877,53.2234251862],[56.8696465614,53.2230730466],[56.8697969944,53.2230664889],[56.8701195592,53.223035497]]
  },
  {
    idStart: "1367",
    idEnd: "1290",
    lenght: "557.586",
    coordTop : [[56.8657297877,53.2234251862],[56.8696465614,53.2230730466],[56.8697969944,53.2230664889],[56.8697913974,53.22267132],[56.8697376363,53.221345766]]
  },
  {
    idStart: "1368",
    idEnd: "1204",
    lenght: "565.743",
    coordTop : [[56.8606420634,53.220614178],[56.8604965045,53.220612022],[56.8597751347,53.2206549615],[56.8556680369,53.2224327275]]
  },
  {
    idStart: "1368",
    idEnd: "1834",
    lenght: "1173.82",
    coordTop : [[56.8606420634,53.220614178],[56.8604965045,53.220612022],[56.8597751347,53.2206549615],[56.8556680369,53.2224327275],[56.8549066916,53.2228546661],[56.8540091771,53.2232408519],[56.8503325469,53.2246000029]]
  },
  {
    idStart: "1369",
    idEnd: "2246",
    lenght: "502.111",
    coordTop : [[56.8690124678,53.2227533362],[56.8670940668,53.2229182669],[56.8652175012,53.2231006249],[56.8645020167,53.2230577752]]
  },
  {
    idStart: "1370",
    idEnd: "1303",
    lenght: "2198.07",
    coordTop : [[56.8603238858,53.2210004536],[56.8606816451,53.2210058435],[56.8613878722,53.2212878246],[56.8635461011,53.222972076],[56.8638921427,53.2232296229],[56.8644433868,53.2234440508],[56.8651808213,53.2234807919],[56.8657297877,53.2234251862],[56.8696465614,53.2230730466],[56.8697969944,53.2230664889],[56.8701195592,53.223035497],[56.87189828,53.2228943717],[56.8720947048,53.2228782918],[56.8742204068,53.2226975508],[56.8758345421,53.2225760087],[56.8759937725,53.2225637029],[56.8767132398,53.2225346771],[56.8769565498,53.2225549317],[56.8773817224,53.2226273986],[56.8777982656,53.2227963114],[56.8796815812,53.224154708]]
  },
  {
    idStart: "1370",
    idEnd: "1367",
    lenght: "628.441",
    coordTop : [[56.8603238858,53.2210004536],[56.8606816451,53.2210058435],[56.8613878722,53.2212878246],[56.8635461011,53.222972076],[56.8638921427,53.2232296229],[56.8644433868,53.2234440508],[56.8651808213,53.2234807919],[56.8657297877,53.2234251862]]
  },
  {
    idStart: "1371",
    idEnd: "1372",
    lenght: "380.868",
    coordTop : [[56.861309545,53.2282912702],[56.8616416117,53.2266604687],[56.8617400231,53.2261723242],[56.861787068,53.2258504578],[56.8618105413,53.2255608409],[56.8618135368,53.2252778716],[56.8617885412,53.2244262687],[56.8616783441,53.222191979]]
  },
  {
    idStart: "1372",
    idEnd: "1373",
    lenght: "363.725",
    coordTop : [[56.8616783441,53.222191979],[56.8615725664,53.2209366732],[56.861503521,53.2199147497],[56.8613962696,53.2183349725],[56.8613374874,53.2174069229],[56.8612684416,53.2162561811]]
  },
  {
    idStart: "1373",
    idEnd: "1220",
    lenght: "395.614",
    coordTop : [[56.8612684416,53.2162561811],[56.8612213961,53.2151833231],[56.8611376667,53.213504282],[56.8610421511,53.2117125922],[56.8609393181,53.2097760041]]
  },
  {
    idStart: "1374",
    idEnd: "1221",
    lenght: "325.284",
    coordTop : [[56.8602737943,53.1960954708],[56.860326685,53.1972541179],[56.860364892,53.1980400539],[56.8604118895,53.1992282555],[56.8604530429,53.2001455253],[56.8605000403,53.2014303856]]
  },
  {
    idStart: "1374",
    idEnd: "1227",
    lenght: "418.981",
    coordTop : [[56.8602737943,53.1960954708],[56.860326685,53.1972541179],[56.860364892,53.1980400539],[56.8604118895,53.1992282555],[56.8604530429,53.2001455253],[56.8605000403,53.2014303856],[56.8605132998,53.2017790218],[56.860498567,53.2019077504],[56.8604809369,53.2019587747],[56.8604442033,53.2020445638],[56.8604163093,53.202106278],[56.8603810489,53.2021599075],[56.8602825848,53.2022055419],[56.8599872893,53.2022403965]]
  },
  {
    idStart: "1377",
    idEnd: "1226",
    lenght: "399.215",
    coordTop : [[56.8606028745,53.2030195053],[56.8605955082,53.2028263676],[56.860554404,53.2016449033],[56.8605338273,53.2011460688],[56.8604706731,53.1996681605],[56.8604250998,53.1986059925],[56.860370736,53.1974338707],[56.8603325781,53.1964709666]]
  },
  {
    idStart: "1378",
    idEnd: "2247",
    lenght: "559.505",
    coordTop : [[56.8758624165,53.2062663761],[56.8765873923,53.2018583848],[56.8767173755,53.2010312716],[56.8768550939,53.1997968458],[56.8769151966,53.1987135107],[56.8769018299,53.1973183203]]
  },
  {
    idStart: "1776",
    idEnd: "1242",
    lenght: "705.086",
    coordTop : [[56.8380385832,53.2229657877],[56.8382476645,53.2278512548],[56.8382419891,53.228254491],[56.8381248463,53.2286371044],[56.8380766665,53.228998338],[56.8381294599,53.2293200076],[56.8382000101,53.2294694048],[56.8383826235,53.230122831],[56.8384094696,53.2310135975],[56.8386089789,53.2328953157],[56.8386413116,53.2332655115],[56.8388086252,53.2332121515],[56.8391933208,53.233072733]]
  },
  {
    idStart: "1776",
    idEnd: "1243",
    lenght: "503.207",
    coordTop : [[56.8380385832,53.2229657877],[56.8382476645,53.2278512548],[56.8382419891,53.228254491],[56.8381248463,53.2286371044],[56.8380766665,53.228998338],[56.8381294599,53.2293200076],[56.8382000101,53.2294694048],[56.8383826235,53.230122831],[56.8384094696,53.2310135975]]
  },
  {
    idStart: "1776",
    idEnd: "1832",
    lenght: "854.203",
    coordTop : [[56.8380385832,53.2229657877],[56.8382476645,53.2278512548],[56.8382419891,53.228254491],[56.8381248463,53.2286371044],[56.8380766665,53.228998338],[56.8381294599,53.2293200076],[56.8382000101,53.2294694048],[56.8383670074,53.2295214219],[56.8385759184,53.2294566481],[56.8386549292,53.2292458918],[56.8386745068,53.2290351382],[56.8389971162,53.2289857578],[56.8420282716,53.2279442511]]
  },
  {
    idStart: "1777",
    idEnd: "1251",
    lenght: "3817.3",
    coordTop : [[56.8376715777,53.2135899319],[56.8377371663,53.2158418781],[56.8376019358,53.2159652167],[56.8374901933,53.2161852142],[56.8374402186,53.2164480612],[56.837443167,53.2166089495],[56.8374578596,53.2167699276],[56.83749609,53.2169362057],[56.8375637055,53.2171185637],[56.8376548585,53.2172259124],[56.8377636522,53.2173438612],[56.8378874328,53.2196937642],[56.8380385832,53.2229657877],[56.8382476645,53.2278512548],[56.8382419891,53.228254491],[56.8381248463,53.2286371044],[56.8380766665,53.228998338],[56.8381294599,53.2293200076],[56.8382000101,53.2294694048],[56.8383826235,53.230122831],[56.8384094696,53.2310135975],[56.8386089789,53.2328953157],[56.835145883,53.2341380451],[56.83417069,53.2345319564],[56.8340767765,53.2350094109],[56.8340992843,53.2352736953],[56.8347303332,53.2410399811],[56.8350510873,53.2439138714],[56.8355039322,53.2480873543],[56.8355532215,53.2486730559],[56.8355591185,53.2488875736],[56.8353984737,53.2498502981],[56.8345768106,53.2557296818],[56.8334110697,53.2636239867],[56.8322691775,53.2675854672]]
  },
  {
    idStart: "1777",
    idEnd: "1267",
    lenght: "3210.11",
    coordTop : [[56.8376715777,53.2135899319],[56.8377371663,53.2158418781],[56.8376019358,53.2159652167],[56.8374901933,53.2161852142],[56.8374402186,53.2164480612],[56.837443167,53.2166089495],[56.8374578596,53.2167699276],[56.83749609,53.2169362057],[56.8375637055,53.2171185637],[56.8376548585,53.2172259124],[56.8377636522,53.2173438612],[56.8378874328,53.2196937642],[56.8380385832,53.2229657877],[56.8382476645,53.2278512548],[56.8382419891,53.228254491],[56.8381248463,53.2286371044],[56.8380766665,53.228998338],[56.8381294599,53.2293200076],[56.8382000101,53.2294694048],[56.8383670074,53.2295214219],[56.8385759184,53.2294566481],[56.8386549292,53.2292458918],[56.8386745068,53.2290351382],[56.8389971162,53.2289857578],[56.8420282716,53.2279442511],[56.8452777124,53.2268582504],[56.8456708175,53.2305147231],[56.8456955158,53.2307328019],[56.8459421231,53.2340070707],[56.8469273753,53.246950716],[56.8470036692,53.2475193496],[56.847349127,53.2492923545]]
  },
  {
    idStart: "1777",
    idEnd: "1776",
    lenght: "602.692",
    coordTop : [[56.8376715777,53.2135899319],[56.8377371663,53.2158418781],[56.8376019358,53.2159652167],[56.8374901933,53.2161852142],[56.8374402186,53.2164480612],[56.837443167,53.2166089495],[56.8374578596,53.2167699276],[56.83749609,53.2169362057],[56.8375637055,53.2171185637],[56.8376548585,53.2172259124],[56.8377636522,53.2173438612],[56.8378874328,53.2196937642],[56.8380385832,53.2229657877]]
  },
  {
    idStart: "1777",
    idEnd: "1784",
    lenght: "576.527",
    coordTop : [[56.8376715777,53.2135899319],[56.8377371663,53.2158418781],[56.8376019358,53.2159652167],[56.8374901933,53.2161852142],[56.8374402186,53.2164480612],[56.837443167,53.2166089495],[56.8374578596,53.2167699276],[56.83749609,53.2169362057],[56.8375637055,53.2171185637],[56.8376548585,53.2172259124],[56.8377636522,53.2173438612],[56.8379635978,53.2173010116],[56.8381429533,53.2171185637],[56.8382370041,53.2168181671],[56.8382693862,53.2165874797],[56.8403637953,53.2159190433]]
  },
  {
    idStart: "1778",
    idEnd: "1775",
    lenght: "558.66",
    coordTop : [[56.838150275,53.2212652769],[56.8379606495,53.2173707208],[56.8379635978,53.2173010116],[56.8381429533,53.2171185637],[56.8382370041,53.2168181671],[56.8382693862,53.2165874797],[56.8382429007,53.2163085528],[56.8381635423,53.2160778655],[56.838057649,53.2159169772],[56.837987086,53.2158633478],[56.8379165229,53.2157882486],[56.8377371663,53.2158418781],[56.8376019358,53.2159652167],[56.8374901933,53.2161852142],[56.8374402186,53.2164480612],[56.8363819886,53.2167754073]]
  },
  {
    idStart: "1778",
    idEnd: "1779",
    lenght: "550.054",
    coordTop : [[56.838150275,53.2212652769],[56.8379606495,53.2173707208],[56.8379635978,53.2173010116],[56.8381429533,53.2171185637],[56.8382370041,53.2168181671],[56.8382693862,53.2165874797],[56.8382429007,53.2163085528],[56.8381635423,53.2160778655],[56.838057649,53.2159169772],[56.837987086,53.2158633478],[56.8379165229,53.2157882486],[56.8378385889,53.2127840128]]
  },
  {
    idStart: "1779",
    idEnd: "1119",
    lenght: "3162.47",
    coordTop : [[56.8378385889,53.2127840128],[56.837769755,53.2105381319],[56.8374578105,53.2057540669],[56.8374313244,53.2054053409],[56.837254963,53.2054428905],[56.8343262292,53.2059605896],[56.8321819098,53.2063146156],[56.8320361639,53.2063379777],[56.8286181324,53.2068832492],[56.824850478,53.2073928635],[56.8221707993,53.207779139],[56.8200234573,53.2081010054],[56.8182372682,53.208355364],[56.8177535779,53.2084353327],[56.8175603808,53.208448801],[56.8173797218,53.2083200724],[56.8165601218,53.2067028563],[56.816457465,53.2064991897],[56.8162948554,53.206319165],[56.813843783,53.2042551553]]
  },
  {
    idStart: "1779",
    idEnd: "1758",
    lenght: "521.883",
    coordTop : [[56.8378385889,53.2127840128],[56.837769755,53.2105381319],[56.8375734826,53.2106058503],[56.8343488368,53.2115203755]]
  },
  {
    idStart: "1779",
    idEnd: "1786",
    lenght: "526.604",
    coordTop : [[56.8378385889,53.2127840128],[56.837769755,53.2105381319],[56.8374578105,53.2057540669],[56.8374313244,53.2054053409],[56.8373254782,53.2041822847]]
  },
  {
    idStart: "1779",
    idEnd: "1821",
    lenght: "2126.08",
    coordTop : [[56.8378385889,53.2127840128],[56.837769755,53.2105381319],[56.8374578105,53.2057540669],[56.8374313244,53.2054053409],[56.8373254782,53.2041822847],[56.8371667082,53.2014142159],[56.8371475929,53.2010896546],[56.8369756035,53.2011192092],[56.8347408498,53.2015107848],[56.8344555744,53.2015429445],[56.8342615073,53.2014356857],[56.8341262642,53.2013015672],[56.8339968687,53.2010923496],[56.8339228089,53.2009004694],[56.8337645651,53.2005299144],[56.8336589051,53.2000793194],[56.8336453412,53.2000345833],[56.8335088181,53.1994042355],[56.8333019193,53.1982937381],[56.833250563,53.1980281961],[56.8324893513,53.194159781],[56.8323765615,53.192981371],[56.8322604295,53.1912201341],[56.8320197602,53.1855767378],[56.8320139118,53.1852441815],[56.8319809836,53.1844258163]]
  },
  {
    idStart: "1785",
    idEnd: "1787",
    lenght: "656.287",
    coordTop : [[56.8397705798,53.2007253562],[56.8395022429,53.2007598583],[56.8392257645,53.2008058088],[56.837919282,53.2010448786],[56.8376476842,53.2010230895],[56.8371475929,53.2010896546],[56.8369756035,53.2011192092],[56.8369902964,53.2014517655],[56.837254963,53.2054428905],[56.8372814,53.2057808367],[56.8373308344,53.2067418544]]
  },
  {
    idStart: "1785",
    idEnd: "1821",
    lenght: "1703.1",
    coordTop : [[56.8397705798,53.2007253562],[56.8395022429,53.2007598583],[56.8392257645,53.2008058088],[56.837919282,53.2010448786],[56.8376476842,53.2010230895],[56.8371475929,53.2010896546],[56.8369756035,53.2011192092],[56.8347408498,53.2015107848],[56.8344555744,53.2015429445],[56.8342615073,53.2014356857],[56.8341262642,53.2013015672],[56.8339968687,53.2010923496],[56.8339228089,53.2009004694],[56.8337645651,53.2005299144],[56.8336589051,53.2000793194],[56.8336453412,53.2000345833],[56.8335088181,53.1994042355],[56.8333019193,53.1982937381],[56.833250563,53.1980281961],[56.8324893513,53.194159781],[56.8323765615,53.192981371],[56.8322604295,53.1912201341],[56.8320197602,53.1855767378],[56.8320139118,53.1852441815],[56.8319809836,53.1844258163]]
  },
  {
    idStart: "1786",
    idEnd: "1789",
    lenght: "531.427",
    coordTop : [[56.8373254782,53.2041822847],[56.8371667082,53.2014142159],[56.8376297976,53.2013295048],[56.8378944597,53.2012827924],[56.840410852,53.2008920586]]
  },
  {
    idStart: "1786",
    idEnd: "1821",
    lenght: "1599.48",
    coordTop : [[56.8373254782,53.2041822847],[56.8371667082,53.2014142159],[56.8371475929,53.2010896546],[56.8369756035,53.2011192092],[56.8347408498,53.2015107848],[56.8344555744,53.2015429445],[56.8342615073,53.2014356857],[56.8341262642,53.2013015672],[56.8339968687,53.2010923496],[56.8339228089,53.2009004694],[56.8337645651,53.2005299144],[56.8336589051,53.2000793194],[56.8336453412,53.2000345833],[56.8335088181,53.1994042355],[56.8333019193,53.1982937381],[56.833250563,53.1980281961],[56.8324893513,53.194159781],[56.8323765615,53.192981371],[56.8322604295,53.1912201341],[56.8320197602,53.1855767378],[56.8320139118,53.1852441815],[56.8319809836,53.1844258163]]
  },
  {
    idStart: "1786",
    idEnd: "1928",
    lenght: "1704.63",
    coordTop : [[56.8373254782,53.2041822847],[56.8371667082,53.2014142159],[56.8371475929,53.2010896546],[56.8369756035,53.2011192092],[56.8347408498,53.2015107848],[56.8344555744,53.2015429445],[56.8342615073,53.2014356857],[56.8341262642,53.2013015672],[56.8339968687,53.2010923496],[56.8339228089,53.2009004694],[56.8337645651,53.2005299144],[56.8336589051,53.2000793194],[56.8336453412,53.2000345833],[56.8335088181,53.1994042355],[56.8333019193,53.1982937381],[56.833250563,53.1980281961],[56.8324893513,53.194159781],[56.8323765615,53.192981371],[56.8322604295,53.1912201341],[56.8320197602,53.1855767378],[56.8320139118,53.1852441815],[56.8318261719,53.1852442713],[56.830619454,53.1852139981]]
  },
  {
    idStart: "1787",
    idEnd: "1758",
    lenght: "599.427",
    coordTop : [[56.8373308344,53.2067418544],[56.8375734826,53.2106058503],[56.8343488368,53.2115203755]]
  },
  {
    idStart: "1787",
    idEnd: "1762",
    lenght: "961.377",
    coordTop : [[56.8373308344,53.2067418544],[56.8375734826,53.2106058503],[56.8343488368,53.2115203755],[56.8322595242,53.2120736022],[56.8321621785,53.2099901725]]
  },
  {
    idStart: "1787",
    idEnd: "1777",
    lenght: "418.447",
    coordTop : [[56.8373308344,53.2067418544],[56.8375734826,53.2106058503],[56.8375910412,53.2108536423],[56.8376715777,53.2135899319]]
  },
  {
    idStart: "1789",
    idEnd: "1799",
    lenght: "648.788",
    coordTop : [[56.840410852,53.2008920586],[56.8406510002,53.2008490339],[56.8434052297,53.2004083723],[56.8435497513,53.2003922925],[56.8444866733,53.2001916987],[56.844598051,53.2015915434],[56.8446286589,53.2020660335],[56.8439260459,53.2021840721]]
  },
  {
    idStart: "1789",
    idEnd: "1800",
    lenght: "606.424",
    coordTop : [[56.840410852,53.2008920586],[56.8406510002,53.2008490339],[56.8434052297,53.2004083723],[56.8435497513,53.2003922925],[56.8444866733,53.2001916987],[56.8446157378,53.2001756188],[56.8458411646,53.199978259]]
  },
  {
    idStart: "1789",
    idEnd: "1806",
    lenght: "413.552",
    coordTop : [[56.840410852,53.2008920586],[56.8406510002,53.2008490339],[56.8434052297,53.2004083723],[56.8435497513,53.2003922925],[56.8435364858,53.2001079757],[56.8435012095,53.1993569841]]
  },
  {
    idStart: "1793",
    idEnd: "1787",
    lenght: "793.002",
    coordTop : [[56.8333944096,53.1997999434],[56.8335756546,53.2007588051],[56.8336156581,53.2008946304],[56.8337341449,53.2011450807],[56.8339825187,53.2015866026],[56.8340617385,53.2016564017],[56.8342026825,53.2017790218],[56.8345085016,53.2018970604],[56.8358758851,53.2016127436],[56.8369902964,53.2014517655],[56.837254963,53.2054428905],[56.8372814,53.2057808367],[56.8373308344,53.2067418544]]
  },
  {
    idStart: "1793",
    idEnd: "1789",
    lenght: "850.865",
    coordTop : [[56.8333944096,53.1997999434],[56.8335756546,53.2007588051],[56.8336156581,53.2008946304],[56.8337341449,53.2011450807],[56.8339825187,53.2015866026],[56.8340617385,53.2016564017],[56.8342026825,53.2017790218],[56.8345085016,53.2018970604],[56.8358758851,53.2016127436],[56.8369902964,53.2014517655],[56.8371667082,53.2014142159],[56.8376297976,53.2013295048],[56.8378944597,53.2012827924],[56.840410852,53.2008920586]]
  },
  {
    idStart: "1794",
    idEnd: "1209",
    lenght: "442.121",
    coordTop : [[56.8482895892,53.2039685754],[56.8513916106,53.2034533916],[56.8520607309,53.203367872],[56.8522509235,53.2033466718]]
  },
  {
    idStart: "1795",
    idEnd: "1829",
    lenght: "475.461",
    coordTop : [[56.8440053921,53.2126017447],[56.8441391747,53.214079653],[56.8442670613,53.215579031],[56.844575746,53.2193501586],[56.8446639341,53.2203265374]]
  },
  {
    idStart: "1800",
    idEnd: "1215",
    lenght: "476.886",
    coordTop : [[56.8458411646,53.199978259],[56.8501052078,53.1991377952]]
  },
  {
    idStart: "1801",
    idEnd: "1797",
    lenght: "559.268",
    coordTop : [[56.8485460212,53.1991136305],[56.8446080735,53.1998880681],[56.8444640243,53.1999202278],[56.8444866733,53.2001916987],[56.844598051,53.2015915434]]
  },
  {
    idStart: "1801",
    idEnd: "1805",
    lenght: "650.588",
    coordTop : [[56.8485460212,53.1991136305],[56.8446080735,53.1998880681],[56.8444640243,53.1999202278],[56.8435364858,53.2001079757],[56.8433973969,53.2001329183],[56.8428702627,53.2002003875],[56.8427268913,53.200218738]]
  },
  {
    idStart: "1801",
    idEnd: "2228",
    lenght: "634.607",
    coordTop : [[56.8485460212,53.1991136305],[56.8446080735,53.1998880681],[56.8444640243,53.1999202278],[56.8435364858,53.2001079757],[56.8433973969,53.2001329183],[56.8428702627,53.2002003875]]
  },
  {
    idStart: "1802",
    idEnd: "1794",
    lenght: "409.698",
    coordTop : [[56.8446183416,53.2045390057],[56.8458736384,53.2043512578],[56.8466107022,53.2042408548],[56.8477445425,53.2040584968],[56.8482895892,53.2039685754]]
  },
  {
    idStart: "1803",
    idEnd: "1795",
    lenght: "438.581",
    coordTop : [[56.8435262174,53.2054455854],[56.8435711559,53.2062550899],[56.8436263207,53.2072488066],[56.8436717441,53.2080983105],[56.8437510908,53.2095145045],[56.8439142546,53.211507417],[56.8440053921,53.2126017447]]
  },
  {
    idStart: "1804",
    idEnd: "1803",
    lenght: "585.275",
    coordTop : [[56.8484207529,53.2038147839],[56.8476594074,53.2039436023],[56.8469127846,53.2040535561],[56.8464424409,53.2041259603],[56.8456399346,53.2042627737],[56.8451357741,53.2043405678],[56.8447138992,53.2044048872],[56.8442788034,53.2044719913],[56.8438554941,53.2045443955],[56.8437290801,53.2045765552],[56.8436820125,53.2046328796],[56.8436467363,53.204678514],[56.8436251186,53.2047351977],[56.8436045817,53.2047673574],[56.843573236,53.2048501821],[56.8435512252,53.2049279762],[56.8435335871,53.2051076392],[56.8435203216,53.2052686173],[56.8435262174,53.2054455854]]
  },
  {
    idStart: "1804",
    idEnd: "1846",
    lenght: "509.576",
    coordTop : [[56.8484207529,53.2038147839],[56.8476594074,53.2039436023],[56.8469127846,53.2040535561],[56.8464424409,53.2041259603],[56.8456399346,53.2042627737],[56.8451357741,53.2043405678],[56.8447138992,53.2044048872],[56.8442788034,53.2044719913],[56.8438554941,53.2045443955]]
  },
  {
    idStart: "1805",
    idEnd: "1763",
    lenght: "360.079",
    coordTop : [[56.8427268913,53.200218738],[56.8397705798,53.2007253562],[56.8395022429,53.2007598583]]
  },
  {
    idStart: "1805",
    idEnd: "1785",
    lenght: "330.168",
    coordTop : [[56.8427268913,53.200218738],[56.8397705798,53.2007253562]]
  },
  {
    idStart: "1810",
    idEnd: "395",
    lenght: "1094.7",
    coordTop : [[56.8612988886,53.290607132],[56.8604929686,53.2907904782],[56.8603236893,53.2908282972],[56.8597857425,53.2909309747],[56.8570201099,53.2914352889],[56.8562458259,53.2914943082],[56.8533479506,53.2917624553],[56.8524678853,53.2917698215],[56.8517864305,53.2915770122],[56.851494126,53.2914943082]]
  },
  {
    idStart: "1810",
    idEnd: "396",
    lenght: "564.629",
    coordTop : [[56.8612988886,53.290607132],[56.8604929686,53.2907904782],[56.8603236893,53.2908282972],[56.8597857425,53.2909309747],[56.8570201099,53.2914352889],[56.8562458259,53.2914943082]]
  },
  {
    idStart: "1810",
    idEnd: "1813",
    lenght: "169.409",
    coordTop : [[56.8612988886,53.290607132],[56.8604929686,53.2907904782],[56.8603236893,53.2908282972],[56.8597857425,53.2909309747]]
  },
  {
    idStart: "1811",
    idEnd: "1337",
    lenght: "565.997",
    coordTop : [[56.8647106581,53.290136325],[56.8697698929,53.2891117066]]
  },
  {
    idStart: "1812",
    idEnd: "1337",
    lenght: "838.439",
    coordTop : [[56.8622777945,53.290667409],[56.8647106581,53.290136325],[56.8697698929,53.2891117066]]
  },
  {
    idStart: "1812",
    idEnd: "1338",
    lenght: "1385.87",
    coordTop : [[56.8622777945,53.290667409],[56.8647106581,53.290136325],[56.8697698929,53.2891117066],[56.8723579941,53.2885967024],[56.8724784202,53.2885645427],[56.8739976801,53.2856577741]]
  },
  {
    idStart: "1812",
    idEnd: "1811",
    lenght: "272.441",
    coordTop : [[56.8622777945,53.290667409],[56.8647106581,53.290136325]]
  },
  {
    idStart: "1814",
    idEnd: "396",
    lenght: "528.636",
    coordTop : [[56.8605881418,53.2916598677],[56.860532354,53.2913004517],[56.860532354,53.2910482946],[56.8604929686,53.2907904782],[56.8603236893,53.2908282972],[56.8597857425,53.2909309747],[56.8570201099,53.2914352889],[56.8562458259,53.2914943082]]
  },
  {
    idStart: "1814",
    idEnd: "1813",
    lenght: "133.416",
    coordTop : [[56.8605881418,53.2916598677],[56.860532354,53.2913004517],[56.860532354,53.2910482946],[56.8604929686,53.2907904782],[56.8603236893,53.2908282972],[56.8597857425,53.2909309747]]
  },
  {
    idStart: "1816",
    idEnd: "1810",
    lenght: "455.862",
    coordTop : [[56.8653720766,53.2897561579],[56.8612988886,53.290607132]]
  },
  {
    idStart: "1817",
    idEnd: "1906",
    lenght: "524.444",
    coordTop : [[56.8322539422,53.1652534325],[56.8322747801,53.1647798407],[56.832145624,53.1626662845],[56.8321247859,53.162292226],[56.8319656499,53.1602079549],[56.8318511876,53.1587596011],[56.8317837092,53.1579335104],[56.8317021746,53.156702549]]
  },
  {
    idStart: "1818",
    idEnd: "1822",
    lenght: "779.867",
    coordTop : [[56.8315084864,53.1711006565],[56.8314002152,53.1720768557],[56.8313855693,53.1727796078],[56.8317666061,53.1838778439]]
  },
  {
    idStart: "1818",
    idEnd: "1823",
    lenght: "926.541",
    coordTop : [[56.8315084864,53.1711006565],[56.8314002152,53.1720768557],[56.8313855693,53.1727796078],[56.8317666061,53.1838778439],[56.8318261719,53.1852442713],[56.8318384586,53.1855671258],[56.8318665213,53.1862819153]]
  },
  {
    idStart: "1819",
    idEnd: "1817",
    lenght: "358.803",
    coordTop : [[56.8317048286,53.1710587052],[56.8321749151,53.1668140756],[56.8322539422,53.1652534325]]
  },
  {
    idStart: "1820",
    idEnd: "1818",
    lenght: "441.932",
    coordTop : [[56.8320367648,53.1639444973],[56.8320986401,53.1647326791],[56.8320047214,53.1667175067],[56.8315084864,53.1711006565]]
  },
  {
    idStart: "1821",
    idEnd: "1817",
    lenght: "1175",
    coordTop : [[56.8319809836,53.1844258163],[56.8315587147,53.1727796078],[56.831582207,53.1721626448],[56.8317048286,53.1710587052],[56.8321749151,53.1668140756],[56.8322539422,53.1652534325]]
  },
  {
    idStart: "1821",
    idEnd: "1819",
    lenght: "816.199",
    coordTop : [[56.8319809836,53.1844258163],[56.8315587147,53.1727796078],[56.831582207,53.1721626448],[56.8317048286,53.1710587052]]
  },
  {
    idStart: "1821",
    idEnd: "1906",
    lenght: "1699.45",
    coordTop : [[56.8319809836,53.1844258163],[56.8315587147,53.1727796078],[56.831582207,53.1721626448],[56.8317048286,53.1710587052],[56.8321749151,53.1668140756],[56.8322539422,53.1652534325],[56.8322747801,53.1647798407],[56.832145624,53.1626662845],[56.8321247859,53.162292226],[56.8319656499,53.1602079549],[56.8318511876,53.1587596011],[56.8317837092,53.1579335104],[56.8317021746,53.156702549]]
  },
  {
    idStart: "1822",
    idEnd: "1787",
    lenght: "1784.9",
    coordTop : [[56.8317666061,53.1838778439],[56.8318261719,53.1852442713],[56.8318384586,53.1855671258],[56.8318665213,53.1862819153],[56.8320930374,53.1913458982],[56.8322059755,53.1928150929],[56.8323471231,53.1942634466],[56.8324540646,53.1948865181],[56.833089122,53.1981873776],[56.8331290769,53.1983948884],[56.8333944096,53.1997999434],[56.8335756546,53.2007588051],[56.8336156581,53.2008946304],[56.8337341449,53.2011450807],[56.8339825187,53.2015866026],[56.8340617385,53.2016564017],[56.8342026825,53.2017790218],[56.8345085016,53.2018970604],[56.8358758851,53.2016127436],[56.8369902964,53.2014517655],[56.837254963,53.2054428905],[56.8372814,53.2057808367],[56.8373308344,53.2067418544]]
  },
  {
    idStart: "1822",
    idEnd: "1789",
    lenght: "1842.77",
    coordTop : [[56.8317666061,53.1838778439],[56.8318261719,53.1852442713],[56.8318384586,53.1855671258],[56.8318665213,53.1862819153],[56.8320930374,53.1913458982],[56.8322059755,53.1928150929],[56.8323471231,53.1942634466],[56.8324540646,53.1948865181],[56.833089122,53.1981873776],[56.8331290769,53.1983948884],[56.8333944096,53.1997999434],[56.8335756546,53.2007588051],[56.8336156581,53.2008946304],[56.8337341449,53.2011450807],[56.8339825187,53.2015866026],[56.8340617385,53.2016564017],[56.8342026825,53.2017790218],[56.8345085016,53.2018970604],[56.8358758851,53.2016127436],[56.8369902964,53.2014517655],[56.8371667082,53.2014142159],[56.8376297976,53.2013295048],[56.8378944597,53.2012827924],[56.840410852,53.2008920586]]
  },
  {
    idStart: "1822",
    idEnd: "1793",
    lenght: "991.901",
    coordTop : [[56.8317666061,53.1838778439],[56.8318261719,53.1852442713],[56.8318384586,53.1855671258],[56.8318665213,53.1862819153],[56.8320930374,53.1913458982],[56.8322059755,53.1928150929],[56.8323471231,53.1942634466],[56.8324540646,53.1948865181],[56.833089122,53.1981873776],[56.8331290769,53.1983948884],[56.8333944096,53.1997999434]]
  },
  {
    idStart: "1822",
    idEnd: "1929",
    lenght: "544.801",
    coordTop : [[56.8317666061,53.1838778439],[56.8318261719,53.1852442713],[56.830619454,53.1852139981],[56.8276811573,53.1849184524]]
  },
  {
    idStart: "1829",
    idEnd: "1902",
    lenght: "612.626",
    coordTop : [[56.8446639341,53.2203265374],[56.8452607094,53.2258974397],[56.8455267423,53.2283758017],[56.8456178759,53.2292126722],[56.8457134309,53.2302158209]]
  },
  {
    idStart: "1831",
    idEnd: "1809",
    lenght: "1111.96",
    coordTop : [[56.8469198097,53.2283755322],[56.8467778328,53.2263674382],[56.8467492408,53.2260200597],[56.8460849384,53.2181799232],[56.8460700526,53.2179159084],[56.8459556334,53.2164943244],[56.8459362769,53.2163337955],[56.845765114,53.2142041595],[56.8457443818,53.2138323468],[56.8454598289,53.2102876845]]
  },
  {
    idStart: "1831",
    idEnd: "1835",
    lenght: "451.772",
    coordTop : [[56.8469198097,53.2283755322],[56.8467778328,53.2263674382],[56.8496783783,53.2253295248]]
  },
  {
    idStart: "1831",
    idEnd: "1841",
    lenght: "730.465",
    coordTop : [[56.8469198097,53.2283755322],[56.8467778328,53.2263674382],[56.8467492408,53.2260200597],[56.8460849384,53.2181799232],[56.8460700526,53.2179159084],[56.8459556334,53.2164943244]]
  },
  {
    idStart: "1831",
    idEnd: "1842",
    lenght: "643.085",
    coordTop : [[56.8469198097,53.2283755322],[56.8467778328,53.2263674382],[56.8467492408,53.2260200597],[56.8460849384,53.2181799232],[56.8460700526,53.2179159084]]
  },
  {
    idStart: "1833",
    idEnd: "1267",
    lenght: "1385.31",
    coordTop : [[56.8468175274,53.2287901946],[56.8469271788,53.2301705458],[56.8469409774,53.2303693272],[56.8471736965,53.2337218556],[56.8459421231,53.2340070707],[56.8469273753,53.246950716],[56.8470036692,53.2475193496],[56.847349127,53.2492923545]]
  },
  {
    idStart: "1833",
    idEnd: "1896",
    lenght: "428.112",
    coordTop : [[56.8468175274,53.2287901946],[56.8469271788,53.2301705458],[56.845841863,53.2304585839],[56.8456708175,53.2305147231],[56.8438825652,53.2311016496]]
  },
  {
    idStart: "1834",
    idEnd: "1780",
    lenght: "1702.17",
    coordTop : [[56.8503325469,53.2246000029],[56.8467492408,53.2260200597],[56.8466130112,53.2260717128],[56.8454253405,53.2264580782],[56.8448257183,53.220605644],[56.844314079,53.2146509815],[56.8442846991,53.2143130353],[56.8441024251,53.2143881344],[56.840884059,53.2153963224],[56.8407817939,53.2154283581]]
  },
  {
    idStart: "1834",
    idEnd: "1833",
    lenght: "590.034",
    coordTop : [[56.8503325469,53.2246000029],[56.8467492408,53.2260200597],[56.8466130112,53.2260717128],[56.8466400312,53.2264314881],[56.8468175274,53.2287901946]]
  },
  {
    idStart: "1834",
    idEnd: "1836",
    lenght: "1028.24",
    coordTop : [[56.8503325469,53.2246000029],[56.8467492408,53.2260200597],[56.8466130112,53.2260717128],[56.8454253405,53.2264580782],[56.8452440056,53.226520601],[56.8412569201,53.2278280989]]
  },
  {
    idStart: "1834",
    idEnd: "1841",
    lenght: "993.669",
    coordTop : [[56.8503325469,53.2246000029],[56.8467492408,53.2260200597],[56.8460849384,53.2181799232],[56.8460700526,53.2179159084],[56.8459556334,53.2164943244]]
  },
  {
    idStart: "1835",
    idEnd: "1203",
    lenght: "649.128",
    coordTop : [[56.8496783783,53.2253295248],[56.8523724459,53.2242708602],[56.8544667535,53.2234447695],[56.8553806126,53.2230443005]]
  },
  {
    idStart: "1835",
    idEnd: "1370",
    lenght: "1213.14",
    coordTop : [[56.8496783783,53.2253295248],[56.8523724459,53.2242708602],[56.8544667535,53.2234447695],[56.8553806126,53.2230443005],[56.8598220347,53.2210948665],[56.8602329844,53.2210058435],[56.8603238858,53.2210004536]]
  },
  {
    idStart: "1843",
    idEnd: "1844",
    lenght: "477.337",
    coordTop : [[56.8447506482,53.2206724787],[56.8444228533,53.2168744915],[56.8440759437,53.2129209161]]
  },
  {
    idStart: "1844",
    idEnd: "1802",
    lenght: "612.386",
    coordTop : [[56.8440759437,53.2129209161],[56.8439877542,53.211853448],[56.8439539522,53.211413543],[56.843856968,53.2102950507],[56.8437981583,53.2095011196],[56.8436717441,53.2072856046],[56.8436167797,53.2062525639],[56.843593822,53.2058210812],[56.84355265,53.2052336729],[56.8435600197,53.2050969493],[56.8435717621,53.2050164602],[56.8435835536,53.2049305813],[56.8436002091,53.2048773112],[56.843619272,53.2048209868],[56.8436412828,53.2047780473],[56.8436588717,53.2047485826],[56.8436779346,53.2047191179],[56.8436893821,53.2047079788],[56.8437334527,53.2046704292],[56.8438143223,53.2046543493],[56.8446183416,53.2045390057]]
  },
  {
    idStart: "1844",
    idEnd: "1932",
    lenght: "549.811",
    coordTop : [[56.8440759437,53.2129209161],[56.8439877542,53.211853448],[56.8439539522,53.211413543],[56.843856968,53.2102950507],[56.8437981583,53.2095011196],[56.8436717441,53.2072856046],[56.8436167797,53.2062525639],[56.843593822,53.2058210812],[56.84355265,53.2052336729],[56.8435306392,53.2050057703],[56.843514475,53.2049413611],[56.8434835714,53.204863567],[56.8434115447,53.2047536132],[56.8433498355,53.204686509],[56.8433116111,53.2046516544],[56.8431998857,53.2046624342],[56.8430322969,53.2046945939]]
  },
  {
    idStart: "1870",
    idEnd: "1810",
    lenght: "931.905",
    coordTop : [[56.8696264807,53.2888818277],[56.8653720766,53.2897561579],[56.8612988886,53.290607132]]
  },
  {
    idStart: "1870",
    idEnd: "1816",
    lenght: "476.043",
    coordTop : [[56.8696264807,53.2888818277],[56.8653720766,53.2897561579]]
  },
  {
    idStart: "1895",
    idEnd: "1265",
    lenght: "457.463",
    coordTop : [[56.8466276511,53.2420980168],[56.8467657967,53.2440211302],[56.8468598749,53.2452254117],[56.8469789093,53.2468159687],[56.847072987,53.2475134207],[56.8474698301,53.2494231492]]
  },
  {
    idStart: "1896",
    idEnd: "1248",
    lenght: "451.664",
    coordTop : [[56.8438825652,53.2311016496],[56.8398865393,53.2324338512]]
  },
  {
    idStart: "1897",
    idEnd: "1267",
    lenght: "1200,53",
    coordTop : [[56.8452116442,53.2309020273],[56.8456955158,53.2307328019],[56.8459421231,53.2340070707],[56.8469273753,53.246950716],[56.8470036692,53.2475193496],[56.847349127,53.2492923545]]
  },
  {
    idStart: "1897",
    idEnd: "1831",
    lenght: "327.437",
    coordTop : [[56.8452116442,53.2309020273],[56.8456955158,53.2307328019],[56.8458604114,53.2306826826],[56.8469409774,53.2303693272],[56.8470579046,53.2303164657],[56.8469198097,53.2283755322]]
  },
  {
    idStart: "1898",
    idEnd: "1899",
    lenght: "556.062",
    coordTop : [[56.8466393925,53.2416741917],[56.8460926024,53.2344027786],[56.8460396915,53.2342069459],[56.8459647712,53.2340701325],[56.8459015432,53.2340004232],[56.8458192534,53.2339547888],[56.8457266464,53.2339467938],[56.8455987649,53.2339816484],[56.8452915625,53.2343893039]]
  },
  {
    idStart: "1898",
    idEnd: "1901",
    lenght: "656.655",
    coordTop : [[56.8466393925,53.2416741917],[56.8460926024,53.2344027786],[56.8460058914,53.2332547317],[56.8458309951,53.2309775923]]
  },
  {
    idStart: "1901",
    idEnd: "1843",
    lenght: "638.1",
    coordTop : [[56.8458309951,53.2309775923],[56.8457633945,53.2302640604],[56.8449490826,53.2225500474],[56.844813829,53.2212840517],[56.8447506482,53.2206724787]]
  },
  {
    idStart: "1902",
    idEnd: "1895",
    lenght: "729.765",
    coordTop : [[56.8457134309,53.2302158209],[56.8457736623,53.2307736747],[56.8458339428,53.2314415721],[56.8459603497,53.2331957124],[56.8460602761,53.2344241585],[56.8461969991,53.2362561827],[56.8463601522,53.2384394482],[56.8466276511,53.2420980168]]
  },
  {
    idStart: "1902",
    idEnd: "1899",
    lenght: "289.546",
    coordTop : [[56.8457134309,53.2302158209],[56.8457736623,53.2307736747],[56.8458339428,53.2314415721],[56.8459603497,53.2331957124],[56.8459280233,53.2333646855],[56.8458985956,53.2334827241],[56.8457339666,53.2337965955],[56.8455987649,53.2339816484],[56.8452915625,53.2343893039]]
  },
  {
    idStart: "1904",
    idEnd: "1824",
    lenght: "6531.68",
    coordTop : [[56.8307319542,53.1489302353],[56.8313940227,53.1556510709],[56.8319310999,53.1623136957],[56.8319519381,53.1626770643],[56.832145624,53.1626662845],[56.8330199257,53.1625122234],[56.8355231959,53.1622225167],[56.8354028965,53.1589716934],[56.8363537327,53.1589156385],[56.8387441076,53.1587539417],[56.8398613817,53.1586680628],[56.8424340612,53.1583567067],[56.8427425645,53.158394436],[56.8430659523,53.1586412032],[56.8432981982,53.1590220889],[56.8434364052,53.1595102334],[56.8434481476,53.1605026921],[56.8433658524,53.1614360417],[56.8433452663,53.1619564357],[56.8434510464,53.1685384817],[56.8434980651,53.1689997665],[56.8435627219,53.1693216329],[56.8436802929,53.1696971287],[56.8438449309,53.1701263437],[56.8441448248,53.1707163572],[56.8472140785,53.1754370939],[56.8473431336,53.1758338797],[56.8473901965,53.1761557461],[56.8474313152,53.1765849611],[56.8474136789,53.176874578],[56.8473901965,53.1772179141],[56.8471314968,53.1780011552],[56.8468819329,53.1785591886],[56.8466497092,53.1789883139],[56.8464821359,53.1793744996],[56.8463910044,53.1796695962],[56.8458853801,53.1834675834],[56.845711957,53.1850554455],[56.8454264705,53.1864768497],[56.8452151177,53.1869008545],[56.8447389062,53.1876786159],[56.8442802773,53.1884564671],[56.8442067783,53.1886603847],[56.8441244847,53.1888051931],[56.8441097947,53.1890090209],[56.8441126934,53.1892290183],[56.8443309307,53.1964893821],[56.8433402057,53.1976963585],[56.8434342434,53.1998850138],[56.8433973969,53.2001329183],[56.8434052297,53.2004083723],[56.8435497513,53.2003922925],[56.8444866733,53.2001916987],[56.844598051,53.2015915434],[56.8446286589,53.2020660335],[56.8446639341,53.2023503503],[56.8448256201,53.2042976283],[56.8448537222,53.2046201235],[56.845222487,53.2088627768],[56.8438523166,53.2092202629],[56.8404002046,53.2101042485],[56.8404241211,53.2106852502],[56.8404560716,53.2114614232],[56.8403531329,53.2116814206],[56.8402061683,53.2117243601]]
  },
  {
    idStart: "1904",
    idEnd: "1911",
    lenght: "415.442",
    coordTop : [[56.8307319542,53.1489302353],[56.8313940227,53.1556510709]]
  },
  {
    idStart: "1904",
    idEnd: "2214",
    lenght: "6450.18",
    coordTop : [[56.8307319542,53.1489302353],[56.8313940227,53.1556510709],[56.8319310999,53.1623136957],[56.8319519381,53.1626770643],[56.832145624,53.1626662845],[56.8330199257,53.1625122234],[56.8355231959,53.1622225167],[56.8354028965,53.1589716934],[56.8363537327,53.1589156385],[56.8387441076,53.1587539417],[56.8398613817,53.1586680628],[56.8424340612,53.1583567067],[56.8427425645,53.158394436],[56.8430659523,53.1586412032],[56.8432981982,53.1590220889],[56.8434364052,53.1595102334],[56.8434481476,53.1605026921],[56.8433658524,53.1614360417],[56.8433452663,53.1619564357],[56.8434510464,53.1685384817],[56.8434980651,53.1689997665],[56.8435627219,53.1693216329],[56.8436802929,53.1696971287],[56.8438449309,53.1701263437],[56.8441448248,53.1707163572],[56.8472140785,53.1754370939],[56.8473431336,53.1758338797],[56.8473901965,53.1761557461],[56.8474313152,53.1765849611],[56.8474136789,53.176874578],[56.8473901965,53.1772179141],[56.8471314968,53.1780011552],[56.8468819329,53.1785591886],[56.8466497092,53.1789883139],[56.8464821359,53.1793744996],[56.8463910044,53.1796695962],[56.8458853801,53.1834675834],[56.845711957,53.1850554455],[56.8454264705,53.1864768497],[56.8452151177,53.1869008545],[56.8447389062,53.1876786159],[56.8442802773,53.1884564671],[56.8442067783,53.1886603847],[56.8441244847,53.1888051931],[56.8441097947,53.1890090209],[56.8441126934,53.1892290183],[56.8443309307,53.1964893821],[56.8433402057,53.1976963585],[56.8434342434,53.1998850138],[56.8433973969,53.2001329183],[56.8434052297,53.2004083723],[56.8435497513,53.2003922925],[56.8444866733,53.2001916987],[56.844598051,53.2015915434],[56.8446286589,53.2020660335],[56.8446639341,53.2023503503],[56.8448256201,53.2042976283],[56.8448537222,53.2046201235],[56.845222487,53.2088627768],[56.8438523166,53.2092202629],[56.8404002046,53.2101042485],[56.8404241211,53.2106852502]]
  },
  {
    idStart: "1904",
    idEnd: "2257",
    lenght: "1470.35",
    coordTop : [[56.8307319542,53.1489302353],[56.8313940227,53.1556510709],[56.8319310999,53.1623136957],[56.8319519381,53.1626770643],[56.8320367648,53.1639444973],[56.8320986401,53.1647326791],[56.8320047214,53.1667175067],[56.8315084864,53.1711006565],[56.8314002152,53.1720768557],[56.8313855693,53.1727796078]]
  },
  {
    idStart: "1906",
    idEnd: "1914",
    lenght: "408.248",
    coordTop : [[56.8317021746,53.156702549],[56.8316722442,53.1565066264],[56.8316399547,53.1560774114],[56.831501999,53.1546987669],[56.8312437301,53.1521667754],[56.8310384898,53.1501037045]]
  },
  {
    idStart: "1911",
    idEnd: "1777",
    lenght: "3934.75",
    coordTop : [[56.8313940227,53.1556510709],[56.8319310999,53.1623136957],[56.8319519381,53.1626770643],[56.8320367648,53.1639444973],[56.8320986401,53.1647326791],[56.8320047214,53.1667175067],[56.8315084864,53.1711006565],[56.8314002152,53.1720768557],[56.8313855693,53.1727796078],[56.8317666061,53.1838778439],[56.8318261719,53.1852442713],[56.8318384586,53.1855671258],[56.8318665213,53.1862819153],[56.8320930374,53.1913458982],[56.8322059755,53.1928150929],[56.8323471231,53.1942634466],[56.8324540646,53.1948865181],[56.833089122,53.1981873776],[56.8331290769,53.1983948884],[56.8333944096,53.1997999434],[56.8335756546,53.2007588051],[56.8336156581,53.2008946304],[56.8337341449,53.2011450807],[56.8339825187,53.2015866026],[56.8340617385,53.2016564017],[56.8342026825,53.2017790218],[56.8345085016,53.2018970604],[56.8358758851,53.2016127436],[56.8369902964,53.2014517655],[56.837254963,53.2054428905],[56.8372814,53.2057808367],[56.8373308344,53.2067418544],[56.8375734826,53.2106058503],[56.8375910412,53.2108536423],[56.8376715777,53.2135899319]]
  },
  {
    idStart: "1911",
    idEnd: "1820",
    lenght: "509.6",
    coordTop : [[56.8313940227,53.1556510709],[56.8319310999,53.1623136957],[56.8319519381,53.1626770643],[56.8320367648,53.1639444973]]
  },
  {
    idStart: "1914",
    idEnd: "121",
    lenght: "432.523",
    coordTop : [[56.8310384898,53.1501037045],[56.8310265469,53.1499834201],[56.8308665707,53.1482812923],[56.830853399,53.1481595706],[56.8308428814,53.148056983],[56.8307542183,53.1471431269],[56.8304108191,53.1430876825]]
  },
  {
    idStart: "1914",
    idEnd: "122",
    lenght: "783.004",
    coordTop : [[56.8310384898,53.1501037045],[56.8310265469,53.1499834201],[56.8308665707,53.1482812923],[56.830853399,53.1481595706],[56.8308428814,53.148056983],[56.8307542183,53.1471431269],[56.8304108191,53.1430876825],[56.8303399468,53.1422495544],[56.8301202518,53.1373531072]]
  },
  {
    idStart: "1914",
    idEnd: "1905",
    lenght: "182.867",
    coordTop : [[56.8310384898,53.1501037045],[56.8310265469,53.1499834201],[56.8308665707,53.1482812923],[56.830853399,53.1481595706],[56.8308428814,53.148056983],[56.8307542183,53.1471431269]]
  },
  {
    idStart: "1914",
    idEnd: "1910",
    lenght: "251.263",
    coordTop : [[56.8310384898,53.1501037045],[56.8310265469,53.1499834201],[56.8308665707,53.1482812923],[56.8320787358,53.1477395184]]
  },
  {
    idStart: "1914",
    idEnd: "2174",
    lenght: "900.349",
    coordTop : [[56.8310384898,53.1501037045],[56.8310265469,53.1499834201],[56.8308665707,53.1482812923],[56.830853399,53.1481595706],[56.8308428814,53.148056983],[56.8307542183,53.1471431269],[56.8304108191,53.1430876825],[56.8303399468,53.1422495544],[56.8301202518,53.1373531072],[56.830002245,53.1354363719]]
  },
  {
    idStart: "1950",
    idEnd: "1320",
    lenght: "540.752",
    coordTop : [[56.8823767768,53.2501888731],[56.8821976332,53.249856227],[56.8820860238,53.2497033337],[56.8819494811,53.2495612202],[56.8818084714,53.2494485715],[56.8817526662,53.2494190169],[56.8816484177,53.2493680824],[56.8815133458,53.2493117581],[56.8812828095,53.2492554337],[56.8811432699,53.2492581286],[56.8806586807,53.249231269],[56.8799876178,53.2492178841],[56.8792269146,53.2491910245],[56.8784015995,53.2497516631],[56.8777642183,53.250204953]]
  },
  {
    idStart: "1951",
    idEnd: "14",
    lenght: "2456.52",
    coordTop : [[56.8796229259,53.258363632],[56.8846084413,53.2587607963],[56.8857417682,53.2588680361],[56.8861851173,53.2589161858],[56.8869240861,53.2589673897],[56.8876069003,53.2589084602],[56.8894672776,53.2579291169],[56.8904962333,53.2573518595],[56.8911990514,53.2615769058],[56.8912459611,53.261914852],[56.8914217737,53.2617915133],[56.891911081,53.2615876856],[56.8943313208,53.2603913991],[56.8948323162,53.2599729639],[56.8973291468,53.2569535465],[56.8989530765,53.2557847372]]
  },
  {
    idStart: "1951",
    idEnd: "1954",
    lenght: "884.107",
    coordTop : [[56.8796229259,53.258363632],[56.8846084413,53.2587607963],[56.8857417682,53.2588680361],[56.8857432405,53.2583932764],[56.8857315114,53.2582109184],[56.8857183099,53.2579910108],[56.8853370232,53.257272082],[56.8850453269,53.2561335724],[56.8849982119,53.2559496792]]
  },
  {
    idStart: "1951",
    idEnd: "1956",
    lenght: "730.462",
    coordTop : [[56.8796229259,53.258363632],[56.8846084413,53.2587607963],[56.8857417682,53.2588680361],[56.8861851173,53.2589161858]]
  },
  {
    idStart: "1951",
    idEnd: "2215",
    lenght: "871.769",
    coordTop : [[56.8796229259,53.258363632],[56.8846084413,53.2587607963],[56.8857417682,53.2588680361],[56.8857432405,53.2583932764],[56.8857315114,53.2582109184],[56.8857183099,53.2579910108],[56.8853370232,53.257272082],[56.8850453269,53.2561335724]]
  },
  {
    idStart: "1952",
    idEnd: "1364",
    lenght: "490.786",
    coordTop : [[56.8832016606,53.248874009],[56.8822139279,53.2450544623],[56.8813375847,53.2415515717]]
  },
  {
    idStart: "1953",
    idEnd: "8",
    lenght: "645.805",
    coordTop : [[56.883336481,53.2501453048],[56.8849366694,53.2564217439],[56.8852268113,53.2574462725],[56.8852736794,53.2577628388],[56.88525611,53.2579076472],[56.8851826834,53.2581272238],[56.8850365229,53.2582742501],[56.8846001545,53.2583441513],[56.8842127773,53.2583153027]]
  },
  {
    idStart: "1953",
    idEnd: "1955",
    lenght: "420.765",
    coordTop : [[56.883336481,53.2501453048],[56.8849366694,53.2564217439]]
  },
  {
    idStart: "1953",
    idEnd: "1956",
    lenght: "809.588",
    coordTop : [[56.883336481,53.2501453048],[56.8849366694,53.2564217439],[56.8852268113,53.2574462725],[56.8852736794,53.2577628388],[56.88525611,53.2579076472],[56.8851826834,53.2581272238],[56.8850365229,53.2582742501],[56.8846001545,53.2583441513],[56.8845474964,53.2584423061],[56.8845343141,53.258539369],[56.8845428758,53.2586588676],[56.8846084413,53.2587607963],[56.8857417682,53.2588680361],[56.8861851173,53.2589161858]]
  },
  {
    idStart: "1954",
    idEnd: "1359",
    lenght: "730.722",
    coordTop : [[56.8849982119,53.2559496792],[56.8832016606,53.248874009],[56.8822139279,53.2450544623]]
  },
  {
    idStart: "1954",
    idEnd: "1952",
    lenght: "473.997",
    coordTop : [[56.8849982119,53.2559496792],[56.8832016606,53.248874009]]
  },
  {
    idStart: "1957",
    idEnd: "415",
    lenght: "4698.07",
    coordTop : [[56.8793151684,53.2579505867],[56.8784504887,53.2578754875],[56.8783654725,53.2577198993],[56.8781690806,53.2576394102],[56.8779345968,53.2576341102],[56.8777000624,53.2576287203],[56.8775623255,53.2576126404],[56.8772516058,53.2576287203],[56.8734758848,53.2573068539],[56.8725729247,53.2572317548],[56.8715087164,53.2562232162],[56.8712565658,53.255976449],[56.8712096801,53.2563358649],[56.8690442591,53.2742652946],[56.8689600438,53.2748254082],[56.8689022471,53.2750230121],[56.8688217069,53.2751539092],[56.8685341685,53.2753641317],[56.8681781888,53.275458663],[56.8678486318,53.2756061611],[56.8660427199,53.276847491],[56.8657125683,53.2770235532],[56.8654291804,53.2771381796],[56.8632686279,53.2776030962],[56.8585774015,53.2785432999],[56.8569101106,53.2788647036],[56.8562158719,53.279034143],[56.8533780148,53.2792812458],[56.8493239795,53.2796491502],[56.8489871415,53.2796958714],[56.8487972951,53.2797474938],[56.8487612851,53.2800538139],[56.8485054441,53.2816035874],[56.8481717379,53.2836251561],[56.8478619038,53.2847882948]]
  },
  {
    idStart: "1957",
    idEnd: "1348",
    lenght: "1063.95",
    coordTop : [[56.8793151684,53.2579505867],[56.8784504887,53.2578754875],[56.8783654725,53.2577198993],[56.8781690806,53.2576394102],[56.8779345968,53.2576341102],[56.8777000624,53.2576287203],[56.8776179898,53.2577789186],[56.8775886851,53.2579183371],[56.8775623255,53.2581114749],[56.8776121484,53.2584011816],[56.8777675071,53.2586264791],[56.8765477891,53.2696082038],[56.8764278179,53.270614227],[56.8763223274,53.2716119858]]
  },
  {
    idStart: "1957",
    idEnd: "1355",
    lenght: "1002.2",
    coordTop : [[56.8793151684,53.2579505867],[56.8784504887,53.2578754875],[56.8783654725,53.2577198993],[56.8781690806,53.2576394102],[56.8779345968,53.2576341102],[56.8777000624,53.2576287203],[56.8776179898,53.2577789186],[56.8775886851,53.2579183371],[56.8775623255,53.2581114749],[56.8776121484,53.2584011816],[56.8777675071,53.2586264791],[56.8765477891,53.2696082038],[56.8764278179,53.270614227]]
  },
  {
    idStart: "2246",
    idEnd: "1204",
    lenght: "1022.01",
    coordTop : [[56.8645020167,53.2230577752],[56.8639741964,53.2228646374],[56.8616868397,53.221126577],[56.861428779,53.2209012796],[56.8606420634,53.220614178],[56.8604965045,53.220612022],[56.8597751347,53.2206549615],[56.8556680369,53.2224327275]]
  },
  {
    idStart: "2246",
    idEnd: "1368",
    lenght: "456.263",
    coordTop : [[56.8645020167,53.2230577752],[56.8639741964,53.2228646374],[56.8616868397,53.221126577],[56.861428779,53.2209012796],[56.8606420634,53.220614178]]
  },
  {
    idStart: "2247",
    idEnd: "64",
    lenght: "392.795",
    coordTop : [[56.8769018299,53.1973183203],[56.8767873571,53.1938530962],[56.8784216755,53.1937394593]]
  }
]
var map = L.map('map', {
  center:  [56.870961, 53.180364],
  zoom: 14
});
var osmLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);
var baseMaps = {
  OSM: osmLayer
};
var myIconBus = L.icon({
  iconUrl: 'https://w7.pngwing.com/pngs/689/459/png-transparent-bus-computer-icons-transport-bus-school-bus-public-transport-transport.png',
  iconSize: [16, 16],
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});
var myIconTram = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/66/66462.png',
  iconSize: [16, 16],
  iconAnchor: null,
  popupAnchor: [-3, -76],
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});

//Объявление всех маркеров на карте
for(i = 0; i < sTop.length; i++){

  var a = sTop[i];
  var title1 = a.fullNameStop;
  var idOfStop = a.idStop
  if (a.type == 2)
    var icon_this = myIconBus
   
  else
    icon_this = myIconTram

  var marker = L.marker(L.latLng(a.latitude,a.longitude), {title: title1, icon: icon_this, opacity: 0.25}).bindPopup(title1).addTo(map)

}

var group19_1 = []
var group74_0 = []
var group74_1 = []
var group78_0 = []
var group78_1 = []
var group84_0 = []
var group84_1 = []
var group87_0 = []
var group87_1 = []

var groupPolyline = []
groupPolyline.length = 10

for(q = 0; q < groupPolyline.length; q++){
  let obj = subroute[q]
  groupPolyline[q] = setGroup(subroute, stage,obj)
}

var poliline19_0 = L.polyline(groupPolyline[0],{color:"red"})
var poliline19_1 = L.polyline(groupPolyline[1],{color:"black"})
var poliline74_0 = L.polyline(groupPolyline[2],{color:"yellow"})
var poliline74_1 = L.polyline(groupPolyline[3],{color:"blue"})
var poliline78_0 = L.polyline(groupPolyline[4],{color:"green"})
var poliline78_1 = L.polyline(groupPolyline[5],{color:"violet"})
var poliline84_0 = L.polyline(groupPolyline[6],{color:"orange"})
var poliline84_1 = L.polyline(groupPolyline[7],{color:"pink"})
var poliline87_0 = L.polyline(groupPolyline[8],{color:"brown"})
var poliline87_1 = L.polyline(groupPolyline[9],{color:"grey"})

L.control.layers(baseMaps, {
  '19 автобус направление -1': layersgrope0,
  '19 автобус направление 1': layersgrope1,
  '6 троллейбус направление -1': layersgrope2,
  '6 троллейбус направление 1': layersgrope3,
  '14 троллейбус направление -1': layersgrope4,
  '14 троллейбус направление 1': layersgrope5,
  '7 трамвай направление -1': layersgrope6,
  '7 трамвай направление 1': layersgrope7,
  '10 трамвай направление -1': layersgrope8,
  '10 трамвай направление 1': layersgrope9
  
}).addTo(map)


