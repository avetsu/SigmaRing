import "./Modal.css";
import ModalImg from "../photos/Modal.png";
import ModalImgMobile from "../photos/ModalMobile.png";
import RingShadow from "../photos/RingShadow.png";
import RingShadowMobile from "../photos/RingShadowMobile.png";
import RingSelection from "../photos/RingSelection.webp";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modalSlice";
import Slider from "../components/Slider";

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

const TInput = (props) => {
  return (
    <div className="InputTitle" style={props.stylediv}>
      <div className="Name">{props.name}</div>
      <input
        type="text"
        className="Input"
        placeholder={props.placeholder}
        style={props.style}
        value={props.value}
      />
    </div>
  );
};

function Modal() {
  const { w, h } = useWindowSize();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const [RingImgVis, setRingImgVis] = useState(false);
  const [value, setValue] = useState(10);

  const decrease = () => setValue((v) => Math.max(6, v - 1));
  const increase = () => setValue((v) => Math.min(13, v + 1));
  const selectValue = (n) => setValue((v) => v + n);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="Backdrop" onClick={() => dispatch(closeModal())}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="RingSelectionContainer"
          onClick={() => setRingImgVis(false)}
          style={!RingImgVis ? { display: "none" } : {}}
        >
          <div className="RingSelectionImgContainer">
            <RxCross2
              className="CloseIcon"
              color="black"
              style={{ padding: "1vw" }}
              size={
                w > 768 ? "clamp(0px, 2.5vw, 40px)" : "clamp(0px, 5.6vw, 30px)"
              }
            />
            <img
              src={RingSelection}
              alt="Ring Selection"
              className="RingSelectionImg"
            />
          </div>
        </div>
        {w > 768 ? (
          <>
            <img src={ModalImg} alt="Modal" className="ModalImg" />
            <img src={RingShadow} alt="Ring Shadow" className="RingImg" />
            <div className="ModalTitle">BUY RING</div>
            <div className="ModalClose" onClick={() => dispatch(closeModal())}>
              <RxCross2
                className="CloseIcon"
                size={"clamp(0px, 2.5vw, 40px)"}
              />
            </div>
            <div className="ModalContent">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  width: "100%",
                  gap: "clamp(0px, 2vw, 38px)",
                }}
              >
                <TInput name="First Name" placeholder="Ivan" />
                <TInput name="Last Name" placeholder="Ivanov" />
              </div>
              <div style={{ width: "95%" }}>
                <TInput
                  name="Email"
                  placeholder="ivan@gmail.com"
                  style={{ width: "100%" }}
                />
              </div>
              <div
                style={{
                  width: "95%",
                  marginTop: "clamp(0px, 1vw, 17px)",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TInput
                  name="Quantity"
                  placeholder="2"
                  style={{
                    width: "clamp(0px, 1vw, 17px)",
                    paddingRight: "clamp(0px, 1vw, 17px)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: "clamp(0px, 0.5vw, 8px)",
                    background: "#000",
                    padding: "0px 1vw",
                    paddingRight: "clamp(0px, 1vw, 17px)",
                    paddingLeft: "clamp(0px, 3vw, 50px)",
                    borderRadius: "0.5vw",
                    color: "white",
                    fontSize: "clamp(0px, 1vw, 17px)",
                  }}
                >
                  <div
                    className="Name"
                    style={{
                      marginBottom: "clamp(0px, 1vw, 17px)",
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    Size
                    <span
                      style={{
                        marginLeft: "clamp(0px, 1.5vw, 26px)",
                        color: "#FFFFFF66",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => setRingImgVis(true)}
                    >
                      How to pick the size?
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "clamp(0px, 17vw, 300px)",
                      justifyContent: "space-between",
                    }}
                  >
                    <IoIosArrowBack
                      onClick={decrease}
                      color="#C1EF00"
                      style={{
                        cursor: value <= 6 ? "" : "pointer",
                      }}
                    />
                    <span
                      className="Number"
                      onClick={value > 7 ? () => selectValue(-2) : null}
                      style={{
                        display: value < 8 ? "none" : "",
                        color: value < 8 ? "#ff6759" : "#FFFFFF33",
                        cursor: value < 8 ? "" : "pointer",
                      }}
                    >
                      {value - 2}
                    </span>
                    <span
                      className="Number"
                      onClick={value > 6 ? () => selectValue(-1) : null}
                      style={{
                        display: value < 7 ? "none" : "",
                        color: value < 7 ? "#ff6759" : "#FFFFFF70",
                        cursor: value < 7 ? "" : "pointer",
                      }}
                    >
                      {value - 1}
                    </span>
                    <span className="Number" style={{ color: "#C1EF00" }}>
                      {value}
                    </span>
                    <span
                      className="Number"
                      onClick={value < 13 ? () => selectValue(1) : null}
                      style={{
                        display: value > 12 ? "none" : "",
                        color: value > 12 ? "#ff6759" : "#FFFFFF70",
                        cursor: value > 12 ? "" : "pointer",
                      }}
                    >
                      {value + 1}
                    </span>
                    <span
                      className="Number"
                      onClick={value < 12 ? () => selectValue(2) : null}
                      style={{
                        display: value > 11 ? "none" : "",
                        color: value > 11 ? "#ff6759" : "#FFFFFF70",
                        cursor: value > 11 ? "" : "pointer",
                      }}
                    >
                      {value + 2}
                    </span>
                    <IoIosArrowForward
                      onClick={increase}
                      color="#C1EF00"
                      style={{ cursor: value >= 13 ? "" : "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <Slider
                value={"Buy"}
                styles={{
                  width: "clamp(0px, 12vw, 200px)",
                  height: "clamp(0px, 3vw, 50px)",
                  marginLeft: "0",
                  marginTop: "clamp(0px, 2vw, 34px)",
                }}
                stylesvalue={{
                  paddingLeft: "clamp(0px, 4.5vw, 75px)",
                  paddingRight: "0",
                  fontSize: "clamp(0px, 1vw, 17px)",
                  fontFamily: '"Lexend", sans-serif',
                }}
                stylesicon={{
                  width: "clamp(0px, 2.2vw, 26px)",
                  height: "clamp(0px, 2.2vw, 26px)",
                  marginRight: "clamp(0px, 0.4vw, 6.68px)",
                }}
              />
            </div>
          </>
        ) : (
          <>
            <img src={ModalImgMobile} alt="Modal" className="ModalImgMob" />
            <img
              src={RingShadowMobile}
              alt="Ring Shadow"
              className="RingImgMob"
            />
            <div className="ModalTitle">BUY RING</div>
            <div className="ModalClose" onClick={() => dispatch(closeModal())}>
              <RxCross2
                className="CloseIcon"
                size={"clamp(0px, 5.6vw, 30px)"}
              />
            </div>
            <div className="ModalContent">
              <TInput name="First Name" placeholder="Ivan" />
              <TInput name="Last Name" placeholder="Ivanov" />
              <div style={{ width: "100%" }}>
                <TInput name="Email" placeholder="ivan@gmail.com" />
              </div>
              <div
                style={{
                  width: "100%",
                  marginTop: "1vw",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TInput
                  name="Quantity"
                  placeholder="2"
                  style={{ width: "3.2vw", paddingRight: "0.8vw" }}
                  stylediv={{ width: "clamp(0px, 12vw, 65p)" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: "clamp(0px, 0.4vw, 2.31px)",
                    background: "#000",
                    padding: "0px",
                    paddingRight: "clamp(0px, 0.8vw, 5px)",
                    paddingLeft: "clamp(0px, 6.4vw, 37px)",
                    borderRadius: "0.5vw",
                    color: "white",
                    fontSize: "0.8vw",
                  }}
                >
                  <div
                    className="Name"
                    style={{
                      marginBottom: "0.8vw",
                      display: "flex",
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center",
                      fontSize: "clamp(0px, 2.8vw, 15px)",
                    }}
                  >
                    Size
                    <span
                      style={{
                        marginLeft: "3.6vw",
                        color: "#FFFFFF66",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => setRingImgVis(true)}
                    >
                      How to pick the size?
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "clamp(0px, 44vw, 234px)",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "clamp(0px, 6.4vw, 35px)",
                    }}
                  >
                    <IoIosArrowBack
                      onClick={decrease}
                      color="#C1EF00"
                      style={{
                        cursor: value < 7 ? "" : "pointer",
                        height: "3.2vw",
                        width: "3.2vw",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="Number"
                      onClick={value > 7 ? () => selectValue(-2) : null}
                      style={{
                        display: value < 8 ? "none" : "",
                        color: value < 8 ? "#ff6759" : "#FFFFFF33",
                        cursor: value < 8 ? "" : "pointer",
                      }}
                    >
                      {value - 2}
                    </span>
                    <span
                      className="Number"
                      onClick={value > 6 ? () => selectValue(-1) : null}
                      style={{
                        display: value < 7 ? "none" : "",
                        color: value < 7 ? "#ff6759" : "#FFFFFF70",
                        cursor: value < 7 ? "" : "pointer",
                      }}
                    >
                      {value - 1}
                    </span>
                    <span className="Number" style={{ color: "#C1EF00" }}>
                      {value}
                    </span>
                    <span
                      className="Number"
                      onClick={value < 13 ? () => selectValue(1) : null}
                      style={{
                        display: value > 12 ? "none" : "",
                        color: value > 12 ? "#ff6759" : "#FFFFFF70",
                        cursor: value > 12 ? "" : "pointer",
                      }}
                    >
                      {value + 1}
                    </span>
                    <span
                      className="Number"
                      onClick={value < 12 ? () => selectValue(2) : null}
                      style={{
                        display: value > 11 ? "none" : "",
                        color: value > 11 ? "#ff6759" : "#FFFFFF70",
                        cursor: value > 11 ? "" : "pointer",
                      }}
                    >
                      {value + 2}
                    </span>
                    <IoIosArrowForward
                      onClick={increase}
                      color="#C1EF00"
                      style={{
                        cursor: value > 13 ? "" : "pointer",
                        width: "3.2vw",
                        height: "3.2vw",
                        flexShrink: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
              <Slider
                value={"Buy"}
                styles={{
                  width: "clamp(0px, 40vw, 214px)",
                  height: "clamp(0px, 10.4vw, 56px)",
                  marginLeft: "0",
                  marginTop: "clamp(0px, 1.6vw, 9px)",
                }}
                stylesvalue={{
                  paddingLeft: "clamp(0px, 13.6vw, 75px)",
                  paddingRight: "0",
                  fontSize: "clamp(0px, 4vw, 21px)",
                  fontFamily: '"Lexend", sans-serif',
                }}
                stylesicon={{
                  width: "clamp(0px, 8.8vw, 48px)",
                  height: "clamp(0px, 8.8vw, 48px)",
                  marginRight: "clamp(0px, 0.8vw, 4.2px)",
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
