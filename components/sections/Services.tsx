export default function Services() {
  const services = [
    { title: "Executive Search", desc: "Leadership roles across Tech, Finance, and Operations." },
    { title: "Contract Staffing", desc: "Flexible, on‑demand Philippine specialists for rapid scaling." },
    { title: "Embedded Recruiting", desc: "RPO model to build internal capability and process." },
    { title: "BPO & CX Teams", desc: "Customer support, sales ops, and success at scale." },
  ];
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Services for the Philippines</h2>
        <p className="muted">Tailored models for cost, quality, and speed.</p>
        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3>{s.title}</h3>
              <p className="muted">{s.desc}</p>
              <a className="link" href="#contact">Consult now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

