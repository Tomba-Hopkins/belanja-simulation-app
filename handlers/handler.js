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

const getFakeLogin = (baseDir) => {
    return (req, h) => {
        const filepath = path.join(baseDir, 'public', 'views', 'fake-login.html')
        return h.file(filepath)
    }
}

const userLogin = async (req, h) => {

    const { username, password } = req.payload

    const db = await connectDB()

    const dbUser = db.collection('user')

    const user = await dbUser.findOne({
        username: username
    })

    
    if(!user){
        return h.response({
            status: 'fail',
            message: 'MAMPUS SALAH'
        }).code(404)
    }
 
    const matching = password === user.password
    console.log(password, user.password)
    if(!matching){
        return h.response({
            status: 'fail',
            message: 'MAMPUS SALAH'
        }).code(404)
    }


    return h.response({
        status: 'success',
        message: 'berhasil coy',
        user,
        redirect: '/dashboard'
    }).code(200)

    
}

const userFakeLogin = async (req, h) => {

    const { password } = req.payload

    const user = password === password

    if(!user){
        return h.response({
            status: 'fail',
            message: 'MAMPUS SALAH',
            redirect: '/fake-login'
        }).code(404)
    }

    return h.response({
        status: 'success',
        message: 'berhasil coy',
        redirect: '/fake-dashboard'
    }).code(200)

    
}


const getDashboard = (dir) => (req, h) => {
    const filepath = path.join(dir, 'public', 'views', 'dashboard.html')
    return h.file(filepath)
}

const robotsTxt = (dir) => {
    return path.join(dir, 'robots.txt')
}

const getProfileByID =  async (req, h) => {

    const { id } = req.params

    const db = await connectDB()
    const idCard = db.collection('idCard')
    
    const user = await idCard.findOne({
        id: id
    })


    if(user) {
        return h.response({
            status: 'success',
            message: 'ada',
            id: id,
            user
        }).code(200)
    }

    return h.response({
        status: 'fail',
        message: 'gada'
    }).code(404)
    
}

module.exports = { 
    getRegister, 
    createUser,
    getLogin,
    getFakeLogin,
    userLogin,
    userFakeLogin,
    getDashboard,
    robotsTxt,
    getProfileByID
}