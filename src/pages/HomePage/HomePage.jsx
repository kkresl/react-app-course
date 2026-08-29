import { useState, useEffect } from "react";
// хуки называются с приставкой use
import { API_URL } from "../../constants/index";
import { QuestionCardList } from "../../components/QuestionCardList";

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

  {
    /* {} - что делать, []- когда повторять (dependencies) */
  }

  return (
    <>
      {/* {questions.map((card, index) => {
        return <QuestionCard key={index} />;
      })} */}

      <QuestionCardList cards={questions} />

      {/* <button onClick={getQuestions}> get questions </button> */}
    </>
  );
};
