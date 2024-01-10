"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/services/product";
import ProductTile from "@/components/CommonListing/ProductTile"; // ProductTile ve diğer gerekli component'leri import edin

export default function Results() {
  const [searchResults, setSearchResults] = useState([]);
  const searchParams = useSearchParams();

  // Sayfa yüklendiğinde veya query değiştiğinde çalışacak kodlar
  async function search() {
    try {
      // query parametresini al
      const query = searchParams.get("query");

      if (!query) {
        console.error("Search query is missing");
        return;
      }

      // searchProducts fonksiyonunu çağır ve arama sonuçlarını al
      const results = await searchProducts(query);

      console.log(results, "results");

      // Elde edilen sonuçları state'e set et
      setSearchResults(results.data || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  useEffect(() => {
    search();
  }, [searchParams.get("query")]); // Dependency array içine query eklenmiş

  return (
    <section className="bg-white py-12 sm:py-8">
      <div className="mx-15 flex flex-col sm:flex-row justify-start items-start px-4 sm:px-6 lg:px-20">
        <h1 className="text-xl font-semibold mb-4">
          Search Results for "{searchParams.get("query")}"
        </h1>

        <div className="w-full  grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md sm:grid-cols-2 gap-4 lg:mt-16 mx-auto">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <article className="overflow-hidden border cursor-pointer">
                  <ProductTile key={product._id} item={product} />
              </article>

              
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
