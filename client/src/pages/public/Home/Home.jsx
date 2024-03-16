import "./Home.scss";
import { Container } from "react-bootstrap";
import inst from "../../../assets/images/instagram-svgrepo-com.svg";
import git from "../../../assets/images/github-svgrepo-com (1).svg";
import linkedin from "../../../assets/images/linkedin-linked-in-svgrepo-com.svg";
import email from "../../../assets/images/email-1-svgrepo-com.svg";
import Skills from "../../../components/Skills/Skills";
import Resume from "../../../components/Resume/Resume";
import Projects from "../../../components/Projects/Projects";
import ContactForm from "../../../components/ContactForm/ContactForm";
import { useEffect } from "react";
import { CountContext } from "../../../components/Context/ContextProvider/ContextProvider";
import { useContext } from "react";
import upArrow from "../../../assets/images/up-circle-svgrepo-com.svg";
import jijin from "../../../assets/images/jijin.jpeg";
function Home() {
  const { route } = useContext(CountContext);
  const emailAddress = "jijinvjvazhippilly@gmail.com";

  const mailtoLink = `mailto:${emailAddress}}`;

  useEffect(() => {
    switch (route) {
      case "home":
        scrollToElement("#home");
        break;
      case "about":
        scrollToElement("#about");
        break;
      case "skills":
        scrollToElement("#skills");
        break;
      case "resume":
        scrollToElement("#resume");
        break;
      case "projects":
        scrollToElement("#projects");
        break;
      case "contact":
        scrollToElement("#contact");
        break;
      default:
        break;
    }
  }, [route]);

  const scrollToElement = (elementId) => {
    const element = document.querySelector(elementId);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const element = document.querySelector("#home");
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container id="home" className=" index_page px-md-5 text-start">
      <section className="description_section  pb-3 ">
        <div className="header_img">
          <img
            src={
              "https://media.licdn.com/dms/image/D5603AQEgvXcly4bLxg/profile-displayphoto-shrink_800_800/0/1666931603563?e=2147483647&v=beta&t=nGlLitovlB7wWI0zwG-7RK7w_TWL9ni-tWEDs_Tp9LI"
            }
            alt="Jijin vj"
            className="rounded-pill object-fit-contain  p-2 "
            width={300}
            height={300}
          />
        </div>
        <div className="d-flex  flex-column flex-md-row gap-3 justify-content-center  align-items-center ">
          <section className="social_media d-flex flex-row flex-md-column gap-1  justify-content-md-end align-items-md-center mt-lg-auto  me-md-3 me-auto">
            <a
              href="https://www.instagram.com/jijin__vj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={inst} alt="inst" width={25} />
            </a>

            <a
              href="https://github.com/Jijinvj21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git} alt="git" width={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/jijin-vj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" width={25} />
            </a>

            <a href={mailtoLink}>
              <img src={email} alt="linkedin" width={30} />
            </a>
          </section>
          <div>
            <p className="py-md-3 fw-bold fs-1">
              Hey, I am Jijin VJ, a self-taught MERN stack developer.
            </p>
            <p className="text-black-50 fw-semibold fs-5">
              I am passionate MERN Stack Developer with a Knack for Creating
              Exceptional Web Experiences | React | Node.js | Express.js |
              MongoDB | Full Stack Expert | Tech Enthusiast | Freelancer &
              Content Creator
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about_section pb-4 ">
        <h1 className="fw-bold">About</h1>
        <div className="d-flex flex-column flex-md-row  align-items-center">
          <div className="description w-100">
            <p className="fs-5 fw-semibold text-black-50  w-75  ">
              
              Skilled at writing well-designed, testable and efficient code
              using current best practices in Web development. Fast learner,
              hard worker and team player who is proficient in an array of
              scripting languages and multimedia Web tools.
            </p>
            <div className="details py-2 d-flex flex-column gap-2 w-100">
              <h5 className="fw-bold m-0">
                Full Name:{" "}
                <span className="fw-semibold text-black-50 fs-5">
                  Jijin V J
                </span>
              </h5>

              <h5 className="fw-bold m-0">
                Location:{" "}
                <span className="fw-semibold text-black-50 fs-5">
                  Thrissur,Kerala
                </span>
              </h5>

              <h5 className="fw-bold m-0">
                Phone:{" "}
                <span className="fw-semibold text-black-50 fs-5">
                  91+7994358015
                </span>
              </h5>
              <h5 className="fw-bold m-0">
                Email:{" "}
                <span className="fw-semibold text-black-50 fs-5">
                  jijinvjvazhippilly@gmail.com
                </span>
              </h5>
            </div>
          </div>
          <div className="w-100">
            <img src={jijin} alt="jijin" className="w-50 rounded" />
          </div>
        </div>
      </section>

      <section id="skills"></section>
      <Skills />
      <section id="#resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        {/* <ContactForm /> */}
      </section>
      <section className="scroll_top position-relative">
        <div className=" inner_div position-fixed end-0 bg-secondary py-2 px-2  rounded-pill ">
          <img
            src={upArrow}
            alt="upArrow"
            width={30}
            onClick={() => handleContactClick()}
          />
        </div>
      </section>
    </Container>
  );
}

export default Home;
