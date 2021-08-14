const mongoose=require("mongoose")
const  Uri="mongodb+srv://shubham-72:mondob1@cluster0.cieyx.mongodb.net/Third?retryWrites=true&w=majority"
// const Uri='mongodb://localhost:27017/Pokemon'
const connect=async()=>{
    try{
        await mongoose.connect(Uri,{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify: false })
        console.log('connect')
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports=connect