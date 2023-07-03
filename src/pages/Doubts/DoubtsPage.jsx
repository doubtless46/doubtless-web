import { useDispatch } from "react-redux"
import { auth } from "../../firebase/config";
import { setUser } from "../../store/slices/userSlice";
import {  useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
const DoubtsPage = () => {
  const dispatch=useDispatch();
  const getUser=async()=>{
    onAuthStateChanged(auth,(user)=>{
      // settting the user in redux store
      dispatch(setUser({
        isLoggedIn:true,
        userInfo:{
          name:user?.displayName,
          profileImage:user?.photoURL,
          email:user?.email,
          isVerified:user?.emailVerified
        }
      }))
    })
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div>
      doubts bro
    </div>
  )
}

export default DoubtsPage
