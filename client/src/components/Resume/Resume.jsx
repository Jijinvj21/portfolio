import { Button } from "react-bootstrap";
import "./Resume.scss";
function Resume() {
  return (
    <section id="resume" className="resume pb-3">
      <div className="container">
        <div className="section-title">
          <h1 className="fw-bold ">Resume</h1>
        </div>
        <a href="/assets/Jijin_vj_Resume_Web_Developer.pdf" download>
          <Button  className="download-btn bg-secondary border-0 my-3">Download Resume</Button>
        </a>

        <div className="row fw-semibold">
          <div className="">
            <h3 className="resume-title py-2">Education</h3>
            <div className="resume-item ">
              <h4>Brototype, Kozhikkode</h4>
              <h5>Sept 2022 - Present</h5>
              <p>
                <em>MERN Stack</em>
              </p>
              <p>A self learning web development bootcamp where tasks are assigned and assessed weekly by industry experts in MERN Stack.</p>
            </div>
            <div className="resume-item">
              <h4> Goverment Polytecnic Collage Chelakkara </h4>
              <h5>2021</h5>
              <p>
                <em>Diploma</em>
              </p>
              <p> Kerala Universities </p>
            </div>
            <div className="resume-item">
              <h4> VHSE Boys Kunnamkulam </h4>
              <h5>2019</h5>
              <p>
                <em>VocationalHigher Secondary</em>
              </p>
              <p>
              Kerala Vocational Higher Secondary Examination Board
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
