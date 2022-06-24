import "./App.css";
import Top from "./components/top";
import AddItem from "./components/addItem";
import Content from "./components/content";
import Filter from "./components/filter";

function App() {
  return (
    <div className="App">
      <Top />
      <div className="bottom">
        <AddItem />
        <Filter />
        <Content />
      </div>
    </div>
  );
}

export default App;
