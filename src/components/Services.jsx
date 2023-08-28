import data from "../data";
import React, { useState } from "react";
import { Button } from "reactstrap"; // Assuming you're using Reactstrap for Button
import RateModal from "./RateModal"; // Make sure the path to RateModal is correct

function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);

  const handleModalOpen = (id) => {
    setClickedItemId(id)
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setClickedItemId(null)
    setIsModalOpen(false);
  };

  return (
    <div className="container" id="services">
      <div className="justify-content-center d-flex">
        <h3>Services We Offer</h3>
      </div>
      <div className="row service-container">
        {data.map((item, key) => (
          <div
            key={key}
            className="col-12 col-md-4 mb-4">
            <div className={`container-fluid d-flex justify-content-center align-items-center services general ${item.css}`}>
              <div className={`container-fluid d-flex flex-column justify-content-evenly align-items-center background-${item.css}`}>
                <h3>{item.service}</h3>
                <ul>
                  {item.offerings.map((offering, index) => (
                    <li key={index}>{offering}</li>
                  ))}
                </ul>
                <Button type="button" className="bg-primary" onClick={()=>handleModalOpen(item.id)}>
                  Check Rate
                </Button>
                <RateModal isOpen={isModalOpen} closeModal={handleModalClose} id={clickedItemId} data={data}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
