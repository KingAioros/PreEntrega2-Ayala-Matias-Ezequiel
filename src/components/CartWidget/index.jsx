import styles from "./CartWidget.module.css";

function Carrito({class1,class2,class3}) {
  return (
         <div className={styles.iconoCarro +" "+ {class1}}><a
            className={class2} aria-current="page" href="#"><i className={class3}></i></a>
            <div className={styles.cartTotal}>
            <p>0</p>
            </div>
         </div>
  )
}

export default Carrito