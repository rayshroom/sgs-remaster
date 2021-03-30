import './style.css';
import scenario from '../data/scenario';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Main() {

  const history = useHistory();

  const [scenarioID, setScenarioID] = useState("scenario00");
  const handleChange = (e) => { 
    setScenarioID(e.target.value);
  }

  const newGame = () => {
    console.log(`new game for ${scenarioID}`);
    history.push(`/game/${scenarioID}`);
  }

  return (
    <div className="container">
	    <div className="d-flex justify-content-center">
        <select className="form-select" onChange={(e) => handleChange(e)}>
            <option value="scenario00">随机</option>
            {
              scenario.map((c, idx) => {
                return <option value={c.id}>{c.name}</option>
              })
            }
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <button className="new_btn btn btn-outline-primary" onClick={newGame}>新游戏</button>
      </div>
    </div>
  );
}

export default Main;