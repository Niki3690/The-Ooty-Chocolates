import React from "react";
import "../Style/Homemade.css";
import ChocolateDetails from "./ChocolateDetails";

const AA = () => {
  return (
    <div className="homemaid"> 
      <div className="container">
        <div className="row p-0">
          {ChocolateDetails.map((demo) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 g-3 ">
                <div className="aa">
                  <img src={demo.img} className="home-img" />

                  <div className="bb">
                    <button data-toggle="modal" data-target="#myModal">
                      Quick View
                    </button>
                  </div>
            
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AA;
