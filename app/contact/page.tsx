"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<string>("");
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h2>Contact us</h2>
          <p className="muted">We will get back within 1 business day.</p>
          <form className="form" onSubmit={(e)=>{e.preventDefault(); setStatus("Thanks! We will reach out shortly.");}}>
            <div className="grid">
              <div className="card">
                <label>Name<br/><input type="text" required /></label>
              </div>
              <div className="card">
                <label>Email<br/><input type="email" required /></label>
              </div>
              <div className="card" style={{gridColumn:"span 12"}}>
                <label>Message<br/><textarea rows={5} required /></label>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
          {status && <p className="muted" style={{marginTop:12}}>{status}</p>}
        </div>
      </section>
    </Layout>
  );
}

