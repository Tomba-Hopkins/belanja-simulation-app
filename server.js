const Hapi = require('@hapi/hapi')
const path = require('path')
const buatRoutes = require('./routes/routes')
const connectDB = require('./config/db')
const HapiCookie = require('@hapi/cookie')

const routes = buatRoutes(__dirname)



const init = async () => {

    const server = Hapi.server({
        host: 'localhost',
        port: 5000
    })

    await server.register(require('@hapi/inert'))



    server.route(routes)

    await server.start()
    console.log(`Server started on ${server.info.uri}/login`)
    
}


init()
