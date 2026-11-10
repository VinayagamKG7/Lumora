import Card from "./Card";

const Section = ({ id, title, text, color, image, cards }) => {
  return (
    <section id={id}>
      <div className="section-image" style={{ background: color }}>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      {text && <p className="text">{text}</p>}
      <div className="cards">
        {cards.map(([cardTitle, cardText]) => (
          <Card key={cardTitle} title={cardTitle} text={cardText} color={color} />
        ))}
      </div>
    </section>
  );
};

export default Section;
