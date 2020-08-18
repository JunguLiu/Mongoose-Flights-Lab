const flights = require("../models/flights");
const tickets = require("../models/tickets");

function find(req, res) {
  flights.find({}, function (err, flights) {
    res.render("flights", {
      flights: flights,
    });
  });
}

function add(req, res) {
  res.render("addflight");
}

function create(req, res) {
  const flight = new flights();
  flight.airline = req.body.airline;
  flight.airpost = req.body.airpost;
  flight.flightNo = req.body.flightNo;
  flight.departs = req.body.departs;
  flight.save(function (err) {
    if (err) return res.render("movies/new");
    res.redirect("/flights");
  });
}

function detail(req, res) {
  flights.findById(req.params.id, function (err, flight) {
    res.render("destination", {
      id: req.params.id,
      destinations: flight.destinations,
    });
  });
}

function createDest(req, res) {
  const obj = JSON.parse(JSON.stringify(req.body));
  flights.findById(req.params.id, function (err, flight) {
    flight.destinations.push(obj);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function addTicket(req, res) {
  flights.findById(req.params.id, function (err, flight) {
    tickets.find({ flight: flight._id }, function (err, tickets) {
      res.render("addticket", {
        id: req.params.id,
        tickets: tickets,
      });
    });
  });
}

function createTicket(req, res) {
  const ticket = new tickets();
  ticket.seat = req.body.seat;
  ticket.price = req.body.price;
  ticket.flight = req.params.id;
  ticket.save(function (err) {
    if (err) return res.render(`/flights/ticket/${req.params.id}`);
    res.redirect(`/flights/ticket/${req.params.id}`);
  });
}

module.exports = {
  find,
  add,
  create,
  detail,
  createDest,
  addTicket,
  createTicket,
};
