const path = require('path')
const connectDB = require('../config/db')

const getRegister = (basedir) => {
    return (req, h) => {
        const filepath = path.join(basedir, 'public', 'views','register.html');
        // console.log(filepath);
        return h.file(filepath);
    }
}

const createUser =  async (req, h) => {
    const {name, email, password} = req.payload

    try {
        let db = await connectDB()
    
        const dbUser = db.collection('user')

        const res = await dbUser.insertOne({
            name: name,
            email: email,
            password: password
        })
        
        if (res.acknowledged) {
            return h.response({
                status: 'success',
                message: 'Data berhasil ditambahkan'
            }).code(201)
        }

        return h.response({
            status: 'fail',
            message: 'Gagal menambah data'
        }).code(400)

     } catch(err) {
        console.log('Error kocag: ', err)
        return h.response({
            status: 'fail',
            message: 'GAGAL POKOKNYA '
        }).code(500)
    }

    
}

const getLogin = (baseDir) => {
    return (req, h) => {
        const filepath = path.join(baseDir, 'public', 'views', 'login.html')
        // console.log(filepath)
        return h.file(filepath)
    }
}

const userLogin =  async (req, h) => {

    const { username, password } = req.payload

    const db = await connectDB()

    const dbUser = db.collection('user')

    const user = dbUser.findOne({
        username: username,
        password: password
    })

    if(user) {
        return h.response({
            status: 'success',
            message: 'login successful'
        }).code(200)
    }

    return h.response({
        status: 'fail',
        message: 'GADA'
    }).code(404)
    
    
}


module.exports = { 
    getRegister, 
    createUser,
    getLogin,
    userLogin
}