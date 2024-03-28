import React from "react";

function Pickdatebox() {
  return (
    <div className="rectangleDateBox">
      <div className="row">
        <div className="col-12 col-md-auto">
          <div className="pickupplacebox">
            <p className="mb-0" id="pickupofficeP">
              Pick up Office
            </p>
            <div>
              <img id="locationVector" src="Frame.png" alt="location-vector" />
              <p id="pickuplocation">Istanbul - Vadistanbul</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-auto">
          <div className="pickuptimebox">
            <p className="mb-0">Pick up time</p>
            <p className="mb-0" id="datepickup">
              {" "}
              01/01/2024
            </p>
          </div>
        </div>
        <div className="col-12 col-md-auto">
          <div className="dropoffbox">
            <p className="mb-0">Drop off time</p>
            <p className="mb-0" id="datedropoff">
              {" "}
              03/01/2024
            </p>
          </div>
        </div>

        <div className="col-12 col-md-auto text-center">
          <button id="lookvehiclesBT">Look Vehicles</button>
        </div>
      </div>
    </div>
  );
}

export default Pickdatebox;
