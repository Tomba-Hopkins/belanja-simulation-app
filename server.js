const Hapi = require('@hapi/hapi')
const buatRoutes = require('./routes/routes')

const routes = buatRoutes(__dirname)


const init = async () => {

    const server = Hapi.server({
        host: 'localhost',
        port: process.env.PORT || 5000
    })

    
    await server.register(require('@hapi/inert'))
    await server.register(require('@hapi/vision'))

    server.views({
        engines: {
            ejs: require('ejs')
        },
        relativeTo: __dirname,
        path: 'public/views'
    })

    server.route(routes)

    await server.start()
    console.log(`Server started on ${server.info.uri}`)
    
}


init()
