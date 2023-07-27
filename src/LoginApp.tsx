// import { FunctionComponent, useCallback } from "react";
import { Input } from "antd";
// import { useNavigate } from "react-router-dom";
import "./LoginApp.css";
import { FunctionComponent } from "react";

const LoginApp: FunctionComponent = () => {
  //   const navigate = useNavigate();

  //   const onLogInBtnButtonClick = useCallback(() => {
  //     navigate("/log-in-page1");
  //   }, [navigate]);

  return (
    <div className="login-app">
      <div className="welcome-parent">
        <div className="welcome">Welcome!</div>
        <b className="log-in-to-container">
          <p className="log-in-to">{`Log in to your My Todo app `}</p>
          <p className="log-in-to">and start getting things done!</p>
        </b>
      </div>
      <div className="rectangle-parent">
        <Input
          className="frame-child"
          type="email"
          size="middle"
          placeholder="Enter Email"
          allowClear
          bordered={false}
        />
        <Input.Password
          className="frame-child"
          size="middle"
          placeholder="Enter Password"
          allowClear
          bordered={false}
        />
      </div>
      <div className="forgot-password-parent">
        <b className="forgot-password">Forgot Password?</b>
        <div className="log-in-btn-button1">
          <div className="log-in1">Log in</div>
        </div>
      </div>
      <img className="icon-set" alt="Google Apple Facebook" src="/iconSet.svg" />
    </div>
  );
};

export default LoginApp;
// onClick={onLogInBtnButtonClick}
