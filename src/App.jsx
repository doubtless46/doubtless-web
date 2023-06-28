import "./App.css";
import group from './assets/Group-132.png'
import splash1 from './assets/Splash 1.png'
import onboarding2 from './assets/Onboarding-2 1.png'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Screens from "./components/Screens/Screens";
import Tags from "./components/Tags/Tags";
import Testimonials from "./components/Testimonials/Testimonials";
import Socials from "./components/Socials/Socials";
import ReviewForm from "./components/ReviewForm/ReviewForm";

const App = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
          
            <Hero/>
            <Navbar/>
            <Screens group={group}/>


          </div>
          <div className="overlap-2">
            <p className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <div className="ellipse-4" />
            <img className="onboarding" alt="Onboarding" src={onboarding2} />
            <img className="splash" alt="Splash" src={splash1} />
            <Tags/>

          </div>
        </div>
        <Testimonials/>

        <ReviewForm/>

        <Socials/>

      </div>
    </div>
  );
};

export default App