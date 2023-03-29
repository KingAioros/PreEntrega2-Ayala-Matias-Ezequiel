import { Link } from "react-router-dom"

const ListaNav = ({name, class1, class2}) => {
  return (
    <li className={class1}>
        <Link className={class2} to={name}>{name}</Link>
    </li>
  )
}
// nav-item
// nav-link
export default ListaNav