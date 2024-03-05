const createAdmission = require('./controllers/createAdmission')
const findAllOnlineAdmission = require('./controllers/findAllOnlineAdmission')
const findOneAdmission = require('./controllers/findOneAdmission')
const updatedStatusAdmission = require('./controllers/updatedStatusAdmission')
const rejectedOnlineAdmission = require('./controllers/updatedStatusAdmission')


module.exports = {
    createAdmission,findAllOnlineAdmission,findOneAdmission,updatedStatusAdmission,rejectedOnlineAdmission
}