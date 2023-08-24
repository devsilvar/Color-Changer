import React from 'react'

const FlipSection = ({Color, ChangeColor}) => {
     return (
    <div className="d-flex align-items-center hv-100">
        <div className="d-flex flex-column mx-auto align-items-center">
          <p className="text-center my-3 fs-3 text-capitalize">
            Background Color: {Color}{" "}
          </p>
          <button className="px-4 py-2 border-light rounded" onClick={ChangeColor}>
            Change Color
          </button>
        </div>
        </div>
    );}

export default FlipSection;