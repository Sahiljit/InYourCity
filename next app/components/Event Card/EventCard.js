import React from 'react'
import styles from './EventCard.module.scss'
import {Card, CardMedia, CardContent, Button} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';

const EventCard = (props) => {

  const router = useRouter()

  const {title, image, date, location, id} = props  

  const humanReadableDate = new Date(date).toLocaleString('en-US', {
    day: 'numeric',
    month : 'long',
    year : 'numeric',
  })

  const formattedAddress = location.replace(',' , '\n')

  const exploreLink = `/events/${id}`

  return (
    <div className= {styles['event-card']}>
      <Card className = {styles.card}>
        <CardMedia
                  component="img"
                  className={styles.img}
                  image= {'/' + image}
                  alt= {title}   
              />

        <CardContent className = {styles.cardContent}>
          <div className={styles.heading}>{title}</div>
          <div className={styles.date}>
            <EventIcon className = {styles.icon}/>
            {humanReadableDate}
            </div>
            <div className={styles.address}>
              <LocationOnIcon className = {styles.icon}/>
              <address>
              {formattedAddress}
              </address>              
            </div>

            <div 
              onClick={() => router.push(`/events/${id}`)}
              className={styles['explore-event']}

              >
              Explore Event
              <ArrowForwardIcon className = {styles.icon}/>

            </div>
            
       

        </CardContent>
        
      </Card>
    </div>
  )
}

export default EventCard