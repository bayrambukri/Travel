import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import About from './Components/Pages/About'
import Tours from './Components/Pages/Tours'
import ToursDetails from './Components/Pages/Tours-Details'
import Destination from './Components/Pages/Destination'
import Contact from './Components/Pages/Contact'
import Footer from './Components/Footer/Footer'
import DestinationDetails from './Components/Pages/Destination-Details'
import Blog from './Components/Pages/Blog'

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour-details/:id" element={<ToursDetails />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destinationDetails" element={<DestinationDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  )
}

export default App 