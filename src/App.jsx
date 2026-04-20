import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './LanguageContext'
import Landing from './Landing'
import Home from './Home'
import Hub from './Hub'
import Place from './Place'
import Hotel from './Hotel'
import HotelDetail from './HotelDetail'
import PlaceDetail from './PlaceDetail'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen">
          <Routes>
            <Route path="/"        element={<Landing />} />
            <Route path="/explore" element={<Home />} />
            <Route path="/hub"     element={<Hub />} />
            <Route path="/place"   element={<Place />} />
            <Route path="/hotel"   element={<Hotel />} />
            <Route path="/hotel/:cityId/:hotelId" element={<HotelDetail />} />
            <Route path="/place/:landmarkId" element={<PlaceDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
