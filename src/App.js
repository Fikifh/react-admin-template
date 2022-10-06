import Home from "./pages/home/Home";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Admin from "./pages/admin/Admin";
import Layout from "./components/layout/Layout";
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
          <Route path="/" element={<Dashboard />} />
          <Route path="platform" element={<Platform />} />
          <Route path="lesson" element={<Lesson />}>
            <Route path=":lessonId"/>
          </Route>
          <Route path="chapter/:lessonId" element={<Chapter />}></Route>
          <Route path="question/:chapterId" element={<Question />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
