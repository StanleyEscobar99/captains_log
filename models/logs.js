const mongoose = require("mongoose")

const logSchema = new mongoose.Schema({
  title: {type: String, required: true},
  entry: {type: String, required: true},
  shipIsBroken: Boolean
},
{
  timestamps: true
})

const Log = mongoose.model("Log", logSchema)

module.exports = Log