const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');
const { Item } = require('../../models/Item');

// @route        GET api
// @description  Get all user
// @access       Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((moves) => res.json(moves));
});

// @route        POST api/auth
// @description  Authenticate user
// @access       Private
router.post('/', auth, (req, res) => {
  const newMove = new Item({
    moveId: req.body.moveId,
    id: req.body.id,
    name: req.body.name,
  });

  newMove.save().then((move) => res.json(move));
});

// @route        DELETE api/moves/:id
// @description  Delete a move
// @access       Private
router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then((move) =>
      move.remove().then(() =>
        res.json({
          success: true,
        })
      )
    )
    .catch(() =>
      res.status(404).json({
        success: false,
      })
    );
});

module.exports = router;
