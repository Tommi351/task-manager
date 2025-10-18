const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        .then(conn => {
         console.log(`✅ Mongo Connected: ${conn.connection.host}`);
         console.log(`📂 Database Name: ${conn.connection.name}`);
        })
       .catch(err => console.error(`❌ Mongo Error: ${err.message}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB