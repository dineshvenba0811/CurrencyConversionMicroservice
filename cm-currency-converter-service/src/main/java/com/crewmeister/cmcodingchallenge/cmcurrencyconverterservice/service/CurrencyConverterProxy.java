package com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.service;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.model.CurrencyConverter;


@FeignClient(name="currency-exchange",url="localhost:8081")
public interface CurrencyConverterProxy {
	// trigger the call to exchange service
	@GetMapping("/currency-exchange/getExchangeRateParticularDay/from/{fromDate}/CurrencyOption/{selectedCurrencyOption}")
	public List<CurrencyConverter> getExchangeRateParticularDay(@PathVariable String fromDate,@PathVariable String selectedCurrencyOption);
}
	