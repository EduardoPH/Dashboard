import { Container, LargeContainer, Fullbox, Logo } from "./styled";
import React from "react";
import Mensagem from './text-value/index'


function BoxTwoLines(props) {
  const msg = props.msg;

  return (
    <Container>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="pt2-components">
        <div className="grafico"> {props.grafico} </div>
        <div> 
          {msg.map(i => {
            return(
              <Mensagem tittle={i.tipo} value={i.qtd}/>
            )
          })}
        </div>
      </div>
    </Container>
  );
}

function BoxTwoLines2(props) {
  const msg = props.msg;
  return (
    <Container>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="pt2-components">
        <div className="grafico"> {props.grafico} </div>
        <div>
          <Mensagem tittle="Expectativa:" value={msg.expectativa}/>
          <Mensagem tittle="Realidade" value={msg.realidade}/>
        </div>
      </div>
    </Container>
  );
}

function LargeBox(props) {
  return (
    <LargeContainer>
      <div className="pt1"> 
        <div className="tittle"> {props.tittle} </div>
      </div>
      <div className="barra"/>
      <div className="grafico"> {props.grafico} </div>
    </LargeContainer>
  )
}

function BoxFull(props) {
  return (
    <Fullbox>
      <div className="tittle"> {props.tittle} </div>
      <div className="barra"/>
      <div className="pt2-components">
        <div className="infos"> 
          <div className="noGraphic-Info"> {props.info} </div>
        </div>[]
      </div>
    </Fullbox>
  )
}

export { BoxTwoLines, LargeBox, BoxFull, BoxTwoLines2 }