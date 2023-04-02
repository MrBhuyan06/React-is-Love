import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="left-logo">
        <h2>Profile Finder</h2>
      </div>
      <ul className="right-nav-list">
        <li>Home</li>
        <li>contact</li>
        <li>About us</li>
      </ul>
    </header>
  );
};

export default Header;
