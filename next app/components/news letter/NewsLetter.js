import React from 'react'
import styles from './NewsLetter.module.scss'
import {Button} from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';


const NewsLetter = () => {
  return (
    <div className = {styles['news-letter-section']}>

    <div className={styles['news-letter-container']}>
       
        <div className={styles.left}>
         <div className={styles.heading}>
            Why miss out on events happening in your city ? 
            </div>

            <div className={styles['sub-heading']}>
                Subscribe to our newsletter now!
            </div>
        </div>

        <div className={styles.right}>

        <div className={styles.form}>
            <div className={styles['input-field']}>
            <input type="text" id="name" required />
            <label for="name">Enter Email</label>
          </div>

          <div className={styles['input-field']}>
            <input type="text" id="city" required/>
            <label for="city">Enter Your City</label>
          </div>

          <Button 
            variant="contained" 
            // onClick = {clickHandler}
            className={styles.btn}         
            > 
            SUBSCRIBE
            <TelegramIcon className={styles.icon}/>
        </Button>
        </div>

        </div>

    </div>


    </div>
  )
}

export default NewsLetter