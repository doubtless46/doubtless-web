import React,{useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiMenu3Line} from 'react-icons/ri';

const Navbar = () => {
  const [active,setActive] = useState('navBar')
  const showNavbar =()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar =()=>{
    setActive('navBar');
  }

  return (
    <section className='navbar-section'>
      <header className="header flex">
        <div className="logo">
          <a href="#" className="logo flex">
            <h1>Doubtless</h1>
        </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="nav-item">
              <a href="#" className="navlink">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="navlink">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="navlink">Reviews</a>
            </li>
            <li className="nav-item">
              <a href="#" className="navlink">Join Us</a>
            </li>

            <button className="btn">
              <a href="#">Get It!</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closenavBar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNavbar} className="toggleNavbar">
            <RiMenu3Line className="icon"/>
          </div>
      </header>
    </section>
  )
};

export default Navbar