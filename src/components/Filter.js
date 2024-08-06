import React from 'react';

function Filter({ selectedCategory, onCategoryChange }) {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category-filter">Filter by category:</label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={handleChange}
        role="combobox"
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Produce">Produce</option>
      </select>
    </div>
  );
}

export default Filter;
