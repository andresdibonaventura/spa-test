const Users = require('./user.model')
const Roles = require('./roles.model')




const initModels = () => {
    //? Users -> Posts
    // Users.hasOne(Roles)
    // Roles.belongsToMany(Users)
    
    //? Users <-> Accomodations

}

module.exports = initModels
