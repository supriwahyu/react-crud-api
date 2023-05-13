import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "500px", minWidth: "600px" }}
      >
        <Card>
          <Card.Body>
            <Card.Text className="text-center">
              <b>Selamat Datang<br></br> untuk melihat produk klik produk di navbar</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default Home;