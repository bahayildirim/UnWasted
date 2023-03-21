import "./Profile.style.css";
import Navbar from "../Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card } from "react-bootstrap";
import apple from "./Assets/apple.jpg";

export default function Profile() {
  return (
    <div className="main">
      <div>
        <Navbar />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={apple} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="danger" className="button">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
