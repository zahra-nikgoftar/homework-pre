
import React from "react";
import "../style/navigation.css";
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
            <NavDropdown
              title="Directories"
              id="directories-dropdown"
              className="nav-link"
            >
              <NavDropdown.Item
                as={NavLink}
                to="/directories/folder1"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "red",
                        background: "rgb(231, 213, 248)",
                        width: "38vh",

                        borderRight: "2px solid red",
                      }
                    : undefined
                }
              >
                Folder 1
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/directories/folder2"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "red",
                        background: "rgb(231, 213, 248)",
                        width: "38vh",

                        borderRight: "2px solid red",
                      }
                    : undefined
                }
              >
                Folder 2
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/directories/folder3"
                className="nav-link"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "red",
                        background: "rgb(231, 213, 248)",
                        width: "38vh",

                        borderRight: "2px solid red",
                      }
                    : undefined
                }
              >
                Folder 3
              </NavDropdown.Item>
            </NavDropdown>
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
              to="/mainPage"
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
              Main Page
            </NavLink>
            <NavLink
              to="/secondary"
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
              Secondary
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavSide;
