const skills = [
  "HTML", "CSS", "JavaScript", "Bootstrap", "React",
  "React Native", "Python", "Mobile UI Design", "Web UI Design",
];

const timeline = [
  {
    date: "2026 — Present",
    role: "Internship",
    org: "Vetri Technology Solutions, Surandai",
    desc: "Actively learning and executing full-stack web applications.",
  },
  {
    date: "2014 — 2016",
    role: "Programmer Analyst",
    org: "Cognizant Technology Solutions, Bangalore",
    desc: "Monitored infrastructure security and analyzed incidents as a SOC Analyst.",
  },
  {
    date: "2010 — 2014",
    role: "B.E., Electronics & Instrumentation Engineering",
    org: "Kongu Engineering College, Perundurai",
    desc: "Graduated First Class with Distinction.",
  },
];

export function About() {
  return (
    <section id="about-me" className="about">
      <div className="container">
        <h2 className="about-title mb-5">A BIT ABOUT ME</h2>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="about-panel">
              <h3>&gt; whoami --verbose</h3>
              <p className="about-text">
                Hey, I'm a Bangalore-based Full Stack Developer fueled by curiosity,
                logic, and a love for solving chaotic puzzles! As a perfectionist, I
                don't just build apps&mdash;I look behind the scenes to ensure they
                are absolutely flawless.
              </p>
              <p className="about-text mb-0">
                When I step away from my screen, I fuel my imagination by diving into
                novels and comics. I especially love walking, singing, and dancing to
                balance the digital world.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-panel text-center">
              <div className="about-photo about-photo-placeholder" role="img" aria-label="U S Siva Ranjani">
                USR
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-lg-4">
            <div className="about-panel">
              <h3>&gt; ls ./skills</h3>
              <div className="skill-list">
                {skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="about-panel">
              <h3>&gt; git log --career</h3>
              <ul className="timeline">
                {timeline.map((t) => (
                  <li key={t.date}>
                    <div className="t-date">{t.date}</div>
                    <div className="t-role">{t.role}</div>
                    <div className="t-org">{t.org}</div>
                    <div className="t-desc">{t.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
