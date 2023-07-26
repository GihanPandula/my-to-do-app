import React from "react";

interface TodoHomeProps {
}

const TodoHome: React.FC<TodoHomeProps> = () => {
  return (
    <>
      <div className="home-page-container">
        <div className="home-page-home-page">
          <div className="home-page-frame1">
            <svg viewBox="0 0 1024 1024" className="home-page-icon">
              <path
                d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 
              285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 
              170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 
              49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
              ></path>
            </svg>
          </div>
          <span className="home-page-text">
            <span>
              <span>Welcome to</span>
              <br></br>
              <span>My Todo</span>
            </span>
          </span>
          <span className="home-page-description">
            <span>
              <span>Add your Tasks. Organize your life.</span>
              <br></br>
              <span>Achieve more in every day.</span>
              <br></br>
              <span>My Todo you can Trust !</span>
            </span>
          </span>
          <button type="button" className="button home-page-button">
            Sign Up
          </button>
          <button type="button" className="button home-page-button1">
            Log in
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoHome;
