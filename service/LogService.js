var Models = require('../models/Models');

var LogService = {
    save: function(modelName, context, operator, time) {
        Models.Log.create({
            modelName: modelName,
            content: context,
            operator: operator,
            createAt: time
        }).then(function (result) {

        }).catch(function (err) {
            console.log(err.message);
        });
    }
};

module.exports = LogService;