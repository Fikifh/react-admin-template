import Home from "./pages/x_home/Home";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./pages/login/Login";
import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Platform from "./pages/Platform/Platform";
import Lesson from "./pages/lesson/Lesson";
import Chapter from "./pages/lesson/chapter/Chapter";
import Question from "./pages/lesson/chapter/question/Question";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />}/>
          <Route index path="/" element={<Dashboard />} />
          <Route path="platform" element={<Platform />} />
          <Route path="lesson" element={<Lesson />}>
            <Route path=":lessonId"/>
          </Route>
          <Route path="chapter" element={<Chapter />}></Route>
          <Route path="question" element={<Question />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
