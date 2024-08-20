import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { FileIcon } from "react-file-icon";
import "./App.scss";

const data = [
  {
    id: 1,
    title: "Animate the Window - KendoReact TreeView",
    icon: "filetype-pdf",
    link: "https://example.com/window-animations",
  },
  {
    id: 2,
    title: "Grid Search Bar | KendoReact Chart",
    icon: "file-earmark-word",
    link: "https://example.com/grid-search",
  },
  {
    id: 3,
    title: "Delete TreeView Nodes - KendoReact TreeView",
    icon: "file-spreadsheet",
    link: "https://example.com/treeview-deleting",
  },
];

function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };

  return (
    <div className="">
      <div className="containerapp">
        <div className="search-input-container">
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search Knowledge Base"
            className="search-input"
          />
        </div>
        <div className="results-container">
          <i>
            <p className="result-count">{filteredData.length} results</p>
          </i>
          <div className="result-grid">
            {filteredData.map((item) => (
              <div key={item.id} className="result-card">
                {item.title}
                <div className="file2">
                    <img src={`/images/${item.icon}.svg`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
