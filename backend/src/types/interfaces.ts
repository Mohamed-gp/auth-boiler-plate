interface UserSignIn {
    email : string,
    password : string
}
interface UserSignUp {
    username : string,
    email : string,
    password : string
}

interface toDo {
    title : string,
    description : string,
    user : string
}


export {UserSignIn,UserSignUp,toDo}