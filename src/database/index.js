require("dotenv/config")
const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://renato:renato123@cluster0-y0qaz.mongodb.net/test?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection

db.once('open', () => console.log("Banco de dados funcionando ..."))


module.exports = mongoose;
