import { IoIosArrowRoundForward } from "react-icons/io";
import "./Slider.css";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modalSlice";

function Slider({ value, styles, stylesvalue, purple, className, stylesicon }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`Slider ${purple} ${className || ""}`}
      style={styles}
      onClick={() => dispatch(openModal())} // ← ouvre la modale
    >
      <span className="SliderValue" style={stylesvalue}>
        {value}
      </span>
      <IoIosArrowRoundForward
        className="ArrowIcon"
        style={stylesicon}
        color="black"
      />
    </div>
  );
}

export default Slider;
