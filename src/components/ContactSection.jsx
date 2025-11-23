import { motion } from 'framer-motion'
import { contact } from '../data/content'

function ContactSection({ simple }) {
  return (
    <section className="py-5" id="contact">
      <div className="container row g-4 mx-auto">
        <div className="col-12 col-lg-5">
          <p className="section-title mb-1">Contact</p>
          <h3 className="fw-bold mb-3">Let us build something new</h3>
          <p className="text-body-secondary">
            Send a note about your product idea, roadmap, or open role. I respond within one business day.
          </p>
          <div className="d-flex flex-column gap-2">
            <div className="pill d-inline-flex align-items-center gap-2 w-auto">
              <span className="fw-semibold">Email</span>
              <a href={`mailto:${contact.email}`} className="text-body-secondary">
                {contact.email}
              </a>
            </div>
            <div className="pill d-inline-flex align-items-center gap-2 w-auto">
              <span className="fw-semibold">Phone</span>
              <a href={`tel:${contact.phone}`} className="text-body-secondary">
                {contact.phone}
              </a>
            </div>
            <div className="pill d-inline-flex align-items-center gap-2 w-auto">
              <span className="fw-semibold">Location</span>
              <span className="text-body-secondary">{contact.location}</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <motion.form
            className="p-4 rounded-4 glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control" placeholder="Your name" required />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Message</label>
                <textarea className="form-control" rows="4" placeholder="Tell me about the project" required></textarea>
              </div>
              {!simple && (
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="updates" />
                    <label className="form-check-label" htmlFor="updates">
                      Keep me posted on new projects and launches
                    </label>
                  </div>
                </div>
              )}
              <div className="col-12 d-flex justify-content-between align-items-center">
                <span className="text-body-secondary small">No spam. Just a friendly reply.</span>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
