//function yaha banate hai 
import {User} from '../models/User.js'
export const userRegister=async (req,res)=>{
    //console.log("getting the data from body",req.body)
//try catch because if error then it will catch. (good practice)
    try{
        let user=await User.create(req.body) //create method created the data
        res.json({message:'user created successfully',
        Newuser:user,
        success:true,
    })
        
    }
    catch(error){
        res.json({message:error.message})

    }
    
}