import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ categoria }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
  fetch("../json/catalogo.json")
  .then((res) => res.json())
  .then((data) => setProductos(data));
  }, []);
  return (
      <div id="contenedor" className={"contenedor"}>
      {productos.map((producto) =>(producto.categoria==categoria?
      <div key={producto.id} className={"tarjeta-body"}>
        <Link to={`${producto.id}`}>
          <div className="card">
              <div className="card-img">
                  <img src={producto.img} alt="Card image cap" />
              </div>
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">
              The value of the product is expressed in US dollars.</p>
              <div className="cardBody">
                <h6 className= "precio"><strong>Precio: ${producto.precio}
                </strong></h6>
                <button id="${id}"  className="btn btn-secondary me-md-2">Buy</button>
              </div>
          </div>
        </Link>
      </div>:null)
      )}
      </div>
  )
}

export default ProductList;
