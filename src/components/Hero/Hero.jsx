import v4 from '../../assets/Vector 4.png'
import v5 from '../../assets/Vector 5.png'

const Hero = () => {
    return (
        <>
            <div className="rectangle" />
            <div className="become-doubtless">
                Become
                <br />
                Doubtless
            </div>
            <img className="vector" alt="Vector" src={v4} />
            <img className="img" alt="Vector" src={v5} />
            <div className="ellipse" />
            <div className="ellipse-2" />
            <p className="text-wrapper">
                Join a community where you can ask doubts from seniors and other college peers.
            </p>
        </>
    )
}

export default Hero