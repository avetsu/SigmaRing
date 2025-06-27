import "./SecondScreen.css";
import hand from "../photos/hand.png";
import flatring from "../photos/flatring.png";
import Slider from "../components/Slider";
import Card from "../components/Card";
import SigmaRing from "../photos/SigmaRing.png";
import Feather from "../photos/Feather.png";
import Battery from "../photos/Battery.png";
import Diamond from "../photos/Diamond.png";
import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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

function SecondScreen() {
  const { w, h } = useWindowSize();
  const t = useT();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="SecondScreen">
      <div className="PrimaryContainer">
        {w < 768 && (
          <div className="MobileText">
            <div className="Title">
              <span style={{ fontWeight: 700 }}>{t.s2title}</span> {t.s2titlep2}
            </div>
            <div className="Subtitle">
              {t.s2body}
              {t.s2bodyp2}
            </div>
            <div
              className="Subtitle"
              style={{ fontWeight: 700, width: "40vw" }}
            >
              {t.s2bodyp3}
            </div>
          </div>
        )}
        <div className="SecondScreenImages">
          <div className="CircleStack">
            <div className="Circle1 centered" />
            <div className="CircleAnim2 centered" />
            <div className="CircleAnim3 centered" />
            <div className="CircleAnim4 centered" />
            <div className="Circle5 centered" />
            <div className="GlowingCircle centered" />
            <img src={flatring} alt="Flat Ring" className="FlatRing centered" />
          </div>
          <div className="HandLayers">
            <img src={hand} alt="Hand" className="HandImage SuperposedImage" />
            <div className="HandOverlay SuperposedImage" />
          </div>
        </div>
        {w > 768 ? (
          <div className="SecondScreenText">
            <div className="Title">
              <span style={{ fontWeight: 700 }}>{t.s2title}</span> {t.s2titlep2}
            </div>
            <div className="Subtitle">{t.s2body + t.s2bodyp2}</div>
            <div className="Subtitle" style={{ fontWeight: 700 }}>
              {t.s2bodyp3}
            </div>
            <Slider value={"Pre-Order Now!"} purple={"purple"} />
          </div>
        ) : (
          <Slider
            value={"Pre-Order Now!"}
            purple={"purple"}
            stylesvalue={{
              fontSize: "18px",
              padding: "0",
              marginLeft: "5vw",
            }}
            styles={{
              width: "100%",
              paddingLeft: "3vw",
              marginBottom: "-30vh",
            }}
          />
        )}
      </div>
      {w > 768 ? (
        <div className="CardContainer">
          <Card
            icon={SigmaRing}
            title={t.s2card1title}
            content={t.s2card1body}
            styles={{ backgroundColor: "#C1EF00" }}
          />
          <Card
            icon={Feather}
            title={t.s2card2title}
            content={t.s2card2body}
            iconstyle={{ marginBottom: "-10px" }}
            styles={{ backgroundColor: "#FFFFFF" }}
          />
          <Card
            icon={Battery}
            title={t.s2card3title}
            content={t.s2card3body}
            styles={{ backgroundColor: "#C1EF00" }}
          />
          <Card
            icon={Diamond}
            title={t.s2card4title}
            content={t.s2card4body}
            iconstyle={{ marginBottom: "-10px" }}
            styles={{ backgroundColor: "#FFFFFF" }}
          />
        </div>
      ) : (
        <div className="CardContainer" style={{ marginTop: "-7vh" }}>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide" key="1">
              <Card
                icon={SigmaRing}
                title={t.s2card1title}
                content={t.s2card1body}
                styles={{
                  backgroundColor: "#C1EF00",
                  margin: "0 2vw",
                  borderRadius: "31px",
                }}
                iconstyle={{ marginTop: "40px" }}
                titlestyle={{ fontSize: "18px", marginTop: "40px" }}
                contentstyle={{ fontSize: "14px", width: "260px" }}
              />
            </div>
            <div className="keen-slider__slide" key="2">
              <Card
                icon={Feather}
                title={t.s2card2title}
                content={t.s2card2body}
                styles={{
                  backgroundColor: "#FFFFFF",
                  margin: "0 2vw",
                  borderRadius: "31px",
                }}
                iconstyle={{ marginTop: "40px" }}
                titlestyle={{ fontSize: "18px", marginTop: "40px" }}
                contentstyle={{ fontSize: "14px", width: "260px" }}
              />
            </div>
            <div className="keen-slider__slide" key="3">
              <Card
                icon={Battery}
                title={t.s2card3title}
                content={t.s2card3body}
                styles={{
                  backgroundColor: "#C1EF00",
                  margin: "0 2vw",
                  borderRadius: "31px",
                }}
                iconstyle={{ marginTop: "40px" }}
                titlestyle={{ fontSize: "18px", marginTop: "40px" }}
                contentstyle={{ fontSize: "14px", width: "260px" }}
              />
            </div>
            <div className="keen-slider__slide" key="4">
              <Card
                icon={Diamond}
                title={t.s2card4title}
                content={t.s2card4body}
                styles={{
                  backgroundColor: "#FFFFFF",
                  margin: "0 2vw",
                  borderRadius: "31px",
                }}
                iconstyle={{ marginTop: "40px" }}
                titlestyle={{ fontSize: "18px", marginTop: "40px" }}
                contentstyle={{ fontSize: "14px", width: "260px" }}
              />
            </div>
          </div>
        </div>
      )}
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SecondScreen;
