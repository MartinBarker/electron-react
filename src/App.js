import logo from './logo.svg';
import './App.css';

const staticElement = <h1>temp element text</h1>;

{/* components must always start with captiol letter */}
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const welcomeElement = <Welcome name="Sara" />;

{/* button example */}
const buttonEx = <button onClick={activateLasers}>
Activate Lasers
</button>
function activateLasers(){
  console.log("activateLasers()")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        { buttonEx }

        {/* element commented out */}

        { staticElement }

        { welcomeElement } 

        <Welcome name="Cahal" />

        <Welcome name="Edite" />

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

export default App;
