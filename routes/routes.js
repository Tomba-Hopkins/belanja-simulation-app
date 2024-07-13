const path = require('path')

const routes = (dir) => [
    {
        method: 'GET',
        path: '/register',
        handler: (req, h) => {
            const filepath = path.join(dir, 'public', 'views','register.html');
            console.log(filepath);
            return h.file(filepath);
        }
    }
    
]


module.exports = routes