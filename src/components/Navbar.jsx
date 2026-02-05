import Hamburger from "./Menu";
import "./css/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navigation">
        <div className="logo">41st Project</div>
        <Hamburger />
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
