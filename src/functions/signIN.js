import { signInWithPopup } from "firebase/auth";

import { AuthProvider } from "../firebase/config";
export const signIN = async (auth, user) => {
  try {
    await signInWithPopup(auth, AuthProvider);
    return {
      success: true,
      message: "SuccessfullyLogin",
    };

    //   else{
    //       await signOut(auth);
    //       return {
    //             success:true,
    //             message:"Logout Successfull"
    //       }
    // }
  } catch (error) {
    return {
      success: false,
    };
  }
};
