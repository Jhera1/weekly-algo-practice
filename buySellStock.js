// Given an array where the i-th element is the price 
// of a given stock on day i, find the maximum 
// profit you can achieve by buying and then selling 
// the stock. You can only complete one transaction.

const buySellStock = dailyArr => {
  let minPrice = dailyArr[0]
  let maxProfit = 0
  for (let price of dailyArr) {
    minPrice = Math.min(price, minPrice)
    maxProfit = Math.max(price - minPrice, maxProfit)
  }  
  return maxProfit > 0 ? `the most I can make this week is ${maxProfit} rupies` : `No profiit possible this week`
}
console.log(buySellStock([7,3,5,9,2,5,8]))