// FilterBar.js
import React, { useState } from "react";

const FilterBar = ({ data, onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [productName, setProductName] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((selectedBrand) => selectedBrand !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(updatedBrands);
  };

  const handleFilterClick = () => {
    onFilterChange({ minPrice, maxPrice, selectedBrands, productName, showDiscounted });
  };

  return (
    <div className="bg-white p-4 border lg:mt-16">
      <h2 className="text-lg font-semibold mb-4 text-customPurple">Filtreler</h2>

      {/* Fiyat Aralığı */}
      <div className="mb-4 space-y-2">
        <label className="block text-sm font-medium text-gray-700 mb-2">Fiyat Aralığı</label>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Min Fiyat"
            className="p-2 border rounded w-1/2"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Max Fiyat"
            className="p-2 border rounded w-1/2"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Markalar */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Markalar</label>
        <div className="flex flex-wrap max-h-40 overflow-y-auto">
          {data &&
            Array.from(new Set(data.map((item) => item.brand))).map((brand) => (
              <label key={brand} className="mr-2">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <span className="ml-1">{brand}</span>
              </label>
            ))}
        </div>
      </div>

      {/* İndirimli Ürünler */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">İndirimli Ürünler</label>
        <input
          type="checkbox"
          checked={showDiscounted}
          onChange={() => setShowDiscounted(!showDiscounted)}
        />
        <span className="ml-1">İndirimli Ürünler</span>
      </div>

      {/* Ürün Adı */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün adını girin"
          className="p-2 border rounded w-full"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      {/* Filtrele Butonu */}
      <button
        className="bg-customPurple text-white py-2 px-4 mt-4 rounded-md hover:bg-opacity-80 transition duration-300"
        onClick={handleFilterClick}
      >
        Filtrele
      </button>
    </div>
  );
};

export default FilterBar;
