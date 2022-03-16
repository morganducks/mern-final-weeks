const mongoose = require('mongoose');

const productsDB = "productsDB";

mongoose.connect("mongodb://localhost/" + productsDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("you connected to the " + productsDB)
})
.catch((err) => {
console.log("There was an error connecting to " + productsDB)
console.log(err)
})