import React, { useState } from "react";
import styles from "./styles.module.css";

interface QuizProps {
  answers: string[];
  correctAnswer: number;
  children: React.ReactNode;
}

const Quiz = ({ answers, correctAnswer, children }: QuizProps) => {
  const [userAnswer, setAnswer] = useState(null);
  const showAnswers = userAnswer !== null;

  const answer = (i: number) => {
    if (!showAnswers) {
      setAnswer(i);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <h3>Quiz!</h3>

      <div>{children}</div>

      <div className={styles.answerContainer}>
        {answers.map((ans, i) => (
          <button
            key={ans}
            onClick={() => answer(i)}
            disabled={showAnswers && correctAnswer != i}
            className={styles.answerButton}
            style={
              correctAnswer == i && showAnswers
                ? {
                    backgroundColor: "var(--ifm-color-primary)",
                  }
                : {}
            }
          >
            {ans}{" "}
            {showAnswers
              ? correctAnswer == i
                ? "✔"
                : userAnswer == i && "❌"
              : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
