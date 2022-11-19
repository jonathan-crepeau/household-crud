const mongoose = require('mongoose');
const URI = "mongodb+srv://jonathan-crepeau:my-password@householdcluster0.e8ayukk.mongodb.net/household-members?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Initial DB connection successful..'))
    .catch((error) => console.log(error));

module.exports = {
    Member: require('./Member')
};