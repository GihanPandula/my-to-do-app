import React from "react";
import "./Login.css";

const TodoLogin: React.FC = () => {
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-login-page">
          <div className="login-page-frame1">
            <div className="login-page-heading">
              <span className="login-page-text">
                <span>Welcome!</span>
              </span>
            </div>
            <div className="login-page-message">
              <span className="login-page-text2">
                <span>
                  Log in to your My Todo app and start getting things done!
                </span>
              </span>
            </div>
            <div className="sign-up-page-input-field1">
              <input
                type="text"
                placeholder="Email"
                className="input-sign-up-page-text-input"
              />
              <input
                type="text"
                placeholder="Password"
                className="input-sign-up-page-text-input2"
              />
            </div>
            <div className="login-page-text-pwd">
              <span className="login-page-text4">
                <span>Forgot Password?</span>
              </span>
            </div>
            <div className="login-page-login-btn">
              <div className="login-page-login-btn1">
                <span className="login-page-text6">
                  <span>Log in</span>
                </span>
              </div>
            </div>
            <div className="login-page-icons">
              <img
                src="/flat-color-icons-google1084-nu3t.svg"
                alt="Google"
                className="login-page-flat-color-icons-google"
              />
              <img
                src="/uil-apple1084-884.svg"
                alt="Apple"
                className="login-page-uil-apple"
              />
              <img
                src="/logos-facebook1084-830o.svg"
                alt="Facebook"
                className="login-page-logos-facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLogin;
