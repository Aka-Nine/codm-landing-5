export default function Industries() {
  const items = ["Technology", "Fintech", "Healthcare", "E‑commerce", "BPO / CX", "Professional Services"];
  return (
    <section className="section alt">
      <div className="container">
        <h2>Industries we serve</h2>
        <p className="muted">Deep local networks across the Philippine market.</p>
        <ul className="chips">
          {items.map((x) => (
            <li key={x} className="chip">{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

