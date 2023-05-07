import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Navbar from "pages/components/Navbar";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className="education" id="education">
        <h2 className="Phead">
          MY<span>Journey</span>
        </h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><CalendarMonthIcon className="i"/>2017-2018</div>
                  <h3>degree</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui, quo deleniti eum consectetur quibusdam!
                    Nesciunt possimus aut at porro beatae itaque fuga
                    architecto? Reiciendis sit quis at voluptatibus inventore.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><CalendarMonthIcon className="i"/>2017-2018</div>
                  <h3>degree</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui, quo deleniti eum consectetur quibusdam!
                    Nesciunt possimus aut at porro beatae itaque fuga
                    architecto? Reiciendis sit quis at voluptatibus inventore.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><CalendarMonthIcon className="i"/>2017-2018</div>
                  <h3>degree</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui, quo deleniti eum consectetur quibusdam!
                    Nesciunt possimus aut at porro beatae itaque fuga
                    architecto? Reiciendis sit quis at voluptatibus inventore.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Experience</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><CalendarMonthIcon className="i"/>2017-2018</div>
                  <h3>Web developer</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui, quo deleniti eum consectetur quibusdam!
                    Nesciunt possimus aut at porro beatae itaque fuga
                    architecto? Reiciendis sit quis at voluptatibus inventore.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><CalendarMonthIcon className="i"/>2017-2018</div>
                  <h3>degree</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui, quo deleniti eum consectetur quibusdam!
                    Nesciunt possimus aut at porro beatae itaque fuga
                    architecto? Reiciendis sit quis at voluptatibus inventore.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><CalendarMonthIcon className="i"/>2017-2018</div>
                  <h3>degree</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit qui, quo deleniti eum consectetur quibusdam!
                    Nesciunt possimus aut at porro beatae itaque fuga
                    architecto? Reiciendis sit quis at voluptatibus inventore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
