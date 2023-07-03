import "./Login.css";
import googleImg from "../../assets/google.png";
import { signINandOut } from "../../functions/signInandOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
const Login = () => {
      const dispatch=useDispatch();
      const {isLoggedIn}=useSelector(state =>state.user)
      // if auth has user (loggedin)
      const [user] = useAuthState(auth);
      if(user){
            // if user exist navigate to doubts page
            return <Navigate to="/doubts" replace={true}/>
      }
  return (
    <button className="login-container login-with-google-btn" onClick={async()=>{
        const result =await signINandOut(auth,user);
        if(result.success){
            dispatch(setUser({
                  isLoggedIn:true
            }))
        }
    }
    }>
      <img src={googleImg} alt="Google image" />
        Sign in with Google
    </button>
  );
};

export default Login;
