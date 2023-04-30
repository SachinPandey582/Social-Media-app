const app =require("./app")
const { connection } = require("./config/database")


app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Server is Connected to the database")
    }catch(err){
        console.log(err.message)
    }
    console.log(`server is running at port ${process.env.PORT}`)
})