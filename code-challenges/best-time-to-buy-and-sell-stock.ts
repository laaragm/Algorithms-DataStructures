// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
    let profit = 0;
    let buyingPrice = prices[0];

    for (const currentPrice of prices) {
        if (currentPrice < buyingPrice) {
            buyingPrice = currentPrice;
        } else {
            const currentProfit = currentPrice - buyingPrice;
            profit = Math.max(currentProfit, profit);
        }
    }

    return profit;
}
