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
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Side Salad",
  "Loaded Baked Potato"
];

// create data before item is rendered
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}))


function Main({ dishes }) {
  return (
    // list to dynamically populate data 
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyleType: "none" }}>
          {dish.title}
          </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Header name="Sammi" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
