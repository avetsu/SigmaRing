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
        {w <= 768 && (
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
              style={{
                fontWeight: 700,
                fontSize: "4vw",
                maxWidth: "65vw",
                marginTop: "5vw",
              }}
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
        {w > 768 && (
          <div className="SecondScreenText">
            <div className="Title">
              <span style={{ fontWeight: 700 }}>{t.s2title}</span> {t.s2titlep2}
            </div>
            <div className="Subtitle">{t.s2body + t.s2bodyp2}</div>
            <div className="Subtitle" style={{ fontWeight: 700 }}>
              {t.s2bodyp3}
            </div>
          </div>
        )}
      </div>
      <div className="SecondaryContainer">
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
              styles={{ backgroundColor: "#FFFFFF" }}
              contentstyle={{ maxWidth: "19vw" }}
            />
          </div>
        ) : (
          <div className="CardContainer">
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
                    width: "calc(100vw - 40px)",
                    height: "calc((100vw - 40px) * 0.61)",
                  }}
                  iconstyle={{
                    marginTop: "6vw",
                    marginLeft: "7vw",
                    width: "12vw",
                  }}
                  titlestyle={{
                    fontSize: "5vw",
                    marginLeft: "7vw",
                    marginTop: "6vw",
                    marginBottom: "2vw",
                  }}
                  contentstyle={{
                    fontSize: "4vw",
                    marginLeft: "7vw",
                    width: "74vw",
                    maxWidth: "74vw",
                  }}
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
                    width: "calc(100vw - 40px)",
                    height: "calc((100vw - 40px) * 0.61)",
                  }}
                  iconstyle={{
                    marginTop: "6vw",
                    marginLeft: "7vw",
                    width: "12vw",
                  }}
                  titlestyle={{
                    fontSize: "5vw",
                    marginLeft: "7vw",
                    marginTop: "6vw",
                    marginBottom: "2vw",
                  }}
                  contentstyle={{
                    fontSize: "4vw",
                    marginLeft: "7vw",
                    width: "74vw",
                    maxWidth: "74vw",
                  }}
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
                    width: "calc(100vw - 40px)",
                    height: "calc((100vw - 40px) * 0.61)",
                  }}
                  iconstyle={{
                    marginTop: "6vw",
                    marginLeft: "7vw",
                    width: "12vw",
                  }}
                  titlestyle={{
                    fontSize: "5vw",
                    marginLeft: "7vw",
                    marginTop: "6vw",
                    marginBottom: "2vw",
                  }}
                  contentstyle={{
                    fontSize: "4vw",
                    marginLeft: "7vw",
                    width: "81vw",
                    maxWidth: "81vw",
                  }}
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
                    width: "calc(100vw - 40px)",
                    height: "calc((100vw - 40px) * 0.61)",
                  }}
                  iconstyle={{
                    marginTop: "6vw",
                    marginLeft: "7vw",
                    width: "12vw",
                  }}
                  titlestyle={{
                    fontSize: "5vw",
                    marginLeft: "7vw",
                    marginTop: "6vw",
                    marginBottom: "2vw",
                  }}
                  contentstyle={{
                    fontSize: "4vw",
                    marginLeft: "7vw",
                    width: "74vw",
                    maxWidth: "74vw",
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {loaded && instanceRef.current && (
          <div className="dots" style={{ padding: "1vw 0" }}>
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
    </div>
  );
}

export default SecondScreen;
