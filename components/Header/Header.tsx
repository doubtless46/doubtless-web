import React from 'react'


const Header = () => {
  return (
    <div>
      <div>
        <div className="app__header app__wrapper section__padding" id="home">
          <div className="app__wrapper_info">
            <h1 className="app__header-h1">Have a Question? We Have a community to Answer</h1>
            <p className="p__opensans" style={{ margin: "2rem 0" }}>
              
            </p>
            <p className='p__opensans'>
            Doubt-Less App, the platform that empowers juniors by providing reliable answers to all their doubts."
            </p>
          </div>

          <div className="app__wrapper_img">
            <img src='https://i.pinimg.com/originals/31/1c/a2/311ca2dfbf044c41a3fb7fa79f911c7b.png' alt="header_img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
