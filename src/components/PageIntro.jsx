import { motion } from 'framer-motion'

function PageIntro({ eyebrow, title, kicker, actions }) {
  return (
    <section className="py-5">
      <div className="container">
        <motion.p
          className="section-title mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {eyebrow}
        </motion.p>
        <motion.div
          className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h2 className="fw-bold mb-2">{title}</h2>
            {kicker && <p className="text-body-secondary mb-0">{kicker}</p>}
          </div>
          {actions}
        </motion.div>
      </div>
    </section>
  )
}

export default PageIntro
