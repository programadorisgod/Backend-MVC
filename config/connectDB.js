import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const conectDBTest= async () => {
try {
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Conexion exitosa")
} catch (error) {
    console.log('Error', error)
}
}

export default conectDBTest