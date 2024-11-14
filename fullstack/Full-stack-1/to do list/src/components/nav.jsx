import React from "react";
import "../style/navigation.css";
import "../style/nav-body.css";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavSide = () => {
  return (
    <Navbar expand="sm" className="nav-contaner">
      <Container>
        <Navbar.Toggle aria-controls="sideNavbar" />
        <Navbar.Collapse id="sideNavbar">
          <Nav className="flex-column mt-4">
            {" "}
            <h3>TO-DO-LIST</h3>
            <Button as={Link} className="button">
              Add new task
            </Button>
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                      background: "rgb(231, 213, 248)",
                      width: "38vh",
                      marginLeft: "-1rem",
                      borderRight: "2px solid red",
                    }
                  : undefined
              }
            >
              All Tasks
            </NavLink>{" "}
            <NavLink
              to="/importantTasks"
              className="nav-link"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                      background: "rgb(231, 213, 248)",
                      width: "38vh",
                      marginLeft: "-1rem",
                      borderRight: "2px solid red",
                    }
                  : undefined
              }
            >
              Important Tasks
            </NavLink>
            <NavLink
              to="/completedTasks"
              className="nav-link"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                      background: "rgb(231, 213, 248)",
                      width: "38vh",
                      marginLeft: "-1rem",
                      borderRight: "2px solid red",
                    }
                  : undefined
              }
            >
              Completed Tasks
            </NavLink>
            <NavLink
              to="/uncompletedTasks"
              className="nav-link"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                      background: "rgb(231, 213, 248)",
                      width: "38vh",
                      marginLeft: "-1rem",
                      borderRight: "2px solid red",
                    }
                  : undefined
              }
            >
              Uncompleted Tasks
            </NavLink>
            <NavDropdown
              title="Directories"
              id="directories-dropdown"
              className="nav-link custom-dropdown"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/secondary"
                className="nav-link secondary custom-dropdown-item"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "red",
                        background: "rgb(231, 213, 248)",
                        width: "38vh",
                        marginLeft: "-1rem",
                        borderRight: "2px solid red",
                      }
                    : undefined
                }
              >
                Secondary
                <div className="icon-container">
                  <button>
                    <img src="../../public/assets/edit.svg" alt="edit" />
                  </button>
                  <button>
                    <img src="../../public/assets/trash.svg" alt="delete" />
                  </button>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/"
                className="nav-link custom-dropdown-item"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "red",
                        background: "rgb(231, 213, 248)",
                        width: "38vh",
                        marginLeft: "-1rem",
                        borderRight: "2px solid red",
                      }
                    : undefined
                }
              >
                Main Page
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/directories/folder3"
                className="nav-link custom-dropdown-item new-task"
               
              >
                + new
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavSide;
