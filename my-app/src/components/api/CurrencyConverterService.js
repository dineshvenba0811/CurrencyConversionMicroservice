import { apiClient } from './CurrencyConversionApiClient'

export const retrieveCurrencyConversion= (fromDate,selectedCurrencyOption,amount) => apiClient.get(`/currency-converter/from/${fromDate}/CurrencyOption/${selectedCurrencyOption}/givenAmount/${amount}`)