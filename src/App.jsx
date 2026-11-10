import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import sections, { heroImage } from "./data";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar sections={sections} />
      <Hero image={heroImage} />
      {sections.map((s) => (
        <Section
          key={s.id}
          id={s.id}
          title={s.title}
          text={s.text}
          color={s.color}
          image={s.image}
          cards={s.cards}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
