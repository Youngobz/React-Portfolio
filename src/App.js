// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route exact path="/" element={Home} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
