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
        <div className="FirstScreenContent Ring1">Ring</div>
        <div className="multiply hide-on-mobile Be">BE</div>
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
              marginTop: `${w / 26}px`,
              height: `${w / 34}px`,
            }}
            stylesicon={{ height: `${w / 40}px`, width: `${w / 40}px` }}
            stylesvalue={{
              paddingLeft: `${w / 48}px`,
              paddingRight: `${w / 64}px`,
              fontSize: `${w / 106}px`,
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
          {/**/}
        </div>
      </div>
      <div className="FirstScreenCorner">
        {w > 768 ? (
          <>
            <div style={{ fontSize: `${w / 120}px`, fontWeight: 400 }}>
              Unlock peak performance by mastering your health, mindset and
              daily habits with SIGMA.
            </div>
            <div
              style={{
                marginTop: "5px",
                fontSize: `${w / 192}px`,
                fontWeight: 400,
                opacity: 0.5,
                width: `${w / 3.2}px`,
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
              position: "relative",
              zIndex: 1,
              marginLeft: "0px",
              marginTop: "10vw",
              marginRight: "20px",
              width: "calc((100vw - 40px) * 0.70)",
              height: "13.5vw",
            }}
            stylesvalue={{
              paddingRight: "auto",
              paddingLeft: "20vw",
              fontSize: "4.5vw",
            }}
            stylesicon={{
              height: "11vw",
              width: "11vw",
              marginRight: "1.25vw",
            }}
          />
        )}
      </div>
    </div>
  );
}
export default FirstScreen;
