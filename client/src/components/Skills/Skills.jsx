import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.scss'
function Skills() {
  return (
    <section className='skills_section pb-4'>
      <h1 className='fw-bold '>Skills</h1>
    <div className='progress_section d-flex flex-column '>
      <p>HTML & CSS</p>
    <ProgressBar animated className='progress_bar' striped variant="secondary" now={70} label={`${70}%`} />
  <p>JAVASCRIPT85</p>
    <ProgressBar animated className='progress_bar' striped variant="secondary" now={75} label={`${75}%`} />
    <p>REACT JS</p>
    <ProgressBar animated className='progress_bar' striped variant="secondary" now={65} label={`${65}%`} />
    <p>NODE JS</p>
    <ProgressBar animated className='progress_bar' striped variant="secondary" now={60} label={`${60}%`} />
    <p>MONGODB</p>
    <ProgressBar animated className='progress_bar' striped variant="secondary" now={55} label={`${55}%`} />
  </div>

    </section>
  )
}

export default Skills