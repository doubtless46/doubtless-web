import { signOut } from "firebase/auth";
export const logout = async (auth) => {
  try {
    //     const result = await signInWithPopup(auth, AuthProvider);
    //     return {
    //       success: true,
    //       message: "SuccessfullyLogin",
    //     };
    await signOut(auth);
    return {
      success: true,
      message: "Logout Successfull",
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};
