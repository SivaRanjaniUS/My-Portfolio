import { MatrixRain } from "../components/MatrixRain";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";

const links = ["Home", "About me", "Projects", "Contact"];

export default function Index() {
  return (
    <>
      <nav className="hero-nav fixed-top">
        <ul className="nav justify-content-center p-1">
          {links.map((l) => (
            <li className="nav-item mx-2" key={l}>
              <a className="nav-link" href={`#${l.toLowerCase().replace(" ", "-")}`}>{l}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="hero">
        <MatrixRain />
        <div className="hero-vignette" />

        <div className="hero-content container d-flex flex-column align-items-center justify-content-center text-center">
          <p className="hero-prompt mb-3"><span className="hero-sub">~$</span> whoami</p>
          <h1 className="hero-title m-0">US DOMAIN<span className="caret">_</span></h1>
          <p className="hero-sub mt-3">
            U S Siva Ranjani<span className="hero-sep">|</span>Full Stack Developer<span className="hero-sep">|</span>Problem Solver
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <button className="btn btn-term btn-term-solid">&gt; copy_email</button>
            <a href="#" download className="btn btn-term">&gt; download_cv</a>
          </div>
          <p className="hero-hint mt-5">[ Do not like the rain?! Just click to freeze it ]</p>
        </div>
      </section>

      <About />

      <Projects />

      <Contact />

      <footer className="contact-footer">
        <div className="container">
          <span className="foot-brand">~$ echo "© 2026 U S Siva Ranjani"</span>
          <span className="foot-links">
            Designed &amp; built with <span style={{ color: "#39ff88" }}>&lt;/&gt;</span> by U S Siva Ranjani
          </span>
        </div>
      </footer>
    </>
  );
}
