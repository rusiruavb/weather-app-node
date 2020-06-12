//const { response } = require("express");

console.log("Client side javascript is loaded");

// querySelector() method select all the details inside the
// from after submit it. for my memorization, its like
// servlet controller
const weather_form = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");
const messageFour = document.querySelector("#message-4");
const messageFive = document.querySelector("#message-5");
const messageSix = document.querySelector("#message-6");
const messageSeven = document.querySelector("#message-7");
const name_1 = document.querySelector("#name-1");
const name_2 = document.querySelector("#name-2");
const name_3 = document.querySelector("#name-3");
const name_4 = document.querySelector("#name-4");
const name_5 = document.querySelector("#name-5");
const name_6 = document.querySelector("#name-6");
const name_7 = document.querySelector("#name-7");
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

  messageOne.textContent = "";
  messageTwo.textContent = "";
  messageThree.textContent = "";
  messageFour.textContent = "";
  messageFive.textContent = "";
  messageSix.textContent = "";
  messageSeven.textContent = "";

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

        messageOne.textContent = data.data.country;
        messageTwo.textContent = data.data.city;
        messageThree.textContent = data.data.time;
        messageFour.textContent = data.data.tempurature;
        messageFive.textContent = data.data.windSpeed;
        messageSix.textContent = data.forecastData.latitude;
        messageSeven.textContent = data.forecastData.longitude;
      }
    });
  });
});
