import React, {useState} from 'react'
import styles from './MonthFilter.module.scss'


const MonthFilter = ({monthFilter}) => {

    const [month, setMonth] = useState('');

    const months = ['Select','January', 'February', 'March', 'April', 
                    'May', 'June', 'July', 'August', 'September', 
                    'October', 'November', 'December']


    const changeHandler = (e) => {
        setMonth(e.target.value)
        monthFilter(e.target.value)
    }

  return (
    <div className = {styles["month-filter"]}>

                <div className={styles.label}>Select Month</div>
              
                <select required
                onChange={changeHandler}
                className = {styles.input} 
                >

                {
                    months.map(x => (
                        <option className = {styles.option}>{x}</option>
                    ))
                } 
                </select>                 


    </div>
  )
}

export default MonthFilter