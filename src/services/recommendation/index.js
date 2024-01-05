import { AllVisitedProduct } from "@/services/product";

export const findHighlyVisitedProducts = async (userId ,threshold = 1) => {
  const productCount = {};

  const visitedProductsData = await AllVisitedProduct(userId);
  // Her ürünün kaç kere ziyaret edildiğini sayan bir obje oluştur
  visitedProductsData.data.forEach((visitedProduct) => {
    const productId = visitedProduct.product;

    if (productId) {
      if (productCount[productId]) {
        productCount[productId]++;
      } else {
        productCount[productId] = 1;
      }
    }
  });

  const highlyVisitedProducts = [];

  // Belirli bir eşik değerinden (threshold) daha fazla ziyaret edilen ürünleri bul
  Object.keys(productCount).forEach((productId) => {
    const visitCount = productCount[productId];

    if (visitCount > threshold) {
      highlyVisitedProducts.push({
        productId: productId,
        visitCount: visitCount,
      });
    }
  });

  // Ziyaret sayısına göre azalan sırayla sırala
  highlyVisitedProducts.sort((a, b) => b.visitCount - a.visitCount);

  console.log(highlyVisitedProducts)
};



