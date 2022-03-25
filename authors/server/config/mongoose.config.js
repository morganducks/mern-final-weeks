const mongoose = require('mongoose');

const authorsDB = "authorsDB";

mongoose.connect("mongodb://localhost/" + authorsDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("you connected to the " + authorsDB)
})
.catch((err) => {
console.log("There was an error connecting to " + authorsDB)
console.log(err)
})