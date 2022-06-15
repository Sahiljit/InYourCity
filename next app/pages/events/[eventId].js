import {useRouter} from 'next/router'
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import {Button} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import api from '../../utils/api'
import Footer from '../../components/footer/Footer'



function EventDetailPage({event}) {

    const router = useRouter()
    const eventId = router.query.eventId
    // const event = getEventById(eventId)

    if(!event){
        return(<p> No Event Found! </p>)
    }

    const { title, location, date, image, description , category} = event;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const addressText = location.replace(', ', '\n');
  

    return(
        
        <div className='event-detail-page'>

        <Button
        className = "go-back"
        variant = "outlined"
        onClick = {() => router.push('/events')}
        >
        <ArrowBackIcon className='icon'/>
            Go Back
        </Button>

            <div className="event-detail-page-container">
        
            <div className='heading'>{title}</div>
            
            <div className='about'>
                <img src = {`/${image}`}/>
                <div className='right'>
                    <div className='date'>
                        <EventIcon className = 'icon'/>
                        {humanReadableDate}
                    </div>
                    <div className='address'>
                        <LocationOnIcon className = 'icon'/>
                        <address>
                        {addressText}
                        </address>              
                    </div>
                    <div className='category'>
                        <CategoryIcon className = 'icon'/>
                       {category}             
                    </div>
                </div>
            </div>

            <div className='description'>
                {description}
            </div>


        </div>

        <Footer/>
            
       
        </div>
        
        
    )


}

export default EventDetailPage


export async function getServerSideProps(context) {

    const eventId = context.params.eventId
    const {data} = await api.get(`/events/${eventId}`)
   
    return{
      props:{
          event : data.event
      }
    }
  
  }