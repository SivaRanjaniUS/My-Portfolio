import { MatrixRain } from "./MatrixRain";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <MatrixRain />
      <div className="contact-vignette" />

      <div className="contact-content container d-flex flex-column align-items-center justify-content-center text-center">
        <h2 className="contact-title m-0">
          <span className="contact-prompt">&gt;</span> run contact --msg{" "}
          <span className="contact-msg">"Say Hello"</span>
          <span className="contact-caret">_</span>
        </h2>
        <p className="contact-sub mt-3 mb-0">
          You have a project idea, a job opportunity, or just want to say hi —
          my inbox is always open!
        </p>

        <div className="contact-actions d-flex flex-wrap justify-content-center align-items-center gap-3 mt-5">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="btn btn-term contact-btn-side"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>

          <a
            href="mailto:hello@example.com"
            className="btn btn-term btn-term-solid contact-btn-main"
            aria-label="Send me an email"
          >
            &gt; email_me
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="btn btn-term contact-btn-side"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.05-.13-.36-.9.08-1.88 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44.98.16 1.75.08 1.88.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
