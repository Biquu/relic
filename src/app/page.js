"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section>
        <div className="grid max-w-screen-x1 px-4 py-8 mx-auto lg:gap-8 xl:gap-10 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 text-center lg:text-left">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-customPurple">
              Müzik Tutkunları İçin Relic
            </h1>
            <p className="max-w-2xl mb-6 font-light text-black-500 lg:-mb-8 md:text-lg lg:text-xl lg:pb-10">
              Müziğinizi bir adım öteye taşımanın en iyi yolu! En yeni ve
              kaliteli müzik aletleri için Relic'e adım atın.
            </p>
            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-opacity-80 focus:outline-none focus:ring focus:border-blue-300"
            >
              Hemen Keşfet
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://images.unsplash.com/photo-1556379118-7034d926d258?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Relic'i Keşfet"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-customPurple sm:text-3xl">
                    Yeni ve İkinci El Müzik Aletleri
                  </h2>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Kaliteli müzik aletleri ve ekipmanları arasında gezin,
                  aradığını bul ve hemen satın al!
                </p>
                <button
                  type="button"
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Tüm Ürünleri İncele
                </button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-xl font-bold  text-customPurple sm:text-3xl">
                  İndirimli Ürünler
                </h2>
                <p className="text-sm text-gray-600">
                  Fırsatları kaçırma, indirimli müzik aletlerini hemen keşfet!
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.priceDrop > 0)
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer border"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-red-700">
                              {productItem.price * (100 - productItem.priceDrop)/100}TL{" "}
                              <span className="text-red-700">{`-${productItem.priceDrop}%`}</span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-customPurple sm:text-3xl">
              Kategorilere Göre Al
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            {[
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1431308305062-f218b6fe520a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "electric-guitars",
                title: "Elektro Gitarlar",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1510104183447-b598400bb62c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "amplifiers",
                title: "Amfiler",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1528303538427-209fc9098e73?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "drums-and-percussion",
                title: "Davul ve Perküsyon",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1619558041249-0523903712e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "bass-guitars",
                title: "Bass Gitarlar",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1589390511985-aeacd8815121?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "acoustic-guitars",
                title: "Akustik Gitarlar",
              },
              {
                imageUrl:
                  "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                category: "dj-studio",
                title: "DJ / Stüdyo",
              },
            ].map((item) => (
              <li key={item.category}>
                <div className="relative block group">
                  <a href={`/product/listing/${item.category}`}>
                    <img
                      src={item.imageUrl}
                      className="object-cover w-full aspect-square"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                      <h3 className="text-xl font-medium text-white">
                        {item.title}
                      </h3>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
