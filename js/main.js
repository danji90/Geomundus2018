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
var MadridAirportLoc = new google.maps.LatLng(40.505776, -3.566914);


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
var CastellonTrain;
var ValenciaTrain;
var BarcelonaTrain;

var university;
var hotelLuz;

var infoUji
var infoValenciaAirport
var infoUji
var infohotelLuz

var contentUji = '<div id = "content" style = "color:#4a87d3" > ' +
    '<h2 style="color:#4a87d3">Jaume I University </h2>' +
    '<p align="left" style="color:#4a87d3">' +
    '<b style="color:#4a87d3">Address: </b> Avenida de Vicent Sos Baynat, s/n, 12071 Castellón <br>' +
    '<b style="color:#4a87d3">Teléfono: </b> +34 902320320<br>' +
    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.uji.es">' +
    'https://www.uji.es</a></p>' +
    '</div>';

align = "left"

function clearObjectFromMap(object) {
    if (object != null) {
        object.setMap(null);
    }
}

function clearInforWindows() {
    if (infoUji) infoUji.close();
    if (infoValenciaAirport) infoValenciaAirport.close();
    if (infoUji) infoUji.close();
    if (infohotelLuz) infohotelLuz.close();
}

function setMapVisibility(itemClicked) {
    window.location.hash = '#map_section';
    clearObjectFromMap(ValenciaAirport);
    clearObjectFromMap(BarcelonaAirport);
    clearObjectFromMap(MadridAirport);

    //clearObjectFromMap(university);
    clearObjectFromMap(hotelLuz);

    clearObjectFromMap(CastellonTrain);
    clearObjectFromMap(ValenciaTrain);
    clearObjectFromMap(BarcelonaTrain);

    switch (itemClicked) {
        case "flight":
            {
                //Airports
                var contentValenciaAirport = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Manises Valencia Airport</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Telephone:+34 902 40 47 04</b></br>' +
                    '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="https://www.airport-valencia.com/">' +
                    'https://www.airport-valencia.com/</a></p>' +
                    '</a></p>' +
                    '<p>How to reach Castellon? (Transit Details)</br>View in Map			<a href="#fromValencia">View Details</a>' +
                    '</div>'

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
                    content: '<div id="content" style="color:#4686A0">' +
                        '<h2 style="color:#4686A0">Barcelona–El Prat Airport</h2>' +
                        '<p align="left" style="color:#4686A0">' +
                        '<b style="color:#4686A0">Telephone:+34 902 40 47 04 </b></br>' +
                        '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="http://www.aeropuertobarcelona-elprat.com">' +
                        'http://www.aeropuertobarcelona-elprat.com</a></p>' +
                        '</a></p>' +
                        '<p>How to reach Castellon? (Transit Details)</br>View in Map			<a href="#fromBarcelona">View Details</a>' +
                        '</div>'
                });

                BarcelonaAirport = new google.maps.Marker({
                    position: BarcelonaAirportLoc,
                    map: map,
                    icon: imageAirport,
                    // animation: google.maps.Animation.BOUNCE,
                });

                infoMadridAirport = new google.maps.InfoWindow({
                    content: '<div id="content" style="color:#4686A0">' +
                        '<h2 style="color:#4686A0">Madrid-Barajas Airport</h2>' +
                        '<p align="left" style="color:#4686A0">' +
                        '<b style="color:#4686A0">Telephone:+34 91 321 10 00</b></br>' +
                        '<b style="color:#4686A0">Web Page: </b><a target="_blank" href="https://www.aeropuertomadrid-barajas.com">' +
                        'https://www.aeropuertomadrid-barajas.com</a></p>' +
                        '</a></p>' +
                        '<p>How to reach Castellon? (Transit Details)</br>View in Map			<a href="#fromMadrid">View Details</a>' +
                        '</div>'
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
                BarcelonaAirport.addListener('click', function() {
                    clearInforWindows()
                    infoBarcelonaAirport.open(map, BarcelonaAirport);
                });
                MadridAirport.addListener('click', function() {
                    clearInforWindows()
                    infoMadridAirport.open(map, MadridAirport);
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
                var hotelLuzLoc = new google.maps.LatLng(39.98891, -0.05104);
                var contenthotelLuz = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Hotel Luz</h2><br>' +
                    '<img src="https://media-cdn.tripadvisor.com/media/photo-s/12/4e/ff/11/photo1jpg.jpg" width = "150" heigght = "150"></img>' +
                    // '<h3 style="color:#4a87d3">City Center</h3><br>'+
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b>Carrer del Pintor Oliet, 3, 12006 <br>Castelló de la Plana, Castelló, Spain<br>' +
                    // '<b style="color:#4a87d3">Economy Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">72,- €</b> <br/>'+'<b style="color:#4a87d3">Comfort Single, breakfast included</b><br>'+
                    // '<b style="color:#4a87d3">	77,- € </b><br/>'+
                    '<b style="color:#4a87d3">Web Page: </b><a href="https://www.hotelluz.com/" target="_blank">' +
                    'https://www.hotelluz.com/</a></p>' +
                    '</div>';
                infohotelLuz = new google.maps.InfoWindow({
                    content: contenthotelLuz
                });

                hotelLuz = new google.maps.Marker({
                    position: hotelLuzLoc,
                    map: map,
                    icon: imageHotel,
                    // animation: google.maps.Animation.BOUNCE
                });

                hotelLuz.addListener('click', function() {
                    clearInforWindows()
                    infohotelLuz.open(map, hotelLuz);
                });
                map.panTo(hotelLuzLoc);
                map.setZoom(13);
            }
            break;
        case 'publicTransport':
            {

                //Train
                var imageTrain = {
                    url: 'images/train.png'
                };

                var castellonLoc = new google.maps.LatLng(39.987890, -0.052657);
                var valenciaLoc = new google.maps.LatLng(39.465981, -0.377467);
                var barcelonaLoc = new google.maps.LatLng(41.379093, 2.140134);

                var contentCastellon = '<div id="content" style="color:#4a87d3">' +
                    '<h2 style="color:#4a87d3">Castelló Railway Station</h2>' +
                    '<p align="left" style="color:#4a87d3">' +
                    '<b style="color:#4a87d3">Address: </b> Calle Pintor Oliet 2, 12006  Castellón de la Plana <br>' +
                    '<b style="color:#4a87d3">Teléfono: </b> +34 902320320<br>' +
                    '<b style="color:#4a87d3">Web Page: </b><a href="http://www.renfe.com/EN/viajeros/index.html">' +
                    'http://www.renfe.com/EN/viajeros/index.html</a></p>' +
                    '</div>';

                var contentBarcelona = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Barcelona Sants railway station</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Address: </b> Carrer del Rector Triadó 75, 08014 Barcelona <br>' +
                    '<b style="color:#4686A0">Teléfono: </b> +34 902 320 320 <br>' +
                    '<b style="color:#4686A0">Web Page: </b><a href="http://www.renfe.com/EN/viajeros/index.html">' +
                    'http://www.renfe.com/EN/viajeros/index.html</a></p>' +
                    '</div>';

                var contentValencia = '<div id="content" style="color:#4686A0">' +
                    '<h2 style="color:#4686A0">Estació del Nord, Valencia</h2>' +
                    '<p align="left" style="color:#4686A0">' +
                    '<b style="color:#4686A0">Address: </b> Carrer de Alacant 25, 46004 Valencia <br>' +
                    '<b style="color:#4686A0">Teléfono: </b> +34 902 320 320 <br>' +
                    '<b style="color:#4686A0">Web Page: </b><a href="http://www.renfe.com/viajeros/cercanias/valencia/">' +
                    'http://www.renfe.com/viajeros/cercanias/valencia/</a></p>' +
                    '</div>';

                var infoCastellon = new google.maps.InfoWindow({
                    content: contentCastellon
                });

                var infoValencia = new google.maps.InfoWindow({
                    content: contentValencia
                });


                var infoBarcelona = new google.maps.InfoWindow({
                    content: contentBarcelona
                });

                CastellonTrain = new google.maps.Marker({
                    position: castellonLoc,
                    map: map,
                    icon: imageTrain
                        //                    animation: google.maps.Animation.BOUNCE
                });

                ValenciaTrain = new google.maps.Marker({
                    position: valenciaLoc,
                    map: map,
                    icon: imageTrain
                        //                    animation: google.maps.Animation.BOUNCE
                });

                BarcelonaTrain = new google.maps.Marker({
                    position: barcelonaLoc,
                    map: map,
                    icon: imageTrain
                        //,                    animation: google.maps.Animation.BOUNCE
                });

                CastellonTrain.addListener('click', function() {
                    infoCastellon.open(map, CastellonTrain);
                });

                ValenciaTrain.addListener('click', function() {
                    infoValencia.open(map, ValenciaTrain);
                });

                BarcelonaTrain.addListener('click', function() {
                    infoBarcelona.open(map, BarcelonaTrain);
                });

                map.panTo(castellonLoc);
                map.setZoom(7);
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