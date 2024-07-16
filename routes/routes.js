const { 
    getRegister,
    createUser,
    getLogin,
    userLogin,
    getDashboard,
    robotsTxt
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
    },
    {
        path: '/login',
        method: 'POST',
        handler: userLogin,
    },
    {
        path: '/dashboard',
        method: 'GET',
        handler: getDashboard(dir)
        
    },
    {
        method: 'GET',
        path: '/robots.txt',
        handler: {
            file: robotsTxt(dir)
        }
    }
    
]


module.exports = routes