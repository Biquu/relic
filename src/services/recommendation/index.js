import { AllVisitedProductbyUserID, _AllVisitedProducts } from "../product";
import * as tf from "@tensorflow/tfjs";

// Fonksiyon: TensorFlow.js modelini eğit
async function trainModel(userData) {
  const products = userData.map((entry) => entry._id);

  const productIndices = products.reduce((acc, product, index) => {
    acc[product] = index;
    return acc;
  }, {});

  const ratings = userData.map((entry) => ({
    product: productIndices[entry._id],
    userVisitCount: entry.userVisitCount,
    totalVisitCount: entry.totalVisitCount,
  }));

  const numProducts = products.length;

  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      inputShape: [numProducts, 2],
      batchInputShape: [numProducts, 2], // 2 özellik: userVisitCount ve totalVisitCount
      units: 8,
      activation: "relu",
    })
  );
  model.add(tf.layers.dense({ units: 1, activation: "linear" }));
  model.compile({ optimizer: "adam", loss: "meanSquaredError" });

  // Eğitim verilerini uygun şekilde düzenle
  const input = tf.tensor2d(
    ratings.map((rating) => [rating.userVisitCount, rating.totalVisitCount]),
    [ratings.length, 2]
  );

  const output = tf.tensor2d(
    ratings.map((rating) => [rating.userVisitCount]),
    [ratings.length, 1]
  );

  console.log("Input Shape:", input.shape);
  console.log("Output Shape:", output.shape);

  const batchSize = numProducts; // Örnek sayısı burada belirlenir
  const epochs = 50;

  console.log({ epochs, batchSize });
  console.log(input.print(), "Input Shape:");
  console.log(output.print(), "Output Shape:");

  for (let epoch = 0; epoch < epochs; epoch++) {
    for (let i = 0; i < ratings.length; i += batchSize) {
      const remainingData = Math.min(batchSize, ratings.length - i);
      const batchInput = input.slice([i, 0], [remainingData, input.shape[1]]);
      const batchOutput = output.slice(
        [i, 0],
        [remainingData, output.shape[1]]
      );
      console.log("Batch Input Shape:", batchInput.shape);
      console.log("Batch Output Shape:", batchOutput.shape);
      console.log(batchInput.print());
      console.log(batchOutput.print());
      await model.fit(batchInput, batchOutput, {
        epochs: 1,
        batchSize: remainingData,
      });
    }
  }

  await model.fit(input, output, { epochs, batchSize });
  const trainingPredictions = model.predict(input);
  console.log("Training Predictions:", trainingPredictions.dataSync());

  return model;
}

// Fonksiyon: Öneri skorlarını kullanarak ürünleri öner
async function recommendProducts(model, numProducts, originalIndices) {
  const allZeros = Array.from({ length: numProducts * 2 }, () => 0);
  console.log(allZeros, " bilal");

  // Giriş tensorünü 2D olarak oluştur
  const inputTensor = tf.tensor2d(allZeros, [numProducts, 2]);

  // Modelin beklendiği şekli kontrol et
  console.log("Expected Input Shape:", model.inputShape);
  console.log("Provided Input Shape:", inputTensor.shape);

  // Modeli kullanarak tahmin yap
  const userInterest = await model.predict(inputTensor);

  const sortedIndices = Array.from(Array(numProducts).keys())
    .map((productIndex) => ({
      originalIndex: originalIndices[productIndex],
      interest: userInterest.dataSync()[productIndex],
    }))
    .sort((a, b) => b.interest - a.interest);

  const recommendedProducts = sortedIndices.map((item) => item.originalIndex);

  return recommendedProducts;
}

async function runRecommendationForUser(userID) {
  try {
    // Kullanıcının ziyaret ettiği ürünleri al
    const user = await AllVisitedProductbyUserID(userID);
    const userData = user.data;

    // Modeli eğit
    const trainedModel = await trainModel(userData);

    const scores = recommendationScore(userData);

    const sortedScores = Object.keys(scores)
      .sort((a, b) => scores[b] - scores[a])
      .slice(0, 6);

    console.log(sortedScores, scores, userData);

    // Öneri skorlarını kullanarak en yüksek puan alan 6 ürünü al
    const topRecommendationss = Object.keys(recommendationScores[userID])
      .sort(
        (a, b) =>
          recommendationScores[userID][b] - recommendationScores[userID][a]
      )
      .slice(0, 6);
  } catch (error) {
    console.error("Error:", error);
  }
}

// export default  function recommendation(userID) {

//   async function recommendationScore() {

//     const user = await AllVisitedProductbyUserID(userID);
//     const userData = user.data;

//     const recommendationScores = {};

//     userData.forEach((visitedProduct) => {
//       const userVisitCount = visitedProduct.userVisitCount;
//       const totalVisitCount = visitedProduct.totalVisitCount;

//       const score =
//         userVisitCount * 0.5 +
//         (userVisitCount / totalVisitCount) * 0.35 +
//         totalVisitCount * 0.15;

//       recommendationScores[visitedProduct._id] = score;
//     });

//     return recommendationScores;
//   }

//   const scores = recommendationScore(userID);
//   console.log(scores)

//   const sortedScores = Object.keys(scores)
//     .sort((a, b) => scores[b] - scores[a])
//     .slice(0, 6);

//   console.log(sortedScores);

//   return sortedScores;
// }
