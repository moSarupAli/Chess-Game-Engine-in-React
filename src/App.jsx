
import './App.css'
import Board from './components/Board/Board'
import AppContext from './contexts/Context'
import { reducer } from './reducer/reducer'
import { useReducer } from 'react'
import { initGameState } from './constant'
import Control from './components/Control/Control'
import TakeBack from './components/Control/bits/TakeBack.jsx'
import MovesList from './components/Control/bits/MovesList'

function App() {

  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch
  };

  return (
    <AppContext.Provider value={providerState} >
      <div className='app'>
        <Board />
        <Control>
           <MovesList />
           <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  )
}

export default App
