const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistic', async (req, res) => {
  const count = await redis.getAsync('todo_counter');

  res.send({"added_todos": count})
})

module.exports = router;
