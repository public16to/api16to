const express = require('express');
const router = express.Router();
router.basePath='/16to/node_tree';

router.get('/', (req, res) => {
  res.send([]);
});

module.exports = router;