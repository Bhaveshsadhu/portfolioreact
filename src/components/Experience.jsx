import { motion } from 'framer-motion'
import { experience } from '../data/content'

const variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.35 },
  }),
}

function Experience() {
  return (
    <section className="py-5" id="experience">
      <div className="container">
        <p className="section-title mb-1">Experience</p>
        <h3 className="fw-bold mb-4">Roles that shaped how I build</h3>
        <div className="row g-4">
          {experience.map((role, idx) => (
            <div key={`${role.role}-${role.years}`} className="col-12 col-lg-4">
              <motion.div
                className="p-4 rounded-4 glass h-100"
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="mb-0">{role.role}</h5>
                  <span className="badge text-bg-secondary">{role.years}</span>
                </div>
                <p className="text-body-secondary mb-1">{role.company}</p>
                <p className="text-body-secondary mb-0">{role.summary}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
