import React from "react";
import { Card, CardBody } from "reactstrap";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Card
        style={{
          display: "block",
          padding: "20px",
          bottom: "40%",
          position: "absolute",
          textAlign: "center"
        }}
      >
        <CardBody>
          <div>
            <h3>Hello Buddy</h3>
            <p>(:</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
