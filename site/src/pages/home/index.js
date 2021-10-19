import { Container } from './styled'
import { IncporCurso, IncporDia, Conheceu, AgendaramNaoVieram } from '../../components/graficos'
import { BoxTwoLines, BoxTwoLines2, LargeBox, BoxFull } from '../../components/box-values/index'
import { useEffect, useState } from 'react';
import Api from '../../service/api';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
    


const api = new Api()

export default function Home() {
    const[total, setTotal] = useState(0)

    const [dataAgendadosHoje, setDataAgendadosHoje] = useState(0);
    const [graficoConheceu, setGraficoConheceu] = useState([]);

    const [dateMin, setDateMin] = useState(new Date(2021, 9, 13).toISOString().split('T')[0]);
    const [dateMax, setDateMax] = useState(new Date().toISOString().split('T')[0]);
    const [agendaram, setAgendaram] = useState({});

    const [cursos, setCursos] = useState([]);

    const [cursosPorDia, setCursosPorDia] = useState([]);

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  

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
        setTotal(r.reduce((prev, curr) => prev + curr.qtd, 0));
    }

    const porDia = async() => {
        let r = await api.InscPorDia();
        setCursosPorDia(r);
    }
    const responsive = {
    superLargeDesktop: {
         breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };
    const closeIcon = (
        <img src="/assets/img/icon-close.png" style={{width: '3em', outline: 'none'}} alt=""/>
      );

    
    useEffect(() => {
        porDia();
        porCurso();
        agendadosDoDia(new Date().toISOString().split('T')[0]);
        conhece();
        agendaramNVieram();
    }, [])
    
    return (
        <Container>
            <Modal 
                closeOnOverlayClick={true} 
                center={true} 
                open={open} 
                onClose={onCloseModal} 
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
                closeIcon={closeIcon}
            >
                <div className="modalConfig">
                    <Carousel
                        infinite={true} 
                        responsive={responsive}
                    >
                        <BoxTwoLines2 tittle="Não Compareceram" grafico={ <AgendaramNaoVieram info={agendaram}/> } msg={agendaram} /> 
                        <BoxTwoLines tittle="Como Conheceu" grafico={<Conheceu info={graficoConheceu}/> } msg={graficoConheceu} />
                        <LargeBox tittle={`Inscrições por Curso, total ( ${total} )`}  grafico={<IncporCurso info={cursos}/>} />         
                        <LargeBox tittle="Inscrições por Dia" grafico={<IncporDia info={cursosPorDia}/> }/>
                    </Carousel>
                </div>
            </Modal>
            <div className="right-container">
                <div className="tittle-refresh">
                    <h1> Dashboard </h1>
                    <button>  
                        <img src="https://www.freeiconspng.com/uploads/white-full-screen-icon-5.png"  onClick={onOpenModal} alt="settings" /> 
                    </button>
                </div>
                <div className="principal-box">
                    <h2> Análise </h2>
                    <div className="agp-box-top">
                        <div className="full-box">
                            <input type="date" onChange={e => agendadosDoDia(e.target.value)}/>
                            <BoxFull tittle="Agendados do Dia"  total={total} info={dataAgendadosHoje} />
                            
                        </div>
                        <div className="full-box">
                            <div className="agp-input">
                                <div className="dts"> Data Minima: <input type="date" onChange={e => setDateMin(e.target.value)}/> </div> 
                                <div className="dts"> Data Máxima: <input type="date" onChange={e => setDateMax(e.target.value)}/></div> 
                                <button onClick={() => agendaramNVieram()}> <img style={{width: '2em', cursor: 'pointer'}} src="/assets/img/pesquisar.svg" alt=""/> </button>
                            </div>
                            {agendaram === {} ? <div> </div> : <BoxTwoLines2 tittle="Não Compareceram" grafico={ <AgendaramNaoVieram info={agendaram}/> } msg={agendaram} />}
                        </div>
                        
                        <div className="full-box" >
                            <div className="agp-input"> </div>
                            <BoxTwoLines tittle="Como Conheceu" grafico={<Conheceu info={graficoConheceu}/> } msg={graficoConheceu} />
                        </div>
                    </div>
                    <div className="agp-box-low">
                        <div className="insc"> 
                            <LargeBox tittle={`Inscrições por Curso, total ( ${total} )`} grafico={<IncporCurso info={cursos}/>} />
                        </div>
                        <div className="insc" >
                            <LargeBox tittle="Inscrições por Dia" grafico={<IncporDia info={cursosPorDia}/> }/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}