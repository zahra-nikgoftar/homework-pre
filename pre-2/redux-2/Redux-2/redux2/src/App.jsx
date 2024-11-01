import React, { useState } from "react";

import Card from "../website-shop/Card";
import Header from "../website-shop/Header";

function App() {
  const [modalMessages, setModalMessages] = useState([]);
  return (
    <>
      <Header />
      <Card
        shawModalMessage={(message) =>
          (setModalMessages, message)
        }
      />
      <div className="modal-container">
        {modalMessages.map((message, index) => (
          <div key={index} className="modal">
            <p>{message}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
