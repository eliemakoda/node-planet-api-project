const mongoose = require("mongoose");

const PlanetSchema = mongoose.Schema({
  KeplerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", PlanetSchema);
