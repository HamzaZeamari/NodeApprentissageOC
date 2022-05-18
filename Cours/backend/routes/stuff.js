const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/',auth,stuffController.createThing);

router.get('/',auth, stuffController.GetThings);

router.get('/:id',auth, stuffController.GetThing);

router.put('/:id',auth, stuffController.modifyThing);

router.delete('/:id',auth, stuffController.DeleteThing);
 
module.exports = router;