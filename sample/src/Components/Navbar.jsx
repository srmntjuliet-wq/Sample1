import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="brand">
          <div className="brand-logo">
            <span>SC</span>
          </div>

          <div>
            <h1>Schedule<span>Craft</span></h1>
            <p>Smart Academic Planner</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#create">Create</a>
          <a href="#schedule">Schedules</a>
        </nav>

        <div className="nav-status">
          <span className="status-dot"></span>
          <span>Organized</span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;