import "./SixthScreen.css";
import HandRing from "../photos/HandRing.png";
import HandWater from "../photos/HandWater.png";
import Running from "../photos/Running.png";
import HandShoes from "../photos/HandShoes.png";
import Pyjamas from "../photos/Pyjamas.png";
import { useState, useEffect } from "react";
import { useT } from "../features/UseT";

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
  const t = useT();
  return (
    <div className="SixthScreen">
      <div class="DarkOverlay"></div>
      <div className="SixthScreenContainer">
        {w > 768 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                        fontSize: "40px",
                        fontWeight: 275,
                        letterSpacing: "20px",
                      }}
                    >
                      {t.s6top}
                    </div>
                    <div
                      style={{
                        fontSize: "110px",
                        fontWeight: 700,
                        letterSpacing: "-7.7px",
                        marginTop: "-20px",
                      }}
                    >
                      {t.s6white}
                      <span style={{ color: "#C1EF00", marginLeft: "10px" }}>
                        {t.s6green}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 200,
                        letterSpacing: "0.8px",
                        marginTop: "-30px",
                      }}
                    >
                      {t.s6bottom}
                    </div>
                  </div>
                </div>
                <img src={Running} alt="Running" style={{ margin: "8px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={HandWater}
                  alt="Hand Water"
                  style={{ margin: "8px" }}
                />
                <img src={Pyjamas} alt="Pyjamas" style={{ margin: "8px" }} />
                <img
                  src={HandShoes}
                  alt="Hand Shoes"
                  style={{ margin: "8px" }}
                />
              </div>
            </div>
            <img src={HandRing} alt="Hand Ring" style={{ margin: "8px" }} />
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
                  fontSize: "20px",
                  fontWeight: 275,
                  letterSpacing: "10px",
                }}
              >
                {t.s6top}
              </div>
              <div
                style={{
                  fontSize: "60px",
                  fontWeight: 700,
                  letterSpacing: "-3px",
                  marginTop: "-10px",
                }}
              >
                {t.s6white}
                <span style={{ color: "#C1EF00" }}>{t.s6green}</span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 200,
                  letterSpacing: "0.5px",
                  marginTop: "-15px",
                  marginBottom: "2vh",
                }}
              >
                {t.s6bottom}
              </div>
            </div>
            <img
              src={Running}
              alt="Running"
              style={{ width: "94vw", margin: "1vw" }}
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
                  style={{ margin: "1vw", width: "46vw" }}
                />
                <img
                  src={HandShoes}
                  alt="Hand Shoes"
                  style={{ margin: "1vw", width: "46vw" }}
                />
              </div>
              <img
                src={HandRing}
                alt="Hand Ring"
                style={{ margin: "1vw", height: "85.5vw", marginLeft: "3vw" }}
              />
            </div>
            <img
              src={Pyjamas}
              alt="Pyjamas"
              style={{ margin: "1vw", width: "94vw" }}
            />

            {/**/}
          </div>
        )}
      </div>
    </div>
  );
}

export default SixthScreen;
