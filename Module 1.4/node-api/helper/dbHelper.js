const mongoose = require('mongoose');
const constants = require('../constants');

module.exports.formatMongoData = (data) => {
    if(Array.isArray(data)) {
        let newDatalist = [];
        for (value of data) {
            newDatalist.push(value.toObject());
        }
        return newDatalist;
    }
    return data.toObject();
}

module.exports.checkObjectId = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.dataBaseMessage.INVALID_ID);
    }
}
