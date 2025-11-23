import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { projects } from '../data/content'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45 },
  }),
}

function Projects({ limit }) {
  const list = limit ? projects.slice(0, limit) : projects

  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="section-title mb-1">Projects</p>
            <h3 className="fw-bold">Featured builds</h3>
            <p className="text-body-secondary mb-0">
              Modern MERN solutions with clean UX, solid APIs, and production-ready patterns.
            </p>
          </div>
          {limit && (
            <Link to="/projects" className="btn btn-outline d-none d-md-inline-flex align-items-center gap-2">
              View all <FaArrowUpRightFromSquare />
            </Link>
          )}
        </div>
        <div className="row g-4">
          {list.map((project, idx) => (
            <div key={project.title} className="col-12 col-lg-6">
              <motion.div
                className="p-4 rounded-4 glass h-100 d-flex flex-column"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
              >
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden mb-3 bg-diagonal-gradient">
                  <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div>
                    <h5 className="mb-1">{project.title}</h5>
                    <p className="text-body-secondary">{project.description}</p>
                  </div>
                  <span className="badge text-bg-dark align-self-start">{project.tag}</span>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.tech.map((item) => (
                    <span key={item} className="pill small text-body-secondary">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-3 mt-auto">
                  <a className="btn btn-outline d-inline-flex align-items-center gap-2" href={project.github} target='_blank'>
                    <FaGithub /> Code
                  </a>
                  <a
                    className="btn btn-primary d-inline-flex align-items-center gap-2"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo <FaArrowUpRightFromSquare />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
