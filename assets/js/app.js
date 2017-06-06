var lugaresCool = [
    {
        "nombre": "Club Social Rhodesia",
        "tipoLugar": "Club Nocturno de Música Electrónica",
        "direccion": "Calle de Durango 181, Roma Nte., 06700 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "-99.165256",
            "latitud": "19.420091"
        }
    },
    {
        "nombre": "Mono",
        "tipoLugar": "Bar",
        "direccion": "Calle Versalles 64, Cuahutémoc, Juárez, 06600 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "-99.1550875",
            "latitud": "19.4290281"
        }
    },
    {
        "nombre": "Parker & Lenox",
        "tipoLugar": "Club de Jazz y Bar con Atmósfera Retro",
        "direccion": "Calle Milán 14, Cuauhtémoc, Juárez, 06600 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "19.4308017",
            "latitud": "-99.1565298"
        }
    },
    {
        "nombre": "Patrick Miller",
        "tipoLugar": "Sala de Baile",
        "direccion": "Calle Mérida 17, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX",
        "coordenadas":{
            "longitud": "19.4238646",
            "latitud": "-99.1588189"
        }
    },
];


var plantillaLugar =
    '<section class="container">' +
        '<section class="row">' +
            '<section class="col s12">' +
                '<div class="cont-restauran z-depth-3">' +
                    '<img src="https://dummyimage.com/100x100/c2c2c2/fff.jpg&text=logo" alt="" class="circle" />' +
                    '<div class="lugar" data-longitud="__longitud__" data-latitud="__latitud__">' +
                        '<h5 class="grey-text text-darken-3 title texto">__nombre__</h5>' +
                        '<h6 class="texto light-italic">__tipoLugar__</h6>' +
                        '<p class="texto thin ">Dirección: __direccion__</p>' +
                    '</div>' +
                '</div>' +
            '</section>' +
        '</section>' +
    '</section>';


//funcion para imprimir dentro del html los lugares
//var mostrarLugares = function(lugaresCool){ //lugaresCool es el objeto
//    var plantillaHTML = ""; //se crea una plantilla vacia para llenar con la plantilla hecha
//    lugaresCool.forEach(function(lugarCool){ //itera el objeto donde cada indice es el lugarCool
//        plantillaHTML += plantillaLugar.replace("__longitud__", lugarCool.longitud)
//            .replace("__latitud__", lugarCool.latitud)
//            .replace("__nombre__", lugarCool.nombre) //se le suma a la plantilla a imprimir la plantilla determinada, remplazando los valores 
//            .replace("__tipoLugar__", lugarCool.tipoLugar)
//            .replace("__direccion__", lugarCool.direccion);
//    });
//    $(".lugares").html(plantillaHTML);
//};


$(document).ready(cargarPagina);

function cargarPagina(){
    obtenerUbicacion();
//    mostrarLugares(lugaresCool);
    $(".lugar").click(cambiarUbicacion);
}


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
        zoom: 18,
        center: coordenadas
    });
    var marker = new google.maps.Marker({
      position: coordenadas,
      map: map
    });
}

function cambiarUbicacion(){
    //atributo data: cambia atributos que no queremos que se vean...todos los atributos data inician con data-  , el valor que reciba va a ser un texto
    var latitud = $(this).data("latitud");
    var longitud = $(this).data("longitud");
    
    var coordenadas = {
        lat: latitud,
        lng: longitud
    };
    
    mostrarMapa(coordenadas);
}










