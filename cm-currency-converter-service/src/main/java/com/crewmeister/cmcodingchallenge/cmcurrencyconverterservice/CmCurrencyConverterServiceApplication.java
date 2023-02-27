package com.crewmeister.cmcodingchallenge.cmcurrencyconverterservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CmCurrencyConverterServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmCurrencyConverterServiceApplication.class, args);
	}

}
