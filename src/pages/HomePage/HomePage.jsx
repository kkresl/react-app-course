import { useState, useEffect, useRef } from "react";
import { API_URL } from "../../constants/index";
import { useFetch } from "../../hooks/useFetch";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import cls from "./HomePage.module.css";
import { SearchInput } from "../../components/SearchInput";
// хуки называются с приставкой use

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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
    getQuestions("react");
  }, []);

  {
    /* {} - что делать, []- когда повторять (dependencies) */
  }

  const onSearchChangeHandler = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} />
      </div>

      {isLoading && <Loader />}
      {error && <p> {error} </p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
