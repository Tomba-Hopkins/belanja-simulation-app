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

    const { email, password } = req.payload

    const db = await connectDB()

    const dbUser = db.collection('user')

    const user = await dbUser.findOne({
        email: email
    })

    
    if(!user){
        return h.response({
            status: 'fail',
            message: 'MAMPUS SALAH'
        }).code(404)
    }
 
    const matching = user.password === password && user.email === email
    console.log(email, password)
    
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
        redirect: '/dashb04rd'
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
        id: Number(id)
    })

    if(user) {
        return h.view('profile',{
            status: 'success',
            message: 'ada',
            id: id,
            user
        }).code(200)
    }

    return h.view('notfound',{
        status: 'fail',
        message: 'gada'
    }).code(404)
    
}


const getNasgor = (dir) => (req, h) => {
    const filepath = path.join(dir, 'public', 'views', 'nasgor.html')
    return h.file(filepath)
}


const getSecretPath = (dir) => (req, h) => {
    const filepath = path.join(dir, 'public', 'views', 'secret-login.html')
    return h.file(filepath)
}


const loginSecretPath =  async (req, h) => {

    try {
        const { email, password } = req.payload 
        console.log(email)

        const db = await connectDB()

        const dbuser = db.collection('user')
        const user = await dbuser.findOne({
            email: email
        })

        
        if(!user){
            return h.response({
                message: 'NGAWUR',
                status: 'fail'
            }).code(404)
        }
        
        console.log(email, password)
        console.log(user.email, user.password)
        const cocok = email === user.email && password === user.password
        if(!cocok){
            return h.response({
                message: 'NGAWUR',
                status: 'fail'
            }).code(404)
        }

        return h.response({
            message: 'MANTAP',
            status: 'success',
            user,
            redirect: '/brutal-bet'
        }).code(200)
    } catch(err) {
        console.log('error noh: ', err)
        return h.response({
            message: 'XIXIXIXI',
            status: 'fail'
        }).code(500)
    }

    
}


const getFlagSecretPath = (req, h) => {
    return h.response({
        status: 'success',
        message: 'go ahead king🚀',
        flag: {
            topping: [
                'telur-mata-sapi',
                'sosis-goreng-berbunga',
                'susu-coklat-asli-ngawi',
                'ayam-suwir-berotot',
                'kerupuk-udang'
            ],
            plate: 'FLAG{}'
        }
    }).code(200)
}

const getSubmitFlag = (dir) => (req, h) => {
    const filepath = path.join(dir, 'public', 'views', 'flag.html')
    return h.file(filepath)
}

const postSubmitFlag = (req, h) => {
    const { flag } = req.payload
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
    getProfileByID,
    getNasgor,
    getSecretPath,
    loginSecretPath,
    getFlagSecretPath,
    getSubmitFlag,
    postSubmitFlag
}