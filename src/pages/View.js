import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const View = () => {
    const { id } = useParams();
    const [products, setMovies] = useState([]);
//   const name1 = useRef("");
//   const sku1 = useRef("");
//   const price1 = useRef("");
//   const quantity1 = useRef("");
//   const {create}= useContext(AuthContext)
 
//   const createSubmit = async () => {
    // let payload = {
    //   name: name1.current.value,
    //   sku: sku1.current.value,
    //   price: price1.current.value,
    //   quantity: quantity1.current.value,
    // }
    // await create(payload);
    // axios.get(`http://127.0.0.1:8000/api/products/${id}`)
//  });
//   const navigate = useNavigate();
useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}`)
    .then((response) => {
      setMovies(response.data);
    });
}, []);


  return (
    <div>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
          {Object.keys(products).map(key => {
                return <li>{products[key]}</li>      
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default View;