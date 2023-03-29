import './App.css'
import LogoBanner from './components/Logo';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CardDetail from './components/CardDetail';

function App() {

  return (
    <div>
      <LogoBanner imagen="img/Xcell.png"/>
      <NavBar navClass1="navbar navbar-expand-lg justify-content-center" divClass1="container-fluid" divClass2="collapse navbar-collapse justify-content-center" ulClass1="navbar-nav"/>
      <Routes>
      <Route path="/" element={<Navigate to="Inicio" />} />
        <Route path="/Inicio" element={<ItemListContainer />} />
        <Route path="/Informatica" element={<ProductList categoria="Informatica"/>} />
        <Route path="/Gaming" element={<ProductList categoria="Gaming"/>} />
        <Route path="/Celulares" element={<ProductList categoria="Celulares"/>} />
        <Route path="/Audio" element={<ProductList categoria="Audio"/>} />
        <Route path="/:categoria/:id" element={<CardDetail/>} />
      </Routes>
        
    </div>

  )
}

export default App
