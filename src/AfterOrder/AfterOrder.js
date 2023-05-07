import { useEffect, useState } from "react";
import "./AfterOrder.css";
import Navbar from "../Navbar/Navbar";
import bellIcon from "./Assets/bellicon.svg";
import productImage from "./Assets/productImage.png";
import clockIcon from "./Assets/clockicon.svg";
import Counter from "./Counter/Counter";

function AfterOrder() {
  const [code, setCode] = useState("");

  useEffect(() => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setCode(randomCode.toString());
  }, []);

  return (
    <div className="body">
      <Navbar />
      <div className="container-fluid d-flex fullbody">
        <div className="container-fluid d-flex innerBody">
          <div className="container d-flex headText">
            <div>
              <img src={bellIcon} className="iconSize" alt="bellicon" />
            </div>
            <p className="headText-text">
              SHOW THE RESTAURANT EMPLOYEE CODE TO RECEIVE THE PRODUCT
            </p>
            <div>
              <img src={bellIcon} className="iconSize" alt="bellicon" />
            </div>
          </div>
          <div className="container-fluid d-flex mt-3 centerBody">
            <div className="container d-flex me-4 map">
              <iframe
                title="companyAddress"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.5992920981435!2d32.7218657764609!3d39.81597929198329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3407df85a883d%3A0xd9b8ddbc18679edf!2zS8SxesSxbGNhxZ9hciwgQXTEsWzEsW0gw5xudi4sIDA2ODMwIEfDtmxiYcWfxLEvQW5rYXJh!5e0!3m2!1str!2str!4v1683462083684!5m2!1str!2str"
                className="w-100 h-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="container d-flex me-4 productImage">
              <img
                src={productImage}
                alt="ProductImage"
                className="w-100 h-100"
              />
            </div>
            <div className="container d-flex codeBox">
              <p className="codeText">{code}</p>
            </div>
          </div>
          <div className="container-fluid d-flex footer">
            <p className="footer-text">You chose chicken saute!</p>
            <p className="footer-text">
              The food is reserved for you. You have <b>60 Minutes</b> to
              recieve
            </p>
            <div className="container d-flex timerContainer">
              <img
                src={clockIcon}
                alt="ClockIcon"
                className="clockIcon d-flex"
              />
              <p className="footer-text d-flex pt-4">
                Remaining Time: <Counter />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterOrder;
