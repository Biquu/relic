"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/services/product";

export default function results() {
  const [searchResults, setSearchResults] = useState([]);
  const searchParams = useSearchParams();

  // Sayfa yüklendiğinde veya query değiştiğinde çalışacak kodlar
  async function search() {
    try {
      // query parametresini al
      const query = searchParams.get("query");
      console.log(query, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

      if (!query) {
        console.error("Search query is missing");
        return;
      }

      // searchProducts fonksiyonunu çağır ve arama sonuçlarını al
      const results = await searchProducts(query);

      // Elde edilen sonuçları state'e set et
      setSearchResults(results.data || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  useEffect(() => {
    search();
  }, [searchParams.get("query")]); // Dependency array içine query eklenmiş


  // fetchData fonksiyonunu çağır

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((product) => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
