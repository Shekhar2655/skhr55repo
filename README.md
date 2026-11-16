# Shekhar Shrivastav — Personal Portfolio

A responsive, static personal portfolio built with HTML5, CSS3 and vanilla JavaScript. It has no framework, build step, backend, database, external font, CDN or library dependency, and can be hosted directly on GitHub Pages.

## Project structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-student-record.png
│   │   └── project-ai-notes.png
│   └── documents/
│       ├── resume.pdf
│       └── ai-literacy-certificate.pdf
└── README.md
```

## Add or replace your assets

The profile photo, resume and AI Literacy certificate supplied with this package have already been copied into their website locations.

- **Profile photo:** replace `assets/images/profile.jpg` with your preferred photo, keeping the exact filename `profile.jpg`.
- **Student Record Management System image:** add your screenshot at `assets/images/project-student-record.png`.
- **AI Notes Summarizer image:** add your screenshot at `assets/images/project-ai-notes.png`.
- **Resume:** replace `assets/documents/resume.pdf` with your latest resume, keeping the exact filename `resume.pdf`.
- **AI Literacy certificate:** replace `assets/documents/ai-literacy-certificate.pdf` if you have an updated copy.

Project screenshots are optional. If either project image is not present, the website automatically displays a styled project-name fallback. If the profile image is missing, it displays an initials avatar. No broken-image icon will be shown.

## Edit your portfolio content

All portfolio text and content are kept in one object named `portfolioData` near the top of `js/script.js`.

1. Open `js/script.js` in a code editor.
2. Edit the values inside `portfolioData` (name, headline, contact details, education, skills, projects, training and certifications).
3. Save the file and refresh the website.

To add a project, add another object to the `projects` array. To show project buttons, add a real `github` URL and/or `demo` URL to that project's object. If those values are absent, the buttons remain hidden. Optional groups and sections with no data are automatically omitted.

The resume download button uses `resumeFile`. If you move the resume, update this path to match.

## Run locally

No installation is required.

**Option 1 — open directly:** double-click `index.html` to preview the site in a modern browser. Most features work without a server.

**Option 2 — local static server (recommended):** from the `portfolio` folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with `Ctrl+C`.

Before publishing, check the site at desktop and mobile widths, test every navigation/contact link, and click the resume and certificate links.

## Publish on GitHub Pages

1. Sign in to GitHub and create a new repository (for example, `portfolio`). A public repository is the simplest option for a public portfolio.
2. Upload the contents of this `portfolio` folder to the repository's **root**. Make sure `index.html` is at the repository root, not inside an extra nested folder.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/ (root)**, then click **Save**.
7. Wait for GitHub Pages to publish. The site URL will appear in the Pages settings.

Use the exact lowercase folder and file names shown in the project structure. GitHub Pages paths are case-sensitive.

## Included accessibility and interface features

- Semantic HTML landmarks and a skip-to-content link
- Responsive sticky navigation and mobile menu
- Light/dark theme with system preference detection and local preference storage
- Keyboard-visible focus styles and accessible button labels
- Smooth scrolling and subtle scroll reveal, with reduced-motion support
- Automatic image fallbacks and optional-section handling
