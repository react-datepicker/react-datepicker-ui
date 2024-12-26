import { useState } from "react";

import { RangeDatePicker, DatePicker } from "@react-datepicker/ui";
import { DateRange } from "@react-datepicker/types";

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
