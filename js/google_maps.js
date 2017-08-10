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
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": -75
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": -30
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#45c24f"
                    },
                    {
                        "saturation": -30
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
