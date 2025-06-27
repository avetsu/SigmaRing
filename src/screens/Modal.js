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
        <div className="ModalTitle" style={{ marginBottom: "-100px" }}>
          BUY RING
        </div>
        <div className="ModalClose" onClick={() => dispatch(closeModal())}>
          <RxCross2 className="CloseIcon" size={25} />
        </div>
        <div className="ModalContent">
          {w > 768 ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "40px",
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
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "10px",
                  marginBottom: "-10px",
                }}
              >
                <TInput name="Name" placeholder="Ivan" />
                <TInput name="Family Name" placeholder="Ivanov" />
              </div>
              <div style={{ width: "95%", marginBottom: "-25px" }}>
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
              marginTop: "20px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {w > 768 ? (
              <TInput
                name="Quantity"
                placeholder="2"
                style={{ width: "11%", paddingRight: "20px" }}
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
                  gap: "10px",
                  background: "#000",
                  padding: "0px 20px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                <div
                  className="Name"
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  Size
                  <span style={{ marginLeft: "30px", color: "#FFFFFF66" }}>
                    How to choose the size?
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
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "start",
                  gap: "10px",
                  background: "#000",
                  padding: "0px 20px",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "20px",
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
                  <span style={{ marginLeft: "30px", color: "#FFFFFF66" }}>
                    How to choose the size?
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
              styles={{ width: "250px" }}
              stylesvalue={{ marginLeft: "50px" }}
            />
          ) : (
            <Slider
              value={"Buy"}
              styles={{
                width: "15vw",
                height: "2.2vh",
                marginTop: "-1vh",
                marginLeft: "-0.5vw",
              }}
              stylesvalue={{
                marginLeft: "-5vw",
                marginRight: "-19vw",
                fontSize: "7px",
              }}
              stylesicon={{ height: "2vh", width: "2vh", marginLeft: "-1vw" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
