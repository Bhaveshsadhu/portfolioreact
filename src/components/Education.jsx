import { education } from '../data/content'
import { motion } from 'framer-motion'

function Education() {
  return (
    <section className="py-5" id="education">
      <div className="container">
        <p className="section-title mb-1">Education</p>
        <h3 className="fw-bold mb-4">Learning journey</h3>
        <div className="row g-3">
          {education.map((item, idx) => (
            <div key={item.degree} className="col-12 col-lg-4">
              <motion.div
                className="p-4 rounded-4 glass h-100"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <h6 className="fw-semibold mb-1">{item.degree}</h6>
                <p className="text-body-secondary mb-0">{item.school}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
