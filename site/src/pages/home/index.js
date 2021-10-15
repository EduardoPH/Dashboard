import { Container } from './styled'
import { IncporCurso, IncporDia, Conheceu, AgendaramNaoVieram } from '../../components/graficos'
import { BoxTwoLines, BoxTwoLines2, BoxNoGraphic, LargeBox, BoxFull } from '../../components/box-values/index'
import { useEffect, useState } from 'react'
import Api from '../../service/api'

const api = new Api()

export default function Home() {

    const [dataAgendadosHoje, setDataAgendadosHoje] = useState(0);
    const [graficoConheceu, setGraficoConheceu] = useState([]);

    const [dateMin, setDateMin] = useState(new Date(2021, 9, 13).toISOString().split('T')[0]);
    const [dateMax, setDateMax] = useState(new Date().toISOString().split('T')[0]);
    const [agendaram, setAgendaram] = useState({});

    const [cursos, setCursos] = useState([]);

    const [cursosPorDia, setCursosPorDia] = useState([])

    const agendadosDoDia = async(data) => {
        let r = await api.agendadosDoDia(data);
        setDataAgendadosHoje(r.qtd);
    }

    const conhece = async() => {
        let r = await api.comoConheceu();
        setGraficoConheceu(r);
    }

    const agendaramNVieram = async() => {
        let r = await api.agendaramENaoVieram(dateMin, dateMax);
        setAgendaram(r);
    }

    const porCurso = async() => {
        let r = await api.inscPorCurso();
        setCursos(r);
    }

    const porDia = async() => {
        let r = await api.InscPorDia();
        setCursosPorDia(r);

    }

    useEffect(() => {
        porDia();
        porCurso();
        agendaramNVieram();
        agendadosDoDia(new Date().toISOString().split('T')[0])
        conhece();
    }, [])
    
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
                        <div className="full-box">
                            <input type="date" onChange={e => agendadosDoDia(e.target.value)}/>
                            <BoxFull tittle="Agendados do Dia" info={dataAgendadosHoje} />
                        </div>
                        <div className="full-box">
                            <div className="agp-input">
                                <div className="dts"> Data Minima: <input type="date" onChange={e => setDateMin(e.target.value)}/> </div> 
                                <div className="dts"> Data Máxima: <input type="date" onChange={e => setDateMax(e.target.value)}/></div> 
                                <button onClick={() => agendaramNVieram()}> <img style={{width: '2em', cursor: 'pointer'}} src="/assets/img/pesquisar.svg" alt=""/> </button>
                            </div>
                            {agendaram == {} ? <div> </div> : <BoxTwoLines2 tittle="Não Compareceram" grafico={ <AgendaramNaoVieram info={agendaram}/> } msg={agendaram} />}
                        </div>
                        
                        <div className="full-box" >
                            <div className="agp-input"> </div>
                            <BoxTwoLines tittle="Como Conheceu" grafico={<Conheceu info={graficoConheceu}/> } msg={graficoConheceu} />
                        </div>
                    </div>
                    <div className="agp-box-low">
                        <LargeBox tittle="Inscrições por Curso" grafico={<IncporCurso info={cursos} />} />
                        <LargeBox tittle="Inscrições por Dia" grafico={<IncporDia info={cursosPorDia} /> }/>
                    </div>
                </div>
            </div>
        </Container>
    )
}