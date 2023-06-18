import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdb-react-ui-kit";
import Navbar from "../Navbar/Navbar.js";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <MDBCard className="bg-card" style={{ minHeight: '100vh', backgroundColor: '#E89F71' }}>
        <MDBCardBody className="text-center">
          <h2 className="h2-responsive mb-4" style={{ fontSize: '2.5rem', color: '#AA4A30' }}>
            About Us
          </h2>
          <p style={{ fontSize: '2.0rem', color: '#D57149' }}>
            UnWasted aims to tackle one of the biggest problems of our time, food waste, and ensure that those in need
            can benefit from it. Restaurants can upload their surplus or donated items to our platform, and those in need
            can place orders for these items free of charge and collect them.
          </p>
          <p></p> {/* Add an empty paragraph for spacing */}
          <p></p> {/* Add an empty paragraph for spacing */}
          <MDBRow className="mt-5">
            <MDBCol md="4" className="mb-4">
              <MDBIcon icon="user" size="4x" style={{ color: '#AA4A30' }} />
              <h5 className="font-weight-bold mt-4" style={{ color: '#D57149' }}>
                Aleyna Kızıltaş
              </h5>
              <p className="text-muted" style={{ color: '#D57149' }}>
                Web Developer
              </p>
            </MDBCol>
            <MDBCol md="4" className="mb-4">
              <MDBIcon icon="user" size="4x" style={{ color: '#AA4A30' }} />
              <h5 className="font-weight-bold mt-4" style={{ color: '#D57149' }}>
                Hüseyin Emre Kaya
              </h5>
              <p className="text-muted" style={{ color: '#D57149' }}>
                Full Stack Developer
              </p>
            </MDBCol>
            <MDBCol md="4" className="mb-4">
              <MDBIcon icon="user" size="4x" style={{ color: '#AA4A30' }} />
              <h5 className="font-weight-bold mt-4" style={{ color: '#D57149' }}>
                Enes Furkan Akıllı
              </h5>
              <p className="text-muted" style={{ color: '#D57149' }}>
                Web Developer
              </p>
            </MDBCol>
            <MDBCol md="4" className="mb-4">
              <MDBIcon icon="user" size="4x" style={{ color: '#AA4A30' }} />
              <h5 className="font-weight-bold mt-4" style={{ color: '#D57149' }}>
                Baha Yıldırım
              </h5>
              <p className="text-muted" style={{ color: '#D57149' }}>
                Back-end Developer
              </p>
            </MDBCol>
            <MDBCol md="4" className="mb-4">
              <MDBIcon icon="user" size="4x" style={{ color: '#AA4A30' }} />
              <h5 className="font-weight-bold mt-4" style={{ color: '#D57149' }}>
                Mert Can Taçyıldız
              </h5>
              <p className="text-muted" style={{ color: '#D57149' }}>
                Front-end Developer
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
    
  );
};

export default AboutUsPage;
