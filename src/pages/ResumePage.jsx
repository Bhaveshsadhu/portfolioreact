import PageIntro from '../components/PageIntro'
import { hero, skills } from '../data/content'

function ResumePage() {
  return (
    <>
      <PageIntro
        eyebrow="Resume"
        title="Download my resume"
        kicker="Quick snapshot of my experience, projects, and the impact I bring to product teams."
        actions={
          <a className="btn btn-primary btn-lg" href={hero.resume} download>
            Download PDF
          </a>
        }
      />
      <section className="py-5">
        <div className="container row g-4">
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 glass h-100">
              <h5 className="fw-bold mb-3">Highlights</h5>
              <ul className="text-body-secondary mb-0">
                <li>Full Stack MERN builds with robust auth, clean APIs, and scalable data models.</li>
                <li>UI engineering with accessibility, responsiveness, and design systems in mind.</li>
                <li>DevOps practices: CI/CD, Docker, GitHub Actions, and AWS deployment basics.</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 glass h-100">
              <h5 className="fw-bold mb-3">Core tools I use</h5>
              <div className="d-flex flex-wrap gap-2">
                {skills
                  .flatMap((category) => category.items)
                  .slice(0, 15)
                  .map((item) => (
                    <span key={item} className="pill small text-body-secondary">
                      {item}
                    </span>
                  ))}
              </div>
              <div className="mt-3">
                <a className="btn btn-outline" href={`mailto:${hero.email}`}>
                  Request a tailored resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResumePage
