import React, { useState } from "react";
import Button from "../../../components/common/Button";
import "../styles/filterBar.css";
import { FunnelPlus, Search } from "lucide-react";

const FilterBar = ({
  setSearch,
  tasks,
  sprints,
  selectedFilters,
  setSelectedFilters,
  onCreate,
  onAddColumn,
  sprint,
}) => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Status");

  const filterOptions = {
    Status: ["todo", "inprogress", "Ready For Testing", "done"],
    Assignee: ["john", "ravi"],
    Priority: ["high", "medium", "low"],
    Type: ["task", "story", "bug"],
    Sprint: sprints,
  };

  const handleSelect = (value) => {
    setSelectedFilters((prev) => {
      const current = prev[activeCategory] || [];
      const exists = current.includes(value);

      return {
        ...prev,
        [activeCategory]: exists
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  return (
    <div className="filter-bar">

      {/* LEFT */}
      <div className="header-actions-left">
        <div className="search-wrapper">
          <Search size={16} className="search-task-icon" />
          <input
            className="search-input"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="filter-btn" onClick={() => setOpen(!open)}>
          <FunnelPlus size={18} />
          Filter
        </button>
      </div>

      {/* FILTER POPUP */}
      {open && (
        <div className="filter-popup">

          {/* LEFT CATEGORY */}
          <div className="filter-left">
            {Object.keys(filterOptions).map((cat) => (
              <div
                key={cat}
                className={`filter-item ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* RIGHT OPTIONS */}
          <div className="filter-right">
            {filterOptions[activeCategory].map((option) => (
              <label key={option} className="checkbox">
                <input
                  type="checkbox"
                  checked={
                    selectedFilters[activeCategory]?.includes(option) || false
                  }
                  onChange={() => handleSelect(option)}
                />
                <span className="tag">{option}</span>
              </label>
            ))}

            <div className="filter-footer">
              <button
                className="reset-btn"
                onClick={() => setSelectedFilters({})}
              >
                Reset
              </button>

              <button
                className="apply-btn"
                onClick={() => setOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>

        </div>
      )}

      {/* RIGHT */}
      <div className="header-actions-right">
        <Button
          onClick={onCreate}
          disabled={sprint?.status !== "active"}
        >
          + Create
        </Button>

        <Button variant="outline" onClick={onAddColumn}>
          + Status
        </Button>
      </div>

    </div>
  );
};

export default FilterBar;