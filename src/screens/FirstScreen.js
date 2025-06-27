import Slider from "../components/Slider";
import "./FirstScreen.css";
import ringimg from "../photos/ring.png";
import ringshadow from "../photos/Ellipse.png";
import outlineSmart from "../photos/SMART.png";
import SmallGreen from "../photos/SmallGreen.png";
import BigGreen from "../photos/BigGreen.png";
import { useState, useEffect } from "react";

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

const Background = () => {
  const { w, h } = useWindowSize();

  if (w > 768) {
    return <img src={BigGreen} alt="Background" className="Background" />;
  } else {
    return <img src={SmallGreen} alt="Background" className="Background" />;
  }
};

function FirstScreen() {
  const { w, h } = useWindowSize();
  return (
    <div className="FirstScreen">
      <Background />
      <div className="FirstScreenContentContainer">
        <div className="FirstScreenContent Sigma">Sigma</div>
        <div className="FirstScreenContent Ring">Ring</div>
        <div
          className="multiply hide-on-mobile"
          style={{
            fontWeight: 700,
            fontSize: "364px",
            marginLeft: "-30px",
            marginTop: "0px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0.59)",
            paddingRight: "70px",
            backgroundColor: "rgba(255, 255, 255, 0.59)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "300px",
          }}
        >
          BE
        </div>
        <div className="FirstScreenContent Tech">
          Technologies that care about you!
        </div>
        {w > 768 && (
          <Slider
            value="Explore"
            styles={{
              position: "relative",
              zIndex: 1,
              marginLeft: "0px",
              marginTop: "67px",
            }}
          />
        )}
      </div>
      <div className="OverflowingText">
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "364px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0)",
            WebkitTextStroke: "1px white",
          }}
        >
          <img
            src={outlineSmart}
            alt="Transparent Smart"
            style={{ width: "1055.11px" }}
          />
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            fontWeight: 700,
            fontSize: "364px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0)",
            WebkitTextStroke: "1px white",
          }}
        >
          <img
            src={outlineSmart}
            alt="Transparent Smart"
            style={{ width: "1055.11px" }}
          />
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            fontWeight: 700,
            fontSize: "364px",
            marginLeft: "-10px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0.59)",
            backgroundColor: "rgba(255, 255, 255, 0.59)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "300px",
          }}
        >
          SMART
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            fontWeight: 700,
            fontSize: "364px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0)",
            WebkitTextStroke: "1px white",
          }}
        >
          <img
            src={outlineSmart}
            alt="Transparent Smart"
            style={{ width: "1055.11px" }}
          />
        </div>
        {/* <div
          className="multiply"
          style={{
            fontWeight: 700,
            fontSize: "364px",
            marginLeft: "-30px",
            marginTop: "-170px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0)",
            paddingRight: "70px",
            WebkitTextStroke: "1px white",
          }}
        >
          SMART
        </div> */}
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            fontWeight: 700,
            fontSize: "364px",
            letterSpacing: "-50.96px",
            color: "rgba(255, 255, 255, 0)",
            WebkitTextStroke: "1px white",
          }}
        >
          <img
            src={outlineSmart}
            alt="Transparent Smart"
            style={{ width: "1055.11px" }}
          />
        </div>
        <div>
          <div class="ring-wrapper">
            <img className="ring" src={ringimg} alt="Ring" />
          </div>
          <img className="shadow" src={ringshadow} alt="shadow" />
        </div>
      </div>
      <div className="FirstScreenCorner">
        {w > 768 ? (
          <>
            <div style={{ fontSize: "16px", fontWeight: 400 }}>
              Unlock peak performance by mastering your health, mindset and
              daily habits with SIGMA.
            </div>
            <div
              style={{
                marginTop: "5px",
                fontSize: "10px",
                fontWeight: 400,
                opacity: 0.5,
                width: "585px",
                textAlign: "start",
              }}
            >
              A high-tech smart ring designed for high achievers, elite
              entrepreneurs, and visionaries who manage life and business at
              maximum speed. Combining cutting-edge innovation, ,
              blockchain-backed data security, cryptocurrency integration and
              seamless AI optimization, SIGMA sets a new standard for
              performance where innovation meets financial empowerment
            </div>
          </>
        ) : (
          <Slider
            value="Explore"
            styles={{
              position: "absolute",
              zIndex: 1,
              marginLeft: "0px",
              marginTop: "-20vh",
            }}
            stylesvalue={{ padding: "0 15vw" }}
          />
        )}
      </div>
    </div>
  );
}
export default FirstScreen;
