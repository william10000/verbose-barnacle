import { useEffect, useState } from "react";
import { getTrials } from "./api/trial";
import { Trial } from "./Trial";
import "./App.css";

function App() {
  // const [userAdded, setUserAdded] = useState(false);
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    getTrials().then((trials) => {
      console.log(trials);
      // trials.forEach((trial) => {
      //   trial.detailsVisible = true;
      // });
      setTrials(trials);
    });
  }, []);

  console.log(trials);
  const trialsDivs = trials.map((trial) => {
    return <Trial {...trial} key={trial.id} />;
  });

  return <div className="App">{trialsDivs}</div>;
}

export default App;
