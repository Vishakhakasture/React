// import logo from "./logo.svg";
import "./App.css";
import Get from "./components/Get";
import Put from "./components/Put";
import Post from "./components/Post";
import Delete from "./components/Delete";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Get Method</h1>
        <Get />

        <h1>Post Method</h1>
        <Post />

        <h1>Put Method</h1>
        <Put />

        <h1> Delete Method</h1>
        <Delete />
      </header>
    </div>
  );
}

export default App;
