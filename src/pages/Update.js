import { useContext, useRef } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../components/shared/AuthContext";
import { useNavigate, useParams } from "react-router-dom";


const Update = () => {
  const { id } = useParams();
  const name1 = useRef("");
  const sku1 = useRef("");
  const price1 = useRef("");
  const quantity1 = useRef("");
  const {create}= useContext(AuthContext)
 
  const createSubmit = async () => {
    let payload = {
      name: name1.current.value,
      sku: sku1.current.value,
      price: price1.current.value,
      quantity: quantity1.current.value,
    }
    // await create(payload);
    axios.put(`http://127.0.0.1:8000/api/update/${id}`, payload).then(() => {
        navigate("/");
      });
  };
  const navigate = useNavigate();
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Update Form</legend>
            <form>
              <Form.Group className="mb-3" controlId="formEmail1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" ref={name1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>SKU</Form.Label>
                <Form.Control type="number" ref={sku1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" ref={price1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" ref={quantity1} />
              </Form.Group>
              <Button variant="primary" type="button" onClick={createSubmit}>
                Ganti produk
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Update;