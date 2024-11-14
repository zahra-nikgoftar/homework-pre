import React, { useState } from "react";
import "../style/navigation.css";
import "../style/nav-body.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavSide = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => setShowEditModal(true);
  const handleClose = () => setShowEditModal(false);
const [addDirectory, setAddDirectory] = useState(false);
const handleAddClick = () => setAddDirectory(true);
const handleCloseM = () => setAddDirectory(false);
  return (
    <>
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
                    <button onClick={handleEditClick}>
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
                  onClick={handleAddClick}
                >
                  + new
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showEditModal} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#f3e8ff", textAlign: "left" }}
        >
          <Modal.Title>Edit Directory</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f3e8ff" }}>
          <input
            type="text"
            placeholder="Enter new name"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f3e8ff", textAlign: "left" }}>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "rgb(167, 92, 236)" }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={addDirectory} onHide={handleCloseM} centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#f3e8ff", textAlign: "left" }}
        >
          <Modal.Title>Create new directory</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f3e8ff" }}>
          <input
            type="text"
            placeholder="Enter a directory name"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f3e8ff", textAlign: "left" }}>
          <Button
            onClick={handleCloseM}
            style={{ backgroundColor: "rgb(167, 92, 236)" }}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavSide;
