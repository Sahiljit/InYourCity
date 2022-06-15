import {useState} from 'react'
import EventsList from '../../components/Events List/EventsList'
import CityFilter from '../../components/city filter/CityFilter'
import MonthFilter from '../../components/month filter/MonthFilter'
import CategoryFilter from '../../components/category filter/CategoryFilter'
import {Button} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {useRouter} from 'next/router'
import api from '../../utils/api'
import Footer from '../../components/footer/Footer'


export default function EventPage({initialEvents}) {

  const [month, setMonth] = useState('')
  const [city, setCity] = useState('')
  const [category, setCategory] = useState('')
  const [events, setEvents] = useState(initialEvents)

  const router = useRouter()
  

    const monthHandler = (month) => {
      setMonth(month)
      console.log(month)
    }

    const cityHandler = (city) => {
      setCity(city)
      console.log(city)
    }

    const categoryHandler = (category) => {
      setCategory(category)
      console.log(category)
    }

    const path = `/events/?`

    const clickHandler = async() => {

      if(month.length!==0 && month!=='Select')
      path += `month=${month}&`

      if(city.length!==0)
      path += `city=${city}&`

      if(category.length!== 0 && category!=='Select')
      path += `category=${category}`  

      console.log(path)
      
      const {data} = await api.get(path)
      
      const newEvents = data.data
      setEvents(newEvents)

  }


  return (
    <div className="event-page">
      <div className="above-header"></div>
      <div className="event-page-container">
      <div className="header">
          <img src = "/images/logo.png" onClick= {() => router.push('/')}/>   

          <div className="right-container">
           
            <MonthFilter monthFilter = {monthHandler}/>
            <CityFilter cityFilter = {cityHandler}/>
            <CategoryFilter categoryFilter = {categoryHandler}/>

              <Button  className = "btn" variant = "contained" onClick = {clickHandler}>
                 Search
                <SearchIcon className ="icon"/>
              </Button>
          </div>
        </div>
         <EventsList items = {events}/>
      </div>

      <Footer/>


    </div>


  )
}



export async function getStaticProps() {

  const {data} = await api.get('/events')
 
  return{
    props:{
        initialEvents : data.data
    }
  }

}
