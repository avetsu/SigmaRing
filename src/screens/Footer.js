import "./Footer.css";
import logo from "../photos/logo.png";

function Footer() {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" className="FooterLogo" />
      <div className="FooterText">©2025 Sigma. All right reserved.</div>
    </div>
  );
}

export default Footer;
