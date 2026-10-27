# Abinaya R — Personal Developer Portfolio & Dynamic Profile

A modern, responsive, interactive personal portfolio website and dynamic resume platform created for **Abinaya R**, a BCA student and aspiring developer specializing in **React.js, Web Development, and Network Security**.

Built using **100% Pure HTML5, CSS3, and Vanilla JavaScript** — zero external runtime dependencies, no build steps required, and works immediately by opening `index.html` or running a local server.

---

## 🌟 Interactive Features & Capabilities

### 1. 📄 Universal Resume Access & Download Across Sections
- **Every Section Covered:** Resume download and document preview are accessible from the fixed Navbar, Hero Section, Section-level Callouts, Contact Section, and a **Sticky Floating Quick-Resume Dock** at the bottom of the screen.
- **Direct Download:** One-click download of the official verified resume (`Abinaya_R_Resume.pdf`).
- **Interactive Full Document Preview:** In-modal printable document view with a dedicated **Print Resume** (`Ctrl+P` ready) and PDF download button.
- **Python PDF Generator (`generate_resume_pdf.py`):** Rebuild the PDF anytime using `python generate_resume_pdf.py`.

### 2. 👤 Profile Management: Update, Save, and Reset
- **Update Profile:** Click **"Update Profile"** in the Profile Control Hub or Hero section to open an in-depth editor for:
  - Full Name
  - Headline & Role Title
  - Academic Tagline & Institution
  - Email Address & Phone Number
  - Current Location
  - GitHub, LinkedIn, and LeetCode URLs
  - About Me & Professional Bio
- **Save Profile:** Clicking **"Save Profile"** validates the inputs, updates the entire page in real time (Hero, About, Profile card, Contact, and Resume modal), and permanently persists the data in browser `localStorage`.
- **Reset Profile:** Clicking **"Reset Profile"** instantly restores the default verified resume information.
- **Photo Customization:** Click the avatar or **"Upload Photo"** to use any custom portrait (saved automatically as base64 in `localStorage`), or click **"Reset Photo"** to restore `profile.jpg`.

### 3. ⚡ Dynamic Term Management (Add, Edit, Delete, Save, Reset)
Full CRUD functionality across every term and section of the portfolio:
- **Technical Skills:** Add custom skills, organize by category (Web Development, Cybersecurity, Programming Languages, Database & Cloud, Soft Skills), filter by category, delete individual skills with `×`, and reset to default skills.
- **Projects:** Add, edit, or delete projects with custom titles, years, category badges, summary descriptions, key highlights, tech stacks, and live GitHub / demo URLs.
- **Certifications:** Add, edit, or delete verified credentials (Title, Issuing Body, Date, and Description) with instant persistence.
- **Achievements:** Add, edit, or delete competitive awards and honors (Title, Campus/Host, Tag, and Description).
- **Practical Experience:** Add, edit, or delete internship history, tech stacks, and key responsibilities.
- **Education:** Add, edit, or delete academic qualifications, institutions, scores, and focus areas.

### 4. 🎨 Handcrafted Natural Color Palette
- **Organic Sage, Forest Pine & Slate Blend:** Custom-crafted to avoid plain saturated greens and stark sterile whites.
- Soft sage-mineral mist canvas (`#f3f6f4`), deep pine headings (`#0c231d`), natural forest-slate body copy (`#224339`), and refined eucalyptus teal interactive accents (`#0f766e`).
- Elegant warm gold accents for achievements and awards (`#b45309`, `#fef3c7`).

---

## 🖥️ How to Run

### Option 1: Direct File Open
Simply double-click **`index.html`** or right-click and open it with any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using Python Local Server
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
```
my profile/
├── index.html              # Semantic HTML5 portfolio & profile management hub
├── styles.css              # Custom styles & warm sage-pine design system
├── script.js               # Vanilla JavaScript dynamic stores & modal managers
├── Abinaya_R_Resume.pdf    # Official complete resume PDF
├── generate_resume_pdf.py  # Python script to regenerate resume PDF
├── profile.jpg             # Developer profile portrait
├── package.json            # Configuration file
└── README.md               # Documentation
```
