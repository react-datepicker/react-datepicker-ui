<div align="center">
  <div>
<a href="[https://github.com/semantic-release/semantic-release/actions/workflows/test.yml](https://github.com/react-datepicker/useCalendar/actions/workflows/ci.yml)">
  <img alt="Build states" src="https://github.com/react-datepicker/useCalendar/actions/workflows/ci.yml/badge.svg">
</a>
<image src="https://badgen.net/bundlephobia/minzip/@react-datepicker/ui" />
</div>
<br />
<image src="https://github.com/user-attachments/assets/7061d873-5f25-405f-b1ce-aa1bdeb0e332" height="200px" width="200px" align="center" />
</div>
<br />
  
**🗓️ @react-datepicker/ui** is a customizable, headless React calendar hooks library that empowers developers to build powerful and flexible calendar and date-picker components. In addition to providing full control over styling and functionality for highly tailored solutions, the library features beautifully designed, ready-to-use, and fully customizable components to streamline development.

#### **🚀 Features**
- ✨ Single & Range Selection: Use the hook and components for both single-date and date-range selection.
- 🎨 Fully Customizable: Complete control over styling to match your app’s unique design.
- ♿ ARIA Support: Accessibility-first design to ensure your datepickers are user-friendly for everyone.
- 🌍 Locale Support: Easily configure for different languages and regions.


---

### **Installation**
```bash
npm install react-datepicker/ui
```

### **Basic Usage**
Refer to the [Documentation](https://docs.react-calendar-ui.com/react-datepicker-ui-1) for detailed usage examples and customization options.

Components
```tsx
import { useState } from "react";
import { DatePicker, DateRange } from "@react-datepicker/ui";

function App() {
  // Single date
  const [date, setDate] = useState<Date | null | undefined>();

  return <DatePicker value={date} onChange={setDate} />;

  // Range date
  const [dateRange, setDateRange] = useState<DateRange | null | undefined>();

  return <RangeDatePicker value={dateRange} onChange={setDateRange} />;
}

export default App;

```

Hook
```tsx
  import { useCalendar } from "@react-datepicker/ui";

  // Controlled - pass value and onChange
  const {
    displayedMonths,
    register,
    nextMonth,
    previousMonth,
    setYear,
  } = useCalendar(
    { numberOfDisplayedMonths: 2 },
    // For controlled usage - pass value and onChange to the hook
    value,
    (date) => onChange(date)
  );

  // Uncontrolled - state managed within the hook
  const {
    value, // rangeValue for date range when isDateRange is true
    displayedMonths,
    register,
    nextMonth,
    setYear,
  } = useCalendar( 
    { numberOfDisplayedMonths: 2 },
  );

```
