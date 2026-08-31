import { useState, useEffect } from "react";
import { API_URL } from "../../constants/index";
import { useFetch } from "../../hooks/useFetch";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
// хуки называются с приставкой use

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);

    return questions;
  });

  {
    /* описываем состояние ; */
  }

  useEffect(() => {
    console.log("useEffect запустился");
    getQuestions("react");
  }, []);

  {
    /* {} - что делать, []- когда повторять (dependencies) */
  }

  return (
    <>
      {isLoading && <Loader />}
      {error && <p> {error} </p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
