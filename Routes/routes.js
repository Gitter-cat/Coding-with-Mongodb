const router = require('express').Router();
const mongoose = require('mongoose');
const Model = mongoose.model('item');

router.get('/add', (_, res) => res.render('add-item'));

router.get('/viewall', (_, res) => {
  Model.find((err, doc) => {
    if (!err) res.render('allItems', {
      data: doc
    });
  });
});

router.post('/add', (req, res) => {
  const item = new Model();
  item.name = req.body.name;
  item.index = req.body.index;
  item.rank = req.body.rank;

  item.save((err, _) => {
    if (err) {
      console.log(err);
      res.send('An error occured');
      return;
    }
    res.redirect('/database/viewall');
  });
});

module.exports = router;