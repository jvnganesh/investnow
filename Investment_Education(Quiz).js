import React from "react";

function Quiz({ quiz, onAnswer }) {
  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>{quiz.question}</p>
      <ul>
        {quiz.options.map((option) => (
          <li key={option}>
            <button onClick={() => onAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
