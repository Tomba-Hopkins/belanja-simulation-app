const { getRegister } = require('../handlers/handler')

const routes = (dir) => [
    {
        method: 'GET',
        path: '/register',
        handler: getRegister(dir)
    }
    
]


module.exports = routes