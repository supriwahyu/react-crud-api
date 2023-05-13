import { useContext, useRef } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../components/shared/AuthContext";
import { useNavigate } from "react-router-dom";


const CreateWorker= () => {
  const name1 = useRef("");
  const nik1 = useRef("");
  const adress1 = useRef("");
  const phone1 = useRef("");
  const {create}= useContext(AuthContext)
 
  const createSubmit = async () => {
    let payload = {
      name: name1.current.value,
      nik: nik1.current.value,
      adress: adress1.current.value,
      phone: phone1.current.value,
    }
    // await create(payload);
    
    axios.post("http://127.0.0.1:8000/api/worker/create", payload).then(() => {
        navigate("/");
      });
  };
  const navigate = useNavigate();
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Create Form</legend>
            <form>
              <Form.Group className="mb-3" controlId="formEmail1">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" ref={name1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" ref={nik1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Telepon</Form.Label>
                <Form.Control type="text" ref={adress1} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" ref={phone1} />
              </Form.Group>
              <Button variant="primary" type="button" onClick={createSubmit}>
                Tambah produk
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateWorker;