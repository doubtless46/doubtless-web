import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { AuthProvider } from "../firebase/config";
export const signINandOut=async(auth,user)=>{
      try{
            if(!user){
                  const result = await signInWithPopup(auth,AuthProvider);
                  return {
                        success:true,
                        message:"SuccessfullyLogin"
                  };
            }
            else{
                  await signOut(auth);
                  return {
                        success:true,
                        message:"Logout Successfull"
                  }
            }
      }
      catch(error){
          console.log(error);
      }
}