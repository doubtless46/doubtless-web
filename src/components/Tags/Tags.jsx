import './Tags.css'

const Tags = () => {
  return (
    <>
            <div className="frameButton frame-5" style={{cursor:'pointer'}}>
              <div style={{cursor:'pointer'}} className="textButton">Notes</div>
            </div>
            <div className="frame-6" style={{cursor:'pointer'}}>
              <div className="frameButton frame-7">
                <div className="textButton" style={{cursor:'pointer'}}>Teachers</div>
              </div>
              <div className="frameButton frame-8">
                <div className="textButton" style={{cursor:'pointer'}}>Attendance</div>
              </div>
              <div className="frameButton frame-9">
                <div className="textButton" style={{cursor:'pointer'}}>Marks</div>
              </div>
              <div className="frameButton frame-10">
                <div className="textButton" style={{cursor:'pointer'}}>Higher Studies</div>
              </div>
            </div>
            <div className="frame-11" style={{cursor:'pointer'}}>
              <div className="frameButton frame-12">
                <div className="textButton" style={{cursor:'pointer'}}>Placements</div>
              </div>
              <div className="frameButton frame-13">
                <div className="textButton" style={{cursor:'pointer'}}>Resume Review</div>
              </div>
              <div className="frameButton frame-14">
                <div className="textButton" style={{cursor:'pointer'}}>Freelance</div>
              </div>
              <div className="frameButton frame-15">
                <div className="textButton" style={{cursor:'pointer'}}>Life</div>
              </div>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.doubtless.doubtless" target="_blank" rel="noopener noreferrer">
              <button className="group-2">Download the App Now</button>
            </a>
    </>
  )
}

export default Tags