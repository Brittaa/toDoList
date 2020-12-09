const express = require('express');
const itemsController = require('../controllers/items');
const router = express.Router();

//router hakkab päringuid haldama, * -> ükskõik mis päring
/*router.get('*', (req, res)=> {
    res.status(about).render('about.ejs');
});*/

router.get('/', itemsController.getMainPage);
router.post('/', itemsController.postNewItem);
router.post('/delete',itemsController.deleteItem);

module.exports = router;
