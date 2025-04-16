import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

// main component for main tag in app
function Main() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Sammi" year={new Date().getFullYear()} />
      <Main />
    </div>
  );
}

export default App;
