import "./Login.css";
import googleImg from "../../assets/google.png";
import { signIN } from "../../functions/signIN";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector((state) => state.user);
  const [user] = useAuthState(auth);
  if (user) {
    dispatch(
      setUser({
        isLoggedIn: true,
      })
    );
    // if user exist navigate to doubts page
    return <Navigate to="/doubts" replace={true} />;
  }
  return (
    <div className="login-button">
        <img src={googleImg} alt="Google image" />
           <button
      className=""
      onClick={async () => {
          const result = await signIN(auth, user);
        if (result.success) {
          dispatch(
            setUser({
              isLoggedIn: true,
            })
          );
        }
      }}
    >

      Sign in with Google
    </button>
    </div>
  );
};

export default Login;
