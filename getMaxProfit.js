// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// getMaxProfit(stockPricesYesterday);
// -> 6 (buying for $5 and selling for $11)
// No "shorting" - you must buy before you sell.

var getMaxProfit = function (stockPricesYesterday) {

  if (stockPricesYesterday.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }
  // set initial min price
  var minPrice = stockPricesYesterday[0];
  // set initial max profit
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  var potentialProfit;

  for (var i = 0; i < stockPricesYesterday.length; i++) {
    // selling starts from i = 1
    if (i === 0) {
      continue;
    }
    // calculate profit at i
    potentialProfit = stockPricesYesterday[i] - minPrice;
    // update max profit
    maxProfit = Math.max(maxProfit, potentialProfit);
    // update min price for next transaction
    minPrice = Math.min(minPrice, stockPricesYesterday[i]);
  }

  return maxProfit;
};
