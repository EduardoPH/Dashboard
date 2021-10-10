import {Container} from './styled';
import { Line, Pie, Bar } from 'react-chartjs-2';

const inscricoesPorDia = [
  { "data": "2021-10-14", "qtd": 5 },
  { "data": "2021-10-15", "qtd": 15 },
  { "data": "2021-10-16", "qtd": 8 },
  { "data": "2021-10-14", "qtd": 5 },
  { "data": "2021-10-15", "qtd": 15 },
  { "data": "2021-10-16", "qtd": 8 }
];
const agendadosDoDia = {
  "espectativa": 16,
  "realidade": 1
}
const comoConheceu = [
  { "tipo": "Família", "qtd": 34 },
  { "tipo": "Amigos", "qtd": 24}
]
const inscricoesPorCurso = [
  { "curso": "Administração", "periodo": "Manhã", "qtd": 5 },
  { "curso": "Administração", "periodo": "Tarde", "qtd": 5 },
  { "curso": "Informática", "periodo": "Manhã", "qtd": 21 },
  { "curso": "Informática", "periodo": "Tarde", "qtd": 32 },
  { "curso": "ASD", "periodo": "Manhã", "qtd": 5 },
  { "curso": "ASD", "periodo": "Tarde", "qtd": 5 },
  { "curso": "InfoGFArmática", "periodo": "Manhã", "qtd": 8 },
  { "curso": "InfoGFArmática", "periodo": "Tarde", "qtd": 8 },
  { "curso": "H", "periodo": "Tarde", "qtd": 5 },
  { "curso": "H", "periodo": "Manhã", "qtd": 5 },
  { "curso": "S", "periodo": "Tarde", "qtd": 5 },
  { "curso": "S", "periodo": "Manhã", "qtd": 5 },
  { "curso": "J", "periodo": "Tarde", "qtd": 8 },
  { "curso": "J", "periodo": "Manhã", "qtd": 8 },
  { "curso": "HDF", "periodo": "Tarde", "qtd": 8 },
  { "curso": "HDF", "periodo": "Manhã", "qtd": 8 },
  { "curso": "DFG", "periodo": "Manhã", "qtd": 7 },
  { "curso": "DFG", "periodo": "Tarde", "qtd": 7 }
]

function IncporDia() {
  const data = {
    labels: inscricoesPorDia.map(i => i.data),
    datasets: [
      {
        data: inscricoesPorDia.map(i => i.qtd),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: '#FF0083',
        pointBorderWidth: 15
      },
    ],
  };

  const options = {
    
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y:{
        ticks: {
          color:"#EDD3D3",
          font:{
            size: 15,
          },
        },
        grid: {
          color: "#351C75"
        }
      },
      x:{
        ticks: {
          color:"white",
          font:{
            size: 15,
          },
        },
        grid: {
          display: false,
        }
      },
    },
  };
  return <Line data={data} options={options}/> 
}

function AgendadosHoje(){
  const data = {
    labels: ["Expectativa", "Realidade"], 
    datasets: [
      {
        data: [agendadosDoDia.espectativa, agendadosDoDia.realidade],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white", 
          font:{
            size: 15
          }
        }
      },
      
    },
  }
  return  <Pie data={data} options={options}/>
}

function Conheceu(){
  const data = {
    labels: ["Família", "Amigos"], 
    datasets: [
      {
        data: comoConheceu.map(i => i.qtd),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white", 
          font:{
            size: 15
          }
        }
      },
      
    },
  }
  return  <Pie data={data} options={options}/>
}

function IncporCurso(){
  let c=  [inscricoesPorCurso.map(i => i.curso)][0]
  const arrayCurso = [...new Set(c)];
  let a =[inscricoesPorCurso.map((i,x) => x % 2 === 0 ? i.qtd : +i)][0]
  let b =[inscricoesPorCurso.map((i,x) => x % 2 !== 0 ? i.qtd : +i)][0]
  const aNAN = a.filter(function (value) {
      return !Number.isNaN(value);
  });
  const bNAN = b.filter(function (value) {
      return !Number.isNaN(value);
  });
  console.log(aNAN)
  console.log()
  const data = {
    labels: arrayCurso,
    datasets: [
      {
        label: 'Tarde',
        data: aNAN,
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Manhã',
        data: bNAN,
        backgroundColor: 'rgb(54, 162, 235)',
      }
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },   
    scales: {
      x: {
        stacked: true,
        ticks: {
          color:"white",
          font:{
            size: 15,
          },
        },
        grid: {
          display: false,
        }
      },
      y: {
        stacked: true,
        ticks: {
          color:"#EDD3D3",
          font:{
            size: 15,
          },
        },
        grid: {
          color: "#351C75"
        }
      },
    },
  };
  return <Bar data={data} options={options} />
}
export default function Home() {

  return (
    <Container>
      <div className="menu">
        <div> <img src="./assets/img/settings.svg" alt=""/> </div>
        <div> <img src="./assets/img/grafico.svg" alt=""/> </div>
      </div>
      <div className="dashboard">
        <h1>DashBoard</h1>
        <div className="menu-dash">
          <h1>Análises</h1>
          <div className="infos-inferiores">
          </div>
          <div className="infos-maiores" style={{width: '1000px',backgroundColor: '#181621'}}>
            <IncporCurso/>
          </div>
        </div>
      </div>
    </Container>
  );
}

