import React, { Component } from 'react'
import usinas from "../data/usina.json";
import Chart from './Chart';
import { useState, useEffect, setError } from 'react';


export default class Mqboard extends Component {
    getlocation = (button) => {
        console.log("Pressionado")
    }
    move = () => {
                console.log("botão pressionado")
                };

    grafico = () => {
    const [chartData, setChartData] = useState({});
    const [haveData, setHaveData] = useState(false);
    useEffect(() => { 
        const fetchData = async () => {
        try {
            const res = await fetch('/api');
            const data = await res.json();
            setChartData(data);
            setHaveData(true); // here, and importantly after the above setChartData call
        } catch(error) {
            setHaveData(false);
            setError(error);
        }
        }
        fetchData();
    }, []);}

    render() {
        return (
            <> 
                <div className='option-div'>
                <h1 className='option-title'>Escolha uma Usina</h1>
                
                    {usinas.usinas.map((usinas) => {
                        return <button 
                                onClick={() => {console.log(usinas.cidade)}} 
                                key={usinas.id} 
                                value={usinas.nome} 
                                className='option-plant'>
                                    {usinas.nome}
                                </button>
                    })}
                <form className='dashboard'>
                    
                </form>
                <h1>Gráfico de Série Temporal</h1>
                <Chart />
                    

                </div> 

                
            </>
        )
    }
}