/**
 * ABINAYA R — PERSONAL PORTFOLIO SCRIPTS
 * Comprehensive Vanilla JavaScript Architecture:
 * 1. Profile Management: Update / Edit, Instant Save (LocalStorage), and Reset to Defaults
 * 2. Photo Upload & Persistence with Reset Option
 * 3. Dynamic Skills System: Add, Edit, Delete, Filter, Save, and Reset
 * 4. Dynamic Projects System: Add, Edit, Delete, Save, and Reset
 * 5. Dynamic Certifications System: Add, Edit, Delete, Save, and Reset
 * 6. Dynamic Achievements System: Add, Edit, Delete, Save, and Reset
 * 7. Dynamic Experience System: Add, Edit, Delete, Save, and Reset
 * 8. Dynamic Education System: Add, Edit, Delete, Save, and Reset
 * 9. Site-Wide Resume Access (Navbar, Hero, Section Banners, Floating Dock, Printable In-Modal Preview & Direct PDF Download)
 * 10. Sticky Navbar, ScrollSpy, Mobile Drawer, Toast Alert Notifications
 */

// ==========================================================================
// DEFAULT DATA SETS (Verified Credentials & Academic Records)
// ==========================================================================

const DEFAULT_PROFILE = {
  name: "Abinaya R",
  role: "Aspiring Developer | React.js & Network Security",
  tagline: "BCA Student • The TipsGlobal Institute",
  email: "raviabinaya20106@gmail.com",
  phone: "8940764662",
  location: "Nilgiris, Tamil Nadu, India",
  github: "https://github.com/raviabinaya20106-del",
  linkedin: "https://www.linkedin.com/in/abinaya-ravi-39a974354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  leetcode: "https://leetcode.com",
  aboutBio: "Hello! I'm Abinaya R, a BCA student passionate about web development, software development, and network security. I enjoy building responsive websites, learning new technologies, and solving programming problems. I am continuously improving my technical and problem-solving skills to prepare for a successful career in the IT industry.",
  focus1Title: "React.js Frontend",
  focus1Desc: "Components, Modern JavaScript, UI/UX",
  focus2Title: "Network Security",
  focus2Desc: "Defense Concepts, Ciphers & Safety",
  focus3Title: "Algorithms & DSA",
  focus3Desc: "Problem Solving & Programming Logic"
};

const DEFAULT_SKILLS = {
  web: [
    { name: "HTML5", sub: "Semantic Markup" },
    { name: "CSS3", sub: "Styling & Responsive Layouts" },
    { name: "JavaScript", sub: "ES6+ Logic & Async" },
    { name: "React.js", sub: "Component Architecture & Hooks" },
    { name: "Node.js", sub: "Server Runtime" },
    { name: "Bootstrap", sub: "Responsive UI Framework" }
  ],
  cyber: [
    { name: "Network Security", sub: "System Defense & Protocols" },
    { name: "Networking Fundamentals", sub: "Topology & Data Traffic" },
    { name: "Cryptography", sub: "Ciphers & Data Safety" },
    { name: "Ethical Hacking", sub: "Vulnerability Awareness" }
  ],
  programming: [
    { name: "Python", sub: "Core Language & Scripting" },
    { name: "Java", sub: "OOP & Applications" },
    { name: "C++", sub: "Logic & DSA" }
  ],
  db: [
    { name: "MySQL", sub: "Relational DB Management" },
    { name: "SQL", sub: "Queries & Schema Design" },
    { name: "AWS", sub: "Cloud Fundamentals" },
    { name: "Amazon RDS for SQL Server", sub: "Managed Cloud DB" }
  ],
  soft: [
    { name: "Communication", sub: "Interpersonal & Team Alignment" },
    { name: "Time Management", sub: "Productivity & Delivery" },
    { name: "Teamwork", sub: "Cross-Functional Collaboration" },
    { name: "Problem-Solving", sub: "Analytical Thinking" },
    { name: "Decision-Making", sub: "Critical Evaluation" },
    { name: "Self-Leadership", sub: "Growth Mindset" },
    { name: "Networking", sub: "Professional Connection" }
  ]
};

const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    title: "Smart E-Commerce Marketplace",
    year: "2026",
    badge: "Featured Web App",
    description: "Developed a responsive e-commerce marketplace designed to provide a convenient, seamless, and user-friendly shopping experience.",
    features: [
      "Product search functionality & query filtering",
      "Product listings, categorizations & item details",
      "Shopping cart & Wishlist state management",
      "Responsive layout with intuitive navigation & ordering"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Java", "Bootstrap"],
    githubUrl: "https://github.com/raviabinaya20106-del",
    demoUrl: "https://github.com/raviabinaya20106-del"
  },
  {
    id: "proj-2",
    title: "Problem Solving & Data Structures",
    year: "Ongoing Practice",
    badge: "LeetCode Logic Track",
    description: "Regular LeetCode practice and continuous algorithmic problem-solving to master computational complexity and data structures.",
    features: [
      "Arrays & Strings manipulation techniques",
      "Linked Lists, Stacks & Queues implementation",
      "Binary Trees & Searching algorithms",
      "Big O notation & algorithmic complexity analysis"
    ],
    techStack: ["Python", "Java", "C++", "Algorithms", "LeetCode"],
    githubUrl: "https://github.com/raviabinaya20106-del",
    demoUrl: "https://leetcode.com"
  }
];

const DEFAULT_CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Oracle Certified Foundation Associate",
    issuer: "Oracle",
    date: "January 2026 – February 2026",
    skillsLearned: "Critical thinking, HTML/CSS, React.js, Node.js, JavaScript, Java",
    category: "Database & Cloud",
    description: "Foundational mastery in enterprise database management, SQL logic, and cloud data architecture."
  },
  {
    id: "cert-2",
    title: "Amazon RDS For SQL Server",
    issuer: "AWS",
    date: "July 2026",
    skillsLearned: "Critical thinking, HTML/CSS, Python, Time Management, Node.js, MySQL, SQL, AWS",
    category: "Cloud Systems",
    description: "Deployment, automated provisioning, and management of relational databases on Amazon Web Services."
  },
  {
    id: "cert-3",
    title: "Web Development",
    issuer: "IBM",
    date: "August 2025 – September 2025",
    skillsLearned: "HTML/CSS, React.js, PHP, Node.js, JavaScript, Java",
    category: "Web Engineering",
    description: "Full-stack web fundamentals, frontend architecture, and client-server integration."
  },
  {
    id: "cert-4",
    title: "Cyber Security",
    issuer: "Live Wire",
    date: "July 2025",
    skillsLearned: "Networking, Decision-Making, Computer Vision, Network Security, Penetration Testing, Cryptography",
    category: "Network Defense",
    description: "Network security protocols, cipher defense, threat detection, and mitigation strategies."
  },
  {
    id: "cert-5",
    title: "Campaign Craze",
    issuer: "Sunstone School Of Management",
    date: "March 2025 – July 2025",
    skillsLearned: "Communication, Critical thinking, Leadership, Teamwork, Problem-Solving",
    category: "Strategy & Execution",
    description: "Strategic campaign coordination, cross-functional execution, and collaborative outreach."
  }
];

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "ach-1",
    title: "2nd Prize — Coding Competition",
    org: "The TipsGlobal Institute (TIPS Campus)",
    tag: "Programming",
    year: "2025",
    description: "Recognized at the TIPS campus for programming skills, innovation, and technical problem-solving under competition constraints."
  },
  {
    id: "ach-2",
    title: "1st Position — Coding Quiz",
    org: "The TipsGlobal Institute (TIPS Campus)",
    tag: "CS Quiz",
    year: "2025",
    description: "Achieved first position in a competitive team-based coding quiz held at the TIPS campus, demonstrating strong computational analysis."
  },
  {
    id: "ach-3",
    title: "1st Place — Debate Competition",
    org: "The TipsGlobal Institute (TIPS Campus)",
    tag: "Leadership & Debate",
    year: "2024",
    description: "Secured first place in a team-led debate competition at the TIPS campus, demonstrating clear reasoning, quick logic, and articulation."
  },
  {
    id: "ach-4",
    title: "1st Place — Tech Quiz: Web Programming",
    org: "TIPS Tech Club",
    tag: "Web Dev Quiz",
    year: "2025",
    description: "Won first place in a team-led technical quiz focused on modern web programming concepts and frontend performance organized by the TIPS Tech Club."
  },
  {
    id: "ach-5",
    title: "2nd Position — Paper Couture",
    org: "The TipsGlobal Institute (TIPS Campus)",
    tag: "Creativity & Design",
    year: "2024",
    description: "Secured second position in the TIPS campus event, demonstrating exceptional structural creativity and artistic vision."
  }
];

const DEFAULT_EXPERIENCES = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    company: "Coding Blocks",
    period: "June 2026 – July 2026",
    badge: "Internship",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Java", "Bootstrap"],
    highlights: [
      "Created responsive web pages to improve user experience across desktop and mobile devices.",
      "Contributed to website feature development, user flow improvements, and layout optimizations.",
      "Gained exposure to performance optimization, testing, and systematic debugging practices.",
      "Practiced modern web development techniques and industry-standard developer tools."
    ]
  },
  {
    id: "exp-2",
    role: "Cybersecurity Intern",
    company: "Live Wire",
    period: "June 2025 – July 2025",
    badge: "Internship",
    techStack: ["Network Security", "Cryptography", "Networking Fundamentals", "APIs", "Ethical Hacking"],
    highlights: [
      "Learned practical approaches to protecting computational systems and networks from vulnerabilities.",
      "Explored network traffic monitoring, threat vectors, and data security defense mechanisms.",
      "Gained comprehensive knowledge of cybersecurity threats and proactive online safety practices.",
      "Developed collaborative teamwork and technical problem-solving skills under mentor guidance."
    ]
  }
];

const DEFAULT_EDUCATION = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "The TipsGlobal Institute",
    period: "2024 – 2027",
    status: "Currently Pursuing",
    scoreBadge: "Expected Graduation: 2027",
    focus: "Computer Applications, Web Development, Data Structures & Cybersecurity"
  },
  {
    id: "edu-2",
    degree: "Higher Secondary — Class XII",
    institution: "Mahatma Gandhi Matric Higher Secondary School",
    period: "Completed 2024",
    status: "Completed",
    scoreBadge: "Percentage: 60%",
    focus: "Science & Computer Studies Curriculum"
  },
  {
    id: "edu-3",
    degree: "Secondary — Class X",
    institution: "Sri Giri Easwara Matric School",
    period: "Completed 2022",
    status: "Completed",
    scoreBadge: "Percentage: 67%",
    focus: "General Secondary Education Foundation"
  }
];

// --- Storage Keys ---
const STORAGE_KEYS = {
  PROFILE: 'abinaya_portfolio_profile',
  PHOTO: 'abinaya_portfolio_photo',
  RESUME_PDF: 'abinaya_portfolio_resume_pdf',
  SKILLS: 'abinaya_portfolio_skills',
  PROJECTS: 'abinaya_portfolio_projects',
  CERTIFICATIONS: 'abinaya_portfolio_certifications',
  ACHIEVEMENTS: 'abinaya_portfolio_achievements',
  EXPERIENCE: 'abinaya_portfolio_experience',
  EDUCATION: 'abinaya_portfolio_education'
};

// ==========================================================================
// MAIN INITIALIZATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Toast Notification System
  const showToast = (message, icon = '✓') => {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:var(--color-sage-100);color:var(--color-teal-700);font-weight:800;font-size:13px;">${icon}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  };

  // 2. Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Modal Dialog Manager
  const modalBackdrop = document.getElementById('custom-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDialog = modalBackdrop ? modalBackdrop.querySelector('.modal-dialog') : null;

  const openModal = (title, htmlContent, isLarge = false) => {
    if (!modalBackdrop) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = htmlContent;
    if (modalDialog) {
      if (isLarge) {
        modalDialog.classList.add('modal-lg');
      } else {
        modalDialog.classList.remove('modal-lg');
      }
    }
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = 'auto';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // 4. Sticky Navbar & ScrollSpy
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const onScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollPosition = window.scrollY + 130;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        desktopNavLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
        mobileNavLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

  // 5. Mobile Hamburger Menu Toggle
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 6. Back-to-Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. Phone Privacy Notice Toggle
  const phoneToggleBtn = document.getElementById('phone-toggle-btn');
  const phoneNoticeText = document.getElementById('phone-notice-text');
  if (phoneToggleBtn && phoneNoticeText) {
    phoneToggleBtn.addEventListener('click', () => {
      const isHidden = phoneNoticeText.style.display === 'none' || phoneNoticeText.style.display === '';
      phoneNoticeText.style.display = isHidden ? 'block' : 'none';
      phoneToggleBtn.textContent = isHidden ? 'Hide policy' : 'View policy';
    });
  }

  // ==========================================================================
  // 8. PROFILE PHOTO UPLOAD & PERSISTENCE
  // ==========================================================================
  const profilePhotoInput = document.getElementById('profile-photo-input');
  const profileAvatarImg = document.getElementById('profile-avatar-img');
  const uploadPhotoBtn = document.getElementById('upload-photo-btn');
  const resetPhotoBtn = document.getElementById('reset-photo-btn');

  const savedPhoto = localStorage.getItem(STORAGE_KEYS.PHOTO);
  if (profileAvatarImg) {
    profileAvatarImg.src = savedPhoto ? savedPhoto : 'profile.jpg';
  }

  if (uploadPhotoBtn && profilePhotoInput) {
    uploadPhotoBtn.addEventListener('click', () => profilePhotoInput.click());
  }

  if (profilePhotoInput) {
    profilePhotoInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPG, PNG, WebP).');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (profileAvatarImg) profileAvatarImg.src = dataUrl;
        localStorage.setItem(STORAGE_KEYS.PHOTO, dataUrl);
        showToast('Profile photo updated and saved successfully!', '✓');
      };
      reader.readAsDataURL(file);
    });
  }

  if (resetPhotoBtn) {
    resetPhotoBtn.addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEYS.PHOTO);
      if (profileAvatarImg) profileAvatarImg.src = 'profile.jpg?t=' + Date.now();
      showToast('Profile photo reset to default verified photo.', '↺');
    });
  }

  // ==========================================================================
  // 8B. RESUME PDF UPLOAD, PERSISTENCE & DOWNLOAD SYSTEM
  // ==========================================================================
  const uploadResumePdfBtn = document.getElementById('upload-resume-pdf-btn');
  const resumeFileInput = document.getElementById('resume-file-input');

  const applyResumePdfUrl = (url) => {
    const downloadLinks = document.querySelectorAll('a[download]');
    const targetHref = url || 'Abinaya_R_Resume.pdf';
    downloadLinks.forEach(link => {
      link.href = targetHref;
      link.setAttribute('download', 'Abinaya_R_Resume.pdf');
    });
  };

  const savedResumePdf = localStorage.getItem(STORAGE_KEYS.RESUME_PDF);
  if (savedResumePdf) {
    applyResumePdfUrl(savedResumePdf);
  }

  if (uploadResumePdfBtn && resumeFileInput) {
    uploadResumePdfBtn.addEventListener('click', () => resumeFileInput.click());
  }

  if (resumeFileInput) {
    resumeFileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        alert('Please select a valid PDF file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        try {
          localStorage.setItem(STORAGE_KEYS.RESUME_PDF, dataUrl);
        } catch (err) {
          console.warn('LocalStorage quota limit reached, applied in-memory:', err);
        }
        applyResumePdfUrl(dataUrl);
        showToast('Official Resume PDF updated and saved successfully!', '📄');
      };
      reader.readAsDataURL(file);
    });
  }

  // ==========================================================================
  // 9. PROFILE MANAGEMENT: UPDATE, SAVE & RESET
  // ==========================================================================
  const getProfileData = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROFILE);
      return stored ? { ...DEFAULT_PROFILE, ...JSON.parse(stored) } : { ...DEFAULT_PROFILE };
    } catch {
      return { ...DEFAULT_PROFILE };
    }
  };

  const applyProfileData = (data) => {
    // Brand header
    const brandName = document.querySelector('.brand-name');
    if (brandName) brandName.textContent = data.name;

    // Hero elements
    const heroName = document.querySelector('.hero-name');
    if (heroName) heroName.textContent = data.name;

    const heroRole = document.querySelector('.hero-title');
    if (heroRole) {
      const parts = data.role.split('|');
      if (parts.length > 1) {
        heroRole.innerHTML = `
          <span>${parts[0].trim()}</span>
          <span style="color: var(--color-sage-300);">|</span>
          <span style="color: var(--color-teal-700);">${parts[1].trim()}</span>
        `;
      } else {
        heroRole.textContent = data.role;
      }
    }

    const heroIntro = document.querySelector('.hero-intro');
    if (heroIntro && data.aboutBio) heroIntro.textContent = data.aboutBio;

    // Profile Card in Hero
    const cardHeroName = document.getElementById('card-hero-name');
    if (cardHeroName) cardHeroName.textContent = data.name;

    const cardHeroRole = document.getElementById('card-hero-role');
    if (cardHeroRole) cardHeroRole.innerHTML = `${data.tagline || 'BCA Student &bull; The TipsGlobal Institute'}`;

    // About section elements
    const aboutLeadBio = document.getElementById('about-lead-bio');
    if (aboutLeadBio && data.aboutBio) aboutLeadBio.textContent = data.aboutBio;

    // Technical focus items on hero card
    const comp1Title = document.getElementById('comp-1-title');
    const comp1Desc = document.getElementById('comp-1-desc');
    if (comp1Title) comp1Title.textContent = data.focus1Title || 'React.js Frontend';
    if (comp1Desc) comp1Desc.textContent = data.focus1Desc || 'Components, Modern JavaScript, UI/UX';

    const comp2Title = document.getElementById('comp-2-title');
    const comp2Desc = document.getElementById('comp-2-desc');
    if (comp2Title) comp2Title.textContent = data.focus2Title || 'Network Security';
    if (comp2Desc) comp2Desc.textContent = data.focus2Desc || 'Defense Concepts, Ciphers & Safety';

    const comp3Title = document.getElementById('comp-3-title');
    const comp3Desc = document.getElementById('comp-3-desc');
    if (comp3Title) comp3Title.textContent = data.focus3Title || 'Algorithms & DSA';
    if (comp3Desc) comp3Desc.textContent = data.focus3Desc || 'Problem Solving & Programming Logic';

    // Social Links in Hero
    const heroGithubLink = document.getElementById('hero-github-link');
    if (heroGithubLink) heroGithubLink.href = data.github;

    const heroLinkedinLink = document.getElementById('hero-linkedin-link');
    if (heroLinkedinLink) heroLinkedinLink.href = data.linkedin;

    const heroLeetcodeLink = document.getElementById('hero-leetcode-link');
    if (heroLeetcodeLink) heroLeetcodeLink.href = data.leetcode;

    // Contact Section Links
    const contactEmailLink = document.getElementById('contact-email-link');
    if (contactEmailLink) {
      contactEmailLink.href = `mailto:${data.email}`;
      contactEmailLink.textContent = data.email;
    }

    const contactLocation = document.getElementById('contact-location-text');
    if (contactLocation) contactLocation.textContent = data.location;

    const contactPhoneLink = document.getElementById('contact-phone-link');
    if (contactPhoneLink) {
      contactPhoneLink.href = `tel:${data.phone}`;
      contactPhoneLink.textContent = `+91 ${data.phone}`;
    }

    const contactGithubLink = document.getElementById('contact-github-link');
    if (contactGithubLink) contactGithubLink.href = data.github;

    const contactLinkedinLink = document.getElementById('contact-linkedin-link');
    if (contactLinkedinLink) contactLinkedinLink.href = data.linkedin;

    const contactLeetcodeLink = document.getElementById('contact-leetcode-link');
    if (contactLeetcodeLink) contactLeetcodeLink.href = data.leetcode;

    // Footer Links & Info
    const footerGithubLink = document.getElementById('footer-github-link');
    if (footerGithubLink) footerGithubLink.href = data.github;

    const footerLinkedinLink = document.getElementById('footer-linkedin-link');
    if (footerLinkedinLink) footerLinkedinLink.href = data.linkedin;

    const footerLeetcodeLink = document.getElementById('footer-leetcode-link');
    if (footerLeetcodeLink) footerLeetcodeLink.href = data.leetcode;

    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.textContent = data.name;

    const footerTagline = document.getElementById('footer-tagline');
    if (footerTagline) footerTagline.textContent = data.role;
  };

  const initialProfile = getProfileData();
  applyProfileData(initialProfile);

  // Edit / Update Profile Modal
  const openProfileModal = () => {
    const current = getProfileData();
    const formHtml = `
      <form id="edit-profile-form">
        <div style="background: var(--color-sage-50); border: 1px solid var(--border-medium); padding: 0.85rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; font-size: 0.84rem; color: var(--color-text-body);">
          ✏️ <strong>Update Profile Details</strong>: Any changes made and saved here immediately update the website and official resume document, and persist in your browser.
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="prof-name">Full Name *</label>
            <input type="text" id="prof-name" value="${current.name}" required>
          </div>
          <div class="modal-form-group">
            <label for="prof-tagline">Academic Tagline / Institute</label>
            <input type="text" id="prof-tagline" value="${current.tagline}" required>
          </div>
        </div>

        <div class="modal-form-group">
          <label for="prof-role">Headline / Role Title *</label>
          <input type="text" id="prof-role" value="${current.role}" required>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="prof-email">Email Address *</label>
            <input type="email" id="prof-email" value="${current.email}" required>
          </div>
          <div class="modal-form-group">
            <label for="prof-phone">Phone Number *</label>
            <input type="text" id="prof-phone" value="${current.phone}" required>
          </div>
        </div>

        <div class="modal-form-group">
          <label for="prof-location">Location / Region</label>
          <input type="text" id="prof-location" value="${current.location}">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="prof-github">GitHub Profile URL</label>
            <input type="url" id="prof-github" value="${current.github}" required>
          </div>
          <div class="modal-form-group">
            <label for="prof-linkedin">LinkedIn Profile URL</label>
            <input type="url" id="prof-linkedin" value="${current.linkedin}" required>
          </div>
        </div>

        <div class="modal-form-group">
          <label for="prof-leetcode">LeetCode Profile URL</label>
          <input type="url" id="prof-leetcode" value="${current.leetcode}" required>
        </div>

        <div class="modal-form-group">
          <label for="prof-bio">About Me &amp; Professional Bio</label>
          <textarea id="prof-bio" rows="3">${current.aboutBio}</textarea>
        </div>

        <div class="modal-form-actions">
          <button type="button" id="modal-reset-profile-btn" class="btn btn-secondary btn-sm" style="margin-right: auto;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            Reset Defaults
          </button>
          <button type="button" id="cancel-profile-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            Save Profile
          </button>
        </div>
      </form>
    `;

    openModal('Update & Save Profile Information', formHtml, true);

    document.getElementById('cancel-profile-btn').addEventListener('click', closeModal);

    document.getElementById('modal-reset-profile-btn').addEventListener('click', () => {
      if (confirm('Reset profile information and contact details to original defaults?')) {
        localStorage.removeItem(STORAGE_KEYS.PROFILE);
        applyProfileData(DEFAULT_PROFILE);
        closeModal();
        showToast('Profile information reset to defaults.', '↺');
      }
    });

    document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const updated = {
        name: document.getElementById('prof-name').value.trim(),
        role: document.getElementById('prof-role').value.trim(),
        tagline: document.getElementById('prof-tagline').value.trim(),
        email: document.getElementById('prof-email').value.trim(),
        phone: document.getElementById('prof-phone').value.trim(),
        location: document.getElementById('prof-location').value.trim(),
        github: document.getElementById('prof-github').value.trim(),
        linkedin: document.getElementById('prof-linkedin').value.trim(),
        leetcode: document.getElementById('prof-leetcode').value.trim(),
        aboutBio: document.getElementById('prof-bio').value.trim()
      };

      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
      applyProfileData(updated);
      closeModal();
      showToast('Profile updated and saved successfully!', '✓');
    });
  };

  // Direct Triggers for Profile Management (Hub buttons)
  const openProfileEditBtn = document.getElementById('open-profile-edit-btn');
  if (openProfileEditBtn) openProfileEditBtn.addEventListener('click', openProfileModal);

  const heroEditProfileBtn = document.getElementById('hero-edit-profile-btn');
  if (heroEditProfileBtn) heroEditProfileBtn.addEventListener('click', openProfileModal);

  const heroSaveProfileBtn = document.getElementById('hero-save-profile-btn');
  if (heroSaveProfileBtn) {
    heroSaveProfileBtn.addEventListener('click', () => {
      openProfileModal();
    });
  }

  const heroResetProfileBtn = document.getElementById('hero-reset-profile-btn');
  if (heroResetProfileBtn) {
    heroResetProfileBtn.addEventListener('click', () => {
      if (confirm('Reset profile to default verified resume details?')) {
        localStorage.removeItem(STORAGE_KEYS.PROFILE);
        applyProfileData(DEFAULT_PROFILE);
        showToast('Profile information restored to defaults.', '↺');
      }
    });
  }

  // ==========================================================================
  // 10. DYNAMIC SKILLS SYSTEM (ADD, EDIT, DELETE, FILTER, RESET)
  // ==========================================================================
  const getStoredSkills = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SKILLS);
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_SKILLS));
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_SKILLS));
    }
  };

  const saveSkills = (skills) => {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  };

  const renderSkills = () => {
    const skills = getStoredSkills();
    const categories = ['web', 'cyber', 'programming', 'db', 'soft'];
    let totalCount = 0;

    categories.forEach(cat => {
      const wrapper = document.querySelector(`[data-category="${cat}"] .skill-badges-wrapper`);
      if (!wrapper) return;

      const catSkills = skills[cat] || [];
      totalCount += catSkills.length;
      wrapper.innerHTML = catSkills.map((sk, index) => `
        <div class="skill-badge" data-cat="${cat}" data-index="${index}">
          <span class="skill-name">${sk.name}</span>
          ${sk.sub ? `<span class="skill-sub">${sk.sub}</span>` : ''}
          <button class="skill-delete-btn" data-cat="${cat}" data-index="${index}" title="Remove ${sk.name}">&times;</button>
        </div>
      `).join('');
    });

    const skillsCountBadge = document.getElementById('skills-count-badge');
    if (skillsCountBadge) {
      skillsCountBadge.textContent = `${totalCount} Technical Skills`;
    }

    // Attach delete listeners
    document.querySelectorAll('.skill-delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = e.currentTarget.getAttribute('data-cat');
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        const currSkills = getStoredSkills();
        if (currSkills[cat] && currSkills[cat][index]) {
          const removedName = currSkills[cat][index].name;
          currSkills[cat].splice(index, 1);
          saveSkills(currSkills);
          renderSkills();
          showToast(`Removed ${removedName} from skills`, '🗑️');
        }
      });
    });
  };

  // Add Skill Modal
  const addSkillBtn = document.getElementById('add-skill-btn');
  if (addSkillBtn) {
    addSkillBtn.addEventListener('click', () => {
      const formHtml = `
        <form id="skill-form">
          <div class="modal-form-group">
            <label for="skill-name-input">Skill Name *</label>
            <input type="text" id="skill-name-input" placeholder="e.g. Next.js, Docker, TypeScript, Kali Linux" required>
          </div>

          <div class="modal-form-group">
            <label for="skill-cat-select">Category Group *</label>
            <select id="skill-cat-select" required>
              <option value="web">Web Development</option>
              <option value="cyber">Cybersecurity &amp; Defense</option>
              <option value="programming">Programming Languages</option>
              <option value="db">Database &amp; Cloud</option>
              <option value="soft">Soft Skills &amp; Execution</option>
            </select>
          </div>

          <div class="modal-form-group">
            <label for="skill-sub-input">Subtitle / Descriptor</label>
            <input type="text" id="skill-sub-input" placeholder="e.g. Component Architecture, Vulnerability Scanning">
          </div>

          <div class="modal-form-actions">
            <button type="button" id="skill-cancel-btn" class="btn btn-secondary btn-sm">Cancel</button>
            <button type="submit" class="btn btn-primary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Add &amp; Save Skill
            </button>
          </div>
        </form>
      `;

      openModal('+ Add Technical Skill', formHtml);
      document.getElementById('skill-cancel-btn').addEventListener('click', closeModal);

      document.getElementById('skill-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('skill-name-input').value.trim();
        const cat = document.getElementById('skill-cat-select').value;
        const sub = document.getElementById('skill-sub-input').value.trim();

        if (!name) return;

        const currSkills = getStoredSkills();
        if (!currSkills[cat]) currSkills[cat] = [];
        currSkills[cat].push({ name, sub: sub || 'Proficient' });

        saveSkills(currSkills);
        renderSkills();
        closeModal();
        showToast(`Added ${name} to ${cat.toUpperCase()} skills!`, '✓');
      });
    });
  }

  // Reset Skills Button
  const resetSkillsBtn = document.getElementById('reset-skills-btn');
  if (resetSkillsBtn) {
    resetSkillsBtn.addEventListener('click', () => {
      if (confirm('Reset all skills to resume default skills?')) {
        saveSkills(DEFAULT_SKILLS);
        renderSkills();
        showToast('Skills reset to resume defaults.', '↺');
      }
    });
  }

  // Skills Interactive Filtering
  const filterButtons = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-group-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  renderSkills();

  // ==========================================================================
  // 11. DYNAMIC PROJECTS SYSTEM (ADD, EDIT, DELETE, RESET)
  // ==========================================================================
  const getStoredProjects = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return stored ? JSON.parse(stored) : [...DEFAULT_PROJECTS];
    } catch {
      return [...DEFAULT_PROJECTS];
    }
  };

  const saveProjects = (projects) => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  };

  const renderProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const countBadge = document.getElementById('projects-count-badge');
    const projects = getStoredProjects();

    if (countBadge) {
      countBadge.textContent = `${projects.length} Project${projects.length === 1 ? '' : 's'}`;
    }

    if (projects.length === 0) {
      container.innerHTML = `
        <div class="glass-panel" style="grid-column: 1 / -1; text-align: center; padding: 3.5rem;">
          <h3 style="color: var(--color-text-main); margin-bottom: 0.5rem;">No projects in portfolio</h3>
          <p style="color: var(--color-text-body); margin-bottom: 1.5rem;">Click "+ Add Project" to showcase your work!</p>
          <button id="empty-add-proj-btn" class="btn btn-primary btn-sm">+ Add Project</button>
        </div>
      `;
      const emptyAddBtn = document.getElementById('empty-add-proj-btn');
      if (emptyAddBtn) emptyAddBtn.addEventListener('click', () => openProjectModal());
      return;
    }

    container.innerHTML = projects.map((proj, idx) => `
      <div class="glass-panel project-card" data-project-id="${proj.id || idx}">
        <div class="project-card-header">
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <span style="padding: 0.25rem 0.75rem; background: var(--color-sage-100); color: var(--color-pine-900); border: 1px solid var(--color-sage-200); border-radius: var(--radius-full); font-size: 0.78rem; font-weight: 700;">
              ${proj.year || '2026'}
            </span>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-teal-700); background: var(--color-sage-50); border: 1px solid var(--color-sage-200); padding: 0.2rem 0.65rem; border-radius: var(--radius-full);">
              ${proj.badge || 'Project'}
            </span>
          </div>
          <div class="card-admin-actions">
            <button class="btn-card-action btn-edit-proj" data-id="${proj.id || idx}" title="Edit this project">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              Edit
            </button>
            <button class="btn-card-action btn-delete btn-delete-proj" data-id="${proj.id || idx}" title="Delete project">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>

        <h3 style="font-size: 1.45rem; font-weight: 800; color: var(--color-text-main); line-height: 1.3; margin-bottom: 0.75rem;">
          ${proj.title}
        </h3>

        <p style="font-size: 0.95rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1.25rem;">
          ${proj.description}
        </p>

        ${proj.features && proj.features.length ? `
          <div style="margin-bottom: 1.5rem; flex-grow: 1;">
            <div style="font-size: 0.8rem; font-weight: 800; color: var(--color-pine-800); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.65rem;">
              Key Highlights:
            </div>
            <ul class="features-list">
              ${proj.features.map(feat => `
                <li class="feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${feat}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        ${proj.techStack && proj.techStack.length ? `
          <div class="tech-tag-row" style="margin-bottom: 1.5rem;">
            ${proj.techStack.map(tag => `<span class="tech-tag">${tag.trim()}</span>`).join('')}
          </div>
        ` : ''}

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: auto; padding-top: 1.15rem; border-top: 1px solid var(--border-subtle);">
          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1; justify-content: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub Repo</span>
            </a>
          ` : ''}
          ${proj.demoUrl ? `
            <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex: 1; justify-content: center;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          ` : ''}
        </div>
      </div>
    `).join('');

    // Listeners
    container.querySelectorAll('.btn-edit-proj').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });

    container.querySelectorAll('.btn-delete-proj').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this project?')) {
          const projs = getStoredProjects().filter(p => (p.id || '') != id);
          saveProjects(projs);
          renderProjects();
          showToast('Project removed.', '🗑️');
        }
      });
    });
  };

  const openProjectModal = (editingId = null) => {
    const projects = getStoredProjects();
    const existing = editingId ? projects.find(p => (p.id || '') == editingId) : null;

    const modalTitleText = existing ? 'Edit Project' : '+ Add New Project';
    const formHtml = `
      <form id="project-form">
        <div class="modal-form-group">
          <label for="proj-input-title">Project Title *</label>
          <input type="text" id="proj-input-title" placeholder="e.g. Smart E-Commerce Marketplace" value="${existing ? existing.title : ''}" required>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="proj-input-year">Year / Status</label>
            <input type="text" id="proj-input-year" placeholder="e.g. 2026 or Ongoing" value="${existing ? existing.year : new Date().getFullYear()}">
          </div>
          <div class="modal-form-group">
            <label for="proj-input-badge">Category Badge</label>
            <input type="text" id="proj-input-badge" placeholder="e.g. Featured Web App" value="${existing ? existing.badge : 'Web Project'}">
          </div>
        </div>

        <div class="modal-form-group">
          <label for="proj-input-desc">Short Summary / Description *</label>
          <textarea id="proj-input-desc" rows="2" placeholder="Briefly describe the project..." required>${existing ? existing.description : ''}</textarea>
        </div>

        <div class="modal-form-group">
          <label for="proj-input-features">Key Highlights (One feature per line)</label>
          <textarea id="proj-input-features" rows="3" placeholder="Product search and filter\nCart and wishlist management\nResponsive mobile UI">${existing && existing.features ? existing.features.join('\n') : ''}</textarea>
        </div>

        <div class="modal-form-group">
          <label for="proj-input-stack">Tech Stack (comma-separated)</label>
          <input type="text" id="proj-input-stack" placeholder="React.js, Node.js, Express, CSS, MongoDB" value="${existing && existing.techStack ? existing.techStack.join(', ') : 'HTML, CSS, JavaScript, React.js'}">
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="proj-input-github">GitHub Repository Link</label>
            <input type="url" id="proj-input-github" placeholder="https://github.com/..." value="${existing ? existing.githubUrl : 'https://github.com/raviabinaya20106-del'}">
          </div>
          <div class="modal-form-group">
            <label for="proj-input-demo">Live Demo Link</label>
            <input type="url" id="proj-input-demo" placeholder="https://..." value="${existing ? existing.demoUrl : ''}">
          </div>
        </div>

        <div class="modal-form-actions">
          <button type="button" id="proj-cancel-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">${existing ? 'Save Project Changes' : 'Add &amp; Save Project'}</button>
        </div>
      </form>
    `;

    openModal(modalTitleText, formHtml);
    document.getElementById('proj-cancel-btn').addEventListener('click', closeModal);

    document.getElementById('project-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('proj-input-title').value.trim();
      const year = document.getElementById('proj-input-year').value.trim();
      const badge = document.getElementById('proj-input-badge').value.trim();
      const desc = document.getElementById('proj-input-desc').value.trim();
      const featuresRaw = document.getElementById('proj-input-features').value.trim();
      const stackRaw = document.getElementById('proj-input-stack').value.trim();
      const githubUrl = document.getElementById('proj-input-github').value.trim();
      const demoUrl = document.getElementById('proj-input-demo').value.trim();

      const features = featuresRaw ? featuresRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];
      const techStack = stackRaw ? stackRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

      let currentProjects = getStoredProjects();

      if (existing) {
        currentProjects = currentProjects.map(p => {
          if ((p.id || '') == editingId) {
            return { ...p, title, year, badge, description: desc, features, techStack, githubUrl, demoUrl };
          }
          return p;
        });
        showToast('Project updated successfully!', '✓');
      } else {
        const newProj = {
          id: 'proj-' + Date.now(),
          title,
          year,
          badge,
          description: desc,
          features,
          techStack,
          githubUrl,
          demoUrl
        };
        currentProjects.unshift(newProj);
        showToast('New project added and saved!', '✓');
      }

      saveProjects(currentProjects);
      renderProjects();
      closeModal();
    });
  };

  const addProjectBtn = document.getElementById('add-project-btn');
  if (addProjectBtn) addProjectBtn.addEventListener('click', () => openProjectModal());

  const resetProjectsBtn = document.getElementById('reset-projects-btn');
  if (resetProjectsBtn) {
    resetProjectsBtn.addEventListener('click', () => {
      if (confirm('Reset all projects to original resume default projects?')) {
        saveProjects(DEFAULT_PROJECTS);
        renderProjects();
        showToast('Projects reset to defaults.', '↺');
      }
    });
  }

  renderProjects();

  // ==========================================================================
  // 12. DYNAMIC CERTIFICATIONS SYSTEM (ADD, EDIT, DELETE, RESET)
  // ==========================================================================
  const getStoredCertifications = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CERTIFICATIONS);
      return stored ? JSON.parse(stored) : [...DEFAULT_CERTIFICATIONS];
    } catch {
      return [...DEFAULT_CERTIFICATIONS];
    }
  };

  const saveCertifications = (certs) => {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATIONS, JSON.stringify(certs));
  };

  const renderCertifications = () => {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    const countBadge = document.getElementById('certifications-count-badge');
    const certs = getStoredCertifications();

    if (countBadge) {
      countBadge.textContent = `${certs.length} Credential${certs.length === 1 ? '' : 's'}`;
    }

    if (certs.length === 0) {
      container.innerHTML = `
        <div class="glass-panel" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <h3 style="color: var(--color-text-main); margin-bottom: 0.5rem;">No certifications added yet</h3>
          <p style="color: var(--color-text-body); margin-bottom: 1.5rem;">Click "+ Add Certificate" to register your verified credentials!</p>
          <button id="empty-add-cert-btn" class="btn btn-primary btn-sm">+ Add Certificate</button>
        </div>
      `;
      const emptyBtn = document.getElementById('empty-add-cert-btn');
      if (emptyBtn) emptyBtn.addEventListener('click', () => openCertModal());
      return;
    }

    container.innerHTML = certs.map((c, idx) => `
      <div class="glass-panel card-common" data-cert-id="${c.id || idx}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
          <div class="card-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M7 7h10M7 11h10M7 15h6"></path>
            </svg>
          </div>
          <span style="padding: 0.25rem 0.65rem; background: var(--color-sage-100); border: 1px solid var(--color-sage-200); border-radius: var(--radius-full); font-size: 0.78rem; font-weight: 700; color: var(--color-pine-800);">
            ${c.issuer || 'Credential'}
          </span>
          <div class="card-admin-actions">
            <button class="btn-card-action btn-edit-cert" data-id="${c.id || idx}" title="Edit certificate">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              Edit
            </button>
            <button class="btn-card-action btn-delete btn-delete-cert" data-id="${c.id || idx}" title="Delete certificate">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>

        <div>
          <h3 style="font-size: 1.18rem; font-weight: 800; color: var(--color-text-main); line-height: 1.35;">
            ${c.title}
          </h3>
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-teal-700); margin-top: 4px;">
            Issuing Body: ${c.issuer}
          </div>
        </div>

        ${c.skillsLearned ? `
          <div style="font-size: 0.825rem; color: var(--color-text-body); background: var(--color-sage-50); border: 1px solid var(--border-medium); padding: 0.45rem 0.75rem; border-radius: var(--radius-sm); line-height: 1.45;">
            <strong style="color: var(--color-pine-900);">Skills learned:</strong> ${c.skillsLearned}
          </div>
        ` : (c.description ? `
          <p style="font-size: 0.9rem; color: var(--color-text-body); line-height: 1.55;">
            ${c.description}
          </p>
        ` : '')}

        <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.825rem; background: var(--color-sage-50); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border: 1px solid var(--border-medium); margin-top: auto;">
          <span style="font-weight: 600;">Completed:</span>
          <span style="font-weight: 800; color: var(--color-pine-900);">${c.date || 'Verified'}</span>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-edit-cert').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openCertModal(id);
      });
    });

    container.querySelectorAll('.btn-delete-cert').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('Delete this certification?')) {
          const certs = getStoredCertifications().filter(c => (c.id || '') != id);
          saveCertifications(certs);
          renderCertifications();
          showToast('Certification deleted.', '🗑️');
        }
      });
    });
  };

  const openCertModal = (editingId = null) => {
    const certs = getStoredCertifications();
    const existing = editingId ? certs.find(c => (c.id || '') == editingId) : null;

    const modalTitleText = existing ? 'Edit Certification' : '+ Add New Certification';
    const formHtml = `
      <form id="cert-form">
        <div class="modal-form-group">
          <label for="cert-input-title">Certification Title *</label>
          <input type="text" id="cert-input-title" placeholder="e.g. Oracle Certified Foundation Associate" value="${existing ? existing.title : ''}" required>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="cert-input-issuer">Issuing Organization *</label>
            <input type="text" id="cert-input-issuer" placeholder="e.g. Oracle, AWS, IBM, Google" value="${existing ? existing.issuer : ''}" required>
          </div>
          <div class="modal-form-group">
            <label for="cert-input-date">Completion Date / Period</label>
            <input type="text" id="cert-input-date" placeholder="e.g. Jan 2026 – Feb 2026" value="${existing ? existing.date : '2026'}">
          </div>
        </div>

        <div class="modal-form-group">
          <label for="cert-input-skills">Skills Learned (as shown on official certificate)</label>
          <input type="text" id="cert-input-skills" placeholder="e.g. Critical thinking, HTML/CSS, React.js, Node.js, JavaScript, Java" value="${existing && existing.skillsLearned ? existing.skillsLearned : ''}">
        </div>

        <div class="modal-form-group">
          <label for="cert-input-desc">Competency / Knowledge Area Description</label>
          <textarea id="cert-input-desc" rows="2" placeholder="Briefly describe what this certificate validates...">${existing ? existing.description : ''}</textarea>
        </div>

        <div class="modal-form-actions">
          <button type="button" id="cert-cancel-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">${existing ? 'Save Changes' : 'Add &amp; Save Certificate'}</button>
        </div>
      </form>
    `;

    openModal(modalTitleText, formHtml);
    document.getElementById('cert-cancel-btn').addEventListener('click', closeModal);

    document.getElementById('cert-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('cert-input-title').value.trim();
      const issuer = document.getElementById('cert-input-issuer').value.trim();
      const date = document.getElementById('cert-input-date').value.trim();
      const skillsLearned = document.getElementById('cert-input-skills').value.trim();
      const desc = document.getElementById('cert-input-desc').value.trim();

      let currentCerts = getStoredCertifications();
      if (existing) {
        currentCerts = currentCerts.map(c => {
          if ((c.id || '') == editingId) {
            return { ...c, title, issuer, date, skillsLearned, description: desc };
          }
          return c;
        });
        showToast('Certification updated successfully!', '✓');
      } else {
        const newCert = {
          id: 'cert-' + Date.now(),
          title,
          issuer,
          date,
          skillsLearned,
          description: desc
        };
        currentCerts.push(newCert);
        showToast('New certification added and saved!', '✓');
      }

      saveCertifications(currentCerts);
      renderCertifications();
      closeModal();
    });
  };

  const addCertBtn = document.getElementById('add-cert-btn');
  if (addCertBtn) addCertBtn.addEventListener('click', () => openCertModal());

  const resetCertsBtn = document.getElementById('reset-certs-btn');
  if (resetCertsBtn) {
    resetCertsBtn.addEventListener('click', () => {
      if (confirm('Reset certifications to default verified credentials?')) {
        saveCertifications(DEFAULT_CERTIFICATIONS);
        renderCertifications();
        showToast('Certifications reset to defaults.', '↺');
      }
    });
  }

  renderCertifications();

  // ==========================================================================
  // 13. DYNAMIC ACHIEVEMENTS SYSTEM (ADD, EDIT, DELETE, RESET)
  // ==========================================================================
  const getStoredAchievements = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
      return stored ? JSON.parse(stored) : [...DEFAULT_ACHIEVEMENTS];
    } catch {
      return [...DEFAULT_ACHIEVEMENTS];
    }
  };

  const saveAchievements = (achievements) => {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
  };

  const renderAchievements = () => {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    const countBadge = document.getElementById('achievements-count-badge');
    const achievements = getStoredAchievements();

    if (countBadge) {
      countBadge.textContent = `${achievements.length} Award${achievements.length === 1 ? '' : 's'} & Honors`;
    }

    if (achievements.length === 0) {
      container.innerHTML = `
        <div class="glass-panel" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <h3 style="color: var(--color-text-main); margin-bottom: 0.5rem;">No achievements recorded yet</h3>
          <p style="color: var(--color-text-body); margin-bottom: 1.5rem;">Click "+ Add Achievement" to showcase competitive honors!</p>
          <button id="empty-add-ach-btn" class="btn btn-primary btn-sm">+ Add Achievement</button>
        </div>
      `;
      const emptyBtn = document.getElementById('empty-add-ach-btn');
      if (emptyBtn) emptyBtn.addEventListener('click', () => openAchModal());
      return;
    }

    container.innerHTML = achievements.map((ach, idx) => `
      <div class="glass-panel card-common" data-ach-id="${ach.id || idx}">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
          <div class="card-icon-box gold">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
          <span style="padding: 0.2rem 0.65rem; background: var(--color-gold-bg); border: 1px solid var(--color-gold-border); border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 800; color: var(--color-gold);">
            ${ach.tag || 'Award'}
          </span>
          <div class="card-admin-actions">
            <button class="btn-card-action btn-edit-ach" data-id="${ach.id || idx}" title="Edit achievement">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              Edit
            </button>
            <button class="btn-card-action btn-delete btn-delete-ach" data-id="${ach.id || idx}" title="Delete achievement">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>

        <div>
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--color-text-main); line-height: 1.35;">
            ${ach.title}
          </h3>
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--color-teal-700); margin-top: 4px;">
            ${ach.org}
          </div>
        </div>

        <p style="font-size: 0.92rem; color: var(--color-text-body); line-height: 1.6; margin-top: auto;">
          ${ach.description}
        </p>
      </div>
    `).join('');

    container.querySelectorAll('.btn-edit-ach').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openAchModal(id);
      });
    });

    container.querySelectorAll('.btn-delete-ach').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('Delete this achievement?')) {
          const achs = getStoredAchievements().filter(a => (a.id || '') != id);
          saveAchievements(achs);
          renderAchievements();
          showToast('Achievement removed.', '🗑️');
        }
      });
    });
  };

  const openAchModal = (editingId = null) => {
    const achs = getStoredAchievements();
    const existing = editingId ? achs.find(a => (a.id || '') == editingId) : null;

    const modalTitleText = existing ? 'Edit Achievement' : '+ Add New Achievement';
    const formHtml = `
      <form id="ach-form">
        <div class="modal-form-group">
          <label for="ach-input-title">Award / Recognition Title *</label>
          <input type="text" id="ach-input-title" placeholder="e.g. 1st Position — Coding Quiz" value="${existing ? existing.title : ''}" required>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="ach-input-org">Host Institution / Organization *</label>
            <input type="text" id="ach-input-org" placeholder="e.g. The TipsGlobal Institute" value="${existing ? existing.org : 'The TipsGlobal Institute'}" required>
          </div>
          <div class="modal-form-group">
            <label for="ach-input-tag">Category / Tag</label>
            <input type="text" id="ach-input-tag" placeholder="e.g. Programming, CS Quiz, Debate" value="${existing ? existing.tag : 'Competition'}">
          </div>
        </div>

        <div class="modal-form-group">
          <label for="ach-input-desc">Recognition Description *</label>
          <textarea id="ach-input-desc" rows="3" placeholder="Explain the achievement details, competitive standing..." required>${existing ? existing.description : ''}</textarea>
        </div>

        <div class="modal-form-actions">
          <button type="button" id="ach-cancel-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">${existing ? 'Save Changes' : 'Add &amp; Save Achievement'}</button>
        </div>
      </form>
    `;

    openModal(modalTitleText, formHtml);
    document.getElementById('ach-cancel-btn').addEventListener('click', closeModal);

    document.getElementById('ach-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('ach-input-title').value.trim();
      const org = document.getElementById('ach-input-org').value.trim();
      const tag = document.getElementById('ach-input-tag').value.trim();
      const desc = document.getElementById('ach-input-desc').value.trim();

      let currentAchs = getStoredAchievements();
      if (existing) {
        currentAchs = currentAchs.map(a => {
          if ((a.id || '') == editingId) {
            return { ...a, title, org, tag, description: desc };
          }
          return a;
        });
        showToast('Achievement updated successfully!', '✓');
      } else {
        const newAch = {
          id: 'ach-' + Date.now(),
          title,
          org,
          tag,
          description: desc
        };
        currentAchs.push(newAch);
        showToast('New achievement added and saved!', '✓');
      }

      saveAchievements(currentAchs);
      renderAchievements();
      closeModal();
    });
  };

  const addAchBtn = document.getElementById('add-ach-btn');
  if (addAchBtn) addAchBtn.addEventListener('click', () => openAchModal());

  const resetAchsBtn = document.getElementById('reset-achs-btn');
  if (resetAchsBtn) {
    resetAchsBtn.addEventListener('click', () => {
      if (confirm('Reset achievements to default campus recognitions?')) {
        saveAchievements(DEFAULT_ACHIEVEMENTS);
        renderAchievements();
        showToast('Achievements reset to defaults.', '↺');
      }
    });
  }

  renderAchievements();

  // ==========================================================================
  // 14. DYNAMIC EXPERIENCE & EDUCATION SYSTEMS (ADD, EDIT, DELETE, RESET)
  // ==========================================================================
  const getStoredExperiences = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
      return stored ? JSON.parse(stored) : [...DEFAULT_EXPERIENCES];
    } catch {
      return [...DEFAULT_EXPERIENCES];
    }
  };

  const saveExperiences = (exps) => {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(exps));
  };

  const renderExperiences = () => {
    const container = document.getElementById('experience-container');
    if (!container) return;

    const countBadge = document.getElementById('experience-count-badge');
    const experiences = getStoredExperiences();

    if (countBadge) {
      countBadge.textContent = `${experiences.length} Professional Track${experiences.length === 1 ? '' : 's'}`;
    }

    container.innerHTML = experiences.map((exp, idx) => `
      <div class="timeline-item" data-exp-id="${exp.id || idx}">
        <div class="timeline-icon-node">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>

        <div class="glass-panel timeline-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 0.5rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--color-text-main);">${exp.role}</h3>
                <span style="padding: 0.2rem 0.65rem; background: var(--color-sage-100); color: var(--color-pine-900); border: 1px solid var(--color-sage-200); border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">
                  ${exp.badge || 'Internship'}
                </span>
              </div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-teal-700); margin-top: 2px;">
                ${exp.company}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <div style="padding: 0.35rem 0.85rem; background: var(--color-sage-50); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; color: var(--color-pine-800);">
                ${exp.period}
              </div>
              <div class="card-admin-actions">
                <button class="btn-card-action btn-edit-exp" data-id="${exp.id || idx}" title="Edit experience">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Edit
                </button>
                <button class="btn-card-action btn-delete btn-delete-exp" data-id="${exp.id || idx}" title="Delete experience">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>

          ${exp.techStack && exp.techStack.length ? `
            <div class="tech-tag-row">
              ${exp.techStack.map(t => `<span class="tech-tag">${t.trim()}</span>`).join('')}
            </div>
          ` : ''}

          ${exp.highlights && exp.highlights.length ? `
            <div>
              <div style="font-size: 0.825rem; font-weight: 800; color: var(--color-pine-800); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.6rem;">
                Responsibilities &amp; Key Learnings:
              </div>
              <ul style="padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
                ${exp.highlights.map(h => `
                  <li style="font-size: 0.94rem; color: var(--color-text-body); line-height: 1.6;">${h}</li>
                `).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-edit-exp').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openExpModal(id);
      });
    });

    container.querySelectorAll('.btn-delete-exp').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('Delete this internship/experience entry?')) {
          const exps = getStoredExperiences().filter(x => (x.id || '') != id);
          saveExperiences(exps);
          renderExperiences();
          showToast('Experience entry deleted.', '🗑️');
        }
      });
    });
  };

  const openExpModal = (editingId = null) => {
    const exps = getStoredExperiences();
    const existing = editingId ? exps.find(x => (x.id || '') == editingId) : null;

    const modalTitleText = existing ? 'Edit Experience' : '+ Add New Internship / Experience';
    const formHtml = `
      <form id="exp-form">
        <div class="modal-form-group">
          <label for="exp-input-role">Role Title *</label>
          <input type="text" id="exp-input-role" placeholder="e.g. Web Developer Intern" value="${existing ? existing.role : ''}" required>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="exp-input-company">Company / Organization *</label>
            <input type="text" id="exp-input-company" placeholder="e.g. Coding Blocks" value="${existing ? existing.company : ''}" required>
          </div>
          <div class="modal-form-group">
            <label for="exp-input-period">Duration / Period *</label>
            <input type="text" id="exp-input-period" placeholder="e.g. June 2026 – July 2026" value="${existing ? existing.period : ''}" required>
          </div>
        </div>

        <div class="modal-form-group">
          <label for="exp-input-stack">Technologies Used (comma separated)</label>
          <input type="text" id="exp-input-stack" placeholder="HTML, CSS, React.js, Node.js" value="${existing && existing.techStack ? existing.techStack.join(', ') : ''}">
        </div>

        <div class="modal-form-group">
          <label for="exp-input-highlights">Key Contributions / Learnings (one per line)</label>
          <textarea id="exp-input-highlights" rows="3" placeholder="Created responsive web pages\nWorked with development team">${existing && existing.highlights ? existing.highlights.join('\n') : ''}</textarea>
        </div>

        <div class="modal-form-actions">
          <button type="button" id="exp-cancel-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">${existing ? 'Save Changes' : 'Add &amp; Save Experience'}</button>
        </div>
      </form>
    `;

    openModal(modalTitleText, formHtml);
    document.getElementById('exp-cancel-btn').addEventListener('click', closeModal);

    document.getElementById('exp-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const role = document.getElementById('exp-input-role').value.trim();
      const company = document.getElementById('exp-input-company').value.trim();
      const period = document.getElementById('exp-input-period').value.trim();
      const stackRaw = document.getElementById('exp-input-stack').value.trim();
      const highlightsRaw = document.getElementById('exp-input-highlights').value.trim();

      const techStack = stackRaw ? stackRaw.split(',').map(s => s.trim()).filter(Boolean) : [];
      const highlights = highlightsRaw ? highlightsRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

      let currentExps = getStoredExperiences();
      if (existing) {
        currentExps = currentExps.map(x => {
          if ((x.id || '') == editingId) {
            return { ...x, role, company, period, techStack, highlights };
          }
          return x;
        });
        showToast('Experience updated successfully!', '✓');
      } else {
        const newExp = {
          id: 'exp-' + Date.now(),
          role,
          company,
          period,
          badge: 'Internship',
          techStack,
          highlights
        };
        currentExps.push(newExp);
        showToast('Experience added and saved!', '✓');
      }

      saveExperiences(currentExps);
      renderExperiences();
      closeModal();
    });
  };

  const addExpBtn = document.getElementById('add-exp-btn');
  if (addExpBtn) addExpBtn.addEventListener('click', () => openExpModal());

  const resetExpBtn = document.getElementById('reset-exp-btn');
  if (resetExpBtn) {
    resetExpBtn.addEventListener('click', () => {
      if (confirm('Reset experience entries to default internships?')) {
        saveExperiences(DEFAULT_EXPERIENCES);
        renderExperiences();
        showToast('Experience reset to defaults.', '↺');
      }
    });
  }

  renderExperiences();

  // Dynamic Education Rendering
  const getStoredEducation = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.EDUCATION);
      return stored ? JSON.parse(stored) : [...DEFAULT_EDUCATION];
    } catch {
      return [...DEFAULT_EDUCATION];
    }
  };

  const saveEducation = (edu) => {
    localStorage.setItem(STORAGE_KEYS.EDUCATION, JSON.stringify(edu));
  };

  const renderEducation = () => {
    const container = document.getElementById('education-container');
    if (!container) return;

    const countBadge = document.getElementById('education-count-badge');
    const edus = getStoredEducation();

    if (countBadge) {
      countBadge.textContent = `${edus.length} Qualifications`;
    }

    container.innerHTML = edus.map((item, idx) => `
      <div class="timeline-item" data-edu-id="${item.id || idx}">
        <div class="timeline-icon-node" style="background: var(--color-sage-100); color: var(--color-teal-700); border-color: #ffffff; box-shadow: 0 0 0 3px var(--color-sage-200);">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </div>

        <div class="glass-panel timeline-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.65rem; margin-bottom: 0.65rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
                <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--color-text-main);">
                  ${item.degree}
                </h3>
                <span style="padding: 0.2rem 0.65rem; background: var(--color-sage-100); color: var(--color-pine-900); border: 1px solid var(--color-sage-200); border-radius: var(--radius-full); font-size: 0.74rem; font-weight: 700;">
                  ${item.status || 'Verified'}
                </span>
              </div>
              <div style="font-size: 1.02rem; font-weight: 700; color: var(--color-teal-700); margin-top: 2px;">
                ${item.institution}
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <div style="padding: 0.35rem 0.85rem; background: var(--color-sage-50); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; color: var(--color-pine-800);">
                ${item.period}
              </div>
              <div class="card-admin-actions">
                <button class="btn-card-action btn-edit-edu" data-id="${item.id || idx}" title="Edit education">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  Edit
                </button>
                <button class="btn-card-action btn-delete btn-delete-edu" data-id="${item.id || idx}" title="Delete education">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 0.75rem; align-items: center;">
            <div style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.3rem 0.8rem; background: var(--color-sage-100); border: 1px solid var(--color-sage-200); border-radius: var(--radius-sm); font-size: 0.825rem; font-weight: 800; color: var(--color-pine-900);">
              ${item.scoreBadge || 'Accredited'}
            </div>
            <div style="font-size: 0.88rem; color: var(--color-text-body);">
              Focus: ${item.focus}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.btn-edit-edu').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openEduModal(id);
      });
    });

    container.querySelectorAll('.btn-delete-edu').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (confirm('Delete this education milestone?')) {
          const edus = getStoredEducation().filter(x => (x.id || '') != id);
          saveEducation(edus);
          renderEducation();
          showToast('Education record deleted.', '🗑️');
        }
      });
    });
  };

  const openEduModal = (editingId = null) => {
    const edus = getStoredEducation();
    const existing = editingId ? edus.find(e => (e.id || '') == editingId) : null;

    const modalTitleText = existing ? 'Edit Education Record' : '+ Add Education Record';
    const formHtml = `
      <form id="edu-form">
        <div class="modal-form-group">
          <label for="edu-input-degree">Degree / Course Level *</label>
          <input type="text" id="edu-input-degree" placeholder="e.g. BCA, Class XII, Diploma" value="${existing ? existing.degree : ''}" required>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="edu-input-inst">Institution / University *</label>
            <input type="text" id="edu-input-inst" placeholder="e.g. The TipsGlobal Institute" value="${existing ? existing.institution : ''}" required>
          </div>
          <div class="modal-form-group">
            <label for="edu-input-period">Years / Period</label>
            <input type="text" id="edu-input-period" placeholder="e.g. 2024 – 2027" value="${existing ? existing.period : ''}" required>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <div class="modal-form-group">
            <label for="edu-input-score">Score / Percentage / Status</label>
            <input type="text" id="edu-input-score" placeholder="e.g. Percentage: 75% or Expected 2027" value="${existing ? existing.scoreBadge : ''}">
          </div>
          <div class="modal-form-group">
            <label for="edu-input-status">Status Badge</label>
            <input type="text" id="edu-input-status" placeholder="e.g. Currently Pursuing or Completed" value="${existing ? existing.status : 'Completed'}">
          </div>
        </div>

        <div class="modal-form-group">
          <label for="edu-input-focus">Academic Focus / Specialization</label>
          <input type="text" id="edu-input-focus" placeholder="e.g. Web Development, Computer Applications" value="${existing ? existing.focus : ''}">
        </div>

        <div class="modal-form-actions">
          <button type="button" id="edu-cancel-btn" class="btn btn-secondary btn-sm">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">${existing ? 'Save Changes' : 'Add &amp; Save Education'}</button>
        </div>
      </form>
    `;

    openModal(modalTitleText, formHtml);
    document.getElementById('edu-cancel-btn').addEventListener('click', closeModal);

    document.getElementById('edu-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const degree = document.getElementById('edu-input-degree').value.trim();
      const institution = document.getElementById('edu-input-inst').value.trim();
      const period = document.getElementById('edu-input-period').value.trim();
      const scoreBadge = document.getElementById('edu-input-score').value.trim();
      const status = document.getElementById('edu-input-status').value.trim();
      const focus = document.getElementById('edu-input-focus').value.trim();

      let currentEdus = getStoredEducation();
      if (existing) {
        currentEdus = currentEdus.map(ed => {
          if ((ed.id || '') == editingId) {
            return { ...ed, degree, institution, period, scoreBadge, status, focus };
          }
          return ed;
        });
        showToast('Education record updated!', '✓');
      } else {
        const newEdu = {
          id: 'edu-' + Date.now(),
          degree,
          institution,
          period,
          scoreBadge,
          status,
          focus
        };
        currentEdus.push(newEdu);
        showToast('Education record added and saved!', '✓');
      }

      saveEducation(currentEdus);
      renderEducation();
      closeModal();
    });
  };

  const addEduBtn = document.getElementById('add-edu-btn');
  if (addEduBtn) addEduBtn.addEventListener('click', () => openEduModal());

  const resetEduBtn = document.getElementById('reset-edu-btn');
  if (resetEduBtn) {
    resetEduBtn.addEventListener('click', () => {
      if (confirm('Reset education milestones to defaults?')) {
        saveEducation(DEFAULT_EDUCATION);
        renderEducation();
        showToast('Education reset to defaults.', '↺');
      }
    });
  }

  renderEducation();

  // ==========================================================================
  // 15. RESUME PREVIEW & PDF DOWNLOAD SYSTEM
  // ==========================================================================
  const previewResume = () => {
    const profile = getProfileData();
    const skills = getStoredSkills();
    const certs = getStoredCertifications();
    const achs = getStoredAchievements();
    const exps = getStoredExperiences();
    const edus = getStoredEducation();
    const projects = getStoredProjects();

    const hardSkillsList = [
      ...(skills.web ? skills.web.map(s => s.name) : []),
      ...(skills.cyber ? skills.cyber.map(s => s.name) : []),
      ...(skills.programming ? skills.programming.map(s => s.name) : []),
      ...(skills.db ? skills.db.map(s => s.name) : [])
    ].join(', ');

    const softSkillsList = (skills.soft ? skills.soft.map(s => s.name) : []).join(', ');

    const resumeHtml = `
      <div class="resume-paper" id="resume-printable-content">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <h1>${profile.name}</h1>
            <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-teal-700); margin-top: 2px;">
              ${profile.role}
            </div>
            <div style="font-size: 0.88rem; color: #4b5563;">
              ${profile.tagline}
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-weight: 800; font-size: 1.15rem; color: #0284c7;">■ SUNSTONE</div>
            <div style="font-size: 0.8rem; color: #6b7280; font-weight: 600;">The TipsGlobal Institute</div>
          </div>
        </div>

        <div style="font-size: 0.88rem; color: #1f2937; margin-bottom: 1.25rem; line-height: 1.6; border-bottom: 1.5px solid #d1d5db; padding-bottom: 0.65rem;">
          ✉ <a href="mailto:${profile.email}" style="color: #0f766e; text-decoration: underline;">${profile.email}</a> &nbsp;|&nbsp;
          ☎ <a href="tel:${profile.phone}" style="color: #0f766e;">+91 ${profile.phone}</a> &nbsp;|&nbsp;
          📍 ${profile.location} <br/>
          🐙 <a href="${profile.github}" target="_blank" style="color: #0f766e; text-decoration: underline;">GitHub Profile</a> &nbsp;|&nbsp;
          🔗 <a href="${profile.linkedin}" target="_blank" style="color: #0f766e; text-decoration: underline;">LinkedIn Profile</a> &nbsp;|&nbsp;
          ⚡ <a href="${profile.leetcode}" target="_blank" style="color: #0f766e; text-decoration: underline;">LeetCode Profile</a>
        </div>

        <h2>Technical Skills</h2>
        <div style="font-size: 0.88rem; margin-bottom: 0.35rem;">
          <strong>Technical / Hard Skills:</strong> ${hardSkillsList || 'HTML/CSS, Python, React.js, Node.js, JavaScript, Java, C++, Network Security'}
        </div>
        <div style="font-size: 0.88rem; margin-bottom: 0.75rem;">
          <strong>Soft Skills:</strong> ${softSkillsList || 'Communication, Time Management, Networking, Teamwork, Problem-Solving, Decision-Making, Self-Leadership'}
        </div>

        <h2>Work Experience</h2>
        ${exps.map(exp => `
          <div style="margin-bottom: 0.85rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.92rem; font-weight: 700;">
              <span>${exp.role} — ${exp.company}</span>
              <span>${exp.period}</span>
            </div>
            ${exp.techStack && exp.techStack.length ? `
              <div style="font-size: 0.82rem; font-style: italic; color: #4b5563; margin-bottom: 0.25rem;">
                ${exp.techStack.join(', ')}
              </div>
            ` : ''}
            ${exp.highlights && exp.highlights.length ? `
              <ul style="font-size: 0.85rem; padding-left: 1.25rem;">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}

        <h2>Technical Projects</h2>
        ${projects.map(proj => `
          <div style="margin-bottom: 0.85rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.92rem; font-weight: 700;">
              <span>${proj.title}</span>
              <span>${proj.year || ''}</span>
            </div>
            <div style="font-size: 0.82rem; font-style: italic; color: #4b5563; margin-bottom: 0.25rem;">
              ${proj.techStack ? proj.techStack.join(', ') : ''} &nbsp;|&nbsp;
              ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" style="color: #0f766e; text-decoration: underline;">GitHub</a>` : ''}
              ${proj.demoUrl ? ` &bull; <a href="${proj.demoUrl}" target="_blank" style="color: #0f766e; text-decoration: underline;">Live Demo</a>` : ''}
            </div>
            <p style="font-size: 0.85rem; color: #374151; margin-bottom: 0.25rem;">${proj.description}</p>
            ${proj.features && proj.features.length ? `
              <ul style="font-size: 0.85rem; padding-left: 1.25rem;">
                ${proj.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}

        <h2>Problem Solving &amp; Data Structures</h2>
        <div style="font-size: 0.9rem; font-weight: 700; color: #0f766e; margin-bottom: 0.25rem;">
          <a href="${profile.leetcode}" target="_blank" style="color: #0f766e;">↗ LeetCode Profile Track</a>
        </div>
        <p style="font-size: 0.85rem; color: #374151; margin-bottom: 0.75rem;">
          Passionate about problem-solving and data structures, with continuous practice on LeetCode to enhance logical thinking and algorithm skills. Experienced in arrays, strings, linked lists, stacks, trees, and search techniques, with solid understanding of Big O notation.
        </p>

        <h2>Education</h2>
        ${edus.map(edu => `
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.35rem;">
            <span><strong>${edu.institution}</strong> — ${edu.degree} (${edu.period})</span>
            <span><strong>${edu.scoreBadge || ''}</strong></span>
          </div>
        `).join('')}

        <h2>Certifications</h2>
        <ul style="font-size: 0.85rem; padding-left: 1.25rem; margin-bottom: 0.85rem; display: flex; flex-direction: column; gap: 0.45rem;">
          ${certs.map(c => `
            <li>
              <strong>${c.title}</strong> - ${c.issuer} (${c.date || 'Verified'})<br/>
              <span style="font-size: 0.82rem; color: #4b5563;"><strong>Skills learned:</strong> ${c.skillsLearned || c.description}</span>
            </li>
          `).join('')}
        </ul>

        <h2>Achievements</h2>
        <ul style="font-size: 0.85rem; padding-left: 1.25rem; margin-bottom: 0.75rem; display: flex; flex-direction: column; gap: 0.45rem;">
          ${achs.map(a => `
            <li>
              <strong>${a.title}</strong> — ${a.org}<br/>
              <span style="font-size: 0.82rem; color: #374151;">${a.description}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-form-actions no-print" style="margin-top: 1.25rem;">
        <a href="Abinaya_R_Resume.pdf" download="Abinaya_R_Resume.pdf" class="btn btn-primary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="15"></line></svg>
          Download PDF (Abinaya_R_Resume.pdf)
        </a>
        <button type="button" id="print-resume-btn" class="btn btn-secondary btn-sm">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Print Official Resume
        </button>
        <button type="button" onclick="document.getElementById('custom-modal').classList.remove('open'); document.body.style.overflow='auto';" class="btn btn-secondary btn-sm">
          Close
        </button>
      </div>
    `;

    openModal('Abinaya R — Official Verified Resume Document', resumeHtml, true);

    const printBtn = document.getElementById('print-resume-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  };

  // Preview Resume Button triggers across pages
  document.querySelectorAll('[data-action="preview-resume"]').forEach(btn => {
    btn.addEventListener('click', previewResume);
  });

  const previewResumeBtn = document.getElementById('preview-resume-btn');
  if (previewResumeBtn) previewResumeBtn.addEventListener('click', previewResume);

  const heroPreviewResumeBtn = document.getElementById('hero-preview-resume-btn');
  if (heroPreviewResumeBtn) heroPreviewResumeBtn.addEventListener('click', previewResume);

  const dockPreviewResumeBtn = document.getElementById('dock-preview-resume-btn');
  if (dockPreviewResumeBtn) dockPreviewResumeBtn.addEventListener('click', previewResume);

});
