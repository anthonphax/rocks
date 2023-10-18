import React, { Component } from 'react'
import Box, { BoxProps } from '@mui/material/Box';
import usinas from "../data/usina.json";
import Chart from './Chart';
import Previsao from './Previsao';
import Weight from './Weight';


export default class Mqboard extends Component {
    getlocation = (button) => {
        console.log("Pressionado")
    }
    move = () => {
                console.log("botão pressionado")
                };


    render() {
        return (
            <> 
            <div className='dash'>
            <Box className='dash-display'> 
                <Box
                sx={{
                    display: 'inline',
                    p: 1,
                    m: 1,
                }} 
                >
                    <div className='option-div'>
                        <h1 className='option-title'>
                            Escolha uma Usina
                        </h1>
                        {usinas.usinas.map((usinas) => {
                            return <button 
                                    onClick={() => {console.log(usinas.cidade)}} 
                                    key={usinas.id} 
                                    value={usinas.nome} 
                                    className='option-plant'>
                                        {usinas.nome}
                                    </button>
                        })}
                    </div>
                </Box>
                <Box
                sx={{
                    display: 'flex',
                    p: 1,
                    m: 1,
                }} 
                >
                    <Box 
                        sx={{
                            display: 'inline',
                            p: 1,
                            m: 1,
                        }} 
                        width={"100%"}
                    >
                        <div>
                            <h3>Gráfico de Série Temporal</h3>
                            <Box className="graphic-display">
                                <Chart />
                            </Box>
                        </div> 
                    </Box>
                <Box>
                    <Previsao />
                </Box>
                <Box className="peso">
                    <Weight />
                </Box>
                </Box>
            </Box>
            </div>
            
            </>
        )
    }
}