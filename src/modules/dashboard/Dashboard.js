import React, { useState, useEffect } from "react";
import "./dashboard.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import QRCode from "qrcode.react";
import ReactTable from "react-table-v6";
import RequestIcon from "@material-ui/icons/SendOutlined";

import "react-table-v6/react-table.css";
import * as data from "./ReactableData";
import { FootContext } from "../../contexts/bottomNavContext";

let styles = {
  btn: {
    backgroundColor: "#333",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px"
  },

  available: {
    color: "green",
    fontSize: "11px",
    fontWeight: "800"
  },

  cardBody: {
    textAlign: "center"
  },
  main: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    marginTop: "50px",
    flexDirection: "column"
  }
};

const Dashboard = props => {
  const [sendModel, setSendModel] = useState(false);
  const [receiveModel, setReceiveModel] = useState(false);

  const sendToggle = () => setSendModel(!sendModel);
  const receiveToggle = () => setReceiveModel(!receiveModel);

  useEffect(() => {}, [sendModel, receiveModel]);

  const [modal, setModal] = useState(false);
  const [obj, setObj] = useState({});
  const [jsonData, setJsonData] = useState(data.dataTable);

  const data2 = jsonData.map((prop, key) => {
    return {
      id: key,
      name: prop[0],
      designation: prop[1],
      location: prop[2],
      age: prop[3],
      actions: (
        // we've added some custom button actions
        <div className="text-center">
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              let obj1 = data2.find(o => o.id === key);
              setModal(!modal);
              setObj(obj1);
            }}
            color="inverse"
            size="sm"
            round="true"
          >
            Get Token
          </Button>
        </div>
      )
    };
  });

  return (
    <div style={styles.main}>
      <div style={styles.cardBody}>
        <h3>Project 1</h3>
        <span style={{ display: "flex", alignContent: "flex-end", justifyContent: "center" }}>
          <p style={{ fontSize: "80px", fontFamily: "none" }}>0</p>
          <p style={{ fontSize: "20px", marginTop: "65px" }}>sty</p>
        </span>
        <div>
          <Button color="success" onClick={sendToggle}>
            Send
          </Button>{" "}
          <Button color="primary" onClick={receiveToggle}>
            Receive
          </Button>
        </div>
      </div>

      <div className="table-container">
        <Card>
          <CardTitle className="mb-0 p-3 border-bottom bg-light">
            <i className="mdi mdi-border-right mr-2"></i>All Beneficiaries
          </CardTitle>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Beneficiary",
                  accessor: "name"
                },

                {
                  Header: "Amount",
                  accessor: "age",
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "Actions",
                  accessor: "actions",
                  sortable: false,
                  filterable: false
                }
              ]}
              defaultPageSize={5}
              className="-striped -highlight"
              showPaginationBottom={true}
              className="-striped -highlight"
              data={data2}
              filterable
            />
          </CardBody>
        </Card>
      </div>

      <div>
        <FootContext.Consumer>
          {context => (
            <Modal
              isOpen={context.isClaimed}
              toggle={() => {
                context.setIsClaimed(!context.isClaimed);
              }}
            >
              <ModalHeader
                toggle={() => {
                  context.setIsClaimed(!context.isClaimed);
                }}
              >
                <div>
                  <h3>Claim Tokens</h3>
                  <p>Claim tokens from Benficiaries phone number.</p>
                </div>
              </ModalHeader>
              <ModalBody>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <br />
                  <input name="phone" type="text" placeholder="phone" className="form-field" />
                  <br />
                  <span style={styles.available}>@available</span>
                </div>
                <br />
                <div>
                  <label htmlFor="tokens">Tokens</label>
                  <br />
                  <input
                    name="tokens"
                    type="number"
                    placeholder="token amount"
                    className="form-field"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button style={styles.btn}>Claim tokens</button>

                <Button
                  color="secondary"
                  onClick={() => {
                    context.setIsClaimed(!context.isClaimed);
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          )}
        </FootContext.Consumer>

        <Modal isOpen={sendModel} toggle={sendToggle}>
          <ModalHeader toggle={sendToggle}>
            <div>
              <h3>Send Tokens</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <label htmlFor="phone">Address</label>
              <br />
              <input name="address" type="text" placeholder="address" className="form-field" />
            </div>
            <br />
            <div>
              <label htmlFor="tokens">Tokens</label>
              <br />
              <input
                name="tokens"
                type="number"
                placeholder="token amount"
                className="form-field"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success">
              <RequestIcon
                style={{ height: "17px", width: "17px", marginTop: "-3px", marginRight: "5px" }}
              />
              Send
            </Button>

            <Button color="secondary" onClick={sendToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={receiveModel} toggle={receiveToggle}>
          <ModalHeader toggle={receiveToggle}>
            <div>
              <h3>Receive Tokens</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div
              style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}
            >
              <QRCode value="http://facebook.github.io/react/" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={receiveToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

      <br />
    </div>
  );
};

export default Dashboard;
