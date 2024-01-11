"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { visitedProduct } from "@/services/product";
import { BsArrowDown } from "react-icons/bs";

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
    <div className="mx-auto align-top overflow-hidden group hover:scale-110 transition-transform" onClick={handleClick}>
      <div className="overflow-hidden aspect-w-1 aspect-h-1 h-72 ">
        <img
          src={item.imageUrl}
          alt="Product image"
          className="h-full w-full object-cover "
        />
      </div>
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <h3 className=" overflow-ellipsis overflow-hidden line-clamp-2 mr-3 text-gray-600 text-sm mb-2 h-10">
          {item.name}
        </h3>
        <div className="mb-2 flex flex-col">
          <div className="flex items-center mb-1">
            <p
              className={`mr-3 text-sm font-semibold ${
                item.priceDrop > 0 ? "line-through opacity-50" : ""
              }`}
            >{`${item.price} TL`}</p>
            {item.priceDrop > 0 ? (
              <div className="flex items-center">
                <BsArrowDown className="text-red-600 mr-1" />
                <p className="mr-3 text-sm font-semibold text-red-600">
                  {`${item.priceDrop}%`}
                </p>
              </div>
            ) : null}
          </div>
          {item.priceDrop > 0 ? (
            <p className="text-sm font-semibold text-red-600">{`${(
              item.price -
              item.price * (item.priceDrop / 100)
            ).toFixed(2)} TL`}</p>
          ) : <p className="h-5">
            </p>}
        </div>
      </div>
    </div>
  );
}
