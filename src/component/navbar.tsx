export default function Navbar() {
  return (
    <div className="nav">
      <div></div>
      <div className="nav__bar">
        <a href="/" className="nav__link">
          Home
        </a>
        <a href="#about" className="nav__link">
          About
        </a>
        <a href="#prizes" className="nav__link">
          Prizes
        </a>
        <a href="#collaborators" className="nav__link">
          Collaborators
        </a>
        <div className="nav__button">
          <button>Participate</button>
        </div>
      </div>
    </div>
  );
}
