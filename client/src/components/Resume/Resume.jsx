import { Button } from "react-bootstrap";
import "./Resume.scss";
import pdf from '../../assets/images/pdf.svg'
import { Link } from "react-router-dom";


function Resume() {
  return (
    <section id="resume" className="resume pb-3">
      <div className="container">
        <div className="section-title">
          <h1 className="fw-bold ">Resume</h1>
        </div>
<Link
to='https://drive.google.com/file/d/1izAfQnYZNDswN15U-KS_t8Fd9Awp-92j/view?pli=1'
target='_blank'
rel='noopener noreferrer'
download
>
<Button className='download-btn bg-secondary border-0 my-3 py-auto justify-content-center align-items-center'>
  Download Resume <img src={pdf} alt='pdf' width={35} />
</Button>
</Link>


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
