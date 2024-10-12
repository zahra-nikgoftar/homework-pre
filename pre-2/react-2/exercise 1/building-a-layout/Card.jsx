import React from "react";

function Card({ image, cardTitle, cardDescription, buttonUrl, buttonLabel }) {
  return (
    <div class="card m-5">
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardDescription}</p>
        <a href={buttonUrl} class="btn btn-primary">
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}

export default Card;
