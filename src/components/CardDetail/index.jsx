import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams ();

  useEffect(() => {
  fetch("../json/catalogo.json")
  .then((res) => res.json())
  .then((data) => setProducto(data));
  }, []);
  return (
      <div id="contenedor" className={"contenedor"}>
      {producto.map((producto) =>(producto.id==id?
      <div key={producto.id} className={"tarjeta-body"}>
          <div className="card">
              <div className="card-img">
                  <img src={"../"+""+ producto.img} alt="Card image cap" />
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
      </div>:null)
      )}
      </div>
  )
}

export default CardDetail;
