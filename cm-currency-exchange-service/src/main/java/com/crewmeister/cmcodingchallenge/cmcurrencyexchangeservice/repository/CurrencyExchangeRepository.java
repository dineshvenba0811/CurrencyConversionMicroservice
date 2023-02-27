package com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.crewmeister.cmcodingchallenge.cmcurrencyexchangeservice.dto.CurrencyExchange;

@Repository
public interface CurrencyExchangeRepository extends JpaRepository<CurrencyExchange, Integer> {
	
	 @Query("SELECT DISTINCT a.currencyFrom FROM CurrencyExchange a")
	 public List<String> findDistinctCurrency();
	 
	public List<CurrencyExchange> findAllByCurrencyFromAndDateCreatedBetween(String selectedCurrencyOption,LocalDate startDate,LocalDate endDate);
	
	public List<CurrencyExchange> findAllByDateCreatedBetween(LocalDate startDate,LocalDate endDate);
	
	public List<CurrencyExchange> findAllByCurrencyFromAndDateCreated(String selectedCurrencyOption,LocalDate startDate);
	
	public List<CurrencyExchange> findAllByDateCreated(LocalDate startDate);
}
