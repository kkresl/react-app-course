import { useState, useEffect } from "react";
import { API_URL } from "../../constants/index";
import { useFetch } from "../../hooks/useFetch";
// хуки называются с приставкой use

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}`);
    const questions = await response.json();

    setQuestions(questions);

    return questions;
  });

  {
    /* описываем состояние ; */
  }

  useEffect(() => {
    getQuestions();
  }, []);

  {
    /* {} - что делать, []- когда повторять (dependencies) */
  }

  return (
    <>
      {isLoading && <Loader />}
      <QuestionCardList cards={questions} />
    </>
  );
};
