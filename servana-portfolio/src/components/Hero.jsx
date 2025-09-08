import familyImg from "../assets/family.webp";
import "../styles/Hero.css";
import logo from "../assets/servanalogo.png";

export default function Hero() {
  return (
    <section className="brochure-hero">

      <h1>
        BUILT ON TRUST. 
<br />
        GROWING WITH COMMUNITIES.
      </h1>

      {/* Yellow edge half-circles */}
      <div className="accent-circle left" aria-hidden />
      <div className="accent-circle right" aria-hidden />

      {/* Dark background arcs (smaller than the main image) */}
      <div className="rings" aria-hidden>
        <div className="ring ring-1" />
        <div className="ring ring-2" />
      </div>

      {/* Main circular image (slightly bigger than arcs) */}
      <div className="hero-circle">
        <img src={familyImg} alt="Family"   loading="eager"   // 👈 force load early
  fetchpriority="high" />
        <div className="headline" data-aos="fade-up">
                      <div className="navbar-logo">
                  <img src={logo} alt="Servana Logo" className="logo-icon" />
                  <span className="brand-name">SERVANA</span>
                </div>
        </div>
      </div>
    </section>
  );
}
