import React from 'react'
import styles from './CityFilter.module.scss'

const CityFilter = ({cityFilter}) => {
  return (
    <div>
        <div className={styles.text}>Pick City</div>
        <input
          className = {styles.input}
          type="text"
          placeholder="Type your city"
          onChange ={(e) => cityFilter(e.target.value)}
          />
    </div>
  )
}

export default CityFilter