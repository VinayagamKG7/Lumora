const Hero = ({ image }) => {
  return (
    <header className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-content">
        <p className="hero-small">A world of soft light</p>
        <h1>
          Welcome to <span>Lumora</span>
        </h1>
        <p>A calm and beautiful world, a little different from the one we know.</p>
      </div>
    </header>
  );
};

export default Hero;
