const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forcast = require("./utils/forecast");
const geoLocationData = require("./utils/geo-code");

// define paths for express config
const publicDirectory = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partials");
const app = express();

// setup handlebars enginea and view location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// setup static directory to the server
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather Application",
    name: "Rusiru Abhisheak",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us",
    name: "Rusiru Abhisheak",
  });
});

// app.get("/help", (req, res) => {
//   res.render("help", {
//     title: "Help From Us",
//     name: "Rusiru Abhisheak",
//   });
// });
// this specifies, what to do when somone visit to the
// web site. get() funtion takes 2 arguments, first one is
// route and other one is a function which tell what should
// do in that particular route

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You should provide an address",
    });
  }
  geoLocationData(req.query.address, (error, data) => {
    if (error) {
      return res.send({ error: error });
    }
    forcast(data.country, (error, forecastData) => {
      if (error) {
        return res.send({ error: error });
      }
      res.send({ data: data, forecastData: forecastData });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Weather Application",
    name: "Rusiru Abhisheak",
    error: "Help article is not found",
  });
});

// this app.get funtion should come last in the routes
// because the compiler of the node js is compile the code line by line
// if user provide url is not fit into our routes it will come to the last
// get route and display the message inside it.
app.get("*", (req, res) => {
  res.render("404", {
    title: "Weather Application",
    name: "Rusiru Abhisheak",
    error: "The page you are looking for was not found.",
  });
});

app.listen(3032, () => {
  console.log("Server is up and running port 3032");
});
