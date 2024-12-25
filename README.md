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
  
**@react-datepicker/ui** is a customizable, headless React calendar hooks library that empowers developers to build powerful and flexible calendar and date-picker components. In addition to providing full control over styling and functionality for highly tailored solutions, the library features beautifully designed, ready-to-use, and fully customizable components to streamline development."

#### **Features**

- Multi-date selection and date range support.
- Localization and ARIA-compliant accessibility.
- Suitable for both web and React Native applications.

---

#### **Installation**
```bash
npm install react-datepicker/ui
```

#### **Basic Usage**
**Components**
```tsx

```
**Hook - Uncontrolled**
```tsx
  const {
    value, // rangeValue for date range when isDateRange is true
    displayedMonths,
    register,
    nextMonth,
    previousMonth,
    weekDays,
    shouldHighlightDay,
    isSelected,
    setYear,
  } = useCalendar( 
    { numberOfDisplayedMonths: 2 },
  );
```

##### **Hook - Controlled**
```tsx
  const {
    displayedMonths,
    register,
    nextMonth,
    previousMonth,
    weekDays,
    shouldHighlightDay,
    isSelected,
    setYear,
  } = useCalendar(
    { numberOfDisplayedMonths: 2 },
    // For controlled usage - pass value and onChange to the hook
    value,
    (date) => onChange(date)
  );
```

Refer to the [Documentation](https://github.com/react-datepicker/useCalendar/wiki) for detailed usage examples and customization options.
