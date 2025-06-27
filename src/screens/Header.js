import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../features/languageSlice";
import Slider from "../components/Slider";
import logo from "../photos/logo.png";
import { RxCross2 } from "react-icons/rx";
import "./Header.css";

const Hamburger = ({ onClick, isOpen }) => (
  <div className="Hamburger" onClick={onClick}>
    {!isOpen && (
      <>
        <div className="Hamburger-line" />
        <div className="Hamburger-line" style={{ width: 29, marginTop: 10 }} />
      </>
    )}
  </div>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lang = useSelector((s) => s.language.current); // ⬅️ read from Redux
  const dispatch = useDispatch();

  const changeLang = (l) => {
    dispatch(setLanguage(l));
    setMenuOpen(false);
  };

  return (
    <>
      <header className="App-header">
        <div className="left">
          <Hamburger onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
        </div>

        <div className="center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="right">
          <Slider
            value="Buy Ring"
            className="hide-on-mobile"
            styles={{ marginTop: "0px" }}
          />
        </div>
      </header>

      {/* mobile dropdown */}
      <nav className={`MobileMenu ${menuOpen ? "open" : ""}`}>
        <RxCross2
          size={32}
          color="#D9D9D9"
          onClick={() => setMenuOpen(false)}
          style={{
            alignSelf: "flex-start",
            marginBottom: "20px",
            marginTop: "-20px",
          }}
        />

        <button
          className={lang === "en" ? "active" : "inactive"}
          onClick={() => changeLang("en")}
        >
          EN
        </button>
        <button
          className={lang === "ru" ? "active" : "inactive"}
          onClick={() => changeLang("ru")}
        >
          RU
        </button>
      </nav>
    </>
  );
}
