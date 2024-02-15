const createUser = require('./createUser')
const findAllUser = require('./findAllUser')
const findOneUser = require('./findOneUser')
const findUserAdmin = require('./findUserAdmin')
const patchUserToChangeRole = require('./patchUserToChangeRole')
const findRole = require('./findRole')

module.exports = {
    createUser, findAllUser,findOneUser,findUserAdmin, patchUserToChangeRole,findRole
}