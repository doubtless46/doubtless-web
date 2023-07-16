import "./nav.css";
import { FiSearch } from "react-icons/fi";
import {RiNotification4Line} from 'react-icons/ri'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Doubtsnav = () => {
      const {userinfo}=useSelector(state=> state.user)
  return (
    <div className="navbar">
     <div className="nav-left">
     <Link className="company-name" to="/">DoubtLess</Link>
      <div className="search-bar">
        <div><FiSearch/></div>
        <input type="text" placeholder="Search for already asked doubts" />
      </div>
     </div>
      <div className="icons">
        <div className="notification-icon"><RiNotification4Line/></div>
        <Link to="/profile"><div className="profile-icon"><img src={userinfo?.author_photo_url}/></div></Link>
      </div>
    </div>
  );
};

export default Doubtsnav;