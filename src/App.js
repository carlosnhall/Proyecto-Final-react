import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element={<ItemListContainer greeting={"Tienda de productos"}/>}/>
          <Route path= '/category/:typeId' element={<ItemListContainer greeting={"Productos filtrados"}/>}/>
          <Route path= '/item/:itemId' element={ <ItemDetailContainer greeting={"Detalle del producto"}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    );
}

export default App;

