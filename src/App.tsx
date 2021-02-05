import React from 'react';
import './App.css';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

function App() {
  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  const maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
  return (
    //To check calendar views paste start="Decade" and depth="Year" in below code. Also remove range restriction i.e. min and max properties
    <CalendarComponent value={dateValue} min={minDate} max={maxDate}
    isMultiSelection={true}></CalendarComponent>
  );
}

export default App;
