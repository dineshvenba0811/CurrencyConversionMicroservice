import React, { useEffect,useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExchangeRatesAvailableDates from './ExchangeRatesAvailableDates';
import ExchangeRatesParticularDay from './ExchangeRatesParticularDay';
import ListOfCurrencies from './ListOfCurrencies';
import CurrencyConversion from './CurrencyConversion';
import { retrieveAllCurrencies } from './api/CurrencyExchangeService'
import { Container } from "react-bootstrap";

function Indexpage(){

  useEffect ( () => getAllCurrencies(), [])
  const[currencyData, setCurrencyData] = useState([])
  
  function getAllCurrencies(){
      retrieveAllCurrencies()
      .then(response => {
          console.log(response)
          setCurrencyData(response.data)
      }
      )
          .catch(error => console.log(error))
  }

    return (
        <div className="App">
          <header >
          < h2> Currency Conversion</h2>
          </header>
     <hr/>

     <Container> 
          <Tabs defaultActiveKey="UserStoryOne" id="uncontrolled-tab-example" className="mb-3">
            
            <Tab eventKey="UserStoryOne" title="UserStoryOne">
                <p> Requirement : As a client, I want to get a list of all available currencies</p>
                <ListOfCurrencies currencyData={currencyData}></ListOfCurrencies>
            </Tab>

            <Tab eventKey="UserStoryTwo" title="UserStoryTwo">
                <ExchangeRatesAvailableDates currencyData={currencyData}> </ExchangeRatesAvailableDates>
            </Tab>
    
            <Tab eventKey="UserStoryThree" title="UserStoryThree" >
              <ExchangeRatesParticularDay currencyData={currencyData}> </ExchangeRatesParticularDay>
            </Tab>
    
            <Tab eventKey="UserStoryFour" title="UserStoryFour" >
              <CurrencyConversion currencyData={currencyData}></CurrencyConversion>
            </Tab>
    
        </Tabs>
    
        </Container> 
        </div>
      );

        }
        export  default Indexpage;
