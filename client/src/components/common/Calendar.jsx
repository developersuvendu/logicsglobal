import React, { useState, useMemo } from "react";
import '../../styles/Calendar.css';

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_NAMES = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

const buildGrid = (year, month) => {
  const firstOfMonth = new Date(year, month, 1);

  // Convert Sun(0)..Sat(6) -> Mon(0)..Sun(6)
  const offset = (firstOfMonth.getDay() + 6) % 7;
  const start = new Date(year, month, 1 - offset);

  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    cells.push({ date: d, inMonth: d.getMonth() === month });
  }
  return cells;
};

const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);

export const MiniCalendar = ({
  initialDate = new Date(2026, 0, 3),
}) => {
  const [selected, setSelected] = useState(initialDate);
  const view = initialDate;

  const cells = useMemo(
    () => buildGrid(view.getFullYear(), view.getMonth()),
    [view]
  );

  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const footer = `${DAY_NAMES[selected.getDay()]}, ${
    MONTHS[selected.getMonth()]
  } ${pad2(selected.getDate())}, ${selected.getFullYear()}`;

  return (
    <div className="mc-card">
      <h2 className="mc-title">
        {MONTHS[view.getMonth()]} {view.getFullYear()}
      </h2>

      <div className="mc-weekdays">
        {WEEKDAYS.map((d) => (
          <div key={d} className="mc-weekday">{d}</div>
        ))}
      </div>

      <div className="mc-grid">
        {cells.map(({ date, inMonth }) => {
          const selectedCell = isSameDay(date, selected);
          const classes = [
            "mc-day",
            !inMonth ? "mc-day--muted" : "",
            selectedCell ? "mc-day--selected" : "",
          ].filter(Boolean).join(" ");

          return (
            <button
              key={date.toISOString()}
              type="button"
              className={classes}
              disabled={!inMonth}
              onClick={() => inMonth && setSelected(date)}
            >
              {pad2(date.getDate())}
            </button>
          );
        })}
      </div>

      <div className="mc-footer">{footer}</div>
    </div>
  );
};

export default MiniCalendar;
