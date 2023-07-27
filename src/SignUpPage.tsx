//import { FunctionComponent, useCallback } from "react";
import { Input } from "antd";
//import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import { FunctionComponent } from "react";


const SignUpPage: FunctionComponent = () => {
  //   const navigate = useNavigate();

  //   const onSignUpBtnButtonClick = useCallback(() => {
  //     navigate("/todo-app");
  //   }, [navigate]);

  return (
    // <div className="sign-up-container">
    <div className="sign-up-page">
      <div className="sign-up-parent">
        <div className="sign-up1">Sign Up!</div>
        <b className="get-organized-and">
          Get organized and stay on top of your tasks with our My Todo app.
        </b>
      </div>
      <div className="email-input-parent">
        <Input
          className="email-input"
          type="email"
          size="middle"
          placeholder="Enter Email"
          allowClear
          bordered={true}
        />
        <Input
          className="email-input"
          type="text"
          size="middle"
          placeholder="Enter Name"
          allowClear
          bordered={true}
        />

        {/* ANT */}

        <Input.Password
          className="email-input"
          size="middle"
          placeholder="Enter Password"
          allowClear
          bordered={true}
        />
      </div>
      <div className="sign-up-btn-button1">
        <div className="sign-up2">Sign Up</div>
      </div>
      <b className="or-sign-up">Or Sign Up with these</b>
      <img
        className="icon-set"
        alt="Google Apple Facebook"
        src="/iconSet.svg"
      />
    </div>
    // </div>
  );
};

export default SignUpPage;

// onClick={onSignUpBtnButtonClick}
