const express = require('express');
const {
    getAllExpeditions,
    getExpeditionById,
    getExpeditionByTrackingNumber,
    addExpedition,
    deleteExpediton,
    updateExpedition
} = require('../controllers/ExpeditionController');

const router = express.Router();

router.get('/', getAllExpeditions);
router.get('/:id', getExpeditionById);
router.get('/track/:trackingNumber', getExpeditionByTrackingNumber);
router.post('/', addExpedition);
router.put('/:id', updateExpedition);
router.delete('/:id', deleteExpediton);

module.exports = router;