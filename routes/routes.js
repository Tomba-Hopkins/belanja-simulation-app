const { getRegister, createUser } = require('../handlers/handler')

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
    }
    
]


module.exports = routes