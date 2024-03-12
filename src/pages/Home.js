import React from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Content from "../components/Content.jsx";
import Pickdatebox from "../components/Pickdatebox.jsx";
import cars from "../cars.js";

function Home() {
  return (
    <div>
      <Header />
      <Content />
      <div className="container">
        <div className="row">
          <div className="col">
            {/* please rename to date-box-container */}
            <div className="divdatebox">
              <div>
                {/* No capital R */}
                <p id="Reservation-font">Create a reservation</p>
              </div>
              <Pickdatebox />
            </div>
            <div className="vehicles-container">
              <h1>Vehicles</h1>
              {/* remove next line please */}
              {/* no camel case */}
              <div className="cardsInARow">
                <div className="row">
                  {cars.map((car) => (
                    <div className="col-12 text-center col-xl-3 col-lg-4 col-md-6">
                      <Card
                        key={car.id}
                        name={car.name}
                        vites={car.vites}
                        size={car.size}
                        img={car.img}
                        dailyprice={car.dailyprice}
                        price={car.price}
                        saving={car.saving}
                      />{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
