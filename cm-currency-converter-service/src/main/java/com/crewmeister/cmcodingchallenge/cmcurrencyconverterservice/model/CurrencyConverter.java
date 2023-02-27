package com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice.model;

import java.time.LocalDate;

public class CurrencyConverter {

	private Long id;
	private String currencyFrom;
	private String currencyTo;
	private double exchangeRate;
	private LocalDate dateCreated;
	private double convertedValue;
	
	public CurrencyConverter(Long id, String currencyFrom, String currencyTo, double exchangeRate,
			LocalDate dateCreated, double convertedValue) {
		super();
		this.id = id;
		this.currencyFrom = currencyFrom;
		this.currencyTo = currencyTo;
		this.exchangeRate = exchangeRate;
		this.dateCreated = dateCreated;
		this.convertedValue = convertedValue;
	}

	public CurrencyConverter() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCurrencyFrom() {
		return currencyFrom;
	}

	public void setCurrencyFrom(String currencyFrom) {
		this.currencyFrom = currencyFrom;
	}

	public String getCurrencyTo() {
		return currencyTo;
	}

	public void setCurrencyTo(String currencyTo) {
		this.currencyTo = currencyTo;
	}

	public double getExchangeRate() {
		return exchangeRate;
	}

	public void setExchangeRate(double exchangeRate) {
		this.exchangeRate = exchangeRate;
	}

	public LocalDate getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}

	public double getConvertedValue() {
		return convertedValue;
	}

	public void setConvertedValue(double convertedValue) {
		this.convertedValue = convertedValue;
	}
	

}
