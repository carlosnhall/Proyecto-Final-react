import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"El mejor e-commerce de juegos de PC"}/>
    </div>
    );
}

export default App;
