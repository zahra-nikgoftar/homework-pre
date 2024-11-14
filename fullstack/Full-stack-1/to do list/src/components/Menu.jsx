import React from "react";
import "../style/menu.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Menu() {
  return (
    <div>
      <h2>All tasks(3 tasks)</h2>
      <div className="contaner-menu">
        <div>
          <button>
            <img src="../../public/assets/view-1.svg" alt="menu-bar" />
          </button>
          <button>
            <img src="../../public/assets/view-2.svg" alt="" />
          </button>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              style={{
                background: "white",
                width: "7rem",
                color: "black",
                border: "1px solid prple",
              }}
            >
              sort by
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                sort by
              </Dropdown.Item>
              <Dropdown.Item href="#/Order-added">Order added</Dropdown.Item>
              <Dropdown.Item href="#/Earlier-first">
                Earlier first
              </Dropdown.Item>
              <Dropdown.Item href="#/Later-first">Later first</Dropdown.Item>
              <Dropdown.Item href="#/Complated-first">
                Complated first
              </Dropdown.Item>
              <Dropdown.Item href="#/Uncomplated-first">
                Uncomplated first
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Menu;
