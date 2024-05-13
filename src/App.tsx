import './App.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Testimonials from './Pages/Testimonials';
import Gallery from './Pages/Gallery';
import GalleryImages from './Pages/GalleryImages';
import { useEffect } from 'react';
import data from "../src/Utils/data.json"
import Header from './Molecules/Header';
import Footer from './Molecules/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <div style={{ position:"sticky",top:0,left:0,right:0,zIndex:1000}}> <Header/> </div>
      <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="home" index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="galleryImages/:id" element={<GalleryImages />} />
      </Routes>
      <div className='bottom_buttons'>
      <Link
          to={`https://wa.me/${data.contactDetails.whatsapp}`}
          className="whatsapp-button"
          target="_blank"
        >
          <img src="/Images/whatsapp.png"  alt="..." width={'92%'} height={'92%'} style={{ borderRadius: '50%'}}/>
        </Link>
        <Link
          to={`${data.contactDetails.instagram}`}
          className="instagram-button"
          target="_blank"
        >
          <img src="/Images/instagram_image.png"  alt="..." width={'100%'} height={'100%'} style={{ borderRadius: '50%'}}/>
        </Link>
        </div>
      <Footer/>
    </div>
  );
}

export default App;