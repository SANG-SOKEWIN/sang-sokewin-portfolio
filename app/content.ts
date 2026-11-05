export const portfolio = {
  name: "SANG Sokewin", location: "Phnom Penh, Cambodia", email: "sokewinsang@gmail.com",
  cvLink: "mailto:sokewinsang@gmail.com?subject=CV%20request%20from%20portfolio",
  photo: "/assets/profile/profile-photo.jpg",
} as const;

export const stack = [
  { group: "Programming & databases", items: ["Python", "Java", "C++", "JavaScript", "HTML", "SQLite"] },
  { group: "Frameworks & technologies", items: ["FastAPI", "React", "Vite", "customtkinter", "docxtpl"] },
  { group: "Professional tools", items: ["Microsoft Excel", "Microsoft Office", "Google Workspace"] },
];

export const projects = [
  { id: "synctype", number: "01", name: "Synctype", label: "Romanized Khmer to Khmer Script Translator", description: "A full-stack translation tool that turns Romanized Khmer into Khmer script through dictionary lookup and MarianMT-powered translation modes.", details: "Built API endpoints, frontend integration, translation modes, and keyboard shortcut support.", technologies: ["FastAPI", "React", "Vite", "Python", "JavaScript"], image: "/assets/projects/synctype/cover.jpg" },
  { id: "invoice-generator", number: "02", name: "Invoice Generator", label: "Desktop business workflow application", description: "A desktop tool for creating, managing, and tracking invoices with customer, inventory, tax, and document workflows.", details: "Includes authentication, invoice history and search, automatic totals, and Word document export from a custom template.", technologies: ["Python", "SQLite", "customtkinter", "docxtpl"], image: "/assets/projects/invoice-generator/cover.jpg" },
];

export const roles = [
  { organization: "Student Government Association (SGA)", title: "Executive Secretary", period: "Jun 2025 - Jun 2026", text: "Prepared agendas and minutes, maintained official documentation, coordinated formal communications, and supported event logistics and executive timelines." },
  { organization: "Startup Grind", title: "Marketing & Communications Lead", period: "Jun 2025 - Jan 2026", text: "Planned event marketing campaigns, built content calendars and posting schedules, and designed promotional materials with consistent branding." },
  { organization: "AUPP Trading Club", title: "Public Affairs Officer", period: "Sep 2026 - Present", text: "Develops promotional and communication materials for financial literacy initiatives, partnerships, workshops, and student engagement activities." },
];

export const events = [
  { name: "AUPP Songkran", date: "Apr 2026", role: "Event Organizer", detail: "Organized a large-scale cultural celebration with over 3,000 participants.", path: "aupp-songkran" },
  { name: "Together for Children", date: "Mar 2026", role: "Organizer, Donation Drive", detail: "Organized an SGA charity drive that raised $1,111 for children through Jayavarman VII Hospital.", path: "together-for-children" },
  { name: "Together for Peace Charity", date: "Dec 2025", role: "Organizer, Donation Drive", detail: "Organized an SGA charity initiative that delivered $10,000 in aid through MoEYS to displaced families.", path: "together-for-peace" },
  { name: "TEDx Phnom Penh", date: "Sep 2025", role: "Volunteer, Registration Manager", detail: "Managed attendee registration, coordinated check-ins, and supported smooth event entry.", path: "tedx-phnom-penh" },
  { name: "Linker Challenge Contest", date: "Jan 2026", role: "Volunteer, Invigilator", detail: "Supported exam sessions, participant compliance, and a fair, organized testing environment.", path: "linker-challenge" },
];

export const milestones = [
  { eyebrow: "Education", title: "AUPP + Fort Hays State University", text: "BS in Information Technology Management / Computer Science. Dual-degree program; expected May 2028. GPA 3.79/4.00." },
  { eyebrow: "Global learning", title: "HIT Global Summer School: Intelligent Robot", text: "Harbin Institute of Technology, July 2026. Designed, programmed, and tested a controller-operated curling robot." },
  { eyebrow: "Cloud", title: "AWS Academy", text: "Cloud Operations, Mar 2026; Cloud Computing Foundations, Aug 2025." },
];

export const achievements = ["ASEAN-China-India Youth Leadership Summit - Regional Finalist (2024)", "AUPP 100% Scholarship Recipient (AMT)", "CADT 75% Scholarship Recipient", "National Baccalaureate: A", "Top 2, Kampot City Mathematics Competition (2023)"];
