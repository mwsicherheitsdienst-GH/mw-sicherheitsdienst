import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import './App.css'
import logo from './assets/mws-logo.jpeg'

// TODO: Replace every placeholder value below with the real company details
// before this site goes live (legally required for the Impressum / §5 TMG).
const COMPANY = {
  name: 'MW Sicherheitsdienst',
  legalName: 'MW Sicherheitsdienst GmbH', // TODO: exact legal (registered) name
  claim: 'Sicherheit, auf die Sie sich verlassen können.',
  phoneDisplay: '+49 30 1234 5678', // TODO
  phoneHref: 'tel:+493012345678', // TODO
  whatsappDisplay: '+49 151 1234 5678', // TODO
  whatsappHref: 'https://wa.me/4915112345678', // TODO: international format, no leading +/00
  email: 'info@mw-sicherheitsdienst.de', // TODO
  street: 'Musterstraße 1', // TODO
  zipCity: '10115 Berlin', // TODO
  geschaeftsfuehrer: 'Max Mustermann', // TODO
  registergericht: 'Amtsgericht Berlin (Charlottenburg)', // TODO
  registernummer: 'HRB 000000', // TODO
  ustId: 'DE 000000000', // TODO
  aufsichtsbehoerde: '[zuständiges Ordnungsamt / Gewerbeamt einsetzen]', // TODO, relevant for §34a GewO
}

const NAV_LINKS = [
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#warum-wir', label: 'Warum wir' },
  { href: '#kontakt', label: 'Kontakt' },
  { href: '#impressum', label: 'Impressum' },
]

const SERVICES = [
  {
    title: 'Objektschutz',
    text: 'Zuverlässige Sicherung von Gebäuden, Gelände und Anlagen vor unbefugtem Zutritt.',
  },
  {
    title: 'Empfangs- & Pfortendienst',
    text: 'Professioneller erster Eindruck für Ihre Besucher, Mitarbeiter und Kunden.',
  },
  {
    title: 'Veranstaltungsschutz',
    text: 'Individuelle Sicherheitskonzepte und geschultes Personal für Events jeder Größe.',
  },
  {
    title: 'Revier- & Streifendienst',
    text: 'Regelmäßige Kontrollgänge zur Prävention und schnelle Reaktion im Ernstfall.',
  },
  {
    title: 'Werkschutz',
    text: 'Umfassende Absicherung von Industrie- und Gewerbeobjekten im Schichtbetrieb.',
  },
  {
    title: 'Personenschutz',
    text: 'Diskreter, professioneller Schutz für Einzelpersonen und Delegationen.',
  },
]

const TRUST_POINTS = [
  'Zertifiziert nach §34a GewO',
  'Geschultes & zuverlässiges Personal',
  '24/7 erreichbar',
  'Individuelle Sicherheitskonzepte',
]

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m8.5 12 2.4 2.4L15.5 9.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8.5 8.6c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.4.6 1.4.6 1.5.1.1.1.3 0 .4-.1.2-.1.3-.3.4-.1.2-.3.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1 .2-.3.4-.2.6-.1l1.6.8c.2.1.4.2.4.3.1.2.1.9-.2 1.4-.3.6-1.5 1.2-2.1 1.2-.6.1-1.2.2-3.8-.8-3.2-1.3-5.2-4.5-5.4-4.7-.1-.2-1.2-1.6-1.2-3.1 0-1.4.8-2.1 1-2.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3h3l1.5 4.5L8.5 9c.6 2 2 3.4 4 4l1.5-2L18 12.5V16c0 1.1-.9 2-2 2h-.5C9.5 18 5 13.5 5 8.5V8c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="m6.5 10 2.3 2.3L14 7.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(field: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  // NOTE: no backend is wired up yet. Submitting opens the visitor's email
  // client with the message pre-filled. Replace with a real form endpoint
  // (e.g. your own API, Formspree, Netlify Forms) before launch.
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const body = `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      'Kontaktanfrage über die Website',
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Name*</span>
          <input type="text" required value={form.name} onChange={handleChange('name')} autoComplete="name" />
        </label>
        <label className="field">
          <span>E-Mail*</span>
          <input type="email" required value={form.email} onChange={handleChange('email')} autoComplete="email" />
        </label>
      </div>
      <label className="field">
        <span>Telefon</span>
        <input type="tel" value={form.phone} onChange={handleChange('phone')} autoComplete="tel" />
      </label>
      <label className="field">
        <span>Nachricht*</span>
        <textarea required rows={5} value={form.message} onChange={handleChange('message')} />
      </label>
      <button type="submit" className="btn btn-primary">
        Nachricht senden
      </button>
      {sent && <p className="form-note">Ihr E-Mail-Programm wird geöffnet, um die Nachricht zu versenden.</p>}
    </form>
  )
}

function App() {
  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />

      <header className="site-header">
        <div className="container header-row">
          <a href="#home" className="brand">
            <img src={logo} alt={COMPANY.name} className="brand-logo" />
            {COMPANY.name}
          </a>

          <label htmlFor="nav-toggle" className="nav-toggle-btn" aria-label="Menü öffnen">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className="site-nav">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
            <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-small btn-primary">
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Sicherheitsdienstleistungen in Deutschland</p>
            <h1>{COMPANY.claim}</h1>
            <p className="hero-text">
              {COMPANY.legalName} schützt Objekte, Veranstaltungen und Menschen mit geschultem
              Sicherheitspersonal – zuverlässig, diskret und rund um die Uhr einsatzbereit.
            </p>
            <div className="cta-row">
              <a href={`mailto:${COMPANY.email}`} className="btn btn-primary">
                <MailIcon />
                Per E-Mail kontaktieren
              </a>
              <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <WhatsappIcon />
                Per WhatsApp schreiben
              </a>
            </div>
            <ul className="trust-strip">
              {TRUST_POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="leistungen" className="services">
          <div className="container">
            <h2>Unsere Leistungen</h2>
            <p className="section-lead">Maßgeschneiderte Sicherheitslösungen für Unternehmen, Veranstalter und Privatpersonen.</p>
            <div className="service-grid">
              {SERVICES.map((service) => (
                <div className="service-card" key={service.title}>
                  <ShieldIcon className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="warum-wir" className="why">
          <div className="container why-inner">
            <div>
              <h2>Warum {COMPANY.name}?</h2>
              <p className="section-lead">
                Wir kombinieren geschultes Personal mit klaren Abläufen und persönlicher
                Erreichbarkeit – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
            </div>
            <ul className="why-list">
              {TRUST_POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kontakt" className="contact">
          <div className="container contact-inner">
            <div>
              <h2>Kontakt aufnehmen</h2>
              <p className="section-lead">
                Schreiben Sie uns Ihr Anliegen oder kontaktieren Sie uns direkt – wir melden uns
                zeitnah zurück.
              </p>

              <div className="contact-cards">
                <a href={`mailto:${COMPANY.email}`} className="contact-card">
                  <MailIcon />
                  <div>
                    <strong>E-Mail</strong>
                    <span>{COMPANY.email}</span>
                  </div>
                </a>
                <a href={COMPANY.whatsappHref} target="_blank" rel="noreferrer" className="contact-card">
                  <WhatsappIcon />
                  <div>
                    <strong>WhatsApp</strong>
                    <span>{COMPANY.whatsappDisplay}</span>
                  </div>
                </a>
                <a href={COMPANY.phoneHref} className="contact-card">
                  <PhoneIcon />
                  <div>
                    <strong>Telefon</strong>
                    <span>{COMPANY.phoneDisplay}</span>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer id="impressum" className="site-footer">
        <div className="container footer-inner">
          <div className="footer-col">
            <h2>Impressum</h2>
            <p>
              {COMPANY.legalName}
              <br />
              {COMPANY.street}
              <br />
              {COMPANY.zipCity}
              <br />
              Deutschland
            </p>
            <p>
              Vertreten durch: {COMPANY.geschaeftsfuehrer}
              <br />
              Telefon: {COMPANY.phoneDisplay}
              <br />
              E-Mail: {COMPANY.email}
            </p>
          </div>
          <div className="footer-col">
            <p>
              Registergericht: {COMPANY.registergericht}
              <br />
              Registernummer: {COMPANY.registernummer}
              <br />
              USt-IdNr.: {COMPANY.ustId}
            </p>
            <p>
              Erlaubnis nach §34a GewO, zuständige Behörde: {COMPANY.aufsichtsbehoerde}
            </p>
            <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: {COMPANY.geschaeftsfuehrer}</p>
          </div>
          <div className="footer-col footer-meta">
            <p>
              <a href="#datenschutz">Datenschutzerklärung</a> — folgt in Kürze.
            </p>
            <p>&copy; {new Date().getFullYear()} {COMPANY.legalName}. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
