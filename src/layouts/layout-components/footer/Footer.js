import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import RequestIcon from "@material-ui/icons/SendOutlined";

import HistoryIcon from "@material-ui/icons/ReceiptOutlined";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { FootContext } from "../../../contexts/bottomNavContext";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 0,
    position: "fixed",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    backgroundColor: "white",
    width: "100%",
    boxShadow: "0px 2px 5px #888, 0px -1px 5px #888"
  },

  fabButton: {
    position: "absolute",
    top: -30,
    zIndex: 10000,
    margin: "0 auto",
    background: "blue",
    borderRadius: "50%",
    display: "inline-block",
    boxShadow: "2px 2px 10px #888",
    width: "60px",
    height: "60px",
    color: "white",
    cursor: "pointer"
  },

  gridItem: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    textAlign: "center",
    justifyContent: "center",
    display: "flex"
  }
}));

const Footer = props => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <footer>
      <FootContext.Consumer>
        {context => (
          <div className={classes.appBar}>
            <div
              className={classes.gridItem}
              onClick={() => {
                context.setIsHome(false);
                context.setIsTransaction(true);
                context.setIsSetting(false);
                history.push("/transactions");
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <HistoryIcon />
                <br />
                <span className={`${context.isTransaction ? "active" : ""}`}>Transactions</span>
              </div>
            </div>

            <div className={classes.gridItem}>
              {context.isHome ? (
                <span
                  className={classes.fabButton}
                  onClick={() => {
                    context.setIsClaimed(true);
                    context.setIsHome(true);
                  }}
                >
                  <RequestIcon style={{ marginBottom: "-35px", marginLeft: "5px" }} />
                </span>
              ) : (
                <span
                  className={classes.fabButton}
                  onClick={() => {
                    context.setIsHome(true);
                    context.setIsTransaction(false);
                    context.setIsSetting(false);
                    history.push("/dashboard");
                  }}
                >
                  <AddIcon style={{ marginBottom: "-34px", marginLeft: "0px" }} />
                </span>
              )}
            </div>

            <div
              className={classes.gridItem}
              onClick={() => {
                context.setIsHome(false);
                context.setIsTransaction(false);
                context.setIsSetting(true);
                history.push("/settings");
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <SettingsIcon />
                <br />
                <span className={`${context.isSetting ? "active" : ""}`}>Settings</span>
              </div>
            </div>
          </div>
        )}
      </FootContext.Consumer>
      <style>
        {`
        .active {
          color: black;
          font-size: 15px;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        `}
      </style>
    </footer>
  );
};

Footer.propTypes = {
  active: PropTypes.string
};

Footer.defaultProps = {
  active: "history"
};
export default Footer;
