import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { QuestionPage } from "./pages/QuestionPage";
import { AddQuestionPageLazy } from "./pages/AddQuestionPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/forbidden" element={<div> forbidden </div>} />
            <Route path="/addquestion" element={<AddQuestionPageLazy />} />
            <Route path="/question/:id" element={<QuestionPage />} />
            {/* добавляет динамику ":" */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
