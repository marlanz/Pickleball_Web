import dayjs from "dayjs";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const MUIDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="Date of birth"
          value={value}
          onChange={onchange}
          sx={{ width: "100%" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default MUIDatePicker;
