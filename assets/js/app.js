var obtenerUbicacion = function(e){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarUbicacion);
    } else {
        alert("Actualiza tu navegador");
    }
};


var mostrarUbicacion = function(posicion){
    var coordenadas = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude
    };
    mostrarMapa(coordenadas);
};



function mostrarMapa(coordenadas) {
    var map = new google.maps.Map($("#map")[0],{
        zoom: 17,
        center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}


$(document).ready(obtenerUbicacion);
