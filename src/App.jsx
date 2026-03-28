const projects = [
  {
    title: "Movie Search App",
    summary: "Search movies quickly with a clean interface, instant results, and an easy browsing flow.",
    accent: "aqua",
    label: "React App",
    liveHref: "https://movie-search-app-vert-sigma.vercel.app/",
    githubHref: "https://github.com/ArunnathAR/movie_search_app",
    imageHref:
      "https://image.thum.io/get/width/1200/https://movie-search-app-vert-sigma.vercel.app/",
    explanation:
      "A dynamic discovery platform that allows users to search the OMDb database, view movie details, and track global trending metrics.",
    techStack:
      "React 19, Vite, Tailwind CSS 4, Appwrite (BaaS), and Vercel Serverless Functions.",
    efficiency:
      "Employs useDebounce to minimize API overhead and serverless proxies to keep sensitive API keys securely off the client side.",
    coreValue:
      "Demonstrates the ability to bridge public APIs with private backend analytics to create a data-driven user experience.",
  },
  {
    title: "Medium Blog Clone",
    summary: "A blogging platform clone focused on writing, reading, and a polished publishing experience.",
    accent: "violet",
    label: "Full Stack",
    liveHref: "https://medium-blog-clone-seven.vercel.app/",
    githubHref: "https://github.com/ArunnathAR/medium-blog-clone",
    imageHref:
      "https://image.thum.io/get/width/1200/https://medium-blog-clone-seven.vercel.app/",
    explanation:
      "A full-stack content management system featuring user authentication and a complete CRUD pipeline for publishing and managing articles.",
    techStack:
      "React/Next.js, Node.js, PostgreSQL or MongoDB, and JWT for secure authentication.",
    efficiency:
      "Optimized for content-heavy workloads through protected API routing and synchronized state management between the editor and database.",
    coreValue:
      "Showcases proficiency in building scalable, authenticated platforms that handle complex data relationships and user-generated content.",
  },
  {
    title: "Paytm Like App",
    summary: "A wallet-style payments app with signup flow, transfers, and a familiar fintech-inspired UI.",
    accent: "blue",
    label: "MERN App",
    liveHref: "https://paytm-like-app.vercel.app/",
    githubHref: "https://github.com/ArunnathAR/paytm-like-app",
    imageHref:
      "https://image.thum.io/get/width/1200/https://paytm-like-app.vercel.app/",
    explanation:
      "A transactional application focused on digital wallet logic, allowing users to manage balances and securely transfer credits between accounts.",
    techStack:
      "React, Express.js, MongoDB/PostgreSQL, and session-based authentication.",
    efficiency:
      "Prioritizes backend integrity with atomic-style logic to ensure account balances remain consistent and protected against race conditions.",
    coreValue:
      "Highlights a strong grasp of business logic and security-first engineering, moving beyond simple UI to solve data-critical problems.",
  },
];

const experience = [
  {
    period: "Jan 2026 - Present",
    company: "WebVentures Intl Inc.",
    role: "Web Development Intern",
    description:
      "Contributed to CRM system development, optimized database queries for better performance, automated reporting workflows, and supported debugging and testing to improve application stability.",
  },
  {
    period: "Feb 2025 - May 2025",
    company: "Freelance Web Design & Development",
    role: "Web Designer & Developer",
    description:
      "Designed and developed responsive websites with strong focus on clarity, usability, and performance, turned business ideas into structured UI layouts and scalable frontend components, and handled deployment, version control, and iterative improvements end to end.",
  },
];

const dockLinks = [
  { name: "GitHub", short: "GH", href: "https://github.com/ArunnathAR" },
  {
    name: "LinkedIn",
    short: "in",
    href: "https://www.linkedin.com/in/arunnath-r-280064241?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  { name: "X", short: "X", href: "https://x.com/Arunnath2706" },
  { name: "Mail", short: "@", href: "mailto:arunsofficial1@gmail.com" },
  { name: "LeetCode", short: "LC", href: "https://leetcode.com/u/arunsmileul/" },
];

function App() {
  return (
    <div className="page-shell">
      <div className="page-noise" />

      <main className="portfolio-page">
        <section className="hero-card reveal reveal-1">
          <div className="profile-row">
            <div className="avatar-wrap">
              <div className="avatar-ring">
                <div className="avatar-core" aria-hidden="true">
                  <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="23" r="11" />
                    <path d="M16 50c2.8-9 10-14 16-14s13.2 5 16 14" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hero-copy">
              <p className="eyebrow">Full Stack Developer</p>
              <h1>Arunnath</h1>
              <p className="lead">
                Software Developer dedicated to building scalable web
                applications. Focused on clean code, end-to-end solutions, and
                mastering modern technologies.
              </p>
              
            </div>
          </div>

          <div className="intro-grid">
            <p>
              I work across React, JavaScript, Node.js, Python, Java, SQL,
              MongoDB, REST API integrations, and modern UI systems to turn
              ideas into polished products that people actually enjoy using.
            </p>
            <p>
              My focus is simple: ship fast, keep things maintainable, and use
              tools like AWS Cloud and Cursor IDE to deliver products that feel
              crafted instead of generic.
            </p>
          </div>
        </section>

        <section className="section-head reveal reveal-2">
          <span>Selected Work</span>
          <a href="#connect">Show all</a>
        </section>

        <section className="bento-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal reveal-${index + 2}`}
              key={project.title}
            >
              <a
                className="project-link"
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live website`}
              >
                <div className={`project-preview ${project.accent}`}>
                  <img
                    className="project-image"
                    src={project.imageHref}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />

                  <div className="preview-glow" />
                </div>

                <div className="project-meta">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                </div>
              </a>

              <div className="project-footer">
                <span>{project.label}</span>
                <a
                  className="project-github"
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  title="View on GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.589 2 12.253c0 4.531 2.865 8.374 6.839 9.73.5.094.682-.221.682-.493 0-.243-.009-.888-.014-1.744-2.782.617-3.369-1.373-3.369-1.373-.455-1.19-1.11-1.507-1.11-1.507-.908-.637.069-.624.069-.624 1.004.072 1.532 1.06 1.532 1.06.892 1.578 2.341 1.122 2.91.858.091-.664.349-1.122.635-1.379-2.221-.259-4.555-1.14-4.555-5.072 0-1.12.389-2.036 1.029-2.754-.103-.26-.446-1.302.098-2.715 0 0 .84-.277 2.75 1.052A9.36 9.36 0 0 1 12 6.836a9.36 9.36 0 0 1 2.504.349c1.909-1.329 2.748-1.052 2.748-1.052.546 1.413.203 2.455.1 2.715.64.718 1.028 1.634 1.028 2.754 0 3.942-2.338 4.81-4.566 5.064.359.319.678.948.678 1.911 0 1.38-.012 2.493-.012 2.832 0 .274.18.591.688.491C19.138 20.623 22 16.782 22 12.253 22 6.589 17.523 2 12 2Z" />
                  </svg>
                </a>
              </div>

              <div className="project-details">
                <p>
                  <strong>Explanation:</strong> {project.explanation}
                </p>
                <p>
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <p>
                  <strong>Efficiency:</strong> {project.efficiency}
                </p>
                <p>
                  <strong>Core Value:</strong> {project.coreValue}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="experience-block reveal reveal-5">
          <div className="section-head section-head--experience">
            <span>Experience</span>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-period">{item.period}</div>

                <div className="timeline-line">
                  <span className="timeline-dot" />
                </div>

                <div className="timeline-content">
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="page-footer reveal reveal-5" id="connect">
        <div className="footer-inner">
          <a
            className="connect-button"
            href="https://www.linkedin.com/in/arunnath-r-280064241?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            Connect
          </a>

          <nav className="dock" aria-label="Social links">
            {dockLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noreferrer">
                {link.short}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
