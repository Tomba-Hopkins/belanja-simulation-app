const { 
    getRegister,
    createUser,
    getLogin,
    getFakeLogin,
    userLogin,
    userFakeLogin,
    getDashboard,
    robotsTxt,
    getProfileByID,
    getNasgor,
    getSecretPath,
    loginSecretPath,
    getFlagSecretPath
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
        path: '/fake-dashboard',
        method: 'GET',
        handler: (req, h) => {
            return h.response({
                username: 'sidu@gmail.com',
                password: 'sebastengkorak',
                secret_username: 'bocahnolep@gmail.com',
                message: 'for real page🚀 go ahead sir🍛'
            })
        }
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
        path: '/dashb04rd',
        method: 'GET',
        handler: getDashboard(dir)
        
    },
    {
        method: 'GET',
        path: '/robots.txt',
        handler: {
            file: robotsTxt(dir)
        }
    },
    {
        method: 'GET',
        path: '/profile/{id}',
        handler: getProfileByID
    },
    {
        method: 'GET',
        path: '/style/{file*}',
        handler: {
            directory: {
                path: './public/style'
            }
        }
    },
    {
        method: 'GET',
        path: '/img/{file*}',
        handler: {
            directory: {
                path: './public/img'
            }
        }
    },
    {
        path: '/nasgor-telur-dadar',
        method: 'GET',
        handler: getNasgor(dir)
    },
    {
        path: '/secret-login',
        method: 'GET',
        handler: getSecretPath(dir)
    },
    {
        path: '/secret-login',
        method: 'POST',
        handler: loginSecretPath
    },
    {
        path: '/brutal-bet',
        method: 'GET',
        handler: getFlagSecretPath
    }

    
]


module.exports = routes