const path = require('path')

const getRegister = (basedir) => {
    return (req, h) => {
        const filepath = path.join(basedir, 'public', 'views','register.html');
        console.log(filepath);
        return h.file(filepath);
    }
}


module.exports = { getRegister }