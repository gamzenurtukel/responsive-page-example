import "./About.scss";

import {
  RiMessage3Fill,
  RiGroupFill,
  RiTeamFill,
  RiBuildingFill,
  RiArchiveFill,
  RiSuitcaseFill,
  RiMoneyDollarCircleFill,
  RiFundsFill,
  RiProfileFill,
  RiFileSearchFill,
} from "react-icons/ri";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <p className="about-title">
          We support you for{" "}
          <span className="special-text">new opportunities</span> in your career
          journey.
        </p>
        <p className="about-subtitle">
          Our mission is to find talented young people who are interested in
          brain drain
          <br />
          and we help them to find the best way to go abroad.
        </p>
        <a href="mailto:info@bradrain.com" className="about-connect">
          <div className="about-connect-button">
            <span className="button-name">Connect With Us</span>
          </div>
        </a>
        <div className="about-box">
          <div className="box-item">
            <p className="box-title">LAUNCHED IN</p>
            <p className="box-value">2022</p>
          </div>
          <div className="box-item">
            <p className="box-title">MENTOR</p>
            <p className="box-value">2</p>
          </div>
          <div className="box-item">
            <p className="box-title">MISSION PROGRESS</p>
            <p className="box-value">20%</p>
          </div>
        </div>
        <p className="about-features">Features</p>
        <p className="about-offer">What do we offer as a Bradrain?</p>
        <div className="about-main">
          <div className="main-icon">
            <RiMessage3Fill />
          </div>
          <div className="main-icon">
            <RiGroupFill />
          </div>
          <div className="main-text">
            <span className="main-title">Mentor Support</span>
            <span className="main-subtitle">
              Bradrain aim is to easily connect you with our mentors and provide
              you with the most suitable mentor support.
            </span>
          </div>
          <div className="icon-background"></div>
        </div>
        <div className="about-main">
          <div className="main-icon">
            <RiTeamFill />
          </div>
          <div className="main-icon">
            <RiBuildingFill />
          </div>
          <div className="main-text">
            <span className="main-title">University Pages</span>
            <span className="main-subtitle">
              Within the information about your school in your profile, we
              enable you to connect and communicate with people from your school
              and other schools without interruption.
            </span>
          </div>
          <div className="icon-background"></div>
        </div>
        <div className="about-main">
          <div className="main-icon">
            <RiArchiveFill />
          </div>
          <div className="main-icon">
            <RiSuitcaseFill />
          </div>
          <div className="main-text">
            <span className="main-title">Companies</span>
            <span className="main-subtitle">
              We provide a place to post your job offers and job trainings at
              your company. We make it easy for you to find the people you are
              looking for, with bradrain's assurance of powerful cv algorithm.
            </span>
          </div>
          <div className="icon-background"></div>
        </div>
        <div className="about-main">
          <div className="main-icon">
            <RiMoneyDollarCircleFill />
          </div>
          <div className="main-icon">
            <RiFundsFill />
          </div>
          <div className="main-text">
            <span className="main-title">Startup Support</span>
            <span className="main-subtitle">
              We support you to bring your idea to make actual and find
              teammates to accompany you on this way to achieve. Our aim is to
              develop a platform that can offer fast and reliable solutions to
              every Start-up's needs.
            </span>
          </div>
          <div className="icon-background"></div>
        </div>
        <div className="about-main">
          <div className="main-icon">
            <RiProfileFill />
          </div>
          <div className="main-icon">
            <RiFileSearchFill />
          </div>
          <div className="main-text">
            <span className="main-title">Freelance Support</span>
            <span className="main-subtitle">
              We help you to find the most suitable job for you from freelance
              job postings on Bradrain.
            </span>
          </div>
          <div className="icon-background"></div>
        </div>
        <div className="about-our-vision">
          <p className="our-vision-title">Our Vision</p>
          <p className="our-vision-subtitle">
            Bradrain team work with mentors, technology companies and start-ups,
            to help talented young people who are interested in brain drain to
            go abroad and help them in this process. As a company, We aim to be
            the most reliable and most preferred company working for this
            purpose in the long term.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
