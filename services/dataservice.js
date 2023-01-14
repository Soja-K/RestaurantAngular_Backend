const db = require('./db')


// userDetails: any = {//object of objects
//     1000: { username: "Soja", number: 7895643190, email: "soja@gmail.com", password: "soja" },
//     1001: { username: "Biju", number: 9809592619, email: "biju@gmail.com", password: "biju", },
//     1002: { username: "Sriya", number: 5675346617, email: "sriya@gmail.com", password: "sriya" },

//   }
const signup = (uname,phno,email,pswd) => {

    return db.Restapp.findOne({ email })   //27017
        .then(Restapp => {
            if (Restapp) {
                return {
                    statusCode: 401,
                    status: false,
                    message: 'User already registered'
                }
            }
            else {
                const newUser = new db.Restapp({
                    uname,
                    phno,
                    email,
                    pswd
                })
                newUser.save() //to save to mongodb
                return {
                    statusCode: 200,
                    status: true,
                    message: 'successfully registered'
                }
            }
        })




}
const login = (email, pswd) => {
    return db.Restapp.findOne({
        email,
         pswd
    })
        .then(Restapp => {
            if (Restapp) {
                
                //token genetate
               
                return {
                    statusCode: 200,
                    status: true,
                    message: 'login succesful',

                    
                }
            }

            else {
                return {
                    statusCode: 401,
                    status: false,
                    message: 'Incorrect password or username'
                }


            }

        })
}



module.exports = {
    signup,
    login
}