import { Container } from "./styled";
import React from "react";
import Mensagem from './text-value/index'

export default function index(props) {
  return (
    <Container>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="pt2-components">
        <div className="grafico"> {props.grafico} </div>
        <div className="infos"> 
        opaaaa
            <Mensagem tittle={props.tittleOne} value={props.valueOne}/> 
            <Mensagem tittle={props.tittleTwo} value={props.valueTwo}/> 
        </div>

      </div>
    </Container>
  );
}
