import RangeDatePicker from "./components/ui/rangeDatePicker";
import "./App.css";
import DatePicker from "./components/ui/datePicker";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-16">
      <DatePicker />
      <RangeDatePicker />
    </div>
  );
}

export default App;
