import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ChevronDown,
  Search,
  Check,
} from "lucide-react";

import "../../styles/Common/dropdown.css";

const Dropdown = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select",
  searchable = false,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  /* CLOSE OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside,
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, []);

  /* SELECTED OPTION */
  const selectedOption = options.find(
    (opt) => opt.value === value,
  );

  /* FILTERED */
  const filteredOptions = useMemo(() => {
    if (!searchable) return options;

    return options.filter((opt) =>
      opt.label
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [options, search, searchable]);

  return (
    <div
      className={`dropdown-group ${
        disabled ? "dropdown-disabled" : ""
      }`}
      ref={dropdownRef}
    >
      {label && (
        <label className="dropdown-label">
          {label}
        </label>
      )}

      {/* TRIGGER */}
      <button
        type="button"
        className={`dropdown-trigger ${
          open ? "dropdown-open" : ""
        }`}
        onClick={() =>
          !disabled && setOpen(!open)
        }
      >
        <span
          className={
            selectedOption
              ? "dropdown-value"
              : "dropdown-placeholder"
          }
        >
          {selectedOption?.label ||
            placeholder}
        </span>

        <ChevronDown
          size={18}
          className={`dropdown-arrow ${
            open ? "rotate-arrow" : ""
          }`}
        />
      </button>

      {/* MENU */}
      {open && (
        <div className="dropdown-menu">

          {/* SEARCH */}
          {searchable && (
            <div className="dropdown-search">
              <Search size={16} />

              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>
          )}

          {/* OPTIONS */}
          <div className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  className={`dropdown-option ${
                    value === opt.value
                      ? "active-option"
                      : ""
                  }`}
                  onClick={() => {
                    onChange(opt.value);

                    setOpen(false);

                    setSearch("");
                  }}
                >
                  <span>{opt.label}</span>

                  {value === opt.value && (
                    <Check size={16} />
                  )}
                </button>
              ))
            ) : (
              <div className="dropdown-empty">
                No results found
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
};

export default Dropdown;