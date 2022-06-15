import React from 'react'
import styles from './Hero.module.scss'
import {Button} from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/router';



const Hero = () => {

  const router = useRouter()

  return (
    <div className = {styles.hero}>
      <div className={styles["inner-section"]}>
        <img src = '/images/logo3.png'/>
        <div className={styles["sub-heading"]}>
          Find all the events happening in your city. 
        </div>
        <Button  className = {styles.btn} variant = "contained" onClick = {() => router.push('/events')}>
            Explore all Events
            <ArrowRightAltIcon className={styles.icon}/>
        </Button>

      </div>
        
    </div>
  )
}

export default Hero