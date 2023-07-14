import {
  group,
  splash1,
  onboarding2,
  Navbar,
  Hero,
  Screens,
  Tags,
  Testimonials,
  Socials,
  ReviewForm,
} from "./index";
const Home = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <Hero />
            <Navbar />
            <Screens group={group} />
          </div>
          <div className="overlap-2">
            <p className="lorem-ipsum-dolor">
              Had an argument with your faculty??
              <br />
              Placement related issues??
              <br />
              Or don't know what to do when your attendance is short ?<br />
              Are you tired of endless hours spent searching for answers to
              these kind college-related doubts?
              <br />
              <br />
              Well, worry no more! Introducing Doubtless, the revolutionary app
              that solves all your college-related problems with just a few
              taps!
              <br />
              We understand the struggles of college life. That's why we created
              Doubtless, the app that brings clarity to your college journey.
              <br />
              Don't let doubts hold you back! With Doubtless, you'll have the
              confidence to conquer any challenge that comes your way.
              <br />
              <br />
              So why wait? Join the Doubtless community and unlock a world of
              knowledge and support. <br />
              Download Doubtless today from the App Store or Google Play!
            </p>
            <div className="ellipse-4" />
            <img className="onboarding" alt="Onboarding" src={onboarding2} />
            <img className="splash" alt="Splash" src={splash1} />
            <Tags />
          </div>
        </div>
        <Testimonials />

        <ReviewForm />

        <Socials />
      </div>
    </div>
  );
};

export default Home;
