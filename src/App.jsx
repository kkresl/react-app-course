import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components2/MainLayout/MainLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  //return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div> home </div>} />
          <Route path="/forbidden" element={<div> forbidden </div>} />
          <Route path="/addquestion" element={<div> addquestion </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
