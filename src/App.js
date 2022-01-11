import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker" />
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
export default App;
