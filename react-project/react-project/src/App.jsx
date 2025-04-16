import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

const items = [
  "Macaroni and Cheese",
  "Bacon Cheeseburger and Curly Fries",
  "Veggie Burger and Celery Sticks"
];

// main component for main tag in app
function Main({ dishes }) {
  // jsx expression for list to display
  return <ul>
      {dishes.map((dish) => (
        <li style={{ listStyleType: "none"}}>{dish}</li>
      ))}
    </ul>

}

function App() {
  return (
    <div>
      <Header name="Sammi" year={new Date().getFullYear()} />
      <Main dishes={items}/>
    </div>
  );
}

export default App;
