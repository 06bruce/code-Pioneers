const express = require('express');
const handler = require('../controllers/controller');

const router = express.Router();

router.get('/', handler.display_form);
router.post('/', handler.form_post);
module.exports = router;