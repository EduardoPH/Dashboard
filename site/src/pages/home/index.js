import { Container } from './styled'
import { IncporCurso, IncporDia, Conheceu, AgendadosHoje } from '../../components/graficos'
import { BoxTwoLines, BoxNoGraphic, LargeBox } from '../../components/box-values/index'


export default function Home() {
    return (
        <Container>
            <div className="left-menu">
                <img src="/assets/img/grafico.svg" alt="dashboard" />
                <img src="/assets/img/settings.svg" alt="settings" />
            </div>
            <div className="right-container">
                <div className="tittle-refresh">
                    <h1> Dashboard </h1>
                    <button> <img src="/assets/img/refreshIcon.png" alt="refresh" /> </button>
                </div>
                <div className="principal-box">
                    <h2> Análises </h2>
                    <div className="agp-box-top">
                        <BoxTwoLines tittle="Agendados Hoje" grafico={<AgendadosHoje />} tittleOne="Expectativa:" valueOne="15" tittleTwo="Realidade:" valueTwo="5"/>
                        <BoxNoGraphic tittle="Não compareceram" info="33" />
                        <BoxNoGraphic tittle="Prova Presencial" info="12" />
                        <BoxTwoLines tittle="Como Conheceu" grafico={<Conheceu /> } tittleOne="Familia:" valueOne="34" tittleTwo="Amigos:" valueTwo="24" />
                    </div>
                    <div className="agp-box-low"> 
                        <LargeBox tittle="Inscrições por Curso" grafico={<IncporCurso />} />
                        <LargeBox tittle="Inscrições por Dia" grafico={<IncporDia /> }/>
                    </div>
                </div>
            </div>
        </Container>
    )
}