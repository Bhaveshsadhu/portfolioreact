import { motion } from 'framer-motion'
import { about } from '../data/content'

function AboutSection({ highlightSkills }) {
  return (
    <section className="py-5" id="about">
      <div className="container row g-4 align-items-center mx-auto">
        <div className="col-12 col-lg-6">
          <p className="section-title mb-1">About</p>
          <h3 className="fw-bold mb-3">{about.title}</h3>
          <div className="d-flex flex-column gap-3">
            {about.bio.map((paragraph, idx) => (
              <motion.p
                key={paragraph}
                className="text-body-secondary mb-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 mt-3">
            <span className="pill">{about.location}</span>
            <span className="pill">Remote-friendly</span>
            <span className="pill">MERN</span>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <motion.div
            className="p-4 rounded-4 glass"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="mb-0">What I focus on</h6>
              <span className="badge text-bg-primary">Full Stack</span>
            </div>
            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
              {highlightSkills?.map((skill) => (
                <li key={skill} className="pill small text-body-secondary">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-3 p-3 rounded-3 bg-diagonal-gradient">
              <p className="text-body-secondary mb-0">
                From discovery to delivery, I keep teams aligned with crisp documentation, fast feedback
                loops, and reliable release pipelines.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
