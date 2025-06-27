import "./FourthScreen.css";
import ringvid from "../videos/ringvid.mp4";
import BESMARTdiag from "../photos/BESMARTdiag.png";

function FourthScreen() {
  return (
    <div className="FourthScreen">
      <video className="FourthScreenVideo" src={ringvid} loop autoPlay muted />
      <img
        className="FourthScreenImage"
        src={BESMARTdiag}
        alt="BESMART Diagram"
      />
    </div>
  );
}

export default FourthScreen;
