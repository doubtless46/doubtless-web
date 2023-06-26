import { useMediaQuery } from '@mui/material'
import './Socials.css'

const Socials = () => {
    const Screen = useMediaQuery('(max-width:600px)')
    return (
        <>
            <h1 className="reach-out-to-us">
                <span className="text-wrapper-55">Reach</span>
                <span className="text-wrapper-56">
                    {" "}
                    out
                    <br />
                    to us
                </span>
            </h1>
            <div className="text-wrapper-61" id='contact'>Contact us</div>
            <div className='Socials-container'>


                <div className="group-33">
                    <div className="text-wrapper-62">Technical Support</div>
                    <div className="text-wrapper-63">support@doubtless.club</div>
                </div>
                <div className="group-34">
                    <div className="text-wrapper-64">Phone Number</div>
                    <div className="text-wrapper-65">+91-8920984642</div>
                </div>
                <div className="group-35">
                    <div className="text-wrapper-66">Linkedin</div>
                    <div className="text-wrapper-67">linkedin.com.in/doubtless</div>
                </div>
                <div className="group-36">
                    <div className="text-wrapper-68">Instagram</div>
                    <div className="text-wrapper-69">@doubtless.club</div>
                </div>
                <div className="rectangle-11" />
                <div className="rectangle-12" />
                <div className="rectangle-13" />
                <div className="rectangle-14" />
            </div>
            {/* <div style={{
                display: `${Screen? 'flex': 'none'}`,
                top: '340vw',
                height:'10vw', 
                background:'#ae3aff', 
                width:'100vw',position:'absolute'
            }}>
                <div className="text-wrapper-70" style={{left:'35%'}}>copyright@doubtless2023</div>
            </div> */}
            <div className="overlap-8">
                <div className="text-wrapper-70">copyright@doubtless2023</div>
            </div>
        </>
    )
}

export default Socials