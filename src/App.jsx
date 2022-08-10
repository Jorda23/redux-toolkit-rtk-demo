import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByTwo } from './store/slices/counter/counterSlices';

function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h2>count is: { counter }</h2>
        </a>        
        <p>
          <button type="button" onClick={ ()=> dispatch( increment() ) }>
            Increment
          </button>
          <button type="button" onClick={ ()=> dispatch( decrement() ) }>
            decrement
          </button>
          <button type="button" onClick={ ()=> dispatch( incrementByTwo(2) ) }>
            Increment by 2
          </button> 
        </p>
      </div>
      
    </div>
  )
}

export default App
