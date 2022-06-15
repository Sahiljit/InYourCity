import '../styles/global.scss'
import '../styles/pages/EventDetailPage.scss'
import '../styles/pages/EventsPage.scss'
import '../styles/pages/HomePage.scss'
import "react-datepicker/dist/react-datepicker.css";
import '../styles/datepicker.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
