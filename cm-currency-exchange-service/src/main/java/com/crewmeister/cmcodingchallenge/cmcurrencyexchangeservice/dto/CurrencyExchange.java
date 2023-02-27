package com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CurrencyExchange {
	@Id
	private Integer id;
	
	@Column(name = "currencyFrom")
	private String currencyFrom;
	
	@Column(name = "currencyTo")
	private String currencyTo;
	
	@Column(name = "exchangeRate")
	private double exchangeRate;
	
    @Column(name = "dateCreated")
    private LocalDate dateCreated;

	public CurrencyExchange() {
		
	}

	public CurrencyExchange(Integer id, String currencyFrom, String currencyTo, double exchangeRate,
			LocalDate dateCreated) {
		super();
		this.id = id;
		this.currencyFrom = currencyFrom;
		this.currencyTo = currencyTo;
		this.exchangeRate = exchangeRate;
		this.dateCreated = dateCreated;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	

	
	
	
}
