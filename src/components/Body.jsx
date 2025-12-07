import RestaurantCards from "./RestaurantCards";
import React, { useState } from "react";
import { Reslist } from "../utils/Reslist";

function Body() {
    let resDataList = Reslist[0].restaurants;
    const [res, setRes] = useState(resDataList);
  return (
    <>
      <div className="body">
        <div className="container">
            <div className="filterbox">
                <button className="filter-btn" onClick={()=>{
                    const filterList = res.filter(r => r.info.avgRating > 3.5);
                    setRes(filterList);}}>
                        Top Rated Restaurant</button>
                <div className="search"></div>
            </div>
          <div className="cards-wrap">
            {res.map((res)=>(
                <RestaurantCards key={res.info.id} resData={res.info}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;