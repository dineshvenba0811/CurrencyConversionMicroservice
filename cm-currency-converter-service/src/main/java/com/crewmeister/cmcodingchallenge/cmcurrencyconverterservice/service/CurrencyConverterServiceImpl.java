package com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.service;

import java.text.DecimalFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.model.CurrencyConverter;

@Service
public class CurrencyConverterServiceImpl implements CurrencyConverterService {
	@Autowired
	private CurrencyConverterProxy proxy;
	@Override
	public List<CurrencyConverter> getCurrencyConvertedValues(String fromDate,String selectedCurrencyOption,double amount) {
		// TODO Auto-generated method stub
		// get the exchange rates from the currency exchange service
		// multiply given amount value with the exchange rate.
		List<CurrencyConverter> currencyExchangeResultList=proxy.getExchangeRateParticularDay(fromDate,selectedCurrencyOption);
		for(int index=0;index<currencyExchangeResultList.size();index++) {
			 double convretedamount=currencyExchangeResultList.get(index).getExchangeRate()*amount;
			 currencyExchangeResultList.get(index).setConvertedValue(RoundTo2Decimals(convretedamount));
		 }
		return currencyExchangeResultList;
	}
	
	// rounding of converted values into two decimal places
	private double RoundTo2Decimals(double val) {
        DecimalFormat df2 = new DecimalFormat("###.##");
      return Double.valueOf(df2.format(val));
	}

}
