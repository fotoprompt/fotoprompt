const capabilities = [
  ["01", "Subject", "Identify the main subject, objects, people, and visual focus."],
  ["02", "Style", "Break down artistic direction, visual language, and overall mood."],
  ["03", "Composition", "Understand framing, perspective, layout, and depth."],
  ["04", "Lighting", "Describe light direction, contrast, atmosphere, and color."],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a href="/" className="logo">foto<span>prompt</span></a>
        <nav>
          <a href="#workflow">Workflow</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </nav>
        <a href="#try" className="navCta">Open tool <span>↗</span></a>
      </header>

      <section className="hero" id="try">
        <div className="heroCopy">
          <div className="eyebrow"><span></span> IMAGE INTELLIGENCE FOR CREATORS</div>
          <h1>What you see.<br/><em>Put it into words.</em></h1>
          <p className="lead">
            FotoPrompt helps you turn visual references into clear, structured prompts
            for AI image generation.
          </p>
          <div className="heroButtons">
            <a href="#workflow" className="primary">Explore FotoPrompt <b>→</b></a>
            <a href="#capabilities" className="secondary">What it analyzes</a>
          </div>
        </div>

        <div className="heroArt" aria-hidden="true">
          <div className="artGlow"></div>
          <div className="scanLine"></div>
          <div className="imageFrame">
            <div className="frameTop"><span>REFERENCE / 001</span><span>ANALYZING</span></div>
            <div className="fakeImage">
              <div className="sun"></div>
              <div className="shape s1"></div>
              <div className="shape s2"></div>
              <div className="shape s3"></div>
              <div className="crosshair">+</div>
            </div>
            <div className="frameBottom"><span>VISUAL INPUT</span><strong>87% MATCH</strong></div>
          </div>
          <div className="floating promptBox">
            <small>GENERATED PROMPT</small>
            <p>cinematic portrait, soft directional light, muted tones...</p>
          </div>
          <div className="floating labelA">STYLE</div>
          <div className="floating labelB">COMPOSITION</div>
        </div>
      </section>

      <section className="ticker">
        <span>UPLOAD</span><i>→</i><span>ANALYZE</span><i>→</i><span>UNDERSTAND</span><i>→</i><span>CREATE</span><i>→</i><span>UPLOAD</span>
      </section>

      <section className="intro" id="workflow">
        <div className="sectionTag">01 / WORKFLOW</div>
        <div>
          <h2>One image.<br/><span>Three simple steps.</span></h2>
          <p>Skip the blank prompt box. FotoPrompt gives you a practical starting point by turning the visual information in an image into words.</p>
        </div>
      </section>

      <section className="steps">
        <article><div className="stepNo">01</div><div className="stepIcon">↑</div><h3>Upload</h3><p>Choose a visual reference you want to study or recreate.</p><a href="#try">Start with an image →</a></article>
        <article className="activeStep"><div className="stepNo">02</div><div className="stepIcon">◌</div><h3>Analyze</h3><p>Break the reference into its most useful visual ingredients.</p><a href="#capabilities">See what we analyze →</a></article>
        <article><div className="stepNo">03</div><div className="stepIcon">↗</div><h3>Create</h3><p>Use the analysis as a structured foundation for your next prompt.</p><a href="#about">Learn more →</a></article>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="capHead">
          <div className="sectionTag">02 / VISUAL BREAKDOWN</div>
          <h2>Details matter.</h2>
          <p>FotoPrompt focuses on the parts of an image that are useful when translating a visual idea into a prompt.</p>
        </div>
        <div className="capGrid">
          {capabilities.map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="darkFeature">
        <div className="darkVisual">
          <div className="terminal">
            <div className="terminalBar"><span></span><span></span><span></span><label>fotoprompt / analysis</label></div>
            <div className="terminalLine"><i>01</i><b>SUBJECT</b><span>portrait / person</span></div>
            <div className="terminalLine"><i>02</i><b>STYLE</b><span>editorial / cinematic</span></div>
            <div className="terminalLine"><i>03</i><b>LIGHT</b><span>soft / directional</span></div>
            <div className="terminalLine"><i>04</i><b>COLOR</b><span>muted / warm</span></div>
            <div className="terminalPrompt">Generate a useful prompt<span>_</span></div>
          </div>
        </div>
        <div className="darkCopy">
          <div className="sectionTag">03 / BUILT FOR CREATORS</div>
          <h2>Turn visual inspiration into a <span>better starting point.</span></h2>
          <p>Whether you are studying a reference, exploring a new style, or preparing an image-generation prompt, FotoPrompt helps make the visual language easier to understand.</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="sectionTag">04 / ABOUT FOTOPROMPT</div>
        <div>
          <h2>Less guessing.<br/><span>More creating.</span></h2>
          <p>FotoPrompt is a focused visual tool built around a simple idea: the distance between an image and a good prompt should feel smaller.</p>
          <p>We keep the workflow clear, practical, and centered on the visual reference you already have.</p>
        </div>
      </section>

      <section className="finalCta">
        <div><div className="sectionTag">READY TO START?</div><h2>Bring a reference.<br/><span>We&apos;ll handle the words.</span></h2></div>
        <a href="#try">Try FotoPrompt <b>↗</b></a>
      </section>

      <footer>
        <div className="footerTop">
          <div><a className="logo" href="/">foto<span>prompt</span></a><p>From visual reference to useful prompt.</p></div>
          <div><strong>PRODUCT</strong><a href="#workflow">Workflow</a><a href="#capabilities">Capabilities</a><a href="#about">About</a></div>
          <div><strong>INFORMATION</strong><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a><a href="/contact">Contact</a></div>
        </div>
        <div className="footerBottom"><span>© 2026 FotoPrompt</span><span>Visual tools for creative work.</span></div>
      </footer>
    </main>
  );
}
