const features = [
  {
    number: "01",
    title: "See how algorithms work",
    description:
      "Explore data structures and algorithms through clear, step-by-step visualizations.",
  },
  {
    number: "02",
    title: "Practice by doing",
    description:
      "Build confidence with focused coding exercises and a path from fundamentals to advanced topics.",
  },
  {
    number: "03",
    title: "Make progress visible",
    description:
      "Keep your learning organized and see how far you have come, one concept at a time.",
  },
];

const architecture = [
  {
    label: "Frontend",
    items: ["Next.js", "TypeScript", "Tailwind-ready UI"],
  },
  {
    label: "Platform",
    items: ["API services", "Auth", "Users & progress"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Prisma", "Redis caching"],
  },
  {
    label: "Learning Engine",
    items: ["Algorithms", "Visualizer", "Progress tracking"],
  },
];

const designTokens = ["#0C0F12", "#A7F36B", "#F0F3F2", "#9AA5A5", "#1B2428"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="OpenFlow home">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span>OpenFlow</span>
        </a>
        <a className="header-link" href="https://github.com/ali0786mehdi/OpenFlow">
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Open source · Built for curious minds</p>
          <h1 id="hero-title">Understand code.<br /><span>One step at a time.</span></h1>
          <p className="hero-description">
            OpenFlow makes computer science more hands-on, visual, and easier to learn.
            Follow an algorithm, try it yourself, and grow your skills at your own pace.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#foundation">Explore the vision <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href="https://github.com/ali0786mehdi/OpenFlow">Contribute on GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note">A community-built learning platform in its early stages.</p>
        </div>
        <div className="visual-card" aria-label="Illustration of a sorting algorithm">
          <div className="visual-topline"><span>VISUALIZE · SORTING</span><span className="live-indicator">● READY</span></div>
          <div className="bars" aria-hidden="true">
            <span style={{ height: "34%" }} /><span style={{ height: "63%" }} /><span className="bar-active" style={{ height: "45%" }} /><span style={{ height: "82%" }} /><span style={{ height: "55%" }} /><span style={{ height: "72%" }} /><span style={{ height: "40%" }} />
          </div>
          <div className="visual-caption"><span>Compare · Swap · Learn</span><span>01 / 06</span></div>
          <div className="code-line"><span className="code-muted">01</span><span><span className="code-purple">if</span> (left &gt; right) <span className="code-green">swap()</span></span><span className="cursor" /></div>
        </div>
      </section>

      <section className="features" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">A better way to learn</p>
          <h2 id="features-title">From “I get it” to<br />“I can do it.”</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="foundation" id="foundation" aria-labelledby="foundation-title">
        <div className="section-heading foundation-heading">
          <p className="eyebrow">Foundation phase</p>
          <h2 id="foundation-title">Architecture and design system</h2>
        </div>

        <div className="foundation-grid">
          {architecture.map((block) => (
            <article className="architecture-card" key={block.label}>
              <div className="architecture-header">
                <span className="architecture-pill">{block.label}</span>
              </div>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="design-panel">
          <div>
            <p className="eyebrow">Design tokens</p>
            <h3>Simple, readable, high-contrast UI</h3>
          </div>
          <div className="token-row" aria-label="OpenFlow design color tokens">
            {designTokens.map((color) => (
              <span key={color} className="token-swatch" style={{ background: color }} aria-label={color} title={color} />
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>OpenFlow <span aria-hidden="true">·</span> Build. Learn. Measure. Improve.</span>
        <a href="https://github.com/ali0786mehdi/OpenFlow">Made in the open ↗</a>
      </footer>
    </main>
  );
}
