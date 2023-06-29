
import { HashLink as Link } from 'react-router-hash-link'
const Navbar = () => {
    return (
        <>
            <div className="frame">
                <div className="div-wrapper"><Link to='/' smooth style={{cursor:'default'}}><div className="text-wrapper-2">Home</div></Link>
                    
                    
                </div>
                <div className="frame-2">
                <Link to='#about' smooth style={{cursor:'default'}}><div className="text-wrapper-3">About</div></Link>
                    
                </div>
                <div className="frame-3">
                <Link to='#community' smooth style={{cursor:'default'}}><div className="text-wrapper-4">Testimonial</div></Link>
                </div>
                <div className="frame-4">
                <Link to='#contact' smooth style={{cursor:'default'}}><div className="text-wrapper-5">Contact</div></Link>
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