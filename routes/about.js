const express = require('express');
const router = express.Router();

//router hakkab päringuid haldama, * -> ükskõik mis päring
router.get('/about', (req, res)=> {
    res.render('about.ejs');
});

module.exports = router;
