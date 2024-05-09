import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import "../../styles/component/calendar.css";

interface Props {
  onChange: (value: Date) => void;
}

function CalendarComponent({ onChange }: Props) {
  return (
    <Wrapper>
      <Calendar
        onChange={(value) => onChange(value as Date)}
        formatDay={(locale, date) => dayjs(date).format("DD")}
        minDetail="month"
        maxDetail="year" // '월'을 넘어서 '년'까지 표시
        navigationLabel={undefined}
        showNeighboringMonth={false}
        className="mx-auto w-full text-sm border-b"
        tileClassName={({ date, view }) => {
          if (
            view === "month" &&
            (date.getDay() === 0 || date.getDay() === 6)
          ) {
            return "weekend-day";
          }
          return null;
        }}
        tileContent={({ date, view }) => {
          if (view === "year" && date.getDate() === 1) {
            return (
              <div className="month-indicator">
                {date.toLocaleString("default", {
                  month: "long",
                })}
              </div>
            );
          }
          return null;
        }}
      />
    </Wrapper>
  );
}

export default CalendarComponent;

export const Wrapper = styled.div`
  position: absolute;
  width: 370px;
  background: #fff;
  border-radius: 1px;
  padding: 10px;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.1);
  right: 0;
  bottom: 23px;

  & .month-indicator {
    display: none;
  }
`;
