import "./App.css";

// react component
function Header() {
  return(
    <header>
      <h1>Sammi's Kitchen</h1>
    </header>
  )
}

function App() {
  return (
    // calling contents of header()
    <div>
      <Header />

      <main> 
        <h2>We serve the most delicious food around.</h2>
      </main>
    </div>
  );
}

export default App;
