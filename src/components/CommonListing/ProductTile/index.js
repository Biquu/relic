"use client";

export default function ProductTile({ item }) {
  return (
    <div className="mx-auto">
      <div className="overflow-hiden aspect-w-1 aspect-h-1 h-64 w-64">
        <img
          src={item.imageUrl}
          alt="Product image"
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
        />
      </div>
      {item.onSale === "forSale" ? (
        <div className="absolute top-0 m-2 rounded-full bg-customPurple">
          <p className="rounded-full  p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            Sale
          </p>
        </div>
      ) : null}
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <p className="mr-3 text-sm font-semibold">{`$ ${item.price}`}</p>
        </div>
        <h3 className="md-2 text-gray-400 text-sm">{item.name}</h3>
      </div>
    </div>
  );
}
