import { useDispatch, useSelector } from 'react-redux';
import './profile.css';
import { logout } from "../../functions/logout";
import {useNavigate} from "react-router-dom"
import { auth } from "../../firebase/config";
import { Link } from 'react-router-dom';
import { LogoutUser, setUser } from '../../store/slices/userSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
const ProfilePage = () => {
  const user = useAuthState(auth);
  const { userinfo } = useSelector((state) => state.user);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const removeUser=async()=>{
    try{
      await logout(auth);
      dispatch(setUser({
        isLoggedIn: user ? true : false,
          userinfo:null
        }))
    }catch(err){
      console.log(err)
      }
  }
  return (
    <>
    <div className='top-container'>
    <img src={userinfo?.profileImage} className='imageContainer' alt="profile" style={{borderRadius:"50%"}} />
    </div>
      <div className='bottom-container'>
      <h2>{userinfo?.name}</h2>
      <p style={{color:"gray"}}>{userinfo?.email}</p>
      <Link to="/"><div className='button1'><button className='btn' onClick={removeUser}>Sign Out</button></div></Link>
      </div>
      <br/>
      <div className='doubt-container'>

      </div>
    </>
  );
};

export default ProfilePage;
