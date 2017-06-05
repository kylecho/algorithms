const buyAndSellStockOnce = (prices) => {
  let minPriceSoFar = prices && prices[0]
  let maxProfit = 0

  for (let price of prices) {
    let profitSellToday = price - minPriceSoFar
    maxProfit = Math.max(profitSellToday, maxProfit)
    minPriceSoFar = Math.min(minPriceSoFar, price)
  }

  return maxProfit
}

console.log(buyAndSellStockOnce([310, 315, 275, 295, 260, 270, 290, 230, 255, 250]))
