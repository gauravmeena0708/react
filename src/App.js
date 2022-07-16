import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/counter";
import LoginControl from "./components/login";
import NumberList from "./components/numbers";
import NameForm from "./components/form";
import Calculator from "./components/calculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Calculator />
        <NameForm />
        <NumberList numbers={[1, 2, 3]} />
        <LoginControl />
        <Greeting isLoggedIn={true} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/*

*/
export default App;
