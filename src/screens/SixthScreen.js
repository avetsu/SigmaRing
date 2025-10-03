import "./SixthScreen.css";
import HandRing from "../photos/HandRing.png";
import HandWater from "../photos/HandWater.png";
import Running from "../photos/Running.png";
import HandShoes from "../photos/HandShoes.png";
import Pyjamas from "../photos/Pyjamas.png";
import { useState, useEffect } from "react";
import { useT } from "../features/UseT";
import { useSelector } from "react-redux";

function useWindowSize() {
  const [size, setSize] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}

function SixthScreen() {
  const { w, h } = useWindowSize();
  const lang = useSelector((s) => s.language.current);
  console.log(lang);
  const t = useT();
  return (
    <div className="SixthScreen">
      <div className="DarkOverlay"></div>
      <div className="SixthScreenContainer">
        {w > 768 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "calc(100vw - 40px)",
              justifyContent: "center",
              margin: "0 20px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: "1" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div style={{ textAlign: "start" }}>
                    <div
                      style={{
                        fontSize: "2vw",
                        fontWeight: 275,
                        letterSpacing: "1vw",
                      }}
                    >
                      {t.s6top}
                    </div>
                    <div
                      style={{
                        fontSize: "6vw",
                        fontWeight: 700,
                        letterSpacing: "-0.5vw",
                        marginTop: lang === "ru" ? "-2vw" : "-1vw",
                      }}
                    >
                      {t.s6white}
                      <span style={{ color: "#C1EF00", marginLeft: "0.5vw" }}>
                        {t.s6green}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "1.1vw",
                        fontWeight: 400,
                        letterSpacing: "0.01vw",
                        marginTop: lang === "ru" ? "-0.5vw" : "-1.5vw",
                      }}
                    >
                      {t.s6bottom}
                    </div>
                  </div>
                </div>
                <img
                  src={Running}
                  alt="Running"
                  style={{ width: "39vw", marginBottom: "0.47vw" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: "1",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={HandWater}
                  alt="Hand Water"
                  style={{
                    width: "19vw",
                  }}
                />
                <img
                  src={Pyjamas}
                  alt="Pyjamas"
                  style={{ width: "39vw", margin: "0 0.47vw" }}
                />
                <img
                  src={HandShoes}
                  alt="Hand Shoes"
                  style={{ width: "19vw" }}
                />
              </div>
            </div>
            <img
              src={HandRing}
              alt="Hand Ring"
              style={{ width: "17vw", marginLeft: "0.47vw" }}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "5vw",
                  fontWeight: 275,
                  letterSpacing: "2vw",
                }}
              >
                {t.s6top}
              </div>
              <div
                style={{
                  fontSize: "14vw",
                  fontWeight: 700,
                  letterSpacing: "-1vw",
                  marginTop: "-3vw",
                }}
              >
                {t.s6white}
                <span style={{ color: "#C1EF00" }}>{t.s6green}</span>
              </div>
              <div
                style={{
                  fontSize: "3vw",
                  fontWeight: 400,
                  letterSpacing: "0.1vw",
                  marginTop: "-2vw",
                  marginBottom: "4vw",
                }}
              >
                {t.s6bottom}
              </div>
            </div>
            <img
              src={Running}
              alt="Running"
              style={{ width: "calc(100vw - 40px)", margin: "5px 20px" }}
            />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={HandWater}
                  alt="Hand Water"
                  style={{
                    margin: "5px",
                    marginLeft: "20px",
                    width: "calc(50vw - 25px)",
                  }}
                />
                <img
                  src={HandShoes}
                  alt="Hand Shoes"
                  style={{
                    margin: "5px",
                    marginLeft: "20px",
                    width: "calc(50vw - 25px)",
                  }}
                />
              </div>
              <div
                style={{
                  width: "calc(50vw - 25px)",
                  overflow: "hidden",
                  position: "relative",
                  margin: "5px",
                  marginRight: "20px",
                  borderRadius: "2vw",
                }}
              >
                <img
                  src={HandRing}
                  alt="Hand Ring"
                  style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "",
                    left: 0,
                  }}
                />
              </div>
            </div>
            <img
              src={Pyjamas}
              alt="Pyjamas"
              style={{
                margin: "5px 20px",
                width: "calc(100vw - 40px)",
              }}
            />

            {/**/}
          </div>
        )}
      </div>
    </div>
  );
}

export default SixthScreen;
