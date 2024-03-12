import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";
import Reservations from "../pages/Reservations.js";
import Vehicles from "../pages/Vehicles.js";
import Support from "../pages/Support.js";
import Contact from "../pages/Contact.js";
import News from "../pages/News.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gcnew" exact element={<Home />} />
        <Route path="/reservations" exact element={<Reservations />} />
        <Route path="/vehicles" exact element={<Vehicles />} />
        <Route path="/support" exact element={<Support />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/news" exact element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
