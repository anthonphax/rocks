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
            <div>
            <Box className='dash-display'> 

                <Box
                sx={{
                    display: 'inline-block',
                    p: 1,
                    m: 1,
                }} 
                >
                    <div className='option-div'>
                        <h1 style={{margin: '20% 0 0 0'}} className='option-title'>
                            Escolha uma Usina
                        </h1>
                        {usinas.usinas.map((usinas) => {
                            return <button 
                                style={{
                                    color: 'white', 
                                    backgroundColor:'black', 
                                    borderRadius: '8%', 
                                    margin: '5px 5px 5px 5px',
                                    fontSize: '21px',
                                    padding: '15px 15px',
                                    boxShadow: '10px 10px 0 0 '
                                }}
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
                    <Box>
                        <Previsao />
                    </Box>
                        <Box 
                        sx={{
                            display: 'inline-block',
                            p: 1,
                            m: 1,
                        }} 
                        width={"350%"}
                        >
                        <div>
                            <h3>Gráfico de Série Temporal</h3>
                            <Box >
                                <Chart />
                            </Box>
                        </div> 
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