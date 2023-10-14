import React from "react";

// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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


function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/bags" element={<Bags />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
