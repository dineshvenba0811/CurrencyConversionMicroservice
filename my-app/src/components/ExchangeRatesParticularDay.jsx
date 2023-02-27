import React, {useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { retrieveExchangeRatesOnParticularDay } from './api/CurrencyExchangeService'
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import {Formik, Form, Field, ErrorMessage} from 'formik';


function ExchangeRatesParticularDay(props){

const [fromDate, setfromDate] = useState(new Date());
const [selectedCurrencyOption, setSelectedCurrencyOption] = useState('All');
const [previewParticularDay, setPreviewParticularDay] = useState(false);
const [exchangeRatesParticularDay, setExchangeRatesParticularDay] = useState([]);

function onSubmit(values){
    retrieveExchangeRatesOnParticularDay(values.fromDate,values.selectedCurrencyOption)
    .then(response => {
        console.log(response.data)
        setExchangeRatesParticularDay(response.data)
        setPreviewParticularDay(true)
    }
    )
        .catch(error => console.log(error))
}

function validate(values){
    let errors = { }
        // check the dates
        if (!((new Date(values.fromDate) > new Date("2023-01-01")) && (new Date(values.fromDate) < new Date("2023-01-08")))) {
          // set date error validation true 
          setPreviewParticularDay(false)
          errors.fromDate = 'Enter a date between 2023-01-01 to 2023-01-08'
        } 
        return errors
}

return ( <div>
<Container> 
<p> As a client, I want to get the EUR-FX exchange rate at particular day </p>

<Formik  initialValues={ { fromDate, selectedCurrencyOption } } 
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
                           
                            <Button variant="success" type="submit"  >Submit</Button>
                        </Form>
                        </Formik>

 <div>{previewParticularDay  ? <div>
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
                                                            exchangeRatesParticularDay.map(
                                                                exchangeRatesParticularDayObj => (
                                                                    <tr key={exchangeRatesParticularDayObj.id}>
                                                                        <td>{exchangeRatesParticularDayObj.currencyFrom}</td>
                                                                        <td>{exchangeRatesParticularDayObj.currencyTo}</td>
                                                                        <td>{exchangeRatesParticularDayObj.exchangeRate}</td>
                                                                        <td>{exchangeRatesParticularDayObj.dateCreated}</td>
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
        export  default ExchangeRatesParticularDay;
