import React, { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [isWhisper, setIsWhisper] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [state, setState] = useState({
    pass: "",
    confirm_pass: "",
    whisper: "",
    passCheck: { text: "cannot be empty", color: "red", error: true },
    confirmCheck: { text: "", color: "red", error: true },
    whisperCheck: { error: true, text: "cannot be empty", color: "black" }
  });

  React.useEffect(() => {
    window.onbeforeunload = function () {
      return "Your work will be lost.";
    };
  }, []);

  const handleLoginClick = () => {
    if (!state.passCheck.error && !state.confirmCheck.error && !state.whisperCheck.error) {
      let obj = { name: state.whisper, id: state.pass };
      localStorage.setItem("currentUser", JSON.stringify(obj));
      history.push("/aid");
    }
  };

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
          display: isWhisper ? "block" : "none",
          padding: "20px",
          bottom: "40%",
          position: "absolute",
          textAlign: "center"
        }}
      >
        <CardBody>
          <div>
            <h3>Get started</h3>
            <p>Whisper your 12 to 24 secret words to login</p>
            <textarea
              style={{ minHeight: "100px" }}
              onChange={e => {
                setState({
                  ...state,
                  ...{ whisper: e.target.value.trim() }
                });
              }}
              className="form-field"
            ></textarea>
            <br />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => {
                if (state.whisper.length < 10) {
                  alert("at least 10 words");
                } else {
                  setIsWhisper(false);
                  setIsLogin(true);
                }
              }}
            >
              Whisper
            </button>
          </div>
        </CardBody>
      </Card>
      <Card
        style={{
          display: isLogin ? "block" : "none",
          padding: "20px",
          bottom: "40%",
          position: "absolute"
        }}
      >
        <CardTitle className="mb-0 p-3 border-bottom bg-light">
          <span
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => {
              setIsWhisper(true);
              setIsLogin(false);
            }}
          >
            <KeyboardBackspaceIcon />{" "}
            <h5
              style={{
                marginTop: "4px",
                marginLeft: "7px"
              }}
            >
              Back
            </h5>
          </span>
        </CardTitle>
        <CardBody>
          <br />

          <div>
            <label htmlFor="pass">Password</label>
            <br />
            <input
              name="pass"
              type="text"
              placeholder="password"
              className="form-field"
              onChange={e => {
                if (e.target.value.trim().length < 6) {
                  setState({
                    ...state,
                    ...{ passCheck: { text: "at least 6 words", color: "red", error: true } }
                  });
                } else {
                  setState({
                    ...state,
                    ...{
                      passCheck: { text: ".....", color: "green", error: false },
                      pass: e.target.value.trim()
                    }
                  });
                }
              }}
            />
            <br />
            <span style={{ fontWeight: "500", marginLeft: "5px", color: state.passCheck.color }}>
              {state.passCheck.text}
            </span>
          </div>
          <br />
          <div>
            <label htmlFor="confirm_pass">Tokens</label>
            <br />
            <input
              name="confirm_pass"
              type="text"
              placeholder="confirm password"
              className="form-field"
              onChange={e => {
                if (e.target.value.trim() !== state.pass || e.target.value.trim().length < 6) {
                  setState({
                    ...state,
                    ...{ confirmCheck: { text: "not matched", color: "red", error: true } }
                  });
                } else {
                  setState({
                    ...state,
                    ...{ confirmCheck: { text: "matched", color: "green", error: false } }
                  });
                }
              }}
            />
            <br />
            <span style={{ fontWeight: "500", marginLeft: "5px", color: state.confirmCheck.color }}>
              {state.confirmCheck.text}
            </span>
          </div>
          <br />
          <button className="btn btn-primary" onClick={handleLoginClick}>
            Proceed
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
