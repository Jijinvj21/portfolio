import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.scss'
function Skills() {
  return (
    <section className='skills_section pb-4'>
      <h1 className='fw-bold '>Skills</h1>
    <div className='progress_section d-flex flex-column '>
      <p>HTML & CSS</p>
    <ProgressBar className='progress_bar' striped variant="secondary" now={40} label={`${40}%`} />
  <p>JAVASCRIPT85</p>
    <ProgressBar className='progress_bar' striped variant="secondary" now={60} label={`${40}%`} />
    <p>REACT JS</p>
    <ProgressBar className='progress_bar' striped variant="secondary" now={80} label={`${40}%`} />
    <p>NODE JS</p>
    <ProgressBar className='progress_bar' striped variant="secondary" now={80} label={`${40}%`} />
    <p>MONGODB</p>
    <ProgressBar className='progress_bar' striped variant="secondary" now={80} label={`${40}%`} />
  </div>

    </section>
  )
}

export default Skills