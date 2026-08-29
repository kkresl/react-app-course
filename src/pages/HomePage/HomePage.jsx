import { useState, useEffect } from "react";
// хуки называются с приставкой use
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
import { API_URL } from "../../constants/index";
//import cls from "./HomePage.module.css";

const cards = [];

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  {
    /* описываем состояние ; */
  }

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const questions = await response.json();

      {
        /* преобразовываем questions в обьект ; */
      }
      setQuestions(questions);
      console.log("questions", questions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((question, index) => {
        return <QuestionCard card={question} key={index} />;
      })}

      {/* <button onClick={getQuestions}> get questions </button> */}
    </>
  );
};
