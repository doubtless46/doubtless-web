import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Portfolio = () => {
  return (
    <>
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
                  <div className="year">
                    <CalendarMonthIcon className="i" />
                    2021-2025
                  </div>
                  <h3>Maharaja Surajmal Institute Of Technology</h3>
                  <p>
                    Currently enrolled in Bachelor of Technology (BTech) in
                    Computer science and Engineering.
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <CalendarMonthIcon className="i" />
                    2019-2021
                  </div>
                  <h3>Dewan Public School</h3>
                  <p>Passed my 12th Boards exam with a score of 94% in PCM.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <CalendarMonthIcon className="i" />
                    2017-2018
                  </div>
                  <h3>ST. Thomas English Medium School</h3>
                  <p>
                    Passed my 10th Boards exam with a score of 92.4% in
                    science,Maths and English.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Projects</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"></div>
                  <h3>Farmate</h3>
                  <p>
                    Farmate is a volunteering website that our team made during
                    the Google Solution challenge. The techstack used is MERN
                    and Firebase for userAuthentication. Aim of this web app is
                    to provide volunteers to local farmers to help them
                    according to their need and provide them financial aid so
                    that they can buy the necessary machinery that can reduce
                    livestock waste and help in reducing air pollution.
                    Repository link : https://github.com/Vaibhavg4651/farmate
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"></div>
                  <h3>Skyware</h3>
                  <p>
                    Skyware made the frontend for the skyware website using
                    HTML, CSS, Javacript, React and Mui during participating in
                    a hackathon organized by IIC Msit , made it fully responsive
                    and interactive and deployed it on netlify.
                    https://skyware.netlify.app/
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"></div>
                  <h3>BeHelper</h3>
                  <p>
                    Hack-A-Miner Hackathon Qualified in top 15 for best ideas
                    category. Made a crowdfunding website using MERN stack and
                    added a MetaMask wallet in it. The basic idea was to help
                    organisations to raise funds in crypto also. Certificate
                    link :
                    https://certificate.givemycertificate.com/c/9c71b349-07e2-4056-8708-312dd53abd0a
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
