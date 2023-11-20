

var map = L.map('map').setView([33.671023697067454, 130.44456249081034], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
// const whiteIcon = L.icon({
//     iconUrl: 'images/ico.png',
//     shadowUrl: 'images/ico_shadow.png',
  
//   iconSize:     [40, 40], // size of the icon
//   shadowSize:   [40, 40], // size of the shadow
//   iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//   shadowAnchor: [20, 40],  // the same for the shadow
//   popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//   });

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
    yellowIcon = new circleIcon({ iconUrl: 'images/ico_yellow.png' });

L.marker([33.671023697067454, 130.44456249081034], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！<br><img src="images/img01.png" alt="img">');
L.marker([33.638918, 130.441017], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！<br><img src="images/img01.png" alt="img">');
L.marker([33.663889, 130.44857], { icon: blueIcon }).addTo(map).bindPopup('こんにちは！<br><img src="images/img01.png" alt="img">');
L.marker([33.660746, 130.453849], { icon: yellowIcon }).addTo(map).bindPopup('こんにちは！<br><img src="images/img01.png" alt="img">');

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

const circle = L.circle([33.666497, 130.413551], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");
  
// 多角形の表示
const polygon = L.polygon([
    [33.66864, 130.456724],
    [33.674926, 130.447025],
    [33.666425, 130.436554]
  ], {
    color: '#000',
    fillColor: '#000',
    colorOpacity: 0.5,
    fillOpacity: 0.3
  }).addTo(map);