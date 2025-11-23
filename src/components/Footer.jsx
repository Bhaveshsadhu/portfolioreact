import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { contact } from '../data/content'

function Footer() {
  return (
    <footer className="py-5 mt-5 border-top" style={{ borderColor: 'var(--border)' }}>
      <div className="container d-flex flex-column flex-lg-row justify-content-between gap-4">
        <div>
          <h6 className="fw-bold mb-2">Bhavesh Sadhu</h6>
          <p className="text-body-secondary mb-1">Full Stack Developer (MERN)</p>
          <small className="text-body-secondary">{contact.location}</small>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <a href="https://github.com/Bhaveshsadhu" target='_blank' aria-label="GitHub" className="text-body-secondary fs-5">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bhaveshsadhu/" target='_blank' aria-label="LinkedIn" className="text-body-secondary fs-5">
            <FaLinkedin />
          </a>
          {/* <a href="https://youtube.com/" aria-label="YouTube" className="text-body-secondary fs-5">
            <FaYoutube />
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
