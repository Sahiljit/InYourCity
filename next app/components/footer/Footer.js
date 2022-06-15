import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className = {styles['footer-section']}>
        <div className={styles.text}>

        Copyright @2022 InYourCity | All rights reserved

        </div>        
    </div>
  )
}

export default Footer