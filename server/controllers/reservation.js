const models = require('../models');

module.exports = {
  // receives get request from client and uses model function to grab booking info from the DB and sends back to the client
  get: function (req, res) {
    models.reservation.getBookingInfo((results) => {
      res.json(results);
      res.end();
    });

  },

  // receives post request from client after confirming a booking and uses model function to post new data into the reservations table
  post: function (req, res) {

    var params = [];

    models.reservation.addBookingInfo(params, (status) => {
      res.sendStatus(status);
      res.end();
    });

  }
};