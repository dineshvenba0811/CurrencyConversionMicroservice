package com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.model.CurrencyConverter;
import com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.service.CurrencyConverterServiceImpl;

@RestController
@CrossOrigin()
public class CurrencyConverterController {
	@Autowired
	private CurrencyConverterServiceImpl serviceImpl;
	
	@GetMapping("/currency-converter/from/{fromDate}/CurrencyOption/{selectedCurrencyOption}/givenAmount/{amount}")
	public List<CurrencyConverter> getConvretedValues(@PathVariable String fromDate,@PathVariable String selectedCurrencyOption,
			@PathVariable double amount) {
		return serviceImpl.getCurrencyConvertedValues(fromDate,selectedCurrencyOption,amount);
	}
	
	

}
