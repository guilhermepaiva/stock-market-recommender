export function stockPriceGenerator(stockSymbol: string, inputdate: string ): string {
    return (Math.random() * 100).toFixed(2);
}

export function socialMediaCountGenerator(stockSymbol: string, socialMedia: string): number {
    return Math.floor(Math.random() * 100);
}

export function recommendationAlgorithm(stockPrice: number, socialMediaCount: number): string {
    
    let result = Math.random();
    
    if (result > stockPrice) {
        return "Buy";
    } else if (stockPrice == socialMediaCount) {
        return "Hold";
    }
     else {
        return "Sell";
     }

}

