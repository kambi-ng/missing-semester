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

  return (
    <div className={styles.quizContainer}>
      <h3>Quiz!</h3>

      <div>{children}</div>

      <div className={styles.answerContainer}>
        {answers.map((ans, i) => (
          <button
            key={ans}
            onClick={() => setAnswer(i)}
            className={styles.answerButton}
            style={
              correctAnswer == i && showAnswers
                ? {
                    backgroundColor: "var(--ifm-color-primary)",
                  }
                : {}
            }
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
