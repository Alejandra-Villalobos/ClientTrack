import { Input } from "antd";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";

function SearchBar({ handleSearchText }) {
  const [searchText, setSearchText] = useState("");

  const handleClearSearch = () => {
    handleSearchText("");
    setSearchText("");
  };

  return (
    <div className="flex justify-center items-center my-4 w-full">
      <Input
        placeholder="Buscar por nombre"
        className="w-1/2 border-blue-dark border-2 py-3"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <button
        onClick={() => handleSearchText(searchText)}
        className="bg-blue-dark text-white px-3 py-3 rounded-lg ml-2 border-white border-2 shadow-md"
      >
        <FaSearch size={25} />
      </button>
      <button
        onClick={handleClearSearch}
        className="flex items-center gap-2 font-bold bg-blue-dark text-white px-3 py-3 rounded-lg ml-2 border-white border-2 shadow-md"
      >
        <MdCleaningServices size={25} /> <p className="sm:display hidden">Limpiar búsqueda</p>
      </button>
    </div>
  );
}

export default SearchBar;
