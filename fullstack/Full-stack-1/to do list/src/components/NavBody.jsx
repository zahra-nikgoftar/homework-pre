import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/nav-body.css";



const  NavBody= ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="contaner-nav-body">
      <Form
        onSubmit={handleSubmit}
        className="w-100"
        style={{ maxWidth: "300px", padding: "1rem" }}
      >
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search task..."
            value={query}
            onChange={handleInputChange}
            aria-label="Search"
          />
          <Button type="submit" variant="outline-secondary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </Form>
      <div ><p>2024,Oct,18</p></div>
      <div> <button className="button-body">Add new task</button></div>
    </div>

  );
};


export default NavBody

