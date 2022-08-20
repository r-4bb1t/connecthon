import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
      portalId="root-portal"
      inline
      isClearable={true}
      locale={ko}
    />
  );
};

export default Datepicker;
