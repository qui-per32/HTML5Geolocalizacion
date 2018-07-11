if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {

        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        let element = document.createElement("img");
        element.setAttribute('src',
            'http://maps.googleapis.com/maps/api/staticmap?markers=icon:|'+lat+','+long+'&zoom=13&size=400x400&sensor=false')

        var div = document.getElementById("cont");
         document.body.insertBefore(element,div);


    }, function (err) {
        console.log(err);

    }, {
        maximumAge: Infinity,
        timeout: 10000,
        enableHighAccuracy: true
    })
    console.log('funciona');

} else {
    console.log('no funciona');

}

// var watchID = navigator.geolocation.watchPosition(function (position) {
//         console.log(position);


//     },
//     function (err) {
//         console.log(err);

//     }, {
//         maximumAge: Infinity,
//         timeout: 10000,
//         enableHighAccuracy: true
//     });

// navigator.geolocation.clearWatch(watchID);

// console.log("watchID", watchID);