import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";

const Modal = props => {
  return (
    <div
      id="modal"
      style={{
        display: props.open ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.2s ease-in"
      }}
      onClick={e => {
        if (e.target.id == "modal") props.onClose();
      }}
    >
      <div style={{ ...props.style, ...{} }}>
        <Card>
          <CardBody>{props.children}</CardBody>
        </Card>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  style: PropTypes.object,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  open: false,
  style: {}
};

export default Modal;
