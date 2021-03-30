import { useParams } from 'react-router-dom';
import '../style.css';
import Menu from './Menu';
import Weather from './Weather';
import Scenario from './Scenario';

function Game() {
    let { id } = useParams();

    return (
        <>
          <Menu />
          <br />
          <Weather />
          <br />
          <Scenario scid={id} />
        </>
    );

}

export default Game;