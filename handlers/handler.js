const path = require('path')
const connectDB = require('../config/db')

const getRegister = (basedir) => {
    return (req, h) => {
        const filepath = path.join(basedir, 'public', 'views','register.html');
        console.log(filepath);
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


module.exports = { getRegister, createUser }