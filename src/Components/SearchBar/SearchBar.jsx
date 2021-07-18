import React from 'react'

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(e.target.elements.searchQuery.value)
  }
  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSearch}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

export default SearchBar
