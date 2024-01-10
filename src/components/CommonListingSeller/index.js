"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductButton from "./ProductButtons";
import ProductTile from "./ProductTile";
import Notification from "../Notification";


export default function CommonListingSeller({ data }) {
  const router = useRouter();


  useEffect(() => {
    router.refresh();
  }, []);



  return (
    <section className="bg-white py-12 sm:py-8">
      <div className="mx-auto flex flex-col sm:flex-row justify-start items-start px-4 sm:px-6 lg:px-64">
        {/* Adjust the width and position of the FilterBar based on screen size */}
        <div
          className="w-full  grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md sm:grid-cols-2 gap-4 lg:mt-16 mx-auto"
        >
          {data && data.length
            ? data.map((item) => (
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