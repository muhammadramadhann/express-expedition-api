const mongoose = require('mongoose');

const Expedition = mongoose.model('Expedition', mongoose.Schema({
    trackingNumber: {
        type: String,
        unique: true,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    shippingCost: {
        type: Number,
        required: true
    },
    insurance: {
        type: Boolean,
        default: false
    },
    sender: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        note: {
            type: String
        },
    },
    recipient: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
    item: {
        name: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: true
        }
    },
    insertedAt: {
        type: Date,
        default: new Date().toISOString()
    },
    updatedAt: {
        type: Date,
        default: new Date().toISOString()
    }
}));

module.exports = Expedition;