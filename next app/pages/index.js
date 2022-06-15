import {useRouter} from 'next/router'
import Hero from '../components/hero/Hero'
import NewsLetter from '../components/news letter/NewsLetter'
import ContactUs from '../components/contact us/ContactUs'

export default function HomePage() {

    const router = useRouter()

    return(
      <div className="home-page">
        <Hero/>
        <NewsLetter/>
        <ContactUs/>
        

      </div>
    )

}