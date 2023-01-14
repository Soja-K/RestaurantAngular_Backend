const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/Restaurants',{
    useNewUrlParser: true
})



const Restapp = mongoose.model('Restapp', {
    //schema creation

   uname:String,
    phno :Number,
    email:String,
    pswd:String

    
})


//exports

module.exports = {
    Restapp
}
