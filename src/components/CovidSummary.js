import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

const CovidSummary = (props) => {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;

    return(
        <div>
            <div>
                <h1 style={{
                    textTransform: 'capitalize'
                }}>{country === '' ? 'World Wide Corona Report' : country}</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '15px'
                }}>
                    <div style={{
                        borderBottom: '2px solid blue'
                    }}>
                        <Card>
                            <span>Total Confirmed</span><br />
                            <span>{
                                    <NumberFormat 
                                    value={totalConfirmed}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    />
                                }
                            </span> 
                        </Card>
                    </div>
                    
                    <div style={{
                        borderBottom: '2px solid green'
                    }}>
                        <Card>
                            <span>Total Recovered</span><br />
                            <span>{
                                    <NumberFormat 
                                    value={totalRecovered}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    />
                                }
                            </span>
                        </Card>
                    </div>
                    
                    <div style={{
                        borderBottom: '2px solid red'
                    }}>
                        <Card>
                            <span>Total Deaths</span><br />
                            <span>{
                                    <NumberFormat 
                                    value={totalDeaths}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    />
                                }
                            </span>
                        </Card>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CovidSummary;