const mongoose = require('mongoose');

const db = async () => {
    try {
       const conn= await mongoose.connect("mongodb://localhost:27017/diwali-practice")
        console.log(conn.connection.host,"databse connected successfully")
    }
    catch (error) {
        console.log(error,"error")
    }
}
module.exports = db