package com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.service;

import java.util.List;

import com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.dto.CurrencyExchange;

public interface CurrencyExchangeService {

	public List<String> getAllCurrencies();
	
	public List<CurrencyExchange> getExchangeRatesforAllDates( String fromDate,String toDate, String selectedCurrencyOption);
	
	public List<CurrencyExchange> getExchangeRatesOnParticularDate(String fromDate, String selectedCurrencyOption);
	
	
}
