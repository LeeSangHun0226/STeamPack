const express = require('express');

const router = express.Router();

const User = require('../models/user');

// GET ALL USER
router.get('/user', (req, res) => {
  User.find((err, user) => {
    if (err) return res.status(500).send({ error: 'database failure' });
    return res.json(user);
  });
});

// GET SINGLE TEAM
router.get('/ground_display', (req, res) => {
  User.findOne({ team: '1' }, (err, user) => {
    if (err) return res.status(500).send({ error: 'database failure' });
    if (!user) return res.status(404).json({ error: 'team not found' });
    return res.json(user);
  });
});

// GET TWO TEAM
// GET SINGLE USER
router.get('/user', (req, res) => {
  User.findOne({ _id: req.params.user_id }, (err, user) => {
    if (err) return res.status(500).json({ error: err });
    if (!user) return res.status(404).json({ error: 'user not found' });
    return res.json(user);
  });
});

// CREATE USER
router.post('/user', (req, res) => {
  const user = new User();
  console.log(user)
  user.name = req.body.name;
  user.member = req.body.member;

  user.save((err) => {
    if (err) {
      console.error(err);
      res.json({ reult: 0 });
      return;
    }
    res.json({ result: 1 });
  });
});

// UPDATE USER
router.put('/user', (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) return res.status(500).json({ error: 'database failure' });
    if (!user) return res.status(404).json({ error: 'book not found' });

    if (req.body.name) userSchema.name = req.body.name;
    if (req.body.member) userSchema.member = req.body.member;

    return user.save((err) => {
      if (err) res.status(500).json({ error: 'failed to update' });
      res.json({ message: 'book updated' });
    });
  });
});

// DELETE USER
router.delete('/user', (req, res) => {
  User.remove({ _id: req.params.user_id }, (err) => {
    if (err) return res.status(500).json({ error: 'database failure' });
    return res.status(204).end();
  });
});

module.exports = router;
