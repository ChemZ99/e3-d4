import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasy from "./components/assets/fantasy.json";
//import history from "./components/assets/history.json";
//import horror from "./components/assets/horror.json";
//import romance from "./components/assets/romance.json";
//import scifi from "./components/assets/scifi.json";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
//import FilterBookList from "./components/FilterBookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList Data={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
