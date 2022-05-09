const mongoose = require("mongoose");

async function connection() {
    const URI = "mongodb+srv://aadarsh:Aadarsh123@cluster0.2emw5.mongodb.net/Learningdb?retryWrites=true&w=majority"
    const con = await mongoose.connect(URI);

    if (con) {
        console.log("connected");
    } else {
        console.log("not connected.")
    }
}
// async function coll() {
//     return mongoose.Collection("users")
// }



module.exports = {
    connection
}