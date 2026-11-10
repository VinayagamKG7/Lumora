const Card = ({ title, text, color }) => {
  return (
    <div className="card" style={{ background: color }}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Card;
