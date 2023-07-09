
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
    return (
        <>
            <div className="div-wrapper">
                <div className="frame"><Link to='/' smooth style={{cursor:'pointer'}}><div className="text-wrapper-2">Home</div></Link>     
                </div>
                <div className="frame">
                <Link to='#about' smooth style={{cursor:'pointer'}}><div className="text-wrapper-2">About</div></Link>                    
                </div>
                <div className="frame">
                <Link to='#community' smooth style={{cursor:'pointer'}}><div className="text-wrapper-2">Testimonial</div></Link>
                </div>
                <div className="frame">
                <Link to='#contact' smooth style={{cursor:'pointer'}}><div className="text-wrapper-2">Contact</div></Link>
                </div>
            </div>
            <div className="group-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                <a href="https://play.google.com/store/apps/details?id=com.doubtless.doubtless" target="_blank" rel="noopener noreferrer">
                  <button className="rectangle-2">
                  <div className="text-wrapper-7">Download</div>
                  </button>
                  </a>
                </div>
              </div>
            </div>
        </>
    )
}

export default Navbar