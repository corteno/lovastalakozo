var map;

function initMap() {
    var latLng = {lat: 46.9534194642, lng: 16.2762470476};

    var myOptions = {
        center: latLng,
        zoom: 16,
        /*mapTypeId: google.maps.MapTypeId.ROADMAP,*/
        draggable: !("ontouchend" in document),
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#78eb89"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#96d58e"
                    },
                    {
                        "saturation": -40
                    },
                    {
                        "lightness": -10
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#78eb89"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]

    };

    map = new google.maps.Map(document.querySelector('.google-map'), myOptions);


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(46.9534194642, 16.2762470476),
        map: map/*,
        icon: markerIcon*/
    });
}

google.maps.event.addDomListener(window, "load", initMap);
// $(document).ready(initMap());
