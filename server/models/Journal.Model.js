const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
    entryTitle: {
      type: String,
      required: [true,"Let's give this entry a name!"],
      minLength: [2,"Title must be at least 2 characters"],
    },
    dateCreated:{
      type:Number,
      required:[true, "Please add a date!"]
    },
    entryBody: {
      type: String,
      required: [true,"This is blank, would you like to leave an entry?"],
      minLength:[5,"An Entry must be at least 5 characters"],
    },
    createdBy: {
      type:String,
      required: true
    }
  }, {timestamps:true}
);

const Journal = mongoose.model("Journal", journalSchema);
module.exports = Journal;