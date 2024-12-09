import "./App.css";
import MyFirstCalendar from "./examples/MyFirstCalendar";
import MyFirstDateRangeCalendar from "./examples/MyFirstDateRangeCalendar";

function App() {
  return (
    <div className="flex gap-8 flex-col">
      <MyFirstCalendar />
      <MyFirstDateRangeCalendar />
    </div>
  );
}

export default App;
