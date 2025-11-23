import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Education from '../components/Education'
import ContactSection from '../components/ContactSection'
import { skills } from '../data/content'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection highlightSkills={[...skills[0].items, ...skills[1].items, ...skills[2].items, ...skills[3].items, ...skills[4].items]} />
      <Skills compact />
      <Projects limit={4} />
      <Experience />
      <Education />
      <ContactSection simple />
    </>
  )
}

export default Home
