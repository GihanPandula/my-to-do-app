import React from "react";
import "./SignUp.css";

const TodoSignUp: React.FC = () => {
  return (
    <>
      <div className="sign-up-page-container">
        <div className="sign-up-page">
          <div className="sign-up-page-heading">
            <span className="sign-up-page-text">
              <span>Sign Up!</span>
            </span>
          </div>
          <div className="sign-up-page-description">
            <span className="sign-up-page-text02">
              <span>
                Get organized and stay on top of your tasks with our My Todo
                app.
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
              placeholder="Name"
              className="input-sign-up-page-text-input1"
            />
            <input
              type="text"
              placeholder="Password"
              className="input-sign-up-page-text-input2"
            />
          </div>
          <button className="sign-up-page-sign-up-btn-button">
            <span className="sign-up-page-text10">
              <span>Sign Up</span>
            </span>
          </button>
          <span className="sign-up-page-text12">
            <span>Or Sign Up with these</span>
          </span>
          <div className="sign-up-page-icon-set">
            <img
              src="flat-color-icons-google.jpg"
              alt="Google"
              className="sign-up-page-flat-color-icons-google"
            />
            <img
              src="/uil-apple.jpg"
              alt="Apple"
              className="sign-up-page-uil-apple"
            />
            <img
              src="/logos-facebook.jpg"
              alt="Facebook"
              className="sign-up-page-logos-facebook"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoSignUp;
