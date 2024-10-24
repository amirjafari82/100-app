import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Calender from "../icons/Calender";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { differenceInYears, format, parse } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";

const StyledCalenderIcon = styled.div`
    position: absolute;
    right: 12px;
    bottom: 6px;
`;

const styledDatePicker = muiStyled(TextField)({
    width: "calc(100vw - 48px)",
    height: "52px",
});

function DatePickerInput({ setError, error, setBirthday, defaultValue }) {
    const [date, setDate] = useState(function () {
        if (defaultValue) return parse(defaultValue, "dd/MM/yyyy", new Date());
        else return null
    });

    useEffect(
        function () {
            if (
                differenceInYears(new Date(), date) < 18 ||
                differenceInYears(new Date(), date) > 100
            ) {
                setError("Date is invalid");
            } else {
                setError(null);
                setBirthday(format(date, "dd/MM/yyyy"));
            }
        },
        [date, setError, setBirthday]
    );

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date of Birth"
                    value={date}
                    onChange={(e) => setDate(e)}
                    slots={{
                        textField: styledDatePicker,
                    }}
                    format="dd/MM/yyyy"
                />
            </LocalizationProvider>
            <StyledCalenderIcon>
                <Calender />
            </StyledCalenderIcon>
        </>
    );
}

export default DatePickerInput;
