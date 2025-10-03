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
        <div className="Hamburger-line Line2" />
      </>
    )}
  </div>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lang = useSelector((s) => s.language.current);
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
          
        </div>
      </header>

      <nav className={`MobileMenu ${menuOpen ? "open" : ""}`}>
        <RxCross2
          size={32}
          className="Cross"
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
          style={{
            minWidth: "7vw",
            minHeight: "4vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          EN
        </button>
        <button
          className={lang === "ru" ? "active" : "inactive"}
          onClick={() => changeLang("ru")}
          style={{
            minWidth: "7vw",
            minHeight: "4vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          RU
        </button>
      </nav>
    </>
  );
}
