import { Container, LargeContainer } from "./styled";
import React from "react";
import Mensagem from './text-value/index'

function BoxTwoLines(props) {
  return (
    <Container>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="pt2-components">
        <div className="grafico"> {props.grafico} </div>
        <div> 
            <Mensagem tittle={props.tittleOne} value={props.valueOne}/> 
            <Mensagem tittle={props.tittleTwo} value={props.valueTwo}/> 
        </div>
      </div>
    </Container>
  );
}

function BoxNoGraphic(props) {
  return (
    <Container>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="pt2-components">
        <div className="infos"> 
          <div className="noGraphic-Info"> {props.info} </div>
        </div>
      </div>
    </Container>
  )
}

function LargeBox(props) {
  return (
    <LargeContainer>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="grafico"> {props.grafico} </div>
    </LargeContainer>
  )
}

export { BoxTwoLines, BoxNoGraphic, LargeBox }