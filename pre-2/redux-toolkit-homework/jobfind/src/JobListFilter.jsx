
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./JobListFilter.css"; 
import  data  from '../../redux-toolkit-homework/data.json'; 
import { addFilter, removeFilter, clearFilters } from "./redux/jobSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

function JobList() {
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.filters.selectedFilters);

  const filteredJobs =
    selectedFilters.length > 0
      ? data.filter((job) =>
          selectedFilters.every(
            (filter) =>
              job.role === filter ||
              job.level === filter ||
              job.languages.includes(filter) ||
              job.tools.includes(filter)
          )
        )
      : data;

  const handleFilterClick = (filter) => {
    dispatch(addFilter(filter));
  };

  const handleClearAllFilters = () => {
    dispatch(clearFilters());
  };

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter));
  };

  return (
    <div className="job-listings-container">
      <img
        className="header-image"
        src="./images/bg-header-desktop.svg"
        alt="header"
      />

      {selectedFilters.length > 0 && (
        <div className="filter-selection-container">
          {selectedFilters.map((filter) => (
            <div className="filter-item" key={filter}>
              <span className="filter-text">{filter}</span>

              <button
                className="remove-filter-btn"
                onClick={() => handleRemoveFilter(filter)}
              >
                <FontAwesomeIcon icon={faXmark} className="remove-icon" />
              </button>
            </div>
          ))}
          <button onClick={handleClearAllFilters} className="clear-all-btn">
            Clear All
          </button>
        </div>
      )}

      {filteredJobs.length > 0 &&
        filteredJobs.map((job) => (
          <div className="job-card" key={job.id}>
            <img className="job-logo" src={job.logo} alt="job-logo" />

            <div className="job-details">
              <div className="job-company-info">
                <h2 className="company-name">{job.company}</h2>

                {job.new && <span className="new-tag">NEW!</span>}
                {job.featured && <span className="featured-tag">FEATURED</span>}
              </div>
              <h3 className="job-title">{job.position}</h3>

              <p className="job-info">
                {`${job.postedAt} • ${job.contract} • ${job.location}`}
              </p>
            </div>
            <div className="job-filter-actions">
              <button
                className="filter-btn"
                onClick={() => handleFilterClick(job.role)}
              >
                {job.role}
              </button>
              <button
                className="filter-btn"
                onClick={() => handleFilterClick(job.level)}
              >
                {job.level}
              </button>
              {job.languages.map((language) => (
                <button
                  className="filter-btn"
                  key={language}
                  onClick={() => handleFilterClick(language)}
                >
                  {language}
                </button>
              ))}
              {job.tools.map((tool) => (
                <button
                  className="filter-btn"
                  key={tool}
                  onClick={() => handleFilterClick(tool)}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default JobList;