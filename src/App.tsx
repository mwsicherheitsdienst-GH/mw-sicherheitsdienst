import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
  type SubmitEvent,
} from "react";
import "./App.css";
import logo from "./assets/mws-logo.jpeg";
import cassel from "./assets/cassel.jpg";
import vienna from "./assets/vienna.jpg";
import worker from "./assets/worker.jpg";
import {
  SECTIONS,
  SERVICES,
  type Block,
  type Section,
  type Service,
} from "./content";

// TODO: Replace every placeholder value below with the real company details
// before this site goes live (legally required for the Impressum / §5 TMG).
const COMPANY = {
  name: "MWS Sicherheitskonzepte & Sicherheitsdienst",
  legalName: "MWS Sicherheitskonzepte & Sicherheitsdienst GmbH", // TODO: exact legal (registered) name incl. Rechtsform
  claim: "Sicherheit mit Verantwortung. Prävention mit Konzept.",
  phoneDisplay: "+49 561 43083015",
  phoneHref: "tel:+4956143083015",
  email: "mwsicherheitsdienst@gmail.com", // TODO
  street: "Leipziger Straße 242",
  zipCity: "34123 Kassel",
  geschaeftsfuehrer: "Max Mustermann", // TODO
  registergericht: "Amtsgericht Kassel", // TODO: confirm once HRB-Nummer vorliegt
  registernummer: "HRB 000000", // TODO
  ustId: "DE 000000000", // TODO
  aufsichtsbehoerde: "[zuständiges Ordnungsamt Kassel einsetzen]", // TODO, relevant for §34a GewO
};

const NAV_LINKS = [
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#mitarbeiter", label: "Mitarbeiter" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "#impressum", label: "Impressum" },
];

const LEISTUNGEN_LIST = [
  "Objektschutz",
  "Ladensicherheit",
  "Doorman",
  "Veranstaltungssicherheit",
  "Zugbegleitung",
  "Flüchtlings- & Gemeinschaftsunterkünfte",
  "Senioren- & Pflegeeinrichtungen",
  "Prävention",
  "Videoüberwachung",
  "Sicherheitstechnik",
];

// Background of the whole main-content flow (einsatzgebiet → leistungen →
// philosophie → konzept → mitarbeiter → kontakt), alternating strictly so
// neighbouring sections always differ. Each section fades in from the
// colour of the section above it.
const FLOW_BG = [
  "var(--bg-alt)",
  "var(--bg)",
  "var(--bg-alt)",
  "var(--bg)",
  "var(--bg-alt)",
  "var(--bg)",
];
const HERO_BG = "var(--black-950)";
const FOOTER_BG = "var(--black-950)";
const FADE_HEIGHT = "16px";

function fadeFrom(prevToken: string, index: number) {
  return {
    background: `linear-gradient(to bottom, ${prevToken}, ${FLOW_BG[index]} ${FADE_HEIGHT})`,
  };
}

// Renders **bold** markers from the source texts as <strong>.
function renderInline(text: string): ReactNode {
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p") {
          return (
            <p key={i} className="block-p">
              {renderInline(block.text)}
            </p>
          );
        }
        if (block.type === "tagline") {
          return (
            <p key={i} className="block-tagline">
              {renderInline(block.text)}
            </p>
          );
        }
        if (block.type === "heading") {
          return (
            <h4 key={i} className="block-heading">
              {renderInline(block.text)}
            </h4>
          );
        }
        return (
          <ul key={i} className="block-list">
            {block.items.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </>
  );
}

function SectionBlock({
  section,
  index,
  prevBg,
  align,
}: {
  section: Section;
  index: number;
  prevBg: string;
  align: "left" | "right";
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id={section.id} className="content-section" style={fadeFrom(prevBg, index)}>
      <div className="container">
        <div
          ref={ref}
          className={`content-inner reveal reveal--back${visible ? " reveal--visible" : ""}${align === "right" ? " content-inner--right" : ""}`}
        >
          <h2>{section.title}</h2>
          {section.subtitle && <p className="section-lead">{section.subtitle}</p>}
          <div className="prose">
            <ContentBlocks blocks={section.blocks} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Reveals an element once, the first time it scrolls into view.
function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function PhilosophieSection({
  section,
  index,
  prevBg,
}: {
  section: Section;
  index: number;
  prevBg: string;
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();
  const listBlock = section.blocks.find((b) => b.type === "list");
  const taglineBlock = section.blocks.find((b) => b.type === "tagline");

  return (
    <section id={section.id} className="content-section" style={fadeFrom(prevBg, index)}>
      <div className="container">
        <div
          ref={ref}
          className={`philosophie-row reveal reveal--left${visible ? " reveal--visible" : ""}`}
        >
          <div className="philosophie-title">
            <h2>{section.title}</h2>
            {section.subtitle && <p className="section-lead">{section.subtitle}</p>}
          </div>
          <div className="philosophie-content">
            {listBlock && listBlock.type === "list" && (
              <ul className="block-list">
                {listBlock.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            )}
            {taglineBlock && taglineBlock.type === "tagline" && (
              <p className="block-tagline">{renderInline(taglineBlock.text)}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function KonzeptSection({
  section,
  index,
  prevBg,
}: {
  section: Section;
  index: number;
  prevBg: string;
}) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id={section.id} className="content-section" style={fadeFrom(prevBg, index)}>
      <div className="container">
        <div
          ref={ref}
          className={`konzept-row reveal reveal--right${visible ? " reveal--visible" : ""}`}
        >
          <div className="konzept-title">
            <h2>{section.title}</h2>
            {section.subtitle && <p className="section-lead">{section.subtitle}</p>}
          </div>
          <div className="konzept-content">
            <div className="prose">
              <ContentBlocks blocks={section.blocks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MitarbeiterSection({
  section,
  index,
  prevBg,
}: {
  section: Section;
  index: number;
  prevBg: string;
}) {
  const { ref: imageRef, visible: imageVisible } = useRevealOnScroll<HTMLDivElement>();
  const { ref: textRef, visible: textVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id={section.id} className="content-section" style={fadeFrom(prevBg, index)}>
      <div className="container mitarbeiter-row">
        <div
          ref={imageRef}
          className={`mitarbeiter-image reveal reveal--left${imageVisible ? " reveal--visible" : ""}`}
        >
          <img src={worker} alt="MWS Sicherheitsmitarbeiter im Einsatz" />
        </div>
        <div
          ref={textRef}
          className={`content-inner reveal reveal--right${textVisible ? " reveal--visible" : ""}`}
        >
          <h2>{section.title}</h2>
          {section.subtitle && <p className="section-lead">{section.subtitle}</p>}
          <div className="prose">
            <ContentBlocks blocks={section.blocks} />
          </div>
        </div>
      </div>
    </section>
  );
}

const EINSATZGEBIET_IMAGES = [
  { src: cassel, alt: "Kassel, Hauptstandort von MWS" },
  { src: vienna, alt: "Wien" },
];

function EinsatzgebietSection({
  section,
  index,
  prevBg,
}: {
  section: Section;
  index: number;
  prevBg: string;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const { ref: textRef, visible: textVisible } = useRevealOnScroll<HTMLDivElement>();
  const { ref: collageRef, visible: collageVisible } = useRevealOnScroll<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImage((i) => (i + 1) % EINSATZGEBIET_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id={section.id}
      className="content-section einsatzgebiet"
      style={fadeFrom(prevBg, index)}
    >
      <div className="einsatzgebiet-bg" aria-hidden="true">
        {EINSATZGEBIET_IMAGES.map((image, i) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            className="einsatzgebiet-bg-image"
            style={{ opacity: i === activeImage ? 1 : 0 }}
          />
        ))}
        <div className="einsatzgebiet-bg-overlay" />
      </div>
      <div className="container einsatzgebiet-row">
        <div
          ref={textRef}
          className={`content-inner reveal reveal--back${textVisible ? " reveal--visible" : ""}`}
        >
          <h2>{section.title}</h2>
          {section.subtitle && <p className="section-lead">{section.subtitle}</p>}
          <div className="prose">
            <ContentBlocks blocks={section.blocks} />
          </div>
        </div>
        <div
          ref={collageRef}
          className={`einsatzgebiet-collage reveal reveal--right${collageVisible ? " reveal--visible" : ""}`}
        >
          <img
            src={cassel}
            alt="Kassel, Hauptstandort von MWS"
            className="einsatzgebiet-collage-image einsatzgebiet-collage-cassel"
          />
          <img
            src={vienna}
            alt="Wien"
            className="einsatzgebiet-collage-image einsatzgebiet-collage-vienna"
          />
        </div>
      </div>
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="m6.5 10 2.3 2.3L14 7.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${service.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Schließen"
        >
          <CloseIcon />
        </button>
        <ShieldIcon className="modal-icon" />
        <h3 id={`modal-title-${service.id}`}>{service.title}</h3>
        <div className="prose">
          <ContentBlocks blocks={service.blocks} />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(field: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  // NOTE: no backend is wired up yet. Submitting opens the visitor's email
  // client with the message pre-filled. Replace with a real form endpoint
  // (e.g. your own API, Formspree, Netlify Forms) before launch.
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\n${form.message}`;
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      "Kontaktanfrage über die Website",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Name*</span>
          <input
            type="text"
            required
            value={form.name}
            onChange={handleChange("name")}
            autoComplete="name"
          />
        </label>
        <label className="field">
          <span>E-Mail*</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={handleChange("email")}
            autoComplete="email"
          />
        </label>
      </div>
      <label className="field">
        <span>Telefon</span>
        <input
          type="tel"
          value={form.phone}
          onChange={handleChange("phone")}
          autoComplete="tel"
        />
      </label>
      <label className="field">
        <span>Nachricht*</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={handleChange("message")}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Nachricht senden
      </button>
      {sent && (
        <p className="form-note">
          Ihr E-Mail-Programm wird geöffnet, um die Nachricht zu versenden.
        </p>
      )}
    </form>
  );
}

function App() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const openService = SERVICES.find((s) => s.id === openServiceId) ?? null;
  const { ref: leistungenRef, visible: leistungenVisible } =
    useRevealOnScroll<HTMLDivElement>();
  const { ref: kontaktRef, visible: kontaktVisible } =
    useRevealOnScroll<HTMLDivElement>();

  return (
    <>
      <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />

      <header className="site-header">
        <div className="header-row">
          <a href="#home" className="brand">
            {COMPANY.name}
          </a>

          <label
            htmlFor="nav-toggle"
            className="nav-toggle-btn"
            aria-label="Menü öffnen"
          >
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
            <a href={COMPANY.phoneHref} className="btn btn-small btn-primary">
              Anrufen
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-row">
            <img src={logo} alt={COMPANY.name} className="hero-logo" />
            <div className="hero-inner">
              <p className="eyebrow">
                Sicherheitskonzepte & Sicherheitsdienst aus Kassel
              </p>
              <h1>{COMPANY.claim}</h1>
              <div className="hero-text">
                <p>
                  {renderInline(
                    "MWS Sicherheitskonzepte & Sicherheitsdienst mit Hauptstandort in **Kassel** steht für professionelle, diskrete und vorausschauende Sicherheitslösungen.",
                  )}
                </p>
                <p>
                  Unser Anspruch besteht nicht nur darin, an einem Einsatzort
                  präsent zu sein. Wir möchten Gefahren frühzeitig erkennen,
                  Risiken reduzieren und gemeinsam mit unseren Auftraggebern
                  Sicherheitskonzepte entwickeln, die zum jeweiligen Objekt und
                  Einsatz passen.
                </p>
                <p>
                  {renderInline(
                    "Dabei verbinden wir **qualifizierte Sicherheitsmitarbeiter, moderne Sicherheitstechnik und individuelle Sicherheitskonzepte**.",
                  )}
                </p>
              </div>
              <p className="hero-tagline">
                MWS – Mensch. Technik. Verantwortung.
              </p>
              <div className="cta-row">
                <a href={`mailto:${COMPANY.email}`} className="btn btn-primary">
                  <MailIcon />
                  Per E-Mail kontaktieren
                </a>
                <a href={COMPANY.phoneHref} className="btn btn-ghost">
                  <PhoneIcon />
                  Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </section>

        <EinsatzgebietSection section={SECTIONS[0]} index={0} prevBg={HERO_BG} />

        <section id="leistungen" className="services" style={fadeFrom(FLOW_BG[0], 1)}>
          <div
            ref={leistungenRef}
            className={`container reveal reveal--back${leistungenVisible ? " reveal--visible" : ""}`}
          >
            <h2>Unsere Leistungen</h2>
            <p className="section-lead">
              Maßgeschneiderte Sicherheitslösungen für Unternehmen,
              Einrichtungen und öffentliche Räume. Auf eine Leistung klicken für
              Details.
            </p>
            <div className="service-grid">
              {SERVICES.map((service) => (
                <button
                  type="button"
                  className="service-card"
                  key={service.id}
                  onClick={() => setOpenServiceId(service.id)}
                >
                  <ShieldIcon className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="service-more">Mehr erfahren →</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {SECTIONS.slice(1).map((section, i) =>
          section.id === "philosophie" ? (
            <PhilosophieSection
              key={section.id}
              section={section}
              index={i + 2}
              prevBg={FLOW_BG[i + 1]}
            />
          ) : section.id === "konzept" ? (
            <KonzeptSection
              key={section.id}
              section={section}
              index={i + 2}
              prevBg={FLOW_BG[i + 1]}
            />
          ) : section.id === "mitarbeiter" ? (
            <MitarbeiterSection
              key={section.id}
              section={section}
              index={i + 2}
              prevBg={FLOW_BG[i + 1]}
            />
          ) : (
            <SectionBlock
              key={section.id}
              section={section}
              index={i + 2}
              prevBg={FLOW_BG[i + 1]}
              align={(i + 1) % 2 === 0 ? "left" : "right"}
            />
          ),
        )}

        <section id="kontakt" className="contact" style={fadeFrom(FLOW_BG[4], 5)}>
          <div
            ref={kontaktRef}
            className={`container contact-inner reveal reveal--back${kontaktVisible ? " reveal--visible" : ""}`}
          >
            <div>
              <h2>Kontakt aufnehmen</h2>
              <p className="section-lead">
                Schreiben Sie uns Ihr Anliegen oder kontaktieren Sie uns direkt
                – wir melden uns zeitnah zurück.
              </p>

              <div className="contact-cards">
                <a href={`mailto:${COMPANY.email}`} className="contact-card">
                  <MailIcon />
                  <div>
                    <strong>E-Mail</strong>
                    <span>{COMPANY.email}</span>
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

      <footer
        id="impressum"
        className="site-footer"
        style={{
          background: `linear-gradient(to bottom, ${FLOW_BG[5]}, ${FOOTER_BG} ${FADE_HEIGHT})`,
        }}
      >
        <div className="container footer-top">
          <p className="footer-brand">{COMPANY.name}</p>
          <p className="footer-motto">Mensch. Technik. Verantwortung.</p>
          <p className="footer-services">{LEISTUNGEN_LIST.join(" · ")}</p>
        </div>

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
              Erlaubnis nach §34a GewO, zuständige Behörde:{" "}
              {COMPANY.aufsichtsbehoerde}
            </p>
            <p>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:{" "}
              {COMPANY.geschaeftsfuehrer}
            </p>
          </div>
          <div className="footer-col footer-meta">
            <p>
              <a href="#datenschutz">Datenschutzerklärung</a> — folgt in Kürze.
            </p>
            <p>
              &copy; {new Date().getFullYear()} {COMPANY.legalName}. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>

        <div className="container">
          <p className="footer-closing">
            Sicherheit mit Verantwortung – aus Kassel, flexibel im Einsatz.
          </p>
        </div>
      </footer>

      {openService && (
        <ServiceModal
          service={openService}
          onClose={() => setOpenServiceId(null)}
        />
      )}
    </>
  );
}

export default App;
