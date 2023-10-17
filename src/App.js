import React from "react";

// import react router dom
import { Route, Routes, HashRouter } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails.jsx'

//  import components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Women from "./pages/Women";
import Men from "./pages/Men";
import Accessories from "./pages/Accessories";
import Bags from "./pages/Bags";
import Login from "./pages/Login";
import MobileMenu from "./components/MobileMenu";
import StoreLocations from "./pages/StoreLocations";
import FAQs from "./pages/FAQs";


function App() {
  return (
    <div className="overflow-hidden">
      <HashRouter>
        <Header />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/bags" element={<Bags />} />
            <Route path="/login" element={<Login />} />
            <Route path="/store" element={<StoreLocations />} />
            <Route path="/faqs" element={<FAQs />} />
          </Routes>
          <Sidebar />
          <MobileMenu/>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
