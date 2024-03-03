import mongoose from "mongoose"



const connectToDB = () => {
    try {
        mongoose.connect(process.env.DB_URI as string)
        console.log("connect succefully to db")
    } catch (error) {
        console.log(error)
    }
}


export {connectToDB}