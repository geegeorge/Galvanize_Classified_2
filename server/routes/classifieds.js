'use strict';

const express = require('express');
const knex = require('../../knex')
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('classifieds')
    .orderBy('id')
    .select('id', 'title', 'price', 'item_image', 'description')
    .then((classifieds) => {
      res.json(classifieds);
    })
    .catch((err) => {
      next(err);
    });
});
router.get('/:id', (req, res, next) => {
  knex('classifieds')
    .where('id', req.params.id)
    .select('id', 'title', 'price', 'item_image', 'description')
    .then((classifieds) => {
      if (!classifieds) {
        return next();
      }
      res.json(classifieds[0]);
    })
    .catch((err) => {
      next(err);
    });
});
router.post('/', (req, res, next) => {
  // knex('classifieds')
  //   .returning(['id', 'title', 'price', 'item_image', 'description'])
  //   .insert({
  //     title: req.body.title,
  //     price: req.body.price,
  //     item_image: req.body.item_image,
  //     description: req.body.description
  //   })
  //   .then((classifieds) => {
  //
  //     console.log("AFTER POST INSERT");
  //     res.json(classifieds[0]);
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
  res.json({prop: 'yes'});
});

router.patch('/:id', (req, res, next) => {
  knex('classifieds')
    .where('id', req.params.id)
    .then((classifieds) => {
      if (!classifieds) {
        return next();
      }
      return knex('classifieds')
        .returning(['id', 'title', 'price', 'item_image', 'description'])
        .update({
          title: req.body.title,
          price: req.body.price,
          item_image: req.body.item_image,
          description: req.body.description
        })
        .where('id', req.params.id);
    })
    .then((classifieds) => {
      res.send(classifieds[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  knex('classifieds')
    .returning(['id', 'title', 'price', 'item_image', 'description'])
    .where('id', req.params.id)
    .del()
    .then((classifieds) => {
      res.json(classifieds[0]);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
