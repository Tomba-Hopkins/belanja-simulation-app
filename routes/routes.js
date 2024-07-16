const { 
    getRegister,
    createUser,
    getLogin,
    getFakeLogin,
    userLogin,
    userFakeLogin,
    getDashboard,
    robotsTxt,
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
        method: 'GET',
        path: '/fake-login',
        handler: getFakeLogin(dir)
    },
    {
        path: '/login',
        method: 'POST',
        handler: userLogin,
    },
    {
        path: '/fake-login',
        method: 'POST',
        handler: userFakeLogin,
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