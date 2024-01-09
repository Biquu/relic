"use client";

import CommonCart from "@/components/CommonCart";
import { GlobalContext } from "@/context";
import { deleteFromCart, getAllCartItems } from "@/services/cart";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import { AllVisitedProductbyUserID } from "@/services/product";
import { productById } from "@/services/product";

export default function Cart() {
  const {
    user,
    setCartItems,
    cartItems,
    pageLevelLoader,
    setPageLevelLoader,
    setComponentLevelLoader,
    componentLevelLoader,
    recommendedProducts,
    setRecommendedProducts,
  } = useContext(GlobalContext);

  async function extractAllCartItems() {
    setPageLevelLoader(true);
    const res = await getAllCartItems(user?._id);

    if (res.success) {
      const updatedData =
        res.data && res.data.length
          ? res.data.map((item) => ({
              ...item,
              productID: {
                ...item.productID,
                price:
                  item.productID.priceDrop > 0
                    ? parseInt(
                        (
                          item.productID.price -
                          item.productID.price *
                            (item.productID.priceDrop / 100)
                        ).toFixed(2)
                      )
                    : item.productID.price,
              },
            }))
          : [];
      setCartItems(updatedData);
      setPageLevelLoader(false);
      localStorage.setItem("cartItems", JSON.stringify(updatedData));
    }

    console.log(res);
  }

  async function RecommendedProducts() {
    
    const data = await AllVisitedProductbyUserID(user._id);

    const userData = data.data;
  
    const recommendationScores = {};

    userData.forEach((visitedProduct) => {
      const userVisitCount = visitedProduct.userVisitCount;
      const totalVisitCount = visitedProduct.totalVisitCount;

      const score =
        userVisitCount * 0.5 +
        (userVisitCount / totalVisitCount) * 0.35 +
        totalVisitCount * 0.15;

      recommendationScores[visitedProduct._id] = score;
    });

    const sortedScores = Object.keys(recommendationScores)
      .sort((a, b) => recommendationScores[b] - recommendationScores[a])
      .slice(0, 8);

    const products = [];

    for (const productId of sortedScores) {
      const product = await productById(productId);

      if (product) {
        products.push(product.data);
      }
    }
  
    setRecommendedProducts(products);
  }

  useEffect(() => {
    if (user !== null) {
      extractAllCartItems();
      RecommendedProducts();
    }
  }, [user]);

  

  async function handleDeleteCartItem(getCartItemID) {
    setComponentLevelLoader({ loading: true, id: getCartItemID });
    const res = await deleteFromCart(getCartItemID);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });

      extractAllCartItems();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: getCartItemID });
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

  console.log(recommendedProducts);
  console.log(cartItems)

  return (
    <CommonCart
      componentLevelLoader={componentLevelLoader}
      handleDeleteCartItem={handleDeleteCartItem}
      cartItems={cartItems}
      recommendedProducts={recommendedProducts}
    />
  );
}
