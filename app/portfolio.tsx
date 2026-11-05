"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  X,
} from "lucide-react";
import {
  FormEvent,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  achievements,
  events,
  milestones,
  portfolio,
  projects,
  roles,
} from "./content";

const nav = ["About", "Stack", "Projects", "Experience", "Contact"];
const techItems = [
  { name: "Python", group: "Languages", glyph: "Py", color: "#4e90ca" },
  { name: "Java", group: "Languages", glyph: "J", color: "#d86645" },
  { name: "C++", group: "Languages", glyph: "C+", color: "#5d8cf7" },
  { name: "JavaScript", group: "Languages", glyph: "JS", color: "#f1d94e" },
  { name: "HTML", group: "Languages", glyph: "</>", color: "#ea5b3e" },
  { name: "SQLite", group: "Data", glyph: "SQL", color: "#45a6c7" },
  { name: "FastAPI", group: "Frameworks", glyph: "F", color: "#21b98e" },
  { name: "React", group: "Frameworks", glyph: "◌", color: "#61dafb" },
  { name: "Vite", group: "Frameworks", glyph: "V", color: "#a78bfa" },
  { name: "customtkinter", group: "Frameworks", glyph: "Tk", color: "#60a5fa" },
  { name: "docxtpl", group: "Frameworks", glyph: "DOC", color: "#65b1eb" },
  { name: "Microsoft Excel", group: "Tools", glyph: "X", color: "#33b66a" },
  { name: "Microsoft Office", group: "Tools", glyph: "O", color: "#f06d43" },
  { name: "Google Workspace", group: "Tools", glyph: "G", color: "#68a5ed" },
] as const;
function AssetPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`asset-placeholder ${className}`}>
      <span className="asset-cross" />
      <span className="asset-label">{label}</span>
    </div>
  );
}
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
function MagneticLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [style, setStyle] = useState({ x: 0, y: 0 });
  function move(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setStyle({
      x: (e.clientX - rect.left - rect.width / 2) * 0.13,
      y: (e.clientY - rect.top - rect.height / 2) * 0.13,
    });
  }
  return (
    <motion.a
      href={href}
      className={className}
      animate={style}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      onMouseMove={move}
      onMouseLeave={() => setStyle({ x: 0, y: 0 })}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [experience, setExperience] = useState<"roles" | "events">("roles");
  const [techFilter, setTechFilter] = useState("All");
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: globalThis.MouseEvent) =>
      setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);
  const subtitle = useMemo(
    () => [
      "IT Management & Computer Science Student",
      "Developer",
      "Technology Enthusiast",
      "Problem Solver",
      "Aspiring Technology Professional",
    ],
    [],
  );
  return (
    <main>
      {!reduce && (
        <>
          <span
            className="cursor-dot"
            style={{ left: cursor.x, top: cursor.y }}
          />
          <span
            className="cursor-aura"
            style={{ left: cursor.x, top: cursor.y }}
          />
        </>
      )}
      <div className="site-noise" aria-hidden="true" />
      <header className="nav-wrap">
        <a href="#home" className="monogram" aria-label="Back to home">
          SK.
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="availability" href="#contact">
          <span /> Open to connect
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              {nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <section id="home" className="hero section-shell">
        <div className="hero-constellation" aria-hidden="true" />
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-availability"><span /> Open to opportunities</p>
          <h1>Sang Sokewin<span className="typing-caret">|</span></h1>
          <div className="role-window">
            <motion.div
              className="role-marquee"
              animate={
                reduce
                  ? undefined
                  : { y: ["0%", "-20%", "-40%", "-60%", "-80%"] }
              }
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              {subtitle.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.div>
          </div>
          <p className="hero-description">I&apos;m an IT Management and Computer Science student passionate about software, technology, and creating useful systems with care.</p>
          <div className="hero-actions">
            <MagneticLink href="#projects" className="button button-primary">
              Explore my work <ArrowDownRight size={17} />
            </MagneticLink>
            <MagneticLink href="#contact" className="button button-secondary">
              Contact me <MoveRight size={17} />
            </MagneticLink>
          </div>
          <div className="social-row">
            <a href="mailto:sokewinsang@gmail.com">
              <Mail size={17} /> Email
            </a>
            <span>GitHub coming soon</span>
            <span>LinkedIn coming soon</span>
          </div>
        </motion.div>
        <a href="#about" className="scroll-cue">
          Scroll to explore <ChevronRight size={16} />
        </a>
      </section>
      <section id="about" className="section-shell about">
        <Reveal className="section-heading">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>
            Grounded in <em>curiosity.</em>
            <br />
            Built for impact.
          </h2>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-photo">
            <AssetPlaceholder label="Your profile photo belongs here" />
            <div className="photo-chip">
              <MapPin size={15} /> Phnom Penh, Cambodia
            </div>
          </Reveal>
          <Reveal className="about-copy" delay={0.12}>
            <p className="lead">
              I&apos;m Sokewin, a student at the American University of Phnom
              Penh pursuing a dual degree in IT Management and Computer Science
              with Fort Hays State University.
            </p>
            <p>
              I enjoy the space where software, systems thinking, and people
              meet: translating ideas into useful tools, coordinating work with
              care, and learning through ambitious projects. My academic work
              spans full-stack development, cloud foundations, and intelligent
              robotics.
            </p>
            <div className="stat-grid">
              <div>
                <strong>3.79</strong>
                <span>GPA / 4.00</span>
              </div>
              <div>
                <strong>2028</strong>
                <span>Expected graduation</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Real-world software projects</span>
              </div>
            </div>
            <a className="text-link" href={portfolio.cvLink}>
              <Download size={16} /> Request my CV <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>
        <div className="milestone-grid">
          {milestones.map((item, index) => (
            <Reveal className="milestone" key={item.title} delay={index * 0.07}>
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <span>{item.text}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="stack" className="section-shell stack-section">
        <Reveal className="section-heading stack-heading">
          <p className="eyebrow">TECH STACK</p>
          <h2>Technologies I work with.</h2>
          <p>Tools and languages I use to bring ideas into working software.</p>
        </Reveal>
        <div className="tech-filters" role="tablist" aria-label="Technology category">
          {["All", "Languages", "Frameworks", "Data", "Tools"].map((filter) => (
            <button
              key={filter}
              className={techFilter === filter ? "active" : ""}
              onClick={() => setTechFilter(filter)}
              role="tab"
              aria-selected={techFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="tech-card-grid">
          {techItems
            .filter((item) => techFilter === "All" || item.group === techFilter)
            .map((item, index) => (
              <motion.article
                className="tech-card"
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.025 }}
              >
                <span className="tech-glyph" style={{ color: item.color }}>{item.glyph}</span>
                <p>{item.name}</p>
              </motion.article>
            ))}
        </div>
      </section>
      <section id="projects" className="section-shell projects-section">
        <Reveal className="section-heading projects-heading">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>
            Ideas, shaped into <em>usable systems.</em>
          </h2>
          <p>
            Two projects that reflect my interest in thoughtful interfaces,
            language technology, and practical business tools.
          </p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} wide={i === 0} />
          ))}
        </div>
        <p className="asset-note">
          Project visuals will appear here when screenshots are added to the
          matching asset folders.
        </p>
      </section>
      <section id="experience" className="section-shell experience-section">
        <Reveal className="section-heading">
          <p className="eyebrow">04 / EXPERIENCE</p>
          <h2>
            Leading with <em>care and clarity.</em>
          </h2>
        </Reveal>
        <div className="experience-tabs" role="tablist">
          <button
            className={experience === "roles" ? "active" : ""}
            onClick={() => setExperience("roles")}
            role="tab"
            aria-selected={experience === "roles"}
          >
            Professional & leadership
          </button>
          <button
            className={experience === "events" ? "active" : ""}
            onClick={() => setExperience("events")}
            role="tab"
            aria-selected={experience === "events"}
          >
            Events & activities
          </button>
        </div>
        <AnimatePresence mode="wait">
          {experience === "roles" ? (
            <motion.div
              key="roles"
              className="role-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {roles.map((role, i) => (
                <article className="role-row" key={role.organization}>
                  <span className="role-number">0{i + 1}</span>
                  <div>
                    <p>{role.period}</p>
                    <h3>{role.organization}</h3>
                    <b>{role.title}</b>
                  </div>
                  <p className="role-text">{role.text}</p>
                  <ArrowUpRight className="role-arrow" />
                </article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="events"
              className="events-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {events.map((event) => (
                <article className="event-card" key={event.name}>
                  <AssetPlaceholder label={`${event.name} poster / photos`} />
                  <div className="event-meta">
                    <span>{event.date}</span>
                    <span>{event.role}</span>
                  </div>
                  <h3>{event.name}</h3>
                  <p>{event.detail}</p>
                  <button onClick={() => setActiveEvent(event.name)}>
                    Details <ChevronRight size={15} />
                  </button>
                </article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <section className="section-shell achievements-section">
        <Reveal className="achievement-intro">
          <p className="eyebrow">05 / RECOGNITION</p>
          <h2>
            A growing record of <em>commitment.</em>
          </h2>
          <p>
            Academic excellence, scholarships, and opportunities to contribute
            beyond the classroom.
          </p>
        </Reveal>
        <Reveal className="achievement-panel" delay={0.12}>
          <div className="achievement-glow" />
          {achievements.map((item, i) => (
            <div className="achievement-row" key={item}>
              <span>0{i + 1}</span>
              <p>{item}</p>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </Reveal>
      </section>
      <section id="contact" className="section-shell contact-section">
        <div className="contact-grid" aria-hidden="true" />
        <Reveal className="contact-copy">
          <p className="eyebrow">06 / CONTACT</p>
          <h2>
            Let&apos;s build something <em>together.</em>
          </h2>
          <p>
            I&apos;m open to professional opportunities, collaborations, and
            conversations around technology, software, and student-led
            initiatives.
          </p>
          <a className="contact-email" href="mailto:sokewinsang@gmail.com">
            sokewinsang@gmail.com <ArrowUpRight />
          </a>
          <p className="contact-location">
            <MapPin size={15} /> Phnom Penh, Cambodia
          </p>
        </Reveal>
        <Reveal className="contact-form" delay={0.15}>
          <p>Send a note</p>
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label>
              Name
              <input required name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                name="message"
                placeholder="How can we work together?"
                rows={4}
              />
            </label>
            <button className="button button-primary" type="submit">
              {sent ? "Thanks - I’ll be in touch" : "Send message"}{" "}
              <MoveRight size={17} />
            </button>
          </form>
          <small>
            Form ready for email-service connection. For now, please email
            directly.
          </small>
        </Reveal>
      </section>
      <footer>
        <span>© 2026 SANG Sokewin</span>
        <a href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveEvent(null)}
          >
            <motion.div
              className="event-modal"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close event details"
                onClick={() => setActiveEvent(null)}
              >
                <X />
              </button>
              <p className="eyebrow">EVENT DETAILS</p>
              <h3>{activeEvent}</h3>
              <p>
                {events.find((event) => event.name === activeEvent)?.detail}
              </p>
              <AssetPlaceholder label="Gallery ready for event photos" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
function ProjectCard({
  project,
  wide,
}: {
  project: (typeof projects)[number];
  wide: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  function tilt(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty(
      "--rx",
      `${((e.clientY - r.top) / r.height - 0.5) * -4}deg`,
    );
    el.style.setProperty(
      "--ry",
      `${((e.clientX - r.left) / r.width - 0.5) * 5}deg`,
    );
  }
  return (
    <Reveal>
      <article
        ref={ref}
        className={`project-card ${wide ? "project-wide" : ""}`}
        onMouseMove={tilt}
        onMouseLeave={() => {
          ref.current?.style.setProperty("--rx", "0deg");
          ref.current?.style.setProperty("--ry", "0deg");
        }}
      >
        <div className="project-top">
          <span>{project.number}</span>
          <span>CASE STUDY / IN PROGRESS</span>
        </div>
        <AssetPlaceholder
          className="project-image"
          label={`${project.name} screenshot / add later`}
        />
        <div className="project-info">
          <div>
            <p>{project.label}</p>
            <h3>{project.name}</h3>
          </div>
          <ArrowUpRight />
        </div>
        <p className="project-description">{project.description}</p>
        <p className="project-details">{project.details}</p>
        <div className="tag-list">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
