const Navbar = ({ sections }) => {
  return (
    <nav>
      <h3>Lumora</h3>
      <div>
        {sections.map((s) => (
          <a key={s.id} href={"#" + s.id}>
            {s.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
