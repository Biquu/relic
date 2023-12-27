"use client";
import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment, useContext } from "react";
import CommonModal from "../CommonModal";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";


const styles = {
  button:
    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
};

function NavItems({ isModalView = false, isAdminView, router }) {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"
        }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${isModalView ? "border-none" : "border border-gray-100"
          }`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
            <li
              className="cursor-pointer block py-2 p1-3 pr-4 text-gray-900 rounded md:p-0"
              key={item.id}
              onClick={() =>router.push(item.path)}
            >
              {item.label}
            </li>
          ))
          : navOptions.map((item) => (
            <li
              className="cursor-pointer block py-2 p1-3 pr-4 text-gray-900 rounded md:p-0"
              key={item.id}
              onClick={() =>router.push(item.path)}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const { user, setUser, isAuthUser, setIsAuthUser } = useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();

  console.log(pathName);

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  }

  const isAdminView = pathName.includes('admin-view')

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4  text-black">
          <div onClick={() => router.push('/')} className="flex items-center cursor-pointer">
            <img
              src="/img/logo.png" // Logo dosyanızın yolu
              alt="Logo"
              className="self-center h-16"
            />
          </div>

          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                >
                  Hesap
                </button>
                <button
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                >
                  Sepet
                </button>
              </Fragment>
            ) : null}
            {user?.role === "seller" ? (
              isAdminView ? (
                <button
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                  }
                  onClick={() => router.push('/')}
                >
                  Client View
                </button>
              ) : (
                <button onClick={() => router.push('/admin-view')}
                  className={
                    "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
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
                  "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
                }
              >
                Çıkış Yap
              </button>
            ) : (
              <button onClick={() => router.push('/login')}
                className={
                  "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
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
              <span className="sr-only">Open main menu</span>
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
          <NavItems router={router} isAdminView={isAdminView}/>
        </div>
      </nav>
      <CommonModal
        showModalTitle={false}
        mainContent={<NavItems router={router} isModalView={true} isAdminView={isAdminView}/>}
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
}
