import "./App.css";

// passing props as an arg that is sent to headers function
// header is child of app
function Header(props) {
  return (
    <header>
      <h1>{props.name}'s' Kitchen</h1>
      <p>Copyright {props.year}</p>
    </header>
  );
}

function App() {
  return (
    // passing properties for header function
    <div>
      <Header name="Sammi" year={new Date().getFullYear()}/>
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
    </div>
  );
}

export default App;
