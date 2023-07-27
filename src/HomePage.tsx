// import { FunctionComponent, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import React, { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  //   const navigate = useNavigate();

  //   const onSignUpBtnButtonClick = useCallback(() => {
  //     navigate("/sign-up-page");
  //   }, [navigate]);

  //   const onLogInBtnButtonClick = useCallback(() => {
  //     navigate("/log-in-page");
  //   }, [navigate]);

  return (
    <div className="home-page">
      <img className="home-page-child" alt="" src="/Logo.svg" />
      <div className="welcome-to-my-todo-parent">
        <div className="welcome-to-my-container">
          <p className="welcome-to">Welcome to</p>
          <p className="welcome-to">My Todo</p>
        </div>
        <b className="add-your-tasks-container">
          <p className="welcome-to">Add your Tasks. Organize your life.</p>
          <p className="welcome-to">Achieve more in every day.</p>
          <p className="welcome-to">
            <span className="my-todo1">My Todo</span>
            <span> you can Trust !</span>
          </p>
        </b>
      </div>
      <div className="sign-up-btn-button-parent">
        <div className="sign-up-btn-button">
          <div className="sign-up">Sign Up</div>
        </div>
        <div className="log-in-btn-button">
          <div className="sign-up">Log in</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
//onClick={onLogInBtnButtonClick}
