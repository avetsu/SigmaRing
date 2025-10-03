import "./FourthScreen.css";
import ringvid from "../videos/ringvid.mp4";
import ringvidmobile from "../videos/ringvid2.mp4";
import BESMARTdiag from "../photos/BESMARTdiag.png";
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

function FourthScreen() {
  const { w, h } = useWindowSize();
  return (
    <div className="FourthScreen">
      {w > 768 ? (
        <video
          className="FourthScreenVideo"
          src={ringvidmobile}
          loop
          autoPlay
          muted
          playsInline
        />
      ) : (
        <video
          className="FourthScreenVideo"
          src={ringvidmobile}
          loop
          autoPlay
          muted
          playsInline
        />
      )}
      <img
        className="FourthScreenImage"
        src={BESMARTdiag}
        alt="BESMART Diagram"
      />
    </div>
  );
}

export default FourthScreen;
