import Projects from '../components/Projects'
import PageIntro from '../components/PageIntro'

function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Full portfolio of shipped builds"
        kicker="Case studies across CRUD-heavy dashboards, auth-enabled social experiences, and SaaS tooling."
      />
      <Projects />
    </>
  )
}

export default ProjectsPage
