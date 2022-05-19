const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.post('/',auth, multer,stuffController.createThing);

router.get('/',auth, stuffController.GetThings);

router.get('/:id',auth, stuffController.GetThing);

router.put('/:id',auth, multer, stuffController.modifyThing);

router.delete('/:id',auth, stuffController.DeleteThing);
 
module.exports = router;