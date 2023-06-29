import Carousel from './Carousel/Carousel'

const Testimonials = () => {
  return (
    <>
        <div className="overlap-wrapper">
          <div className="overlap-3">
            <div className="rectangle-4" />
            <div className="hear-from-the">
              <span className="text-wrapper-18">
                Hear from
                <br />
                the{" "}
              </span>
              <span className="text-wrapper-19" id='community'>community</span>
            </div>
            
          </div>
        </div>
        
        <Carousel/>
    </>
  )
}

export default Testimonials