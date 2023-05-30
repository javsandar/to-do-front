import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./ui/NavBar";
import { TodoPage } from "./ui/TodoPage";
import { TodosCalendar } from "./ui/TodosCalendar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<TodoPage />} />
            <Route path="/home" element={<TodoPage />} />
            <Route path="/calendar" element={<TodosCalendar />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
