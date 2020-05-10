let mymap = L.map('mapid').setView([-23.533322, -46.448995], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmljaGFyZG9sb3BlcyIsImEiOiJjazl6ZDB1NjMwZDN5M2hvdjdkZ3I4cTFwIn0.6bnMFsLWuFup-an63Zjynw'
}).addTo(mymap);

function setLocation(latitude, longitude) {
    mymap.setView([latitude, longitude], 50);

    var marker = L.marker([latitude, longitude]).addTo(mymap);
    marker.bindPopup("A propriedade selecionada se encontra nessa região.");

    $("#exampleModal").modal();
}