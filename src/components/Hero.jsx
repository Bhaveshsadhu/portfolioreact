import { motion } from 'framer-motion'
import { FaArrowDownLong, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { hero, mypic } from '../data/content'

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

function Hero() {
  return (
    <section className="py-5" id="hero">
      <div className="container row align-items-center mx-auto g-4">
        <div className="col-12 col-lg-7">
          <div className="pill mb-3 d-inline-flex align-items-center gap-2">
            <span className="badge text-bg-info text-dark">Available for work</span>
            <span className="text-body-secondary small">Anywhere in Australia</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="display-4 fw-bold lh-1 mb-3"
            style={{ fontFamily: 'Space Grotesk, Manrope, sans-serif' }}
          >
            {hero.name}
          </motion.h1>
          <motion.h2
            className="h4 text-primary mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {hero.role}
          </motion.h2>
          <motion.p
            className="lead text-body-secondary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {hero.subtitle}
          </motion.p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <motion.a
              variants={badgeVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="btn btn-primary btn-lg shadow-soft"
              href={hero.resume}
              download
            >
              Download Resume
            </motion.a>
            <motion.a
              variants={badgeVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.35 }}
              className="btn btn-outline btn-lg"
              href={`mailto:${hero.email}`}
            >
              Contact Me
            </motion.a>
          </div>
          <div className="d-flex align-items-center gap-3 mt-4">
            <a className="pill d-inline-flex align-items-center gap-2" href="#projects">
              <FaArrowDownLong /> View projects
            </a>
            <div className="d-flex gap-3 fs-4 text-body-secondary">
              <a href="https://github.com/Bhaveshsadhu" target="_blank" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/bhaveshsadhu/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              {/* <a href="https://youtube.com/" aria-label="YouTube">
                <FaYoutube />
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <motion.div
            className="p-4 rounded-4 glass h-100"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={mypic} alt="Portrait of Bhavesh Sadhu" className="rounded-4 shadow-soft w-100 object-fit-cover" />
            <div className="mt-4">
              <h5 className="mb-2">Building outcomes, not just features</h5>
              <p className="text-body-secondary mb-0">
                I partner with teams to design, build, and ship resilient products—from performant
                frontend flows to reliable APIs and DevOps hygiene.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
