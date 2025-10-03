import "./SeventhScreen.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useT } from "../features/UseT";
import { useState } from "react";

const Question = (props) => {
  return (
    <div className="Question">
      <div className="QuestionNumber">{props.number}</div>
      <div className="QuestionText">{props.question}</div>
      <IoIosArrowRoundForward
        className={`QuestionArrowIcon ${props.isOpen ? "open" : ""}`}
        color="black"
        onClick={props.onToggle}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

const Answer = (props) => {
  return (
    <div className={`AnswerContainer ${props.isOpen ? "open" : ""}`}>
      <div className="Answer">
        <div className="AnswerText">{props.answer}</div>
      </div>
    </div>
  );
};

function SeventhScreen({ questionCount = 8 }) {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useT();

  const questions = Array.from({ length: questionCount }, (_, i) => i + 1);

  return (
    <div className="SeventhScreen">
      <div className="SeventhScreenTitle">{t.s7title}</div>
      <div className="SeventhScreenContent">
        {questions.map((num) => (
          <div key={num}>
            <Question
              number={String(num).padStart(2, "0")}
              question={t[`s7q${num}`]}
              onToggle={() =>
                setOpenIndex((prev) => (prev === num ? null : num))
              }
              isOpen={openIndex === num}
            />
            <Answer
              answer={
                <span dangerouslySetInnerHTML={{ __html: t[`s7a${num}`] }} />
              }
              isOpen={openIndex === num}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeventhScreen;
