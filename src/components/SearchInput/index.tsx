import React from "react";

function SearchInput(props: any) {
  return (
    <div>
      <input
        type="text"
        placeholder={props.holder}
        className="search-input"
        name="search"
        value={props.search}
        onChange={props.getInputValue}
      />

      <button
        className="search-button"
        onClick={() => props.doSearch(props.search)}
        type="button">
        Buscar
      </button>
    </div>
  );
}
export default SearchInput;
