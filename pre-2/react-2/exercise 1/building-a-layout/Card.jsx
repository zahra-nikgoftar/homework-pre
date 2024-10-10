import React from "react";
import App from "../react2/src/App";
function Card({ image, cardTitle,cardDescription ,button}) {
  const {}= data
  return (
    <div class="card m-5">
      <img class="card-img-top" src={image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{cardTitle}</h5>
        <p class="card-text">{cardDescription}</p>
        <a href={button.url} class="btn btn-primary">
          {button.label}
        </a>
      </div>
    </div>
  );
}

export default Card;
