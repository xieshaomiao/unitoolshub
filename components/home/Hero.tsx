import SearchModal from "./SearchModal";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        🌍 Free Online Developer Tools
      </div>

      <h1>
        One Hub.
        <br />
        <span>Unlimited Tools.</span>
      </h1>

      <p>
        Fast, free and privacy-friendly online tools for developers,
        designers, students and everyone.
      </p>

      <SearchModal />

      <div className="hero-features">
        <span>⚡ Fast</span>

        <span>🔒 Privacy</span>

        <span>🌍 Global</span>

        <span>♡ Free</span>
      </div>
    </section>
  );
}