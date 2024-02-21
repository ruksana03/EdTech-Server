const createApplication = require('./controller/createApplication')
const findAllApplication = require('./controller/findAllApplication')
const findOneApplication = require('./controller/findOneApplication')
const updatedStatusApplication = require('./controller/updatedStatusApplication')
const rejectedApplication = require('./controller/rejectedApplication')


module.exports = {
    createApplication,findAllApplication,findOneApplication,updatedStatusApplication,rejectedApplication
}