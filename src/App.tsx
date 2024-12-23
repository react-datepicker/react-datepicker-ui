import RangeDatePicker from "@/components/ui/rangeDatePicker";
import DatePicker from "@/components/ui/datePicker";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-16">
      <DatePicker />
      <RangeDatePicker />
    </div>
  );
}

export default App;
