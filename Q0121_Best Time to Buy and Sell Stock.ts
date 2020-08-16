let input: number[] = [7, 1, 5, 3, 6, 4]
let output: number = maxProfit3(input)

console.log(output)

//Brute force - O(n^2)
function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE
    let maxProfit = 0
    prices.map((currentPrice, index) => {
        for (let i = index + 1; i < prices.length; i++) {
            if (prices[i] - currentPrice > maxProfit)
                maxProfit = prices[i] - currentPrice
        }
    })

    return maxProfit
}

//One pass - O(n)
function maxProfit2(prices: number[]): number {
    let minPrice = Number.MAX_VALUE
    let maxProfit = 0
    prices.map((currentPrice, index) => {
        if (currentPrice < minPrice) minPrice = currentPrice
        else if (currentPrice - minPrice > maxProfit)
            maxProfit = currentPrice - minPrice
    })

    return maxProfit
}
