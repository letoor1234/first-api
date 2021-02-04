const mongoose = require('mongoose');

const URI ='mongodb://localhost/headbook';

mongoose.connect(URI)
    .then(db =>{
        console.log('dB connected');
    })
    .catch(err => {
        console.log(err);
    })

module.exports = mongoose;