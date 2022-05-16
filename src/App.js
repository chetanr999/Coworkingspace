import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './component/home-page/HomePage';
import Search from './component/search-card/CardPage'
import PosterPage from './component/poster/PosterPage';
import LiveSpaces from './component/live-spaces/LiveSpaces';
import FromUs from './component/from-us/FromUs';
import SliderMenu from './component/top-working-slider/SliderMenu';
import Partners from './component/coworking-partners/Partners';
import Footer from './component/footer/Footer';



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/'  element={<HomePage />} />
        <Route path='/poster-page'  element={<PosterPage />} />
        <Route path='/search-card'  element={<Search/>} />
        <Route path='/live-spaces'  element={<LiveSpaces />} />
        <Route path='/from-us'  element={<FromUs />} />
        <Route path='/top-working'  element={<SliderMenu />} />
        <Route path='/coworking-partners'  element={<Partners />} />
        <Route path='/footer'  element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
