const request = require("request");
const urlToImg = require("url-to-image");
const https = require("https");

const geoLocationData = (address, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=589654181a15e063fd3cd8c9fa797322&query=" +
    encodeURIComponent(address) +
    "&units=m";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Database");
    } else if (response.body.success == false) {
      callback(
        "Unable to find the location, Please enter correct location name"
      );
    } else {
      // in else error are undifind, because we already handle the errors in if and else
      // if blocks. thats why we place undifined in callback function
      callback(undefined, {
        city: response.body.location.name,
        country: response.body.location.country,
        windSpeed: response.body.current.wind_speed + " km/h",
        windDir: response.body.current.wind_dir,
        tempurature: response.body.current.temperature + " Celsius",
        time: response.body.location.localtime,
        description: response.body.current.weather_descriptions[0],
        humidity: response.body.current.humidity + " %",
      });
    }
  });
};

module.exports = geoLocationData;
