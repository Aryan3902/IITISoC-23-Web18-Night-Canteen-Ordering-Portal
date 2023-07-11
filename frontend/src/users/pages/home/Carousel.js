import React from "react";

export default function Carousel() {
  return (
    <div className="carousel-size-control">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.iiti.ac.in/public/storage/pages/August2020/Bakeology.jpg" className="d-block w-100 carousel-images" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-e3e7605a94a329b1954c6d7638226b0b-lq" className="d-block w-100 carousel-images" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.collegebatch.com/static/clg-gallery/indian-institute-of-technology-indore-239004.jpg" className="d-block w-100 carousel-images" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
