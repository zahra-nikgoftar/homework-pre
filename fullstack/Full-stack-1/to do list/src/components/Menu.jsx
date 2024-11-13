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
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="secondary"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" active>
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Menu;
