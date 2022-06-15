import React from 'react'
import styles from './EventsList.module.scss'
import EventCard from '../Event Card/EventCard'

const EventsList = (props) => {

    const {items} = props

  return (
    <div className= {styles['list-page']}>
        <div className={styles.grid}>
          {items.map(event => <EventCard  key = {event.id} id={event._id} title = {event.title} 
                                          location = {event.location} date = {event.date}
                                          image = {event.image}/>)}
        </div>      
      </div>
  )
}

export default EventsList