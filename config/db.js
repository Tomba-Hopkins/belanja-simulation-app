const { MongoClient } = require('mongodb')


const uri = process.env.MONGO_URL || 'mongodb://mongo:27017'
// const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'

const client = new MongoClient(uri)

const connectDB = async () => {
    try {
        await client.connect()
        console.log(`Connect successful`)
        let db = client.db('belanja-app')

        
        return db
    }catch(err) {
        console.error('Error keknya: ', err)
        throw err
    }

}


module.exports = connectDB