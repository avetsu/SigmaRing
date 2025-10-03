import Slider from "../components/Slider";
import "./FirstScreen.css";
import ringimg from "../photos/ring.png";
import ringshadow from "../photos/Ellipse.png";
import outlineSmart from "../photos/SMART.png";
import SmallGreen from "../photos/SmallGreen.png";
import BigGreen from "../photos/BigGreen.png";
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
  const t = useT();
  return (
    <div className="FirstScreen">
      <Background />
      <div className="FirstScreenContentContainer">
        <div className="FirstScreenContent Sigma">Sigma</div>
        <div className="FirstScreenContent Ring1">Ring</div>
        <div className="multiply hide-on-mobile Be">BE</div>
        <div className="FirstScreenContent Tech">{t.s1title1}</div>
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
            style={{ width: `${w / 1.8}px` }}
          />
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: `${w / 96}px`,
          }}
        >
          <img
            src={outlineSmart}
            alt="Transparent Smart"
            style={{ width: `${w / 1.8}px` }}
          />
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            textAlign: "start",
            width: "100%",
            fontWeight: 700,
            fontSize: `${w / 5.208}px`,
            letterSpacing: `${w / -37.6}px`,
            color: "rgba(255, 255, 255, 0.59)",
            backgroundColor: "rgba(255, 255, 255, 0.59)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: `${w / 6.4}px`,
            marginLeft: `-${w / 88}px`,
          }}
        >
          SMART
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: `${w / 192}px`,
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
            style={{ width: `${w / 1.8}px` }}
          />
        </div>
        <div
          className="multiply hide-on-mobile"
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: `${w / 96}px`,
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
            style={{ width: `${w / 1.8}px` }}
          />
        </div>
        <div
          className="Anim-Ring"
          style={{
            zIndex: 4,
          }}
        >
          <div className="ring-wrapper">
            <img
              className="ringimg"
              src={ringimg}
              alt="Ring"
              style={{ position: "relative" }}
            />
          </div>{" "}
          <img
            className="shadow"
            src={ringshadow}
            alt="shadow"
            style={{ position: "relative" }}
          />
        </div>
      </div>
      <div className="FirstScreenCorner">
        {w > 768 ? (
          <>
            <div style={{ fontSize: `${w / 90}px`, fontWeight: 400 }}>
              {t.s1title2}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: `${w / 40}px`, fontWeight: 400 }}>
              {t.s1title2}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default FirstScreen;
