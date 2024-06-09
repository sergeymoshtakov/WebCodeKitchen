/**
 * Retrieves the current exchange rate from the ExchangeRate-API for converting US Dollars (USD) to Swiss Francs (CHF).
 * @async
 * @function getExchangeRate
 * @returns {Promise<number>} A promise that resolves with the current exchange rate between USD and CHF.
 * @throws {Error} If there is an issue with fetching or parsing the exchange rate data.
 */
async function getExchangeRate() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        return data.rates.CHF;
    } catch (error) {
        throw new Error('Failed to fetch exchange rate data');
    }
}