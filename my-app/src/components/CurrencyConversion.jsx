import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { retrieveCurrencyConversion } from './api/CurrencyConverterService'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import {Formik, Form, Field, ErrorMessage} from 'formik'

function CurrencyConversion(props){

    const [fromDate, setfromDate] = useState(new Date());   
    const [selectedCurrencyOption, setSelectedCurrencyOption] = useState('All');
    const [amount, setAmount] = useState(0);
    const [currencyConversion, setCurrencyConversion] = useState([]);
    const [viewResults, setViewResults] = useState(false);

function onSubmit(values){
    console.log("on sbumit ")
    console.log(values.fromDate)
        retrieveCurrencyConversion(values.fromDate,values.selectedCurrencyOption,values.amount)
        .then(response => {
        setCurrencyConversion(response.data) 
        setViewResults(response.data)
    }
    )
        .catch(error => console.log(error))
    
    
}

function validate(values){
    let errors = { }
    console.log("date validation")
    console.log(values)
        // check the dates
        if (!((new Date(values.fromDate) > new Date("2023-01-01")) && (new Date(values.fromDate) < new Date("2023-01-08")))) {
          // set date error validation true 
          console.log("date validation 1")
          errors.fromDate = 'Enter a date between 2023-01-01 to 2023-01-08'
        } 
        return errors
}


return ( <div>
    <Container> 
<p>  As a client, I want to get a foreign exchange amount for a given currency converted to EUR on a particular day </p>

<Formik  initialValues={ { fromDate, selectedCurrencyOption,amount } } 
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
                            </Col>
                        </Row>
                            <br/>


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
                            </Col>
                        </Row>
                            <br/>

                            <Row >
                            <Col xs lg="4">
                            <fieldset className="form-group">
                                <label>Amount  / Quantity</label>
                                <Field type="number" className="form-control" name="amount" 
                                value={amount} 
                                onChange={e => setAmount(e.target.value)}  />
                            </fieldset>
                            </Col>
                        </Row>
                            <br/>
                            <Button variant="success" type="submit"  >Submit</Button>
                        </Form>
                        </Formik>

                        <div>{viewResults  ? <div>             
                            <table className="table">
                                                <thead>
                                                        <tr>
                                                            <th>Currency From</th>
                                                            <th>Currency To</th>
                                                            <th>Exchange Rate</th>
                                                            <th>Conversion Value (in Euros)</th>
                                                            <th>Date</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {
                                                        currencyConversion &&  currencyConversion.map(
                                                                currencyConversionObj => (
                                                                    <tr key={currencyConversionObj.id}>
                                                                        <td>{currencyConversionObj.currencyFrom}</td>
                                                                        <td>{currencyConversionObj.currencyTo}</td>
                                                                        <td>{currencyConversionObj.exchangeRate}</td>
                                                                        <td>{currencyConversionObj.convertedValue}</td>
                                                                        <td>{currencyConversionObj.dateCreated}</td>
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
        export  default CurrencyConversion;
