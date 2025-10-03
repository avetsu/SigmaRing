import "./FifthScreen.css";
import RingShadow from "../photos/RingShadow.png";
import OneYear from "../photos/OneYear.png";
import Cards from "../photos/Cards.png";
import Subscription from "../photos/Subscription.png";
import VIP from "../photos/VIP.png";
import Guaranteed from "../photos/Guaranteed.png";
import PromoCard from "../components/PromoCard";
import Slider from "../components/Slider";
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

function FifthScreen() {
  const { w, h } = useWindowSize();
  const lang = useSelector((s) => s.language.current);
  const t = useT();
  return (
    <div className="FifthScreen">
      <div className="FifthScreenContainer">
        <div className="FifthScreenContent">
          <div className="FifthScreenContentRow">
            <span className="Sigma5">Sigma</span>
            <span className="Limited">{t.s5purple}</span>
          </div>
          <div className="Ring">Ring</div>
          {w <= 768 && (
            <img
              src={RingShadow}
              alt="Ring Shadow"
              style={{
                marginLeft: "-21vw",
                width: "104vw",
              }}
            />
          )}
          <div
            className="Quantity"
            style={{ marginTop: lang === "ru" && w <= 768 ? "-20vw" : "" }}
          >
            {t.s5subtitle}
          </div>
          {w > 768 ? (
            <div className="PromoCards">
              <PromoCard image={VIP} title="VIP" text={t.s5promocard1} />
              <PromoCard
                image={Subscription}
                title="Subscription"
                text={t.s5promocard2}
              />
              <PromoCard
                image={Guaranteed}
                title="Guaranteed"
                text={t.s5promocard3}
              />
              <PromoCard
                image={OneYear}
                title="One Year"
                text={t.s5promocard4}
              />
              <PromoCard image={Cards} title="Cards" text={t.s5promocard5} />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2vw",
                marginTop: "2vw",
              }}
            >
              <div className="PromoCards">
                <PromoCard
                  image={VIP}
                  title="VIP"
                  text={t.s5promocard1}
                  stylesimage={{ height: "18vw" }}
                  styles={{
                    width: "28vw",
                    height: "42vw",
                    borderRadius: "6vw",
                    marginRight: "0px",
                    justifyContent: "space-evenly",
                  }}
                  stylestext={{ fontSize: "3vw", width: "22vw" }}
                />
                <PromoCard
                  image={Subscription}
                  title="Subscription"
                  text={t.s5promocard2}
                  stylesimage={{ height: "18vw" }}
                  styles={{
                    width: "28vw",
                    height: "42vw",
                    borderRadius: "6vw",
                    marginRight: "0px",
                    justifyContent: "space-evenly",
                  }}
                  stylestext={{ fontSize: "3vw", width: "22vw" }}
                />
                <PromoCard
                  image={Guaranteed}
                  title="Guaranteed"
                  text={t.s5promocard3}
                  stylesimage={{ height: "18vw" }}
                  styles={{
                    width: "28vw",
                    height: "42vw",
                    borderRadius: "6vw",
                    marginRight: "0px",
                    justifyContent: "space-evenly",
                  }}
                  stylestext={{ fontSize: "3vw", width: "22vw" }}
                />
              </div>
              <div className="PromoCards">
                <PromoCard
                  image={OneYear}
                  title="One Year"
                  text={t.s5promocard4}
                  stylesimage={{ height: "18vw" }}
                  styles={{
                    width: "28vw",
                    height: "42vw",
                    borderRadius: "6vw",
                    marginRight: "0px",
                    justifyContent: "space-evenly",
                  }}
                  stylestext={{ fontSize: "3vw", width: "20vw" }}
                />
                <PromoCard
                  image={Cards}
                  title="Cards"
                  text={t.s5promocard5}
                  stylesimage={{ height: "18vw" }}
                  styles={{
                    width: "28vw",
                    height: "42vw",
                    borderRadius: "6vw",
                    marginRight: "0px",
                    justifyContent: "space-evenly",
                  }}
                  stylestext={{ fontSize: "3vw", width: "22vw" }}
                />
              </div>
            </div>
          )}
          <div className="Sum">
            <div className="Dollars">$400</div>
            <div className="DEXNET">{t.s5priceinfo}</div>
            {w > 768 ? (
              <Slider
                value={"Buy Premium Ring"}
                stylesvalue={{
                  fontSize: "1vw",
                  paddingLeft: "1.25vw",
                  paddingRight: "1vw",
                }}
                styles={{ marginLeft: "3vw", height: "3vw" }}
                stylesicon={{
                  width: "2vw",
                  height: "2vw",
                  marginRight: "0.5vw",
                }}
              />
            ) : (
              <Slider
                value={"Buy Premium Ring"}
                stylesvalue={{
                  fontSize: "3vw",
                  paddingLeft: "4vw",
                  paddingRight: "0vw",
                }}
                styles={{
                  width: "43vw",
                  height: "10vw",
                  marginBottom: "5vw",
                }}
                stylesicon={{ height: "8vw", width: "8vw", marginRight: "1vw" }}
              />
            )}
          </div>
        </div>
        {w > 768 && (
          <img
            src={RingShadow}
            alt="Ring Shadow"
            style={{
              marginBottom: "-10vw",
              marginLeft: "-10vw",
              width: "52vw",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default FifthScreen;
