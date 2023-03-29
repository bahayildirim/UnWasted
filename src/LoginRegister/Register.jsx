import React, {
  useState,
} from "react"; /*useState Bileşeni globalde state yönetmemizi sağlar*/
import Axios from "axios";
import LogRegImage from "./Assets/LogRegImage.png";
import Logo from "./Assets/Logo.svg";
import { MDBRadio } from "mdb-react-ui-kit";

/*Props parent send function/value to children (onClick icin kullandim)*/
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [donator, setDonator] = useState(false);

  const handleSubmit = (e) => {
    /*Capture when user submit form*/
    /*Bu yapilmazsa sayfa reload atar state kaybolur*/
    console.log(email);
  };

  const [first, setFirst] = useState(true);

  const handleChange = (data) => {
    console.log(data, "our value");
  };

  const register = () => {
    Axios.post("http://localhost:8080/register", {
      password: pass,
      email: email,
      fullname: name,
      phone_no: contact,
      type: type,
      address: address,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="Logo">
        <img src={Logo} alt="" />
      </div>

      <img className="LogRegImage" src={LogRegImage} alt="" />

      <div className="auth-form-container">
        <h2>REGISTER</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <MDBRadio
              name="inlineRadio"
              id="inlineRadio1"
              value="Donator"
              label="Donator"
              onChange={(e) => setType(e.target.value)}
              onClick={() => setDonator(true)}
              inline
            />
            <MDBRadio
              name="inlineRadio"
              id="inlineRadio2"
              value="Buyer"
              label="Buyer"
              onChange={(e) => setType(e.target.value)}
              onClick={() => setDonator(false)}
              inline
            />
          </div>
          <label htmlFor="email"></label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
          />
          <label htmlFor="username"></label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="fullname"
            placeholder={donator ? "Company Name" : "Full Name"}
            id="username"
            name="username"
          />
          {donator && (
            <>
              <label htmlFor="Address"></label>
              <input
                value={contact}
                onChange={(e) => setAddress(e.target.value)}
                type="Address"
                placeholder="Address"
                id="Address"
                name="Address"
              />
            </>
          )}
          <label htmlFor="contactNumber"></label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="contactNumber"
            placeholder="Contact number"
            id="contactNumber"
            name="contactNumber"
          />
          <label htmlFor="password"></label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <br></br>
          <button type="submit" onClick={register}>
            Register
          </button>
        </form>

        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here!
        </button>
      </div>
    </div>
  );
};
