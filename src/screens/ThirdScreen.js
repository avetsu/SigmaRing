import "./ThirdScreen.css";
import RingBox from "../photos/RingBox.png";
import { useT } from "../features/UseT";

function ThirdScreen() {
  const t = useT();
  return (
    <div className="ThirdScreen">
      <div className="BenefitsContainer">
        <div className="BenefitsTitle">{t.s3title}</div>
        <div className="BenefitsSubtitle">{t.s3subtitle}</div>
        <div className="Benefits" style={{ marginTop: "40px" }}>
          {t.s3benefit1}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="Benefits">{t.s3benefit2}</div>
            <div className="Benefits">{t.s3benefit3}</div>
            <div className="Benefits">{t.s3benefit4}</div>
            <div className="Benefits">{t.s3benefit5}</div>
            <div className="Benefits">{t.s3benefit6}</div>
            <div className="Benefits">{t.s3benefit7}</div>
            <div className="Benefits">{t.s3benefit8}</div>
          </div>
          <div className="SecondColumn">
            <div className="Benefits">{t.s3benefit9}</div>
            <div className="Benefits">{t.s3benefit10}</div>
            <div className="Benefits">{t.s3benefit11}</div>
            <div className="Benefits">{t.s3benefit12}</div>
            <div className="Benefits">{t.s3benefit13}</div>
            <div className="Benefits">{t.s3benefit14}</div>
            <div className="Benefits">{t.s3benefit15}</div>
          </div>
        </div>
      </div>
      <div className="RingBoxContainer">
        <img src={RingBox} alt="Ring Box" className="RingBoxImage" />
        <div className="RingBoxText">{t.s3greensmall}</div>
        <div className="RingBoxText Large">{t.s3greenlarge}</div>
      </div>
    </div>
  );
}

export default ThirdScreen;
