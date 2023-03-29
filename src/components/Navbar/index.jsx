import styles from "./NavBar.module.css"
import Carrito  from '../CartWidget';
import ListaNav from '../Lista';
import ButtonRes from '../ButtonResp';
function NavBar({navClass1,divClass1,divClass2,ulClass1}) {
  return (
    <nav className={styles.navbar +" "+ navClass1}>
    <div className={divClass1}>
      <ButtonRes />
      <div className={divClass2} id="navbarNav">
        <ul className={ulClass1}>
          <ListaNav name="Inicio" class1="nav-item" class2="nav-link"/>
          <ListaNav name="Informatica" class1="nav-item" class2="nav-link"/>
          <ListaNav name="Gaming" class1="nav-item" class2="nav-link"/>
          <ListaNav name="Celulares" class1="nav-item" class2="nav-link"/>
          <ListaNav name="Audio" class1="nav-item" class2="nav-link"/>
          <Carrito class1="form-inline my-2 my-lg-0" class2="nav-link" class3="fa-solid fa-cart-shopping"/>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar