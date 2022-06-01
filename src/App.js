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
import WorkingDom from './component/coworking-workingdom/CoWorkingDom';
import Coworking from './component/coworking-spaces/Index';
import Coliving from './component/coliving-spaces/Index';
import CoLivingDom from './component/coliving-workingdom/CoLivingDom';
import SpaceType from './component/space-type/SpaceType';
import Index from './component/space-type-details/Index';
import SpaceTypeDom from './component/space-type-dom/SpaceTypeDom';

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
        <Route path='/coworking/city/:id/:name' element={<Coworking />} />
        <Route path="/coliving/city/:id/:name" element={<Coliving />} />
        <Route path="/coworking/coworkingDom/:id/:name" element={<WorkingDom />} />
        <Route path="/coliving/colivingDom/:id/:name" element={<CoLivingDom />} />
        <Route path="/:id/:location" element={<SpaceType /> } />
        <Route path="/:spaceid/:spacename/:id/:name" element={<Index /> } />
        <Route path="/space/:id/:name" element={<SpaceTypeDom /> } />
      </Routes>
    </div>
  );
}

export default App;
