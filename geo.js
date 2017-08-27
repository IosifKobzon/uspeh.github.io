(function(w) {
    w._huy = w._huy || {};
    var key = 'AIzaSyCMPS2mvjeJ732PUejs1cB8MqLAzqFzE_s';

    function getGeo(cb) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var geolocation = JSON.parse(xhttp.responseText).location;

                console.log(geolocation);

                var xhttp2 = new XMLHttpRequest();
                xhttp2.onreadystatechange = function() {
                    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
                        var locationName = JSON.parse(xhttp2.responseText).results;

                        cb(null, locationName[0].formatted_address);
                    }

                    if (xhttp2.readyState == 4 && (xhttp2.status == 403 || xhttp2.status == 500)) {
                        return cb('error');
                    }
                };

                xhttp2.open("POST", 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + geolocation.lat + ',' + geolocation.lng + '&sensor=true');
                xhttp2.send();
            }
            if (xhttp.readyState == 4 && (xhttp.status == 403 || xhttp.status == 500)) {
                return cb('error');
            }
        };

        xhttp.open("POST", "https://www.googleapis.com/geolocation/v1/geolocate?key=" + key, true);
        xhttp.send();
    }
    w._huy.getGeo = getGeo;
})(window);