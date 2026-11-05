"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { achievements, events, milestones, projects, roles } from "./content";

const nav = ["Home", "About", "Stack", "Projects", "Experience", "Contact"];
const techItems = [
  { name: "Python", group: "Languages", glyph: "Py", color: "#4e90ca" },
  { name: "Java", group: "Languages", glyph: "J", color: "#d86645" },
  { name: "C++", group: "Languages", glyph: "C+", color: "#5d8cf7" },
  { name: "JavaScript", group: "Languages", glyph: "JS", color: "#d8b836" },
  { name: "HTML", group: "Languages", glyph: "</>", color: "#e25b41" },
  { name: "SQLite", group: "Data", glyph: "SQL", color: "#328eb3" },
  { name: "FastAPI", group: "Frameworks", glyph: "F", color: "#159875" },
  { name: "React", group: "Frameworks", glyph: "◌", color: "#2baed5" },
  { name: "Vite", group: "Frameworks", glyph: "V", color: "#755edc" },
  { name: "customtkinter", group: "Frameworks", glyph: "Tk", color: "#4f8fcf" },
  { name: "docxtpl", group: "Frameworks", glyph: "DOC", color: "#568fc3" },
  { name: "Microsoft Excel", group: "Tools", glyph: "X", color: "#1e9c5a" },
  { name: "Microsoft Office", group: "Tools", glyph: "O", color: "#e16745" },
  { name: "Google Workspace", group: "Tools", glyph: "G", color: "#4d83de" },
] as const;

const recognitionGroups = [
  { title: "Scholarships", items: achievements.filter((item) => item.includes("Scholarship")) },
  { title: "Academic", items: achievements.filter((item) => item.includes("Baccalaureate") || item.includes("Mathematics")) },
  { title: "Leadership", items: achievements.filter((item) => item.includes("Youth Leadership")) },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [experience, setExperience] = useState<"roles" | "events">("roles");
  const [techFilter, setTechFilter] = useState("All");
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("sokewin-theme", theme);
  }, [theme]);

  return (
    <main>
      <header className="nav-wrap">
        <a href="#home" className="monogram" aria-label="Back to home">SK.</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <div className="nav-actions">
          <span className="availability"><i /> Open to opportunities</span>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="section-shell hero">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="eyebrow">SOFTWARE · SYSTEMS · COMMUNITY</p>
          <h1>Hi, I&apos;m Sang<br /><span>Sokewin.</span></h1>
          <p className="hero-description">An IT Management and Computer Science student who enjoys turning practical ideas into dependable, people-centred software.</p>
          <div className="hero-facts" aria-label="Personal summary">
            <div><span>Based in</span><strong>Phnom Penh, Cambodia</strong></div>
            <div><span>Currently</span><strong>AUPP + Fort Hays State</strong></div>
          </div>
        </motion.div>
        <motion.aside className="hero-profile" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.08 }} aria-label="Sang Sokewin profile summary">
          <div className="profile-stamp"><span>SK</span><small>01</small></div>
          <div className="profile-details"><p>IT MANAGEMENT +<br />COMPUTER SCIENCE</p><span>Student · Builder · Learner</span></div>
          <div className="profile-orbit" aria-hidden="true" />
        </motion.aside>
      </section>

      <section id="about" className="section-shell about">
        <Reveal className="section-heading section-heading-split">
          <div><p className="eyebrow">01 / ABOUT</p><h2>A curious mind,<br /><em>rooted in useful work.</em></h2></div>
          <p>I work at the intersection of software, systems thinking, and community-led work.</p>
        </Reveal>
        <div className="about-layout">
          <Reveal className="about-mark"><span>SK</span><p>Learning in public.<br />Building with purpose.</p><b><MapPin size={17} /> Phnom Penh, Cambodia</b></Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p className="lead">I&apos;m pursuing a dual degree in IT Management and Computer Science at the American University of Phnom Penh and Fort Hays State University.</p>
            <p>I enjoy creating software that makes a clear difference—whether that means streamlining a workflow, supporting language technology, or helping an event run well. My academic work has taken me from full-stack development to cloud foundations and intelligent robotics.</p>
            <div className="stat-grid"><div><strong>3.79</strong><span>GPA / 4.00</span></div><div><strong>2028</strong><span>Expected graduation</span></div><div><strong>02</strong><span>Software projects</span></div></div>
          </Reveal>
        </div>
        <div className="milestone-grid">
          {milestones.map((item, index) => <Reveal className="milestone" key={item.title} delay={index * 0.06}><p>{item.eyebrow}</p><h3>{item.title}</h3><span>{item.text}</span></Reveal>)}
        </div>
      </section>

      <section id="stack" className="section-shell stack-section">
        <Reveal className="section-heading stack-heading"><p className="eyebrow">02 / TECH STACK</p><h2>Technologies I work with.</h2><p>Tools and languages I use to take an idea from outline to working software.</p></Reveal>
        <div className="tech-filters" role="tablist" aria-label="Technology category">
          {["All", "Languages", "Frameworks", "Data", "Tools"].map((filter) => <button key={filter} className={techFilter === filter ? "active" : ""} onClick={() => setTechFilter(filter)} role="tab" aria-selected={techFilter === filter}>{filter}</button>)}
        </div>
        <div className="tech-card-grid">
          {techItems.filter((item) => techFilter === "All" || item.group === techFilter).map((item, index) => <motion.article className="tech-card" key={item.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22, delay: index * 0.025 }}><span className="tech-glyph" style={{ color: item.color }}>{item.glyph}</span><p>{item.name}</p><small>{item.group}</small></motion.article>)}
        </div>
      </section>

      <section id="projects" className="section-shell projects-section">
        <Reveal className="section-heading section-heading-split"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Ideas, made<br /><em>useful.</em></h2></div><p>Two projects shaped around practical language technology and business workflows.</p></Reveal>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} wide={index === 0} />)}</div>
      </section>

      <section id="experience" className="section-shell experience-section">
        <Reveal className="section-heading section-heading-split experience-heading"><div><p className="eyebrow">04 / EXPERIENCE</p><h2>Leadership that<br /><em>keeps things moving.</em></h2></div><p>Experience across student governance, communications, and events—where clear coordination matters.</p></Reveal>
        <div className="experience-control"><p>Explore</p><div className="experience-tabs" role="tablist" aria-label="Experience type"><button className={experience === "roles" ? "active" : ""} onClick={() => setExperience("roles")} role="tab" aria-selected={experience === "roles"}>Roles <span>{roles.length}</span></button><button className={experience === "events" ? "active" : ""} onClick={() => setExperience("events")} role="tab" aria-selected={experience === "events"}>Events <span>{events.length}</span></button></div></div>
        <AnimatePresence mode="wait">
          {experience === "roles" ? (
            <motion.div key="roles" className="experience-list" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              {roles.map((role, index) => <article className="experience-card" key={role.organization}><span className="experience-number">0{index + 1}</span><div className="experience-title"><p>{role.period}</p><h3>{role.title}</h3><strong>{role.organization}</strong></div><p className="experience-summary">{role.text}</p><ArrowUpRight aria-hidden="true" /></article>)}
            </motion.div>
          ) : (
            <motion.div key="events" className="events-grid" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              {events.map((event, index) => <article className="event-card" key={event.name}><div className="event-top"><span>0{index + 1}</span><time>{event.date}</time></div><p className="event-role">{event.role}</p><h3>{event.name}</h3><p className="event-detail">{event.detail}</p><button onClick={() => setActiveEvent(event.name)}>View details <ChevronRight size={16} /></button></article>)}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="section-shell recognition-section">
        <Reveal className="section-heading recognition-heading"><p className="eyebrow">05 / RECOGNITION</p><h2>Progress worth<br /><em>showing up for.</em></h2><p>Academic achievements and opportunities that mark a steady commitment to learning.</p></Reveal>
        <div className="recognition-grid">
          {recognitionGroups.map((group, index) => <Reveal className="recognition-card" key={group.title} delay={index * 0.07}><div className="recognition-card-top"><span>0{index + 1}</span><p>{group.title}</p></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>)}
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <Reveal className="contact-main"><p className="eyebrow">06 / CONTACT</p><h2>Open to meaningful<br /><em>opportunities.</em></h2><p>I&apos;m glad to hear about professional opportunities, collaborations, and technology or student-led initiatives.</p><a className="contact-email" href="mailto:sokewinsang@gmail.com"><Mail size={19} /> sokewinsang@gmail.com <ArrowUpRight size={18} /></a></Reveal>
        <Reveal className="contact-details" delay={0.1}><div><span>Location</span><strong><MapPin size={16} /> Phnom Penh, Cambodia</strong></div><div><span>Best for</span><strong>Projects · opportunities · collaboration</strong></div><div><span>Availability</span><strong><i /> Open to connect</strong></div></Reveal>
      </section>

      <footer><span>© 2026 SANG Sokewin</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></footer>

      <AnimatePresence>
        {activeEvent && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveEvent(null)}><motion.div className="event-modal" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 18, opacity: 0 }} onClick={(event) => event.stopPropagation()}><button aria-label="Close event details" onClick={() => setActiveEvent(null)}><X /></button><p className="eyebrow">EVENT DETAILS</p><h3>{activeEvent}</h3><p>{events.find((event) => event.name === activeEvent)?.detail}</p></motion.div></motion.div>}
      </AnimatePresence>
    </main>
  );
}

function ProjectCard({ project, wide }: { project: (typeof projects)[number]; wide: boolean }) {
  const ref = useRef<HTMLElement>(null);
  function tilt(event: MouseEvent<HTMLElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--rx", `${((event.clientY - rect.top) / rect.height - 0.5) * -3}deg`);
    element.style.setProperty("--ry", `${((event.clientX - rect.left) / rect.width - 0.5) * 3}deg`);
  }
  return (
    <Reveal>
      <article ref={ref} className={`project-card ${wide ? "project-wide" : ""}`} onMouseMove={tilt} onMouseLeave={() => { ref.current?.style.setProperty("--rx", "0deg"); ref.current?.style.setProperty("--ry", "0deg"); }}>
        <div className={`project-visual ${project.id}`}><span>{project.number}</span><p>{project.label}</p><div aria-hidden="true" /></div>
        <div className="project-info"><div><p>{project.label}</p><h3>{project.name}</h3></div><ArrowUpRight /></div>
        <p className="project-description">{project.description}</p><p className="project-details">{project.details}</p>
        <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </article>
    </Reveal>
  );
}
