import { motion } from 'framer-motion'
import { skills } from '../data/content'

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
}

function Skills({ compact = false }) {
  const data = compact ? skills.slice(0, 3) : skills

  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <p className="section-title mb-1">Skills</p>
            <h3 className="fw-bold">Stacks that help me deliver</h3>
          </div>
        </div>
        <div className="row g-4">
          {data.map((skill, idx) => (
            <div key={skill.title} className="col-12 col-md-6 col-lg-4">
              <motion.div
                className="p-4 rounded-4 glass h-100"
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="mb-0">{skill.title}</h5>
                  <span className="badge text-bg-primary">{skill.items.length}+</span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="pill small text-body-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
