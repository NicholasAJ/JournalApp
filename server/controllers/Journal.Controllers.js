const Journal = require ('../models/Journal.Model');

const createJournalEntry = (req, res) => {
  Journal.create(req.body)
    .then(newJournalEntry => {
      console.log(newJournalEntry);
      res.json(newJournalEntry);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
      console.log("######CREATE-Entry-CONTROLLER#####")
    });
};
const getAllJournalEntries = (req,res) => {
  Journal.find({createdBy: req.params.username})
  .then(allEntries => {
    console.log(allEntries);
    res.json(allEntries);
  })
  .catch( err =>{
    console.log("error getting ALL games", err);
    res.status(400).json(err);
  });
};
const getOneJournalEntry = (req,res) => {
  Journal.findOne({_id:req.params.id})
  .then(oneEntry => {
    console.log(oneEntry);
    res.json(oneEntry);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
    console.log("#####get-single-entry-controller#####")
  });
};

const updateJournalEntry = (req,res) => {
  Journal.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedEntry => {
      console.log(updatedEntry);
      res.json(updatedEntry);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
      console.log("#####update-entry-controller#####")
    });
};

const deleteJournalEntry = (req,res) => {
  Journal.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => {
      console.log(deleteConfirmation);
      res.json(deleteConfirmation);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
      console.log("#####delete-conroller#####")
    });
};

module.exports = {
  createJournalEntry,
  getOneJournalEntry,
  getAllJournalEntries,
  updateJournalEntry,
  deleteJournalEntry,
};