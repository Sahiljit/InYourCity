import {useRouter} from 'next/router'
import { getFilteredEvents } from '../../../dummy-data'
import EventsList from '../../components/Events List/EventsList'



function FilteredEventsPage() {

    const router = useRouter()
    
    const filteredData = router.query.slug

    if(!filteredData){
        return <p className="message">loading...</p>
    }

    const year = filteredData[0]
    const month = filteredData[1]

    const numYear = +year
    const numMonth= +month

    console.log(typeof numYear)

    if(isNaN(numYear) || isNaN(numMonth)
     || numYear>2030 || numYear<2022 || 
     numMonth<1  || numMonth>12)
     {
        return <p className = 'message'>Invalid filter, please adjust your values</p> 
     }

    //  console.log('no events found')


     const filteredEvents = getFilteredEvents({
         year: numYear,
         month: numMonth
     })

     if(!filteredEvents || filteredEvents.length === 0){
         console.log('no events found')
         return <p className="message"> No events found! </p>
     }



    return(
        <div>
            <EventsList items = {filteredEvents}/>
        </div>
    )

}

export default FilteredEventsPage