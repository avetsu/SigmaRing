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

function SeventhScreen() {
  const [AnswerVis1, setAnswerVis1] = useState(false);
  const [AnswerVis2, setAnswerVis2] = useState(false);
  const [AnswerVis3, setAnswerVis3] = useState(false);
  const [AnswerVis4, setAnswerVis4] = useState(false);
  const t = useT();
  return (
    <div className="SeventhScreen">
      <div className="SeventhScreenTitle">{t.s7title}</div>
      <div className="SeventhScreenContent">
        <Question
          number="01"
          question={t.s7q1}
          onToggle={() => setAnswerVis1((v) => !v)}
          isOpen={AnswerVis1}
        />
        <Answer answer={"Answer for question 1"} isOpen={AnswerVis1} />
        <Question
          number="02"
          question={t.s7q2}
          onToggle={() => setAnswerVis2((v) => !v)}
          isOpen={AnswerVis2}
        />
        <Answer answer="Answer for question 2" isOpen={AnswerVis2} />

        <Question
          number="03"
          question={t.s7q3}
          onToggle={() => setAnswerVis3((v) => !v)}
          isOpen={AnswerVis3}
        />
        <Answer answer="Answer for question 3" isOpen={AnswerVis3} />

        <Question
          number="04"
          question={t.s7q4}
          onToggle={() => setAnswerVis4((v) => !v)}
          isOpen={AnswerVis4}
        />
        <Answer answer="Answer for question 4" isOpen={AnswerVis4} />
      </div>
    </div>
  );
}

export default SeventhScreen;
