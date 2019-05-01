function toggle(a) {
    var x = a;
    var b = a.innerHTML;
    if (x.nextElementSibling.style.display === 'none') {
        b = b.split('+');
        b = "-" + b[1];
        a.innerHTML = b;
        x.nextElementSibling.style.display = 'block';
    } else {
        b = b.split('-');
        b = "+" + b[1];
        a.innerHTML = b;
        x.nextElementSibling.style.display = 'none';
    }
}

var map;
var markers;

var Ujiloc = new google.maps.LatLng(39.9937, -0.0672);
var ValenciaAirportLoc = new google.maps.LatLng(39.4921903, -0.4743740);
var BarcelonaAirportLoc = new google.maps.LatLng(41.3038545, 2.0729609);
var MadridAirportLoc = new google.maps.LatLng(39.4921903, -0.4743740);


var imageUJI = {
    url: 'images/worldwide.png'
};

var imageAirport = {
    url: 'images/airport.png'
};

var ujiTooltip = 'Conference Venue: Universitat Jaume I- Espaitec 2'

var ValenciaAirport;
var BarcelonaAirport;
var MadridAirport;

var university;
var hotelMundial;
var theIndependente;
var inspiraSantaMarta;
var eurostarsDasLetras;
var lisbonSaoBentoHotel;
var novotelLisbon;

var CampolideTrain;
var RuaDeCampolideBus;
var PalacioDaJusticiaBus;
var SaoSebastiaoMetro;
var PracadeEspanhaMetro;

var infoRuaDeCampolide
var infoPalacioDaJusticia
var infoSaoSebastiao
var infoPracadeEspanha
var infoCampolide
var infoUji
var infoValenciaAirport
var infoUji
var infohotelMundial
var infotheIndependente
var infoinspiraSantaMarta
var infoeurostarsDasLetras
var infolisbonSaoBentoHotel
var infonovotelLisbon

var contentUji = '<div id = "content" style = "color:#4a87d3" > ' +
    '<h2 style="color:#4a87d3">Jaume I University </h2>' +
    '<p align="left" style="color:#4a87d3">' +
    '<b style="color:#4a87d3">Address: </b> Avenida de Vicent Sos Baynat, s/n, 12071 Castellón <br>' +
    '<b style="color:#4a87d3">Teléfono: </b> +34 902320320<br>' +
    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.uji.es">' +
    'https://www.uji.es</a></p>' +
    '</div>';
var contentValenciaAirport = '<div id="content" style="color:#4686A0">' +
    '<h2 style="color:#4686A0">Valencia Airport</h2>' +
    '<p align="left" style="color:#4686A0">' +
    '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="https://www.airport-valencia.com/">' +
    'https://www.airport-valencia.com/</a></p>' +
    '</a></p>' +
    '</div>';
align = "left"


function clearObjectFromMap(object) {
    if (object != null) {
        object.setMap(null);
    }
}

function clearInforWindows() {
    if (infoRuaDeCampolide) infoRuaDeCampolide.close();
    if (infoPalacioDaJusticia) infoPalacioDaJusticia.close();
    if (infoSaoSebastiao) infoSaoSebastiao.close();
    if (infoPracadeEspanha) infoPracadeEspanha.close();
    if (infoCampolide) infoCampolide.close();
    if (infoUji) infoUji.close();
    if (infoValenciaAirport) infoValenciaAirport.close();
    if (infoUji) infoUji.close();
    if (infohotelMundial) infohotelMundial.close();
    if (infotheIndependente) infotheIndependente.close();
    if (infoinspiraSantaMarta) infoinspiraSantaMarta.close();
    if (infoeurostarsDasLetras) infoeurostarsDasLetras.close();
    if (infolisbonSaoBentoHotel) infolisbonSaoBentoHotel.close();
    if (infonovotelLisbon) infonovotelLisbon.close();
}

function setMapVisibility(itemClicked) {
    window.location.hash = '#map_section';
    clearObjectFromMap(ValenciaAirport);
    //clearObjectFromMap(university);
    clearObjectFromMap(hotelMundial);
    clearObjectFromMap(theIndependente);
    clearObjectFromMap(inspiraSantaMarta);
    clearObjectFromMap(eurostarsDasLetras);
    clearObjectFromMap(lisbonSaoBentoHotel);
    clearObjectFromMap(novotelLisbon);


    clearObjectFromMap(CampolideTrain);
    clearObjectFromMap(RuaDeCampolideBus);
    clearObjectFromMap(PalacioDaJusticiaBus);
    clearObjectFromMap(SaoSebastiaoMetro);
    clearObjectFromMap(PracadeEspanhaMetro);

    switch (itemClicked) {
        case "flight":
            {
                //Airports

                infoValenciaAirport = new google.maps.InfoWindow({
                    content: contentValenciaAirport
                });

                ValenciaAirport = new google.maps.Marker({
                    position: ValenciaAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoBarcelonaAirport = new google.maps.InfoWindow({
                    content: ""
                });

                BarcelonaAirport = new google.maps.Marker({
                    position: BarcelonaAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoMadridAirport = new google.maps.InfoWindow({
                    content: ""
                });

                MadridAirport = new google.maps.Marker({
                    position: MadridAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                map.panTo(ValenciaAirportLoc);
                map.setZoom(7);
                ValenciaAirport.addListener('click', function() {
                    clearInforWindows()
                    infoValenciaAirport.open(map, ValenciaAirport);
                });
            }
            break;
        case "location":
            {

                infoUji = new google.maps.InfoWindow({
                    content: contentUji
                });
                if (!university)
                    university = new google.maps.Marker({
                        position: Ujiloc,
                        map: map,
                        icon: imageUJI,
                        title: ujiTooltip,
                        animation: google.maps.Animation.BOUNCE
                    });


                university.addListener('click', function() {
                    clearInforWindows()
                    infoUji.open(map, university);
                    //infoDomplatz.close();
                });


                map.panTo(Ujiloc);
                map.setZoom(13);
            }
            break;
        case 'bed':
            {

                var imageHotel = {
                    url: 'images/hotel.png'
                };
                var hotelMundialLoc = new google.maps.LatLng(38.7148437236847, -9.13698690004688);
                var theIndependenteLoc = new google.maps.LatLng(38.7148526484081, -9.14462266362903);
                var inspiraSantaMartaLoc = new google.maps.LatLng(38.7231701994101, -9.14558482494839);
                var eurostarsDasLetrasLoc = new google.maps.LatLng(38.7199082178771, -9.14885469940544);
                var lisbonSaoBentoHotelLoc = new google.maps.LatLng(38.7189245217267, -9.15567166364558);
                var novotelLisbonLoc = new google.maps.LatLng(38.7363093293204, -9.16210923037327);
                // var sleepHotelLoc= new google.maps.LatLng(51.960867, 7.636275);


                var contenthotelMundial = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Hotel Mundial</h2><br>' +
                    // '<h3 style="color:#4a87d3">City Center</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Praça Martim Moniz 2; 1100-341 Lisboa<br>' +
                    // '<b style="color:#4a87d3">Economy Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">72,- €</b> <br/>'+'<b style="color:#4a87d3">Comfort Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	77,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://www.hotel-mundial.pt/" target="_blank">' +
                    'http://www.hotel-mundial.pt/</a></p>' +
                    '</div>';
                var contenttheIndependente = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Hotel The Independente  </h2><br>' +
                    // '<h3 style="color:#4a87d3">Close to IfGI</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Rua de São Pedro de Alcântara 81; 1250-238 Lisboa<br>' +
                    // '<b style="color:#4a87d3">Single room, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">77,- €</b> <br/>'+'<b style="color:#4a87d3">Double room, Shower/WC, breakfast included	</b><br>'+
                    // '<b style="color:#4a87d3">	102,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="https://theindependente.pt/collective/#sleep" target="_blank">' +
                    'https://theindependente.pt/collective/#sleep</a></p>' +
                    '</div>';
                var contentinspiraSantaMarta = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Inspira Santa Marta</h2><br>' +
                    // '<h3 style="color:#4a87d3">Münster Central Station</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Rua de Santa Marta, 48; 1150-297 Lisboa<br>' +
                    // '<b style="color:#4a87d3">Economy Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">75,- €</b> <br/>'+'<b style="color:#4a87d3">Comfort Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	99,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://www.inspirahotels.com/boutique-hotel-em-lisboa" target="_blank">' +
                    'http://www.inspirahotels.com/boutique-hotel-em-lisboa</a></p>' +
                    '</div>';
                var contenteurostarsDasLetras = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Eurostars Das Letras </h2><br>' +
                    // '<h3 style="color:#4a87d3">Aasee</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Rua Castilho, 6 - 12; 1250-069 Lisboa<br>' +
                    // '<b style="color:#4a87d3">Single room, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">65,- €</b> <br/>'+'<b style="color:#4a87d3">Comfort Single room, Shower/WC, breakfast included	</b><br>'+
                    // '<b style="color:#4a87d3">	70,- € </b><br/>'+
                    // '<b style="color:#4a87d3">Double room / 1 person, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">70,- €</b> <br/>'+'<b style="color:#4a87d3">Double room, Shower/WC, breakfast included	</b><br>'+
                    // '<b style="color:#4a87d3">	75,- € </b><br/>'+
                    // '<b style="color:#4a87d3">Maisonette (45-55 qm) / 1 person	</b><br>'+
                    // '<b style="color:#4a87d3">	90,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.eurostarshotels.com.pt/eurostars-das-letras.html" target="_blank">' +
                    'https://www.eurostarshotels.com.pt/eurostars-das-letras.html</a></p>' +
                    '</div>';
                var contentlisbonSaoBentoHotel = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Lisbon São Bento Hotel</h2><br>' +
                    // '<h3 style="color:#4a87d3">Aasee</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Rua de São Bento, 353; 269-084 Lisboa<br>' +
                    // '<b style="color:#4a87d3">Single room, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">70,- €</b> <br/>'+'<b style="color:#4a87d3">Single room / 1 person, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	80,- € </b><br/>'+
                    // '<b style="color:#4a87d3">Comfort Double room / 1 person, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	90,- € </b><br/>'+
                    // '<b style="color:#4a87d3">Double room, Shower/WC, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	100,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://www.lisbonsaobentohotel.pt/" target="_blank">' +
                    'http://www.lisbonsaobentohotel.pt/</a></p>' +
                    '</div>';
                var contentnovotelLisbon = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Novotel Lisbon</h2><br>' +
                    //    '<h3 style="color:#4a87d3"> Münster Cathedral</h3><br>'+
                    //    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Avenida José Malhoa 1 1A, 1099-051 Lisboa<br>' +
                    //    '<b style="color:#4a87d3">8-bed room </b><br>'+
                    //     '<b style="color:#4a87d3">17,- €</b> <br/>'+'<b style="color:#4a87d3">4-bed room </b><br>'+
                    //     '<b style="color:#4a87d3">	20,- € </b><br/>'+
                    // '<b style="color:#4a87d3">2-bed room </b><br>'+
                    //     '<b style="color:#4a87d3">	27,- € </b><br/>'+
                    // '<b style="color:#4a87d3">single room </b><br>'+
                    //     '<b style="color:#4a87d3">	35,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://novotel-lisboa.hotelsoflisbon.com/pt/" target="_blank">' +
                    'http://novotel-lisboa.hotelsoflisbon.com/pt/</a></p>' +
                    '</div>';


                infohotelMundial = new google.maps.InfoWindow({
                    content: contenthotelMundial
                });
                infotheIndependente = new google.maps.InfoWindow({
                    content: contenttheIndependente
                });
                infoinspiraSantaMarta = new google.maps.InfoWindow({
                    content: contentinspiraSantaMarta
                });
                infoeurostarsDasLetras = new google.maps.InfoWindow({
                    content: contenteurostarsDasLetras
                });
                infolisbonSaoBentoHotel = new google.maps.InfoWindow({
                    content: contentlisbonSaoBentoHotel
                });
                infonovotelLisbon = new google.maps.InfoWindow({
                    content: contentnovotelLisbon
                });

                hotelMundial = new google.maps.Marker({
                    position: hotelMundialLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });
                theIndependente = new google.maps.Marker({
                    position: theIndependenteLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });

                inspiraSantaMarta = new google.maps.Marker({
                    position: inspiraSantaMartaLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });

                eurostarsDasLetras = new google.maps.Marker({
                    position: eurostarsDasLetrasLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });

                lisbonSaoBentoHotel = new google.maps.Marker({
                    position: lisbonSaoBentoHotelLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });
                novotelLisbon = new google.maps.Marker({
                    position: novotelLisbonLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });


                hotelMundial.addListener('click', function() {
                    clearInforWindows()
                    infohotelMundial.open(map, hotelMundial);
                });
                theIndependente.addListener('click', function() {
                    clearInforWindows()
                    infotheIndependente.open(map, theIndependente);
                });
                inspiraSantaMarta.addListener('click', function() {
                    clearInforWindows()
                    infoinspiraSantaMarta.open(map, inspiraSantaMarta);
                });
                eurostarsDasLetras.addListener('click', function() {
                    clearInforWindows()
                    infoeurostarsDasLetras.open(map, eurostarsDasLetras);
                });
                lisbonSaoBentoHotel.addListener('click', function() {
                    clearInforWindows()
                    infolisbonSaoBentoHotel.open(map, lisbonSaoBentoHotel);
                });
                novotelLisbon.addListener('click', function() {
                    clearInforWindows()
                    infonovotelLisbon.open(map, novotelLisbon);
                });
                map.panTo(hotelMundialLoc);
                map.setZoom(13);
            }
            break;
        case 'publicTransport':
            {
                var imageBus = {
                    url: 'images/front-bus.png'
                };

                var busRuaDeCampolideLoc = new google.maps.LatLng(38.7295818537027, -9.16147883968775);
                var busPalacioDaJusticiaLoc = new google.maps.LatLng(38.7309865923032, -9.15653214537912);

                var contentRuaDeCampolide = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Bus stop: Rua De Campolide</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    // '<b style="color:#4686A0">Address: </b> Düsseldorf International Airport (DUS), 40474 Düsseldorf, Germany <br> </p>'+
                    '</div>';

                var contentPalacioDaJusticia = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Bus stop: Palácio Da Justicia</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    // '<b style="color:#4686A0">Address: </b> Düsseldorf International Airport (DUS), 40474 Düsseldorf, Germany <br> </p>'+
                    '</div>';

                infoRuaDeCampolide = new google.maps.InfoWindow({
                    content: contentRuaDeCampolide
                });

                infoPalacioDaJusticia = new google.maps.InfoWindow({
                    content: contentPalacioDaJusticia
                });

                RuaDeCampolideBus = new google.maps.Marker({
                    position: busRuaDeCampolideLoc,
                    map: map,
                    icon: imageBus,
                    // animation: google.maps.Animation.BOUNCE
                });


                PalacioDaJusticiaBus = new google.maps.Marker({
                    position: busPalacioDaJusticiaLoc,
                    map: map,
                    icon: imageBus,
                    // animation: google.maps.Animation.BOUNCE
                });

                RuaDeCampolideBus.addListener('click', function() {
                    clearInforWindows()
                    infoRuaDeCampolide.open(map, RuaDeCampolideBus);
                });

                PalacioDaJusticiaBus.addListener('click', function() {
                    clearInforWindows()
                    infoPalacioDaJusticia.open(map, PalacioDaJusticiaBus);
                });

                // map.panTo(busRuaDeCampolideLoc);
                // map.setZoom(16);

                // Metro

                var imageMetro = {
                    url: 'images/subway.png'
                };

                var SaoSebastiaoMetroLoc = new google.maps.LatLng(38.7344481768096, -9.15418470961285);
                var PracadeEspanhaMetroLoc = new google.maps.LatLng(38.7377465837062, -9.15835157972236);


                var contentSaoSebastiao = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Metro: São Sebastião</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    // '<b style="color:#4686A0">Address: </b> Düsseldorf International Airport (DUS), 40474 Düsseldorf, Germany <br> </p>'+
                    '</div>';

                var contentPracadeEspanha = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Metro: Praça de Espanha</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    // '<b style="color:#4686A0">Address: </b> Düsseldorf International Airport (DUS), 40474 Düsseldorf, Germany <br> </p>'+
                    '</div>';


                infoSaoSebastiao = new google.maps.InfoWindow({
                    content: contentSaoSebastiao
                });

                infoPracadeEspanha = new google.maps.InfoWindow({
                    content: contentPracadeEspanha
                });


                SaoSebastiaoMetro = new google.maps.Marker({
                    position: SaoSebastiaoMetroLoc,
                    map: map,
                    icon: imageMetro,
                    // animation: google.maps.Animation.BOUNCE
                });

                PracadeEspanhaMetro = new google.maps.Marker({
                    position: PracadeEspanhaMetroLoc,
                    map: map,
                    icon: imageMetro,
                    // animation: google.maps.Animation.BOUNCE
                });

                SaoSebastiaoMetro.addListener('click', function() {
                    clearInforWindows()
                    infoSaoSebastiao.open(map, SaoSebastiaoMetro);
                });

                PracadeEspanhaMetro.addListener('click', function() {
                    clearInforWindows()
                    infoPracadeEspanha.open(map, PracadeEspanhaMetro);
                });


                // map.panTo(SaoSebastiaoMetroLoc);
                // map.setZoom(14);

                //Train
                var imageTrain = {
                    url: 'images/train.png'
                };


                var trainstationCampolideLoc = new google.maps.LatLng(38.7332879542611, -9.16701009151308);

                var contentCampolide = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Train station: Campolide</h2>' +
                    '<p align="left" style="color:#4a87d3">' +
                    // '<b style="color:#4a87d3">Address: </b> 48143 Münster, Germany <br>' +
                    '</p>' +
                    '</div>';


                infoCampolide = new google.maps.InfoWindow({
                    content: contentCampolide
                });



                CampolideTrain = new google.maps.Marker({
                    position: trainstationCampolideLoc,
                    map: map,
                    icon: imageTrain,
                    // animation: google.maps.Animation.BOUNCE
                });


                CampolideTrain.addListener('click', function() {
                    clearInforWindows()
                    infoCampolide.open(map, CampolideTrain);
                });


                map.panTo(trainstationCampolideLoc);
                map.setZoom(15);

            }
            break;
        default:
            {}
    }
}

$(window).resize(function() {
    google.maps.event.trigger(map, "resize");
    map.setCenter(Ujiloc);
});

function initMap() {
    //document.getElementById('map_section').style.display = 'none'
    map = new google.maps.Map(document.getElementById('map'), {
        center: Ujiloc,
        scrollwheel: false,
        zoom: 13
    });

    infoUji = new google.maps.InfoWindow({
        content: contentUji
    });


    university = new google.maps.Marker({
        position: Ujiloc,
        map: map,
        icon: imageUJI,
        animation: google.maps.Animation.BOUNCE,
        title: ujiTooltip,
    });


    university.addListener('click', function() {
        clearInforWindows()
        infoUji.open(map, university);
        //infoDomplatz.close();
    });

    map.panTo(Ujiloc);
    map.setZoom(13);



}