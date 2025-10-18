const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    status: {
        type: String
    }
},
{
    timestamps: true
})

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;