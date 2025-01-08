import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import ExploreDestinations from './pages/ExploreDestinations'
import Footer from './components/Footer'
import DestinationDetails from './components/DestinationDetails'
import ContactUs from './pages/ContactUs'
import ItineraryPage from './pages/ItineraryPage'



function App() {
  

  return (
    <>
    <Router>
      <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow pt-16'>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/destinations" element={<ExploreDestinations />} />
      <Route path="/destination/:code" element={<DestinationDetails />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
      </Routes>
      </main>
    
      <Footer />
      </div>
      </Router>
  
    </>
  )
}

export default App
