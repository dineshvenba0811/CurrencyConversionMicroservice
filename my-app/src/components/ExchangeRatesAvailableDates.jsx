import React, {useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { retrieveExchangeRatesOnAvailableDates } from './api/CurrencyExchangeService'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import {Formik, Form, Field, ErrorMessage} from 'formik';

function ExchangeRatesAvailableDates (props){

const [fromDate, setfromDate] = useState(new Date());
const [toDate, settoDate] = useState(new Date());
const [preview, setPreview] = useState(false);
const [selectedCurrencyOption, setSelectedCurrencyOption] = useState('All');
const [exchangeRates, setExchangeRates] = useState([]);

function onSubmit(values){
        retrieveExchangeRatesOnAvailableDates(values.fromDate,values.toDate,values.selectedCurrencyOption).then(response => {
            setExchangeRates(response.data)
            setPreview(true)
        }
        )
            .catch(error => console.log(error))
}


function validate(values){
    let errors = { }
        // check the dates
        if (!((new Date(values.fromDate) > new Date("2023-01-01")) && (new Date(values.fromDate) < new Date("2023-01-08")))) {
          // set date error validation true 
          if (!((new Date(values.toDate) > new Date("2023-01-01")) && (new Date(values.toDate) < new Date("2023-01-08")))) {
            setPreview(false)
            errors.fromDate = 'Enter a date between 2023-01-01 to 2023-01-08'
          }
          
        } 
        return errors
}

return ( <div>

<Container> 
<p>  As a client, I want to get all EUR-FX exchange rates at all available dates as a collection  ( Data available only from Jan-01-2023 to Jan-07-2023 ) </p>


<Formik  initialValues={ { fromDate,toDate,selectedCurrencyOption } } 
enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}>

                        <Form>

                        <ErrorMessage 
                                name="fromDate"
                                component="div"
                                className = "alert alert-warning"
                            />

                        <Row >
                            <Col xs lg="4">
                                <fieldset className="form-group">
                                    <label>Date</label>
                                    <Field type="date" className="form-control" name="fromDate" 
                                    value={fromDate}
                                    onChange={(e) => setfromDate(e.target.value)}  />
                                </fieldset>
                                <br/>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs lg="4">
                            <fieldset className="form-group">
                                <label>Date</label>
                                <Field type="date" className="form-control" name="toDate" 
                                value={toDate}
                                onChange={(e) => settoDate(e.target.value)}  />
                            </fieldset>
                            <br/>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs lg="4">
                            <fieldset className="form-group">
                                <label>Currency Selection</label>
                                    <select className="form-control"
                                    name="selectedCurrencyOption"
                                    value={selectedCurrencyOption} onChange={e => setSelectedCurrencyOption(e.target.value)}>
                                    <option value="All">All</option>
                                        { 
                                            props.currencyData && props.currencyData.map ( currencies => {
                                            return  <option value={currencies}>{currencies}</option> } )
                                        }
                                    </select>
                            </fieldset>
                            <br/>
                            </Col>
                        </Row>
                        <Row >
                            <Col xs lg="4">
                            <Button variant="success" type="submit"  >Submit</Button>
                            </Col>
                        </Row>
                        </Form>
                        </Formik>
<div>{preview  ? <div>
                            <table className="table">
                                                <thead>
                                                        <tr>
                                                            <th>Currency From</th>
                                                            <th>Currency To</th>
                                                            <th>Exchange Rate</th>
                                                            <th>Date</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {
                                                            exchangeRates.map(
                                                                exchangeRatesObj => (
                                                                    <tr key={exchangeRatesObj.id}>
                                                                        <td>{exchangeRatesObj.currencyFrom}</td>
                                                                        <td>{exchangeRatesObj.currencyTo}</td>
                                                                        <td>{exchangeRatesObj.exchangeRate}</td>
                                                                        <td>{exchangeRatesObj.dateCreated}</td>
                                                                    </tr>
                                                                )
                                                            )
                                                        }
                                                 </tbody>

                            </table>
                  
                        </div> : <div> </div> } </div>
                        </Container>
            </div>
            )
        }
        export  default ExchangeRatesAvailableDates;
