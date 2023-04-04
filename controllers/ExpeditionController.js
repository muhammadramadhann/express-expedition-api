const Expedition = require('../models/Expedition');

// price /kg in IDR
const PRICE_IDR = 8000;

// generate tracking numbers
const generateRandomString = () => {
    const chars = "1234567890";
    const myLength = 10;
    const randomArray = Array.from(
        { length: myLength },
        (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );
    const randomString = randomArray.join("");
    return 'EXW' + randomString;
};

const getAllExpeditions = async (req, res) => {
    try {
        const expeditions = await Expedition.find();
        res.status(200).json({
            status: 'success',
            data: {
                expeditions: expeditions.map((expedition) => ({
                    id: expedition._id,
                    trackingNumber: expedition.trackingNumber,
                    deliveryDate: expedition.deliveryDate,
                    shippingCost: expedition.shippingCost,
                    insurance: expedition.insurance,
                    item: expedition.item
                }))
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
}

const getExpeditionById = async (req, res) => {
    const { id } = req.params;
    try {
        const expedition = await Expedition.findById(id);
        if (!expedition) {
            return res.status(404).json({
                status: 'fail',
                message: 'Expedition data not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: { expedition }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
}

const getExpeditionByTrackingNumber = async (req, res) => {
    const { trackingNumber } = req.params;
    try {
        const expedition = await Expedition.findOne({ trackingNumber });
        if (!expedition) {
            return res.status(404).json({
                status: 'fail',
                message: 'Expedition data not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: { expedition }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
}

const addExpedition = async (req, res) => {
    const { insurance, sender, recipient, item } = req.body;

    const trackingNumber = generateRandomString();
    const deliveryDate = new Date(req.body.deliveryDate).toISOString();
    const shippingCost = item.weight * PRICE_IDR;

    const newExpedition = new Expedition({
        trackingNumber, deliveryDate, shippingCost, insurance, sender, recipient, item
    });

    if (req.body.item.weight < 1) {
        return res.status(400).json({
            status: 'fail',
            message: 'Failed to add expedition data, The weight of the goods cannot be less than 1 kg'
        });
    }

    try {
        const expedition = await newExpedition.save();
        res.status(201).json({
            status: 'success',
            message: 'Expedition data successfully saved',
            data: {
                id: expedition._id,
                trackingNumber: expedition.trackingNumber
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}

const updateExpedition = async (req, res) => {
    const { id } = req.params;
    const { insurance, sender, recipient, item } = req.body;

    const deliveryDate = new Date(req.body.deliveryDate).toISOString();
    const shippingCost = item.weight * PRICE_IDR;
    const updatedAt = new Date().toISOString();

    const updatedExpedition = {
        deliveryDate, shippingCost, insurance, sender, recipient, item, updatedAt
    };

    try {
        const expedition = await Expedition.findById(id);
        if (!expedition) {
            return res.status(404).json({
                status: 'fail',
                message: 'Expedition data not found'
            });
        }
        await Expedition.findByIdAndUpdate(id, updatedExpedition);
        res.status(200).json({
            status: 'success',
            message: 'Expedition data successfully updated',
            data: {
                id: expedition._id,
                trackingNumber: expedition.trackingNumber
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
}

const deleteExpediton = async (req, res) => {
    const { id } = req.params;
    try {
        const expedition = await Expedition.findById(id);
        if (!expedition) {
            return res.status(404).json({
                status: 'fail',
                message: 'Expedition data not found'
            });
        }
        await Expedition.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'Expedition data successfully deleted'
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        });
    }
}

module.exports = {
    getAllExpeditions,
    getExpeditionById,
    getExpeditionByTrackingNumber,
    addExpedition,
    deleteExpediton,
    updateExpedition
}