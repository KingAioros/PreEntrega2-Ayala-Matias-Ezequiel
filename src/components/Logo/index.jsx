import { Link } from 'react-router-dom';
import styles from './logo.module.css';

const LogoBanner = ({imagen}) => {
  return (
    <div className={styles.logo}>
      <Link to="Inicio">
      <img src={imagen} height="250"/>
      </Link>
  </div>
  )
}

export default LogoBanner