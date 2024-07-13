const Hapi = require('@hapi/hapi')


const init = async () => {

    const server = Hapi.server({
        host: 'localhost',
        port: 5000
    })

    server.route([
        {
            path: '/register',
            method: 'GET',
        }
    ])

    await server.start()
    console.log(`Server started on ${server.info.uri}`)
    
}


init()