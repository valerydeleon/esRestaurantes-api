var restaurantes = [
    {
        "nombre": "Club Social Rhodesia",
        "tipoLugar": "Club Nocturno de Música Electrónica",
        "direccion": "Calle de Durango 181, Roma Nte., 06700 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "19.4198484",
            "latitud": "-99.1651271"
        }
    },
    {
        "nombre": "Mono",
        "tipoLugar": "Bar",
        "direccion": "Calle Versalles 64, Cuahutémoc, Juárez, 06600 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "19.4289383",
            "latitud": "-99.157185"
        }
    },
    {
        "nombre": "Parker & Lenox",
        "tipoLugar": "Club de Jazz y Bar con Atmósfera Retro",
        "direccion": "Calle Milán 14, Cuauhtémoc, Juárez, 06600 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "19.4307904",
            "latitud": "-99.1586909"
        }
    },
    {
        "nombre": "Patrick Miller",
        "tipoLugar": "Sala de Baile",
        "direccion": "Calle Mérida 17, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "19.4198484",
            "latitud": "-99.1651271"
        }
    },
];


var plantillaLugar =
    '<section class="container">' +
        '<section class="row">' +
            '<section class="col s12">' +
                '<div class="cont-restauran z-depth-3">' +
                    '<img src="https://dummyimage.com/100x100/c2c2c2/fff.jpg&text=logo" alt="" class="circle" />' +
                    '<div>' +
                        '<h5 class="grey-text text-darken-3 title texto">__nombre__</h5>' +
                        '<h6 class="texto light-italic">__tipoLugar__</h6>' +
                        '<p class="texto thin ">Dirección: __direccion__</p>' +
                    '</div>' +
                '</div>' +
            '</section>' +
        '</section>' +
    '</section>';


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









