package com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.dto.CurrencyExchange;
import com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.repository.CurrencyExchangeRepository;

@Service
public class CurrencyExchangeServiceImpl implements CurrencyExchangeService {

	@Autowired
	private CurrencyExchangeRepository repo;
	
	@Override
	public List<String> getAllCurrencies() {
		// TODO Auto-generated method stub
		return repo.findDistinctCurrency();
	}

	@Override
	public List<CurrencyExchange> getExchangeRatesforAllDates (String fromDate,String toDate, String selectedCurrencyOption) {
		// TODO Auto-generated method stub
		if(selectedCurrencyOption.equalsIgnoreCase("all")) {
			return repo.findAllByDateCreatedBetween(LocalDate.parse(fromDate),LocalDate.parse(toDate));
		}else {
			return repo.findAllByCurrencyFromAndDateCreatedBetween(selectedCurrencyOption,LocalDate.parse(fromDate),LocalDate.parse(toDate));
		}
	}

	@Override
	public List<CurrencyExchange> getExchangeRatesOnParticularDate(String fromDate, String selectedCurrencyOption) {
		// TODO Auto-generated method stub
		if(selectedCurrencyOption.equalsIgnoreCase("all")) {
			return repo.findAllByDateCreated(LocalDate.parse(fromDate));
		}else {
			return repo.findAllByCurrencyFromAndDateCreated(selectedCurrencyOption,LocalDate.parse(fromDate));
		}
		
	}

	

}
