The currency coversion coding challenge project is developed using Spring boot 3.0.2

The port configurations:

naming-server         	= 8761
currency-exchange 	=8081
currency-conversion=8080
api-gateway	=8765

urls :

As a client, I want to get a list of all available currencies

	http://localhost:8081/currency-exchange/getAllCurrencies 

As a client, I want to get all EUR-FX exchange rates at all available dates as a collection

	http://localhost:8081/currency-exchange/getExchangeRateForAllAvailableDates/from/2023-01-01/to/2023-01-08/CurrencyOption/AUD

As a client, I want to get the EUR-FX exchange rate at particular day

	http://localhost:8081/currency-exchange/getExchangeRateParticularDay/from/2023-01-01/CurrencyOption/AUD

As a client, I want to get a foreign exchange amount for a given currency converted to EUR on a particular day

	http://localhost:8080/currency-converter/from/2023-01-05/CurrencyOption/AUD/givenAmount/10


React Frontend :

http://localhost:3000/index


we have collected data from Bundesbank Daily Exchange Rates - from Jan-01-2023 to Jan-07-2023.