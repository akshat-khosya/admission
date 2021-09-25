import React ,{useState} from 'react';
import Login from './components/Login';
import Sign from './components/Sign';

function App() {
  const [currentState, setCurrentState] = useState(true);

  function changeHere(){
    console.log("will")
    setCurrentState(!currentState);
  }
  
  return (
    <>
    {currentState?<Login currentView={changeHere} />:<Sign currentView={changeHere} />}
    </>
   
  );
}


export default App;
