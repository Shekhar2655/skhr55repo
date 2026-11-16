/* ============================================================
   PORTFOLIO CONTENT — edit this one object to update the site.
   Keep optional values empty or omit them; empty groups/sections
   and project buttons without URLs are hidden automatically.
   ============================================================ */
const portfolioData = {
  name: "Shekhar Shrivastav",
  initials: "SS",
  headline: "CITS Trainee – Computer Software Application",
  location: "Kanpur, Uttar Pradesh",
  email: "shekharshrivastav064@gmail.com",
  phone: "7235873353",
  linkedin: "https://www.linkedin.com/in/shekhar-shrivastav-15b7a7449",
  github: "https://github.com/Shekhar2655",
  photo: "assets/images/profile.jpg",
  resumeFile: "assets/documents/resume.pdf",

  introduction: [
    "I am a CITS trainee in Computer Software Application at NSTI Kanpur.",
    "I am interested in software development and building useful applications with the skills I am learning."
  ],
  about: "I am pursuing CITS (Craft Instructor Training Scheme) in the Computer Software Application trade at NSTI Kanpur. I have previously completed CTS at Govt. ITI Musafirkhana, and I enjoy learning software tools and developing practical applications.",

  education: [
    {
      qualification: "CITS (Craft Instructor Training Scheme)",
      trade: "Trade: CSA (Computer Software Application)",
      institute: "NSTI Kanpur",
      period: "Session 2026–27",
      current: true
    },
    {
      qualification: "CTS",
      institute: "Govt. ITI Musafirkhana",
      period: "2025–2026"
    }
  ],

  skills: [
    { group: "Computer Skills", items: ["MS Office", "Excel", "Internet"] },
    { group: "Software & Tools", items: ["Python", "Power BI", "MySQL"] },
    { group: "Soft Skills", items: ["Communication", "Problem Solving", "Teamwork"] }
  ],

  projects: [
    {
      name: "Student Record Management System",
      description: "A simple computer application used to manage student information. Users can add new student records, view details, update information, search records and delete records easily.",
      image: "assets/images/project-student-record.png",
      technologies: ["Python (programming)", "Tkinter (user interface)", "SQLite (database)", "VS Code (code editor)"],
      contribution: "I designed and developed it using Python. I created the user interface, added student details, implemented search, update and delete functions, and connected the application with an SQLite database."
      // Add github: "https://..." and/or demo: "https://..." only when available.
    },
    {
      name: "AI Notes Summarizer",
      description: "A web-based application that helps students convert long PDF notes into short, easy-to-understand summaries. Users upload PDFs and AI generates summaries, important questions and multiple-choice questions (MCQs).",
      image: "assets/images/project-ai-notes.png",
      technologies: ["HTML (structure)", "CSS (design)", "JavaScript (interactive features)", "Python (backend)", "Flask (web framework)", "SQLite (database)", "AI API (summaries and questions)"],
      contribution: "I designed and developed the website. I worked on frontend development, PDF upload functionality, Python backend, AI integration and generating summaries and important questions."
      // Add github: "https://..." and/or demo: "https://..." only when available.
    }
  ],

  training: {
    title: "Computer Operator Assistant",
    duration: "6 months",
    role: "Intern",
    skillsLearned: ["Office Automation"]
  },

  certifications: [
    { name: "ADCA", issuer: "NIELIT", year: "2025" },
    {
      name: "AI Literacy",
      issuer: "IBM SkillsBuild",
      date: "30 October 2026",
      file: "assets/documents/ai-literacy-certificate.pdf",
      verification: "https://www.credly.com/go/0x8JE4s0"
    }
  ]
};

/* Small safe HTML helpers */
const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));

const sectionHeading = (eyebrow, title, description = "") => `
  <div class="section-heading reveal">
    <p class="eyebrow">${escapeHTML(eyebrow)}</p>
    <h2>${escapeHTML(title)}</h2>
    ${description ? `<p class="section-copy">${escapeHTML(description)}</p>` : ""}
  </div>`;

function renderHome(data) {
  return `
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow">Hello, I'm</p>
          <h1>${escapeHTML(data.name)}</h1>
          <p class="headline">${escapeHTML(data.headline)}</p>
          <p class="lead">${data.introduction.map(escapeHTML).join(" ")}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">View Projects</a>
            <a class="button button-secondary" href="#contact">Contact Me</a>
            ${data.resumeFile ? `<a class="button button-secondary" href="${escapeHTML(data.resumeFile)}" download>Download Resume</a>` : ""}
          </div>
        </div>
        <div class="hero-photo-wrap reveal">
          <div class="profile-frame">
            <img src="${escapeHTML(data.photo)}" alt="Portrait of ${escapeHTML(data.name)}"
                 onerror="this.outerHTML='<div class=&quot;initials-avatar&quot; role=&quot;img&quot; aria-label=&quot;${escapeHTML(data.name)} initials&quot;>${escapeHTML(data.initials)}</div>'">
          </div>
        </div>
      </div>
    </section>`;
}

function renderAbout(data) {
  if (!data.about) return "";
  return `
    <section id="about">
      <div class="container">
        ${sectionHeading("A little introduction", "About Me")}
        <div class="info-grid">
          <article class="info-card reveal">
            <strong>Who I am</strong>
            <p>${escapeHTML(data.about)}</p>
          </article>
          <article class="info-card reveal">
            <strong>Location</strong>
            <p>${escapeHTML(data.location || "")}</p>
          </article>
        </div>
      </div>
    </section>`;
}

function renderEducation(data) {
  if (!data.education?.length) return "";
  return `
    <section class="alt-section" id="education">
      <div class="container">
        ${sectionHeading("Learning journey", "Education")}
        <div class="timeline">
          ${data.education.map(item => `
            <article class="timeline-item reveal">
              <span class="timeline-dot" aria-hidden="true"></span>
              <div class="timeline-content">
                <h3>${escapeHTML(item.qualification)}</h3>
                ${item.trade ? `<p>${escapeHTML(item.trade)}</p>` : ""}
                <p>${escapeHTML(item.institute)}</p>
                <p class="meta">${escapeHTML(item.period)}${item.current ? " · Current" : ""}</p>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderSkills(data) {
  const groups = (data.skills || []).filter(group => group.items?.length);
  if (!groups.length) return "";
  return `
    <section id="skills">
      <div class="container">
        ${sectionHeading("What I work with", "Skills")}
        <div class="skills-grid">
          ${groups.map(group => `
            <article class="skill-panel reveal">
              <h3>${escapeHTML(group.group)}</h3>
              <div class="chips">${group.items.map(item => `<span class="chip">${escapeHTML(item)}</span>`).join("")}</div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderProjects(data) {
  if (!data.projects?.length) return "";
  return `
    <section class="alt-section" id="projects">
      <div class="container">
        ${sectionHeading("Selected work", "Projects", "A look at applications I have designed and developed.")}
        <div class="projects-grid">
          ${data.projects.map((project, index) => `
            <article class="project-card reveal">
              <div class="project-image">
                <img src="${escapeHTML(project.image || "")}" alt="${escapeHTML(project.name)} project screenshot"
                     onerror="this.outerHTML='<div class=&quot;project-fallback&quot; role=&quot;img&quot; aria-label=&quot;${escapeHTML(project.name)} image unavailable&quot;>${escapeHTML(project.name)}</div>'">
              </div>
              <div class="project-body">
                <h3>${escapeHTML(project.name)}</h3>
                <p>${escapeHTML(project.description)}</p>
                ${project.technologies?.length ? `<h4>Technologies</h4><div class="chips">${project.technologies.map(tech => `<span class="chip">${escapeHTML(tech)}</span>`).join("")}</div>` : ""}
                ${project.contribution ? `<h4>My Contribution</h4><p>${escapeHTML(project.contribution)}</p>` : ""}
                <div class="project-links">
                  ${project.github ? `<a class="button button-secondary" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ""}
                  ${project.demo ? `<a class="button button-primary" href="${escapeHTML(project.demo)}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ""}
                </div>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderTraining(data) {
  const item = data.training;
  if (!item || !item.title) return "";
  return `
    <section id="training">
      <div class="container">
        ${sectionHeading("Practical learning", "Internship / Training")}
        <article class="training-card reveal">
          <h3>${escapeHTML(item.title)}</h3>
          <p><strong>Duration:</strong> ${escapeHTML(item.duration || "")}</p>
          <p><strong>Role:</strong> ${escapeHTML(item.role || "")}</p>
          ${item.skillsLearned?.length ? `<p><strong>Skills learned:</strong> ${item.skillsLearned.map(escapeHTML).join(", ")}</p>` : ""}
        </article>
      </div>
    </section>`;
}

function renderCertifications(data) {
  if (!data.certifications?.length) return "";
  return `
    <section class="alt-section" id="certifications">
      <div class="container">
        ${sectionHeading("Courses and credentials", "Certifications")}
        <div class="cert-list">
          ${data.certifications.map(cert => `
            <article class="cert-card reveal">
              <h3>${escapeHTML(cert.name)}</h3>
              <p>${escapeHTML(cert.issuer)}${cert.year ? ` · ${escapeHTML(cert.year)}` : ""}${cert.date ? ` · ${escapeHTML(cert.date)}` : ""}</p>
              ${cert.file ? `<a class="cert-link" href="${escapeHTML(cert.file)}" target="_blank" rel="noopener noreferrer">View certificate ↗</a>` : ""}
              ${cert.verification ? `<a class="cert-link" href="${escapeHTML(cert.verification)}" target="_blank" rel="noopener noreferrer">Verify certificate ↗</a>` : ""}
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function renderContact(data) {
  const entries = [
    data.email && { label: "Email", value: data.email, href: `mailto:${data.email}`, icon: "@" },
    data.phone && { label: "Phone", value: data.phone, href: `tel:${data.phone}`, icon: "☎" },
    data.linkedin && { label: "LinkedIn", value: "View LinkedIn profile", href: data.linkedin, icon: "in", external: true },
    data.github && { label: "GitHub", value: "View GitHub profile", href: data.github, icon: "⌘", external: true }
  ].filter(Boolean);
  if (!entries.length) return "";
  return `
    <section id="contact">
      <div class="container">
        ${sectionHeading("Let's connect", "Contact", `You can reach me in ${data.location || "my location"} using the details below.`)}
        <div class="contact-grid">
          ${entries.map(entry => `
            <article class="contact-card reveal">
              <span class="contact-icon" aria-hidden="true">${escapeHTML(entry.icon)}</span>
              <div>
                <small>${escapeHTML(entry.label)}</small>
                <a href="${escapeHTML(entry.href)}" ${entry.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHTML(entry.value)}</a>
              </div>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

/* Render every content section from portfolioData. */
const root = document.getElementById("portfolio-root");
root.innerHTML = [
  renderHome(portfolioData),
  renderAbout(portfolioData),
  renderEducation(portfolioData),
  renderSkills(portfolioData),
  renderProjects(portfolioData),
  renderTraining(portfolioData),
  renderCertifications(portfolioData),
  renderContact(portfolioData)
].join("");

/* Theme: system preference by default; a visitor's choice is remembered. */
const themeToggle = document.getElementById("theme-toggle");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme || (systemTheme.matches ? "dark" : "light");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  themeToggle.title = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  themeToggle.innerHTML = theme === "dark"
    ? '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
    : '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.6 8.6 0 1 0 20.2 15.4Z"/></svg>';
}
applyTheme(initialTheme);
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", next);
  applyTheme(next);
});
systemTheme.addEventListener?.("change", event => {
  if (!localStorage.getItem("portfolio-theme")) applyTheme(event.matches ? "dark" : "light");
});

/* Mobile navigation: close after a link is selected. */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}));

/* Scroll reveal, disabled when the visitor requests reduced motion. */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach(element => element.classList.add("is-visible"));
}

/* Highlight the navigation item for the section currently in view. */
const sections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.querySelectorAll("a").forEach(link => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
  });
}, { rootMargin: "-25% 0px -65% 0px" });
sections.forEach(section => sectionObserver.observe(section));

document.getElementById("current-year").textContent = new Date().getFullYear();
