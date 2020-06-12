const request = require("request");

const forcast = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicnVzaXJ1OTgiLCJhIjoiY2tiNHQ2MzJmMGoyYTJybWl3MmJ6cGE3OCJ9.1yDjWuSeglXD_Wq2kRpUBg&limit=1";

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to Database ", undefined);
    } else if (response.body.message === "Not Found") {
      callback("Unable to find the location ", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = forcast;
