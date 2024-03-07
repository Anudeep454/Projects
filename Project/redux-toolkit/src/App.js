import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {INCR, DECR} from './reducers/counterSlice'
function App() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.counter.value)
  console.log(count)
  return (
    <div className="App">
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(INCR())}>Increase</button>
      <button onClick={()=>dispatch(DECR())}>Decrease</button>
    </div>
  );
}

export default App;
