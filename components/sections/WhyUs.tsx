export default function WhyUs() {
  const bullets = [
    { t: "Local expertise", d: "On‑the‑ground partners for compliance, payroll, and culture." },
    { t: "Quality + speed", d: "Shortlists in 3–5 days, offers in under 3 weeks." },
    { t: "Flexible models", d: "Executive search, contract, or embedded recruiters." },
    { t: "Scalable CX", d: "Customer support teams with robust QA and training." },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2>Why hire in the Philippines?</h2>
        <p className="muted">Access English‑proficient talent with strong work ethic and excellent service culture.</p>
        <div className="grid">
          {bullets.map((b) => (
            <div key={b.t} className="card">
              <h3>{b.t}</h3>
              <p className="muted">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

