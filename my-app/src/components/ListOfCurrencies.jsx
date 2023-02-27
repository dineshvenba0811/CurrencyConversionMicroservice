import React from "react";




function ListOfCurrencies (props){
// attrition section


return ( <div>
 <table className="table">
                    <thead>
                            <tr>
                                <th>Currencies</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                         props.currencyData && props.currencyData.map(
                            currencyDataObj => (
                                <tr>
                                    <td>{currencyDataObj}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
                  
            </div>
            )
        }
        export  default ListOfCurrencies;
