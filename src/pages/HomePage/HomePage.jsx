import { useState, useEffect, useRef, useMemo } from "react";
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
  const [sortSelectValue, setSortSelectValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}?_sort=completed`);
    const questions = await response.json();

    setQuestions(questions);

    return questions;
  });

  {
    /* описываем состояние ; */
  }

  const cards = useMemo(() => {
    return questions.filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
  }, [questions, searchValue]);

  {
    /* логика поиска. Приводим к нижнему, убираем пробелы и тд. Оборачиваем в useMemo, чтобы не было лишних перерисовок */
  }

  useEffect(() => {
    getQuestions(`react?${sortSelectValue}`);
  }, [sortSelectValue]);

  {
    /* {} - что делать, []- когда повторять (dependencies) */
  }

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const onSortSelectChangeHandler = (e) => {
    setSortSelectValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchChangeHandler} />

        <select value={sortSelectValue} onChange={onSortSelectChangeHandler} className={cls.select}>
          <option value="">sort by</option>
          <hr />
          <option value="_sort=level"> level ASC</option>
          <option value="_sort=-level"> level DESC</option>
          <option value="_sort=completed"> complited ASC</option>
          <option value="_sort=-completed"> complited DESC</option>

        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p> {error} </p>}
      {cards.length === 0 && <p className={cls.noCardsInfo}> No cards... </p>}

      <QuestionCardList cards={cards} />
    </>
  );
};
