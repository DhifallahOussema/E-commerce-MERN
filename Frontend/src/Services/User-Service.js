import Api from '../Axios/Api'
const User_API="/users"
const CreateNewUser=async (user)=>{
   return await Api.post(User_API,user)

}
const VerifyUser = async (user)=>{
    return await Api.post(User_API+"/login",user)

}


export const UserService = {
    CreateNewUser,
    VerifyUser,
}

