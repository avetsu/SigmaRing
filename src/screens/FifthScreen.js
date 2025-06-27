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
          {w < 768 && (
            <img
              src={RingShadow}
              alt="Ring Shadow"
              style={{
                marginLeft: "-10vw",
                width: "80vw",
              }}
            />
          )}
          <div className="Quantity">{t.s5subtitle}</div>
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
                gap: "2vh",
                marginTop: "2vh",
              }}
            >
              <div className="PromoCards">
                <PromoCard
                  image={VIP}
                  title="VIP"
                  text={t.s5promocard1}
                  stylesimage={{ width: "83px" }}
                  styles={{
                    width: "28vw",
                    height: "17vh",
                    borderRadius: "12px",
                    marginRight: "0",
                  }}
                  stylestext={{ fontSize: "10px" }}
                />
                <PromoCard
                  image={Subscription}
                  title="Subscription"
                  text={t.s5promocard5}
                  stylesimage={{ width: "83px" }}
                  styles={{
                    width: "28vw",
                    height: "17vh",
                    borderRadius: "12px",
                    marginRight: "0",
                  }}
                  stylestext={{ fontSize: "10px" }}
                />
                <PromoCard
                  image={Guaranteed}
                  title="Guaranteed"
                  text={t.s5promocard3}
                  stylesimage={{ width: "83px" }}
                  styles={{
                    width: "28vw",
                    height: "17vh",
                    borderRadius: "12px",
                    marginRight: "0",
                  }}
                  stylestext={{ fontSize: "10px" }}
                />
              </div>
              <div className="PromoCards">
                <PromoCard
                  image={OneYear}
                  title="One Year"
                  text={t.s5promocard4}
                  stylesimage={{ width: "83px" }}
                  styles={{
                    width: "28vw",
                    height: "17vh",
                    borderRadius: "12px",
                    marginRight: "0",
                  }}
                  stylestext={{ fontSize: "10px" }}
                />
                <PromoCard
                  image={Cards}
                  title="Cards"
                  text={t.s5promocard5}
                  stylesimage={{ width: "83px" }}
                  styles={{
                    width: "28vw",
                    height: "17vh",
                    borderRadius: "12px",
                    marginRight: "0",
                  }}
                  stylestext={{ fontSize: "10px" }}
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
                stylesvalue={{ paddingLeft: "25px", paddingRight: "20px" }}
                styles={{ marginLeft: "60px" }}
              />
            ) : (
              <Slider
                value={"Buy Premium Ring"}
                stylesvalue={{
                  fontSize: "11px",
                  paddingLeft: "5vw",
                  paddingRight: "0vw",
                }}
                styles={{
                  width: "40vw",
                  height: "5vh",
                  marginLeft: "0",
                }}
                stylesicon={{ height: "4vh", width: "4vh" }}
              />
            )}
          </div>
        </div>
        {w > 768 && (
          <img
            src={RingShadow}
            alt="Ring Shadow"
            style={{
              marginBottom: "-200px",
              marginLeft: "-200px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default FifthScreen;
