const { 
    getRegister,
    createUser,
    getLogin 
} = require('../handlers/handler')



const routes = (dir) => [
    {
        method: 'GET',
        path: '/register',
        handler: getRegister(dir)
    },
    {
        path: '/register',
        method: 'POST',
        handler: createUser
    },
    {
        method: 'GET',
        path: '/login',
        handler: getLogin(dir)
    }
    
]


module.exports = routes