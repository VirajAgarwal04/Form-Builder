import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Templete from './components/Templete';
import MainBody from "./components/Mainbody";
import Formheader from "./components/Formheader";
import "./App.css";
import CenteredTabs from "./components/tabs";
import Question_form from "./components/Question_form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form/:id" element={<Formheader />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Templete />
                <MainBody />
              </>
            }
          />
        </Routes>
        <CenteredTabs />
        <Question_form />
      </Router>
    </div>
  );
}

export default App;