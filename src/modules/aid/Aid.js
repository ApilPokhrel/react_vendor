import React, { useState } from "react";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody
} from "reactstrap";
import "./aid.css";

let projects = [
  { name: "Project 1", token: "PR" },
  { name: "Project 2", token: "PR2" },
  { name: "Project 3", token: "PR3" }
];

const Aid = props => {
  const [model, setModel] = useState(false);
  const [aid, setAid] = useState({});

  const toggle = () => setModel(!model);

  const openRegister = val => {
    setAid(val);
    toggle();
  };

  return (
    <div className="aid-main">
      <h2>Aid Distributer </h2>
      <p>Be sure to select one</p>
      <br />
      <p />

      {projects.map(e => (
        <Card className="aid-list" onClick={() => openRegister(e)} key={e.token}>
          <CardBody>
            <img src="https://rahatvendor.esatya.io/images/Rahat logo main.png" alt="logo" />
            <br />
            <h4>{e.name}</h4>
            <p>Token name: {e.token}</p>
          </CardBody>
        </Card>
      ))}

      <Modal isOpen={model} toggle={toggle}>
        <Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <ModalHeader toggle={toggle}>
            <div>
              <h3>{aid.name}</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <p>Register as vendor</p>
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <br />
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="form-field"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <br />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="form-field"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="phone">Phone</label>
              <br />
              <input
                name="phone"
                type="number"
                placeholder="Phone no"
                className="form-field"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="address">Address</label>
              <br />
              <input
                name="address"
                type="text"
                placeholder="Your Address"
                className="form-field"
                required
              />
            </div>
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Submit</Button>

            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default Aid;
