const projects = [
  {
    id: "001",
    title: "Interactive Quiz App",
    desc: "Interactive JavaScript quiz tracks user scores with real-time DOM updates..",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "002",
    title: "Weather App",
    desc: "Dynamic weather application displaying city conditions, temperatures, and error handling.",
    tech: ["CSS", "AsyncJS", "FetchAPI"],
  },
  {
    id: "003",
    title: "Digital StopWatch",
    desc: "React stopwatch application featuring precise start, pause, and reset controls.",
    tech: ["CSS", "JavaScript", "React"],
  },
  {
    id: "004",
    title: "Blog Reader App",
    desc: "Navigate and view API-driven blog posts using React Router hooks.",
    tech: ["React", "CSS", "Axios/fetch"],
  },
  {
    id: "005",
    title: "Food Delivery App Navigation",
    desc: "Multi-screen food app navigation passing route parameters through nested stacks.",
    tech: ["ReactNative", "Typescript", "CSS"],
  },
  {
    id: "006",
    title: "Personal Task Manager App Shell",
    desc: "Task management framework with dynamic parameter drilling and drawer access.",
    tech: ["ReactNative", "TypeScript", "CSS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title mb-5">MY PROJECTS</h2>

        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-lg-4 col-md-6" key={p.id}>
              <article className="project-card" tabIndex={0}>
                <div className="project-top">
                  <span className="project-id">[{p.id}]</span>
                  <span className="project-open">&gt;_ open</span>
                </div>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech mt-auto">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
