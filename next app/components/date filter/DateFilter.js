import React from 'react'
// import {DatePicker} from '@mui/lab';
// import {TextField} from '@mui/material';
import styles from './DateFilter.module.scss'
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateCalendar from './DateCalendar'


const DateFilter = ({dateFilter}) => {

  // const [value, setValue] = React.useState(null);
  // console.log(value)
  // console.log(value.date)

  return (    
    <div className={styles['date-filter']}>     

        <div className={styles['date-container']}>
          <div className={styles.text}>Pick a date</div>
          <DateCalendar dateFilter = {dateFilter}/>
          </div> 

        

      
    </div>
  )
}

export default DateFilter