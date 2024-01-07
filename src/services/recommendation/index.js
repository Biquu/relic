"use client";

import { AllVisitedProductbyUserID, AllVisitedProduct } from "../product";

export default function getRecommendations(item) {
  

  async function recommendation() {
    const userData = await AllVisitedProductbyUserID(item);
    const allData = await AllVisitedProduct();
    
  }

  recommendation();
}
