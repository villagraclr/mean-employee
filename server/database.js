const mongoose = require('mongoose');

const URI = "mongodb+srv://atlasadmin:N0UYw06Nhj7fIQiF@fullstackmongo-bcykn.azure.mongodb.net/TiendaOnline?retryWrites=true";

mongoose.connect(URI)
.then(db => console.log('DB is conected'))
.catch(err => console.error(err))

module.exports = mongoose;