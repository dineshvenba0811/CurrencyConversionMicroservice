package com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.service;

import java.util.List;

import com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.model.CurrencyConverter;

public interface CurrencyConverterService {

		public List<CurrencyConverter> getCurrencyConvertedValues(String fromDate,String selectedCurrencyOption,double amount);
}
