import React ,{useState} from 'react';
import Login from './components/Login';
import Sign from './components/Sign';

function App() {
  const [currentState, setCurrentState] = useState(true);

  return (
    
    <>
    {currentState?<Sign />:<Login curentView={(e)=>{e.preventDefault(); setCurrentState (!currentState)}}/>}
    </>
   
  );
}


export default App;
