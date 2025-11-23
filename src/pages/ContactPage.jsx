import ContactSection from '../components/ContactSection'
import PageIntro from '../components/PageIntro'
import { contact } from '../data/content'

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let us collaborate"
        kicker="Email or phone works great. I respond quickly and keep communication transparent."
        actions={
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              Email me
            </a>
            <a className="btn btn-outline" href={`tel:${contact.phone}`}>
              Call {contact.phone}
            </a>
          </div>
        }
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
