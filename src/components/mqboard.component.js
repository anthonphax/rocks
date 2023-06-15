import React, { Component } from 'react'
import usinas from "../data/usina.json";

export default class Mqboard extends Component {
    getlocation = (button) => {
        console.log("apertado")
    }
    move = () => {
                console.log("botão pressionado")
                };
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

                    

                </div> 

                
            </>
        )
    }
}