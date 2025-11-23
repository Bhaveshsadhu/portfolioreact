import AboutSection from '../components/AboutSection'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import PageIntro from '../components/PageIntro'

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Full Stack Developer crafting resilient products"
        kicker="From rapid prototyping to production rollouts, I bring a balanced focus on DX, UX, and delivery."
      />
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
    </>
  )
}

export default AboutPage
