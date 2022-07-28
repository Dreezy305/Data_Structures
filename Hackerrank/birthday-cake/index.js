function birthdayCakeCandles(candles) {
  let sort1 = candles.sort((a, b) => a - b);
  let maxValue = Math.max.apply(null, sort1);
  let candleArray = [];
  const iterator = candles.keys();

  for (const key of iterator) {
    let a = candles[key];
    if (a === maxValue) {
      candleArray.push(a);
    }
  }

  const totalHeight = candleArray.length;
  console.log(totalHeight);
  return totalHeight;
}

birthdayCakeCandles([3, 2, 1, 3]);

/**
 * You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 */
