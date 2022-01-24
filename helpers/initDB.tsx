import mongoose, { ConnectOptions } from "mongoose";

const InitDB = () => {
    let mongoUri: any = process.env.MONGO_URI

    mongoose.connect(mongoUri!, {
        useNewUrlParser: true,
    } as ConnectOptions)

    mongoose.connection.on('connected', ()=> {
        console.log('server connected');
    })

    mongoose.connection.on('error', (err) => {
        console.log('error found', err);
    })
}
export default InitDB;