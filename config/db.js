const { MongoClient } = require('mongodb')


const uri = process.env.MONGO_URL || 'mongodb://localhost:27017'

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