const journalController = require('../controllers/Journal.Controllers');

module.exports = (app) => {
  app.post('/api/entry/new',journalController.createJournalEntry);
  app.get('/api/entry/:id',journalController.getOneJournalEntry);
  app.get('/api/entry/all',journalController.getAllJournalEntries);
  app.put('/api/entry/update/:id', journalController.updateJournalEntry);
  app.delete('/api/entry/delete/:id', journalController.deleteJournalEntry);
}