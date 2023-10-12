import React from "react";

function Card() {
  return (
    <div>
      <div className="body ">
        <div className="card mt-3" style={{ width: "18rem" }}>
          <img
            src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRvC27D9KlxeEham1w-Wpd_pu3hd4A-OywxRbdnx9JFLpcTD7dfL0bD_WI6Ro8QkzrPLkBMzA9osrMpi4JSP5Y"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some Important text .</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, index) => {
                  return (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
                <option value="half">Half</option>
              </select>
              <div className="d-inline h-100 fs-6">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
