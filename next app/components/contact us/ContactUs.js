import React from 'react'
import styles from './ContactUs.module.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Button,IconButton} from '@mui/material';


const ContactUs = () => {
  return (
    <div className = {styles['contact-us-section']}>

        <div className={styles['contact-us-container']}>

            <div className={styles.left}>
             
                <div className={styles.heading}>
                Contact us and get your event hosted 
                </div>


                <div className={styles.row}>
                    <div className={styles.text}>
                        Email Id  
                    </div>
                    <div className={styles.value}>
                        inyourcity@gmail.com
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.text}>
                        Phone Number 
                    </div>
                    <div className={styles.value}>
                        +91 7888633369
                    </div>
                </div>

            </div>


            <div className={styles.right}>

                <div className={styles.heading}>
                    Follow Us
                    </div>

                
                    <div className="social-links">

                        <IconButton  className = {styles['icon-btn']}>
                        <FacebookIcon className = {styles.icon}/>
                        </IconButton>             

                        <IconButton className = {styles['icon-btn']}>
                        <LinkedInIcon className = {styles.icon}/>
                        </IconButton>

                        <IconButton className = {styles['icon-btn']}>
                        <TwitterIcon className = {styles.icon}/>
                        </IconButton>

                        <IconButton className = {styles['icon-btn']}>
                        <InstagramIcon className = {styles.icon}/>
                        </IconButton>
                        </div>


            </div>


        </div>

        <div className={styles.footer}>
            Copyright @2022 InYourCity | All rights reserved
        </div>
        
    </div>
  )
}

export default ContactUs