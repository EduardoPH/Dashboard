import { Line, Pie, Bar } from 'react-chartjs-2';

const inscricoesPorDia = [
  { "data": "2021-10-14", "qtd": 5 },
  { "data": "2021-10-15", "qtd": 15 },
  { "data": "2021-10-16", "qtd": 8 },
  { "data": "2021-10-14", "qtd": 5 },
  { "data": "2021-10-15", "qtd": 15 },
  { "data": "2021-10-16", "qtd": 8 }
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

const Cores = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

function IncporDia(props) {
  const data = {
    labels: props.info.map(i => i.data),
    datasets: [
      {
        data: props.info.map(i => i.qtd),
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

function AgendaramNaoVieram(props){
  const data = {
    labels: ["Expectativa", "Realidade"], 
    datasets: [
      {
        data: [props.info.expectativa, props.info.realidade],
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

function Conheceu(props){
  const data = {
    labels: props.info.map(i => i.tipo),
    datasets: [
      {
        data: props.info.map(i => i.qtd),
        backgroundColor: Cores.map(i => i),
        borderColor: Cores.map(i => i),
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

function IncporCurso(props){
  console.log(props.info);
  let c=  [props.info.map(i => i.curso)][0]
  const arrayCurso = [...new Set(c)];
  let a =[props.info.map((i,x) => x % 2 === 0 ? i.qtd : +i)][0]
  let b =[props.info.map((i,x) => x % 2 !== 0 ? i.qtd : +i)][0]
  const aNAN = a.filter(function (value) {
      return !Number.isNaN(value);
  });
  const bNAN = b.filter(function (value) {
      return !Number.isNaN(value);
  });

  const data = {
    labels: props.info.map(i => i.curso),
    datasets: [
      {
        label: 'Tarde',
        data: props.info.map(i => i),
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

export { IncporCurso, IncporDia, Conheceu, AgendaramNaoVieram }
