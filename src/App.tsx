import { useState } from "react";

import RangeDatePicker from "@/components/ui/rangeDatePicker";
import DatePicker from "@/components/ui/datePicker";
import { DateRange } from "@/types";

import "./App.css";

function App() {
  const [value, setValue] = useState<Date | null | undefined>(undefined);
  const [valueRange, setValueRange] = useState<DateRange | null | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-16">
      <DatePicker value={value} onChange={setValue} />
      <RangeDatePicker value={valueRange} onChange={setValueRange} />
    </div>
  );
}

export default App;
