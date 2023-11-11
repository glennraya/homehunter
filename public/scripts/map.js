// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(14.540647180617569, 121.04997032047581), // Bonifacio Global City

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                featureType: "administrative",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        lightness: 33,
                    },
                ],
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [
                    {
                        color: "#f2e5d4",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c5dac6",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        lightness: 20,
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [
                    {
                        lightness: 20,
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#c5c6c6",
                    },
                ],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#e4d7c6",
                    },
                ],
            },
            {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#fbfaf7",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [
                    {
                        visibility: "on",
                    },
                    {
                        color: "#acbcc9",
                    },
                ],
            },
        ],
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById("map");

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(
            14.540647180617569,
            121.04997032047581,
        ),
        map: map,
        title: "Home Hunter",
    });
}
