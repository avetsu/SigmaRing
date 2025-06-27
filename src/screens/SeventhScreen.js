import "./SeventhScreen.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useT } from "../features/UseT";

const Question = (props) => {
  return (
    <div className="Question">
      <div className="QuestionNumber">{props.number}</div>
      <div className="QuestionText">{props.question}</div>
      <IoIosArrowRoundForward className="QuestionArrowIcon" color="black" />
    </div>
  );
};

function SeventhScreen() {
  const t = useT();
  return (
    <div className="SeventhScreen">
      <div className="SeventhScreenTitle">{t.s7title}</div>
      <div className="SeventhScreenContent">
        <Question number="01" question={t.s7q1} />
        <Question number="02" question={t.s7q2} />
        <Question number="03" question={t.s7q3} />
        <Question number="04" question={t.s7q4} />
      </div>
    </div>
  );
}

export default SeventhScreen;
