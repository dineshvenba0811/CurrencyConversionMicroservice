import { apiClient } from './CurrencyExchangeApiClient'

export const retrieveAllCurrencies= () => apiClient.get(`/currency-exchange/getAllCurrencies`)

export const retrieveExchangeRatesOnAvailableDates= (fromDate,toDate,selectedCurrencyOption) => apiClient.get(`/currency-exchange/getExchangeRateForAllAvailableDates/from/${fromDate}/to/${toDate}/CurrencyOption/${selectedCurrencyOption}`)

export const retrieveExchangeRatesOnParticularDay= (fromDate,selectedCurrencyOption) => apiClient.get(`/currency-exchange/getExchangeRateParticularDay/from/${fromDate}/CurrencyOption/${selectedCurrencyOption}`)