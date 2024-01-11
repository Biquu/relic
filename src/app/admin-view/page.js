"use client";

import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { GlobalContext } from "@/context";
import { getAllOrdersForAllUsers, updateStatusOfOrder } from "@/services/order";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";

export default function AdminView() {
  const {
    allOrdersForAllUsers,
    setAllOrdersForAllUsers,
    user,
    pageLevelLoader,
    setPageLevelLoader,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);

  async function extractAllOrdersForAllUsers() {
    setPageLevelLoader(true);
    const res = await getAllOrdersForAllUsers();

    console.log(res);

    if (res.success && user !== null) {
      setPageLevelLoader(false);
      setAllOrdersForAllUsers(
        res.data && res.data.length
          ? res.data.filter((item) => item.user._id !== user._id)
          : []
      );
    } else {
      setPageLevelLoader(false);
    }
  }

  useEffect(() => {
    if (user !== null) extractAllOrdersForAllUsers();
  }, [user]);

  console.log(allOrdersForAllUsers);

  async function handleUpdateOrderStatus(getItem) {
    setComponentLevelLoader({ loading: true, id: getItem._id });
    const res = await updateStatusOfOrder({
      ...getItem,
      isProcessing: false,
    });

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      extractAllOrdersForAllUsers();
    } else {
      setComponentLevelLoader({ loading: true, id: "" });
    }
  }

  if (pageLevelLoader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PulseLoader
          color={"#000000"}
          loading={pageLevelLoader}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }

  const filterOrdersBySellerID = (orders) => {
    if (!user) {
      // Kullanıcı ID'si null ise, boş bir dizi dönebilirsiniz veya başka bir işlem yapabilirsiniz.
      return [];
    }

    return orders.reduce((filteredOrders, order) => {
      const filteredOrderItems = order.orderItems.filter(
        (orderItem) =>
          orderItem.product && orderItem.product.sellerID === user._id
      );

      if (filteredOrderItems.length > 0) {
        filteredOrders.push({
          ...order,
          orderItems: filteredOrderItems,
        });
      }

      return filteredOrders;
    }, []);
  };

  const calculateTotalPriceForOrder = (order) => {
    return order.orderItems.reduce((total, orderItem) => {
      // Fiyatlar product'un price özelliğine göre hesaplanacak
      if (orderItem.product && orderItem.product.sellerID === user._id) {
        total += orderItem.product.price * ( 1 - (orderItem.product.priceDrop / 100)) * orderItem.qty; // 'qty' özelliği kullanılacak
      }
      return total;
    }, 0);
  };

  console.log(filterOrdersBySellerID(allOrdersForAllUsers), "adam");

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            <div className="flow-root">
              {allOrdersForAllUsers && allOrdersForAllUsers.length ? (
                <ul className="flex flex-col gap-4">
                  {filterOrdersBySellerID(allOrdersForAllUsers).map((item) => (
                    <li
                      key={item._id}
                      className="bg-gray-200 shadow p-5 flex flex-col space-y-3 py-6 text-left"
                    >
                      <div className="flex">
                        <h1 className="font-bold text-lg mb-3 flex-1">
                          #Şipariş: {item._id}
                        </h1>
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center">
                            <p className="mr-3 text-sm font-medium text-gray-900">
                              Müşteri Adı :
                            </p>
                            <p className="text-sm  font-semibold text-gray-900">
                              {item?.user?.name}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <p className="mr-3 text-sm font-medium text-gray-900">
                              Müşterinin E-postası :
                            </p>
                            <p className="text-sm  font-semibold text-gray-900">
                              {item?.user?.email}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <p className="mr-3 text-sm font-medium text-gray-900">
                              Toplam Ödenen Tutar :
                            </p>
                            <p className="text-sm  font-semibold text-gray-900">
                              {calculateTotalPriceForOrder(item)}TL
                            </p>
                          </div>
                          <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                            <p className="mr-3 text-sm font-medium text-gray-900">
                              Müşterinin Teslimat Adresi :{" "}
                              {item?.shippingAddress?.address}{" "}
                              {item?.shippingAddress?.city}{" "}
                              {item?.shippingAddress?.country}{" "}
                              {item?.shippingAddress?.postalCode}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {item.orderItems.map((orderItem, index) => (
                          <div key={index} className="shrink-0">
                            <img
                              alt="Order Item"
                              className="h-24 w-24 max-w-full rounded-lg object-cover"
                              src={
                                orderItem &&
                                orderItem.product &&
                                orderItem.product.imageUrl
                              }
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-5">
                        <button className="disabled:opacity-50 mt-5 mr-5  inline-block bg-customPurple text-white px-5 py-3 text-xs font-medium uppercase tracking-wide">
                          {item.isProcessing
                            ? "Ürün Hazırlanıyor"
                            : "Ürün Teslim Edildi"}
                        </button>
                        <button
                          onClick={() => handleUpdateOrderStatus(item)}
                          disabled={!item.isProcessing}
                          className="disabled:opacity-50 mt-5 mr-5  inline-block bg-customPurple text-white px-5 py-3 text-xs font-medium uppercase tracking-wide"
                        >
                          {componentLevelLoader &&
                          componentLevelLoader.loading &&
                          componentLevelLoader.id === item._id ? (
                            <ComponentLevelLoader
                              text={"Sipariş Durumu Güncelleniyor"}
                              color={"#ffffff"}
                              loading={
                                componentLevelLoader &&
                                componentLevelLoader.loading
                              }
                            />
                          ) : (
                            "Sipariş Durumunu Güncelle"
                          )}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
