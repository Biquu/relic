"use client";

export default function CommonDetails({ item }) {
  return (
    <section className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-10 xl:col-gap-14 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden">
                  <img
                    src={item.imageUrl}
                    className="h-full w-full max-w-full object-cover border"
                    alt="Product Details"
                  />
                </div>
              </div>
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row lg:flex-col items-center">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-1 h-20 overflow-hidden border-2 border-gray-100 text-center"
                  >
                    <img
                      src={item.imageUrl}
                      className="h-full w-full object-cover"
                      alt="Product Details"
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-1 h-20 overflow-hidden border-2 border-gray-100 text-center"
                  >
                    <img
                      src={item.imageUrl}
                      className="h-full w-full object-cover"
                      alt="Product Details"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="text-2xl font-bold text-gray-900">
              {item && item.name}
            </h1>
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 botder-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1
                  className={`text-3xl font-bold mr-2 ${
                    item.priceDrop > 0 ? "line-through" : ""
                  }`}
                >
                  {" "}
                  ${item && item.price}
                </h1>
                {item.priceDrop > 0 ? (
                  <h1 className="mr-3 text-sm font-semibold text-red-700">{`$ ${(
                    item.price -
                    item.price * (item.priceDrop / 100)
                  ).toFixed(2)}`}</h1>
                ) : null}
                {item.priceDrop > 0 ? (
                  <h1 className="mr-3 text-sm font-semibold">{`(${item.priceDrop}%)off`}</h1>
                ) : null}
              </div>
              <button
                type="button"
                className="bg-customPurple px-5 py-3 text-white rounded-md text-sm font-medium"
              >
                Add to cart
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              <li className="flex itemss-center text-left text-sm font-medium text-gray-600">
                {item && item.finish}
              </li>
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                {"Cancel anytime"}
              </li>
            </ul>
          </div>
          {/* Move Description section below other details */}
          <div className="lg:col-span-3">
            <div className="border-b border-gray-400">
              <nav className="flex gap-4">
                <a
                  href="#"
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900"
                >
                  Description
                </a>
              </nav>
            </div>
            <div className="mt-8 flow-root sm:mt-12">
              {item && item.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
