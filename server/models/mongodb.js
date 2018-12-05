const mongoose = require('mongoose');
const { Schema } = mongoose;

const MensajesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, require: true }
});

module.exports = mongoose.model('Mensajes', MensajesSchema);