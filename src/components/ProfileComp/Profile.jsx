import './profile.css'
import avatar from '../../assets/avatar.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Profile = () => {
  const {userinfo}=useSelector(state=> state.user)
  return (
    <div className='profile-container'>
      <div className='username'>
        <div className='pfp'>
          <img src={userinfo?.author_photo_url}/>
        </div>
        <div className='details'>
            <h4>{userinfo?.author_name}</h4>
            <p>2year | MSIT</p>
        </div>
      </div>
      <Link to="/profile" className='profile-link'>
         View full profile
      </Link>
    </div>
  )
}

export default Profile
