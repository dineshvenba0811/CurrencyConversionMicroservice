package com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.dto.CurrencyExchange;
import com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.service.CurrencyExchangeServiceImpl;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class CurrencyExchangeController {
	@Autowired
	private CurrencyExchangeServiceImpl serviceImpl;
	
	@GetMapping("/currency-exchange/getAllCurrencies")
	public List<String> getAllCurrencies() {
		System.out.println("hi bye");
		return  serviceImpl.getAllCurrencies();
	}
	
	@GetMapping("/currency-exchange/getExchangeRateForAllAvailableDates/from/{fromDate}/to/{toDate}/CurrencyOption/{selectedCurrencyOption}")
	public List<CurrencyExchange> getExchangeRateForAllAvailableDates(@PathVariable String fromDate,
			@PathVariable String toDate,@PathVariable String selectedCurrencyOption){
		return serviceImpl.getExchangeRatesforAllDates(fromDate, toDate, selectedCurrencyOption);
	}
	
	@GetMapping("/currency-exchange/getExchangeRateParticularDay/from/{fromDate}/CurrencyOption/{selectedCurrencyOption}")
	public List<CurrencyExchange> getAllExchangeRateParticularDay(@PathVariable String fromDate,@PathVariable String selectedCurrencyOption) {
		return serviceImpl.getExchangeRatesOnParticularDate(fromDate,selectedCurrencyOption);
	}
	
	
}
