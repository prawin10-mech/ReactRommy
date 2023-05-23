import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";

const MyDatePicker = ({ date }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(date));

  useEffect(() => {
    setSelectedDate(new Date(date));
  }, [date]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const minSelectableDate = subDays(selectedDate, 30);
  const maxSelectableDate = addDays(selectedDate, 30);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select Date"
      minDate={minSelectableDate}
      maxDate={maxSelectableDate}
    />
  );
};

export default MyDatePicker;
