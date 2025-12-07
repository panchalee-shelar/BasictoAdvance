import React from "react";
import { CDN_URL } from "../utils/Constant";

function RestaurantCards({resData}) {
console.log(resData);
  return (
    <>
      <div className="carditem">
        <div className="resto-img">
          <img
            src={CDN_URL + resData.cloudinaryImageId}
            alt={resData.name}
          />
        </div>
        <div className="resto-content">
          <h3>{resData.name}</h3>
          <p><span>{resData.avgRating} stars</span>&nbsp;-&nbsp;<span>{resData.sla.deliveryTime} mins</span></p>
          <p>{resData.cuisines.join(", ")}</p>
          <p>{resData.areaName}</p>
        </div>
      </div>
    </>
  );
}

export default RestaurantCards;