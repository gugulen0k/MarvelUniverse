import "./App.css";
import GlobalFonts from "./fonts/fonts";
import Header from "./components/Header.js";
import Movies from "./components/Movies.js";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <Header />
      <Movies />
    </div>
  );
}

export default App;
