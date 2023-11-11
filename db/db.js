const mongoose = require('mongoose');
const { MONGO_URL } = process.env;/* dotenv module is required for this and it is require in app js */
const db = async () => {
    console.log(MONGO_URL)
    try {
        const conn = await mongoose.connect(MONGO_URL)
        console.log(conn.connection.host, "databse connected successfully")
    }
    catch (error) {
        console.log(error, "error")
        process.exit(1)
    }
}
module.exports = db