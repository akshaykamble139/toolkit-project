import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoListComponent } from "./projects/Todo-List/Todo-List";
import HomePage from './components/HomePage';
import './resources/styles/App.css'
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoListComponent />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
