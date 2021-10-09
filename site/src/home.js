
import {Container} from './styled';

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
          <div className="infos-maiores">
          </div>
        </div>
      </div>
    </Container>
  );
}

