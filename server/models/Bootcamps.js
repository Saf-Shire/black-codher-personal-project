const mongoose = require("mongoose");
const { Schema } = mongoose;

const bootcampSchema = new Schema({
  title: String,
  company: String,
  city: String,
  durationType:String,
  weeksLength: Number,
  totalAmountOfHours: Number,
  logo:String,
  free: Boolean,
  tuitionFee: Number,
  availableDiscounts:Array,
  availableHelp:Array,
  numberOfInstallments: Number,
  deposit: Boolean,
  depositFee: Number,
  applicationCycles: Number,
  certification: Boolean,
  applicationlink: String,
  emailAddress: String,
  telephoneNumber:String,
});

mongoose.model("bootcamps", bootcampSchema);
