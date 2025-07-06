import "./Modal.css";
import ModalImg from "../photos/Modal.png";
import RingShadow from "../photos/RingShadow.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxCross2, RxHeight } from "react-icons/rx";
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
    <div className="InputTitle">
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
  const [value, setValue] = useState(15);

  const decrease = () => setValue((v) => Math.max(0.5, v - 0.5));
  const increase = () => setValue((v) => Math.min(100, v + 0.5));
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
        <img src={ModalImg} alt="Modal" className="ModalImg" />
        <img src={RingShadow} alt="Ring Shadow" className="RingImg" />
        <div className="ModalTitle">BUY RING</div>
        <div className="ModalClose" onClick={() => dispatch(closeModal())}>
          <RxCross2 className="CloseIcon" size={w > 768 ? "2.5vw" : "5vw"} />
        </div>
        <div className="ModalContent">
          {w > 768 ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  width: "100%",
                  gap: "2vw",
                }}
              >
                <TInput name="Name" placeholder="Ivan" />
                <TInput name="Family Name" placeholder="Ivanov" />
              </div>
              <div style={{ width: "95%" }}>
                <TInput
                  name="Email"
                  placeholder="ivan@gmail.com"
                  style={{ width: "100%" }}
                />
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  width: "100%",
                  gap: "2vw",
                  marginBottom: "-0.5vw",
                }}
              >
                <TInput name="Name" placeholder="Ivan" />
                <TInput name="Family Name" placeholder="Ivanov" />
              </div>
              <div style={{ width: "95%", marginBottom: "-1.25vw" }}>
                <TInput
                  name="Email"
                  placeholder="ivan@gmail.com"
                  style={{ width: "100%" }}
                />
              </div>
            </>
          )}

          <div
            style={{
              width: "95%",
              marginTop: "1vw",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {w > 768 ? (
              <TInput
                name="Quantity"
                placeholder="2"
                style={{ width: "1vw", paddingRight: "1vw" }}
              />
            ) : (
              <TInput
                name="Quantity"
                placeholder="2"
                style={{ width: "1vw", paddingRight: "1.6vw" }}
              />
            )}

            {w > 768 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "start",
                  gap: "0.5vw",
                  background: "#000",
                  padding: "0px 1vw",
                  paddingLeft: "3vw",
                  borderRadius: "0.5vw",
                  color: "white",
                  fontSize: "1vw",
                }}
              >
                <div
                  className="Name"
                  style={{
                    marginBottom: "1vw",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  Size
                  <span style={{ marginLeft: "1.5vw", color: "#FFFFFF66" }}>
                    How to pick the size?
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "17vw",
                    justifyContent: "space-between",
                  }}
                >
                  <IoIosArrowBack onClick={decrease} color="#C1EF00" />
                  <span
                    className="Number"
                    style={{ color: value - 1 <= 0 ? "#ff6759" : "#FFFFFF33" }}
                  >
                    {(value - 1).toFixed(1)}
                  </span>
                  <span
                    className="Number"
                    style={{
                      color: value - 0.5 <= 0 ? "#ff6759" : "#FFFFFF70",
                    }}
                  >
                    {(value - 0.5).toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#C1EF00" }}>
                    {value.toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#FFFFFF70" }}>
                    {(value + 0.5).toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#FFFFFF33" }}>
                    {(value + 1).toFixed(1)}
                  </span>
                  <IoIosArrowForward onClick={increase} color="#C1EF00" />
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "start",
                  gap: "10px",
                  background: "#000",
                  padding: "0px 1vw",
                  borderRadius: "0.5vw",
                  color: "white",
                  fontSize: "1vw",
                }}
              >
                <div
                  className="Name"
                  style={{
                    marginBottom: "0px",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  Size
                  <span style={{ marginLeft: "1.5vw", color: "#FFFFFF66" }}>
                    How to pick the size?
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <IoIosArrowBack onClick={decrease} color="#C1EF00" />
                  <span className="Number" style={{ color: "#FFFFFF33" }}>
                    {(value - 1).toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#FFFFFF70" }}>
                    {(value - 0.5).toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#C1EF00" }}>
                    {value.toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#FFFFFF70" }}>
                    {(value + 0.5).toFixed(1)}
                  </span>
                  <span className="Number" style={{ color: "#FFFFFF33" }}>
                    {(value + 1).toFixed(1)}
                  </span>
                  <IoIosArrowForward onClick={increase} color="#C1EF00" />
                </div>
              </div>
            )}
          </div>
          {w > 768 ? (
            <Slider
              value={"Buy"}
              styles={{
                width: "12vw",
                height: "3vw",
                marginLeft: "0",
                marginTop: "2vw",
              }}
              stylesvalue={{
                paddingLeft: "4.5vw",
                paddingRight: "0",
                fontSize: "1vw",
                fontFamily: '"Lexend", sans-serif',
              }}
              stylesicon={{
                width: "2.2vw",
                height: "2.2vw",
                marginRight: "0.4vw",
              }}
            />
          ) : (
            <Slider
              value={"Buy"}
              styles={{
                width: "15vw",
                height: "5vw",
                marginLeft: "0",
              }}
              stylesvalue={{
                paddingLeft: "5vw",
                paddingRight: "0",
                fontSize: "2vw",
              }}
              stylesicon={{ height: "4vw", width: "4vw", marginRight: "0.5vw" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
