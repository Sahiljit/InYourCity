import React, {useState} from 'react'
import { getMonth, getYear } from 'date-fns';
import DatePicker from "react-datepicker";
import styles from './DateFilter.module.scss'
// import range from "lodash/range";

const DateCalendar = ({dateFilter}) => {
   
    const [startDate, setStartDate] = useState(new Date());
    // console.log(typeof startDate.getMonth())
    const years = [2022, 2023, 2024]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const changeHandler = (date)=> {
      
      setStartDate(date)
      dateFilter(date.getFullYear(), date.getMonth())

    }

    
    return (
      <DatePicker
        className= {styles.DateCalendar}
        // value= "MM/DD/YY"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
            className = {styles.label}

          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              className = {styles.label}
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              className = {styles.label}
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => changeHandler(date)}



      />
    );
  };

export default DateCalendar