import React from "react";

function Card(props) {
  return (
    <div id="rectangle">
      <div className="cardFirstRow">
        <div className="cardTitle">
          <p id="cardModel">
            <b>
              {props.name} <br></br>
              {props.vites}
            </b>{" "}
            or similar
          </p>
          <p id="cardCarSize">{props.size}</p>
        </div>

        <img id="cardInfoVector" src="Vector (2).png" alt="carInfo" />
      </div>
      <div className="secondSection">
        <img id="cardPic" src={props.img} alt="carpic" />
        <div className="cardLastRow">
          <div className="cardPriceInfo">
            <p id="dailyPriceP">{props.dailyprice}</p>
            <p id="cardPriceBold">{props.price}</p>
          </div>
          <p id="savingPrice">Your Savings {props.saving}</p>
        </div>
        <button id="rentNowBt">Rent Now</button>
      </div>
    </div>
  );
}

export default Card;
