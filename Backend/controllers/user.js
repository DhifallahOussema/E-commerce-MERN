import User from '../models/user.js';
import  jwt  from "jsonwebtoken"

export const createUser = async (req, res) => {
        const newUser = new User(req.body)
      try {
         await newUser.save();
 
         res.status(201).json(newUser );
     } catch (error) {
         res.status(409).json({ message: error.message });
     }
 }

 const generateAccessToken=(user) =>{
    return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1800s' });

  }
 export const getuserBYEmail = async (req, res) => { 
    try {
        const{email,password}=req.body;
        const user = await User.find({email,password});
       if(user==""){  res.status(401).send('utilisateur non existant');
        return} ;
        const accessToken = generateAccessToken(user);
       res.status(200).json({
        accessToken,
        user
      })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getusers = async (req, res) => {
  try {
    const users= await User.find({});
    res.status(200).json(users);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }

}
