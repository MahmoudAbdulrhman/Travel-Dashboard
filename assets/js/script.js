var cityFood = function () {
    fetch("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDo3v5Z07pQqkeaVQXLwBHJavbu-ZJ0YEg")
    .then(response => {
        response.json().then(data=>{
            console.log(data);
        })
        cityWeather()
    })
    .catch(err => {
        console.log(err);
    });

}
