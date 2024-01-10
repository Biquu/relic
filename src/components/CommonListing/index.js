"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductButton from "./ProductButtons";
import ProductTile from "./ProductTile";
import Notification from "../Notification";
import FilterBar from "./ProductFilter";

export default function CommonListing({ data }) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    router.refresh();
  }, []);

  const handleFilterChange = ({
    minPrice,
    maxPrice,
    selectedBrands,
    productName,
    showDiscounted,
  }) => {
    // Filtre değişikliği olduğunda burada filtreleme işlemlerini yapabilirsiniz
    // Örneğin, fiyat aralığına, markalara ve ürün adına göre ürünleri filtreleme
    let filteredProducts = data;

    if (minPrice > 0 && maxPrice > 0 && minPrice < maxPrice) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }

    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        selectedBrands.includes(item.brand)
      );
    }

    if (productName) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(productName.toLowerCase())
      );
    }

    if (showDiscounted) {
      filteredProducts = filteredProducts.filter((item) => item.priceDrop > 0);
    }

    setFilteredData(filteredProducts);
  };

  return (
    <section className="bg-white py-12 sm:py-8">
      <div className="mx-15 flex flex-col sm:flex-row justify-start items-start px-4 sm:px-6 lg:px-64">
        {/* Adjust the width and position of the FilterBar based on screen size */}
        <div className="w-full sm:w-2/12 pr-4 sm:pr-0 mb-4 sm:mb-0">
          <FilterBar data={data} onFilterChange={handleFilterChange} />
        </div>
        <div
          className="w-full sm:w-10/12 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md sm:grid-cols-2 gap-4 lg:mt-16 mx-auto"
        >
          {filteredData && filteredData.length
            ? filteredData.map((item) => (
                <article
                  className="relative flex flex-col overflow-hidden border cursor-pointer"
                  key={item._id}
                >
                  <ProductTile item={item} />
                  <ProductButton item={item} />
                </article>
              ))
            : null}
        </div>
      </div>
      <Notification />
    </section>
  );
}