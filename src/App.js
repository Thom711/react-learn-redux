import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggleLoggedIn } from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Hello</h1>

            <h3>Counter: { counter }</h3>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement(2))}>-</button>
            <h3>Logged in: { isLogged ? 'Yes' : 'No' }</h3>

            <button onClick={() => dispatch(toggleLoggedIn())}>Log in / Log Out</button>
        </div>
    );
};

export default App;
