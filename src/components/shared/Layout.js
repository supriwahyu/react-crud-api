import Navbar from "react-bootstrap/Navbar";
import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const Layout = ({ children }) => {
  const { users, logout, profile } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Auth Demo
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {users && (
              <Nav.Link as={Link} to="/vendor">
                Vendor
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {users && (
              <Nav.Link as={Link} to="/worker">
                Karyawan
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {users && (
              <Nav.Link as={Link} to="/fav-movies">
                Barang
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {users && (
              <Nav.Link as={Link} to="/orders">
                Pemesanan
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {users && (
              <Nav.Link as={Link} to="/shipments">
                Penerimaan
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {!users && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {profile && <Nav.Link href="#">{profile?.email}</Nav.Link>}
          </Nav>
          {users && (
            <Button
              variant="outline-success"
              type="button"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
 
export default Layout;