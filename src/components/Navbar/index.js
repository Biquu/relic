"use client";
import { GlobalContext } from "@/context";
import {
  adminNavOptions,
  navOptions,
  primaryHeaderOptions,
  secondaryHeaderOptions,
} from "@/utils";
import { Fragment, useContext, useState, useEffect } from "react";
import CommonModal from "../CommonModal";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import CartModal from "../CartModal";
import { searchProducts } from "@/services/product";

const styles = {
  button:
    "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
};

function NavItems({ isModalView = false, isAdminView, router }) {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${
        isModalView ? "" : "hidden"
      }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? "border-none" : "border border-gray-100"
        }`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 p1-3 pr-4 text-customPurple rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 p1-3 pr-4 text-customPurple rounded md:p-0"
                key={item.id}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}
function SubNavbar({ router }) {
  return (
    <div className=" fixed w-full z-20 border-t border-gray-200 bg-customPurple">
      <div className="flex justify-between mx-auto text-black text-sm">
        {/* Primary Header Options */}
        <ul className="flex items-center justify-between mx-auto py-1">
          {primaryHeaderOptions.map((item) => (
            <li
              className="cursor-pointer text-white px-8 last:border-r-0"
              key={item.id}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const {
    user,
    setUser,
    isAuthUser,
    setIsAuthUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);

  const [searchQuery, setSearchQuery] = useState(); 

  const pathName = usePathname();
  const router = useRouter();

  console.log(currentUpdatedProduct, "navbar");

  useEffect(() => {
    if (
      pathName !== "/admin-view/add-product" &&
      currentUpdatedProduct !== null
    )
      setCurrentUpdatedProduct(null);
  }, [pathName]);

  

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  }

  function handleSearch() {
    router.push(`/results?query=${searchQuery}`)
  }


  const isAdminView = pathName.includes("admin-view");

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-2 text-black">
          <div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/img/relic.svg" // Logo dosyanızın yolu
              alt="Logo"
              className="self-center h-12"
            />
          </div>

          <div className="flex items-center flex-grow max-w-md">
            <input
              type="text"
              placeholder="Yeni ve kullanılmış müzik aletleri için alışveriş yapın..."
              className="border border-customPurple rounded-md p-2 mr-2 text-xs font-medium flex-grow"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-customPurple px-4 py-2 text-white rounded-md text-xs font-medium"
            >
              Ara
            </button>
          </div>

          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button
                  className={
                    "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-md"
                  }
                  onClick={() => router.push("/account")}
                >
                  Hesap
                </button>
                <button
                  className={
                    "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-md"
                  }
                  onClick={() => setShowCartModal(true)}
                >
                  Sepet
                </button>
              </Fragment>
            ) : null}
            {user?.role === "seller" ? (
              isAdminView ? (
                <button
                  className={
                    "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-md"
                  }
                  onClick={() => router.push("/")}
                >
                  Alışveriş Yap
                </button>
              ) : (
                <button
                  onClick={() => router.push("/admin-view")}
                  className={
                    "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-md"
                  }
                >
                  Satış Yap
                </button> //adminview
              )
            ) : null}
            {isAuthUser ? (
              <button
                onClick={handleLogout}
                className={
                  "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-md"
                }
              >
                Çıkış Yap
              </button>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className={
                  "mt-1.5 inline-block bg-customPurple px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-md"
                }
              >
                Giriş Yap
              </button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowNavModal(true)}
            >
              <span className="sr-only">Ana Menü</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <NavItems router={router} isAdminView={isAdminView} />
        </div>
        <SubNavbar router={router} />
      </nav>
      <CommonModal
        showModalTitle={false}
        mainContent={
          <NavItems
            router={router}
            isModalView={true}
            isAdminView={isAdminView}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
      {showCartModal && <CartModal />}
    </>
  );
}
