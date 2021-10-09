import React from 'react'
import { Container } from './styled'
export default function index(props) {
    return (
        <Container> 
            <div className="text"> 
                <div className="text-tittle"> {props.tittle}</div>
                <div className="text-value"> {props.value}</div>
            </div>
        </Container>
    )
}
