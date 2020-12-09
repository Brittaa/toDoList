const express = require('express');
const workController = require('../controllers/workItems');
const router = express.Router();

router.get('/work', workController.getWorkItems);
router.post('/work', workController.postWorkItems);
router.post('/work/delete',workController.deleteWork);

module.exports = router;
