import { DatePickerDemo } from "./components/ui/datePicker";
import "./App.css";

function App() {
  return (
    <div className="flex gap-8 flex-col">
      {/* <MyFirstCalendar /> */}
      <DatePickerDemo />
      {/* <MyFirstDateRangeCalendar /> */}
    </div>
  );
}

export default App;
