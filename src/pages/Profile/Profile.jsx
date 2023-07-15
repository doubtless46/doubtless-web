import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';
import { logout } from "../../functions/logout";
import {useNavigate} from "react-router-dom"
import { auth } from "../../firebase/config";
import { Link } from 'react-router-dom';
const Profile = () => {
  const { userinfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
    <div className='top-container'>
    <img src={userinfo?.profileImage} className='imageContainer' alt="profile" style={{borderRadius:"50%"}} />
    </div>
      <div className='bottom-container'>
      <h2>{userinfo?.name}</h2>
      <p style={{color:"gray"}}>{userinfo?.email}</p>
      <Link to="/"><div className='button1'><button className='btn' onClick={async () =>{await logout(auth)} }>Sign Out</button></div></Link>
      </div>
      <br/>
      <div className='doubt-container'>

      </div>
    </>
  );
};

export default Profile;
