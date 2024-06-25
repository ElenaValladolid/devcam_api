const express = require('express');
const router = express.Router();

const {getCampus, 
    getCampusId, 
    createCampus,
    modifyCampus, 
    deleteCampus} = require('../controllers/campus');

router.route('/').get(getCampus).post(createCampus);

router.route('/:id').get(getCampusId).put(modifyCampus).delete(deleteCampus);

module.exports = router;
