"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { visitedProduct } from "@/services/product";

export default function ProductTile({ item }) {
  const router = useRouter();
  const { user } = useContext(GlobalContext);

  async function handleVisitedProduct(data) {
    const VisitedProductFormData = {
      user: user._id,
      product: data._id,
    };

    const res = await visitedProduct(VisitedProductFormData);
    console.log(res, "visitedProduct");
  }

  const handleClick = () => {
    router.push(`/product/${item._id}`);
    handleVisitedProduct(item);
  };

  return (
    <div className="mx-auto align-top" onClick={handleClick}>
      <div className="overflow-hiden aspect-w-1 aspect-h-1 mx-auto">
        <img
          src={item.imageUrl}
          alt="Product image"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
        />
      </div>
      {item.priceDrop > 0 ? (
        <div className="absolute top-0 m-2 rounded-full bg-customPurple">
          <p className="rounded-full  p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            İndirimde
          </p>
        </div>
      ) : null}
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p
            className={`mr-3 text-sm font-semibold ${
              item.priceDrop > 0 ? "line-through" : ""
            }`}
          >{`₺ ${item.price}`}</p>
          {item.priceDrop > 0 ? (
            <p className="mr-3 text-sm font-semibold text-red-700">{`₺ ${(
              item.price -
              item.price * (item.priceDrop / 100)
            ).toFixed(2)}`}</p>
          ) : null}
          {item.priceDrop > 0 ? (
            <p className="mr-3 text-sm font-semibold">{`(${item.priceDrop}%)off`}</p>
          ) : null}
        </div>
        <h3 className="overflow-hiden mr-2 text-gray-600 text-sm max-h-10">{item.name}</h3>
      </div>
    </div>
  );
}
