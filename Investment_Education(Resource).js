import React from "react";

function Resource({ video, article, quiz }) {
  return (
    <div>
      <h2>Resource</h2>
      <div>
        <h3>{video.title}</h3>
        <video src={video.url} controls></video>
      </div>
      <div>
        <h3>{article.title}</h3>
        <p>{article.content}</p>
      </div>
      <div>
        <h3>{quiz.title}</h3>
        <p>{quiz.question}</p>
        <ul>
          {quiz.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resource;
