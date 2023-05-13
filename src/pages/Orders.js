import axios from "axios";
import { useState, useEffect } from "react";
import Create from "./Create";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router';
import DeleteConfirmation from "./DeleteConfirmation";
// import { Container, Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import jwtInterceptor from "../components/shared/jwtInterceptor";

const Orders = () => {
  const [products, setMovies] = useState([]);
//   const { id } = useParams();
  
  useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setMovies(response.data);
      });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };
 
  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };
 
  const confirmDeleteHandler = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/delete/${itemToDeleteId}`)
      .then((response) => {
        setMovies((previousState) => {
          return previousState.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
        setShowModal(false);
      });
  };
    return (
        <div>
            <DeleteConfirmation
        showModal={showModal}
        hideDeleteModalHandler={hideDeleteModalHandler}
        title="Delete Confirmation"
        body="Are you want delete this itme?"
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteConfirmation>
             <h2 className="text-center">Products List</h2>
             <div className = "row">
             <Create />
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>sku</th>
                                <th>price</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(
                                  products => 
                                    <tr key = {products.id}>
                                         <td> {products.name} </td>   
                                         <td> {products.sku}</td>
                                         <td> {products.price}</td>
                                         <td> 
                                         <Button as={Link} to={`/products/${products.id}`} >update</Button>
                                         <Button as={Link} to={`/productsView/${products.id}`} >View</Button>
                                         <Button
                                            variant="danger"
                                            onClick={() =>{openConfirmDeleteModalHandler(products.id)}}
                                            >
                                            Delete
                                            </Button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>

        </div>
    )
};
 
export default Orders;