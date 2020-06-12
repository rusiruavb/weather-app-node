//const { response } = require("express");
//const urlToImg = require("url-to-image");

console.log("Client side javascript is loaded");

// querySelector() method select all the details inside the
// from after submit it. for my memorization, its like
// servlet controller
const weather_form = document.querySelector("form");
const search = document.querySelector("input");

const country = document.querySelector("#country");
const city = document.querySelector("#city");
const time = document.querySelector("#time");
const tempurature = document.querySelector("#temp");
const windspeed = document.querySelector("#windspeed");
const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const humidity = document.querySelector("#humidity");
const windDir = document.querySelector("#windDir");
const description = document.querySelector("#description");

const name_1 = document.querySelector("#name-1");
const name_2 = document.querySelector("#name-2");
const name_3 = document.querySelector("#name-3");
const name_4 = document.querySelector("#name-4");
const name_5 = document.querySelector("#name-5");
const name_6 = document.querySelector("#name-6");
const name_7 = document.querySelector("#name-7");
const name_8 = document.querySelector("#name-8");
const name_9 = document.querySelector("#name-9");
const name_10 = document.querySelector("#name-10");

const table_class = document.querySelector(".table-class");
const heading = document.querySelector("#heading");

weather_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = search.value;

  heading.textContent = "Loading...";
  name_1.textContent = "";
  name_2.textContent = "";
  name_3.textContent = "";
  name_4.textContent = "";
  name_5.textContent = "";
  name_6.textContent = "";
  name_7.textContent = "";
  name_8.textContent = "";
  name_9.textContent = "";
  name_10.textContent = "";

  country.textContent = "";
  city.textContent = "";
  time.textContent = "";
  tempurature.textContent = "";
  windspeed.textContent = "";
  latitude.textContent = "";
  longitude.textContent = "";
  humidity.textContent = "";
  description.textContent = "";
  //windDir.textContent = "";

  fetch(
    "http://localhost:3032/weather?address=" + encodeURIComponent(location)
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        table_class.classList.add("table");
        table_class.classList.add("table-bordered");
        table_class.classList.add("table-hover");
        heading.textContent = "Weather Details";
        name_1.textContent = "Country";
        name_2.textContent = "City";
        name_3.textContent = "Time";
        name_4.textContent = "Temperature";
        name_5.textContent = "Wind Speed";
        name_6.textContent = "Latitude";
        name_7.textContent = "Longitude";
        name_8.textContent = "Humidity";
        name_9.textContent = "Wind Direction";
        name_10.textContent = "Weather Description";

        country.textContent = data.data.country;
        city.textContent = data.data.city;
        time.textContent = data.data.time;
        tempurature.textContent = data.data.tempurature;
        windspeed.textContent = data.data.windSpeed;
        latitude.textContent = data.forecastData.latitude;
        longitude.textContent = data.forecastData.longitude;
        humidity.textContent = data.data.humidity;
        windDir.textContent = data.data.windDir;
        description.textContent = data.data.description;
      }
    });
  });
});
