import "./App.scss";

import logo from "../../images/logo.svg";
import user from "../../images/user.png";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__up">
          <p className="header__up-text">
            SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS
          </p>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-menu">
            <div className="header__bottom-menu-left">
              <p className="header__bottom-text">shop</p>
              <p className="header__bottom-text">always pan</p>
            </div>
            <div className="header__bottom-menu-middle">
              <img className="header__bottom-logo" src={logo} alt="logo" />
            </div>
            <div className="header__bottom-menu-right">
              <p className="header__bottom-text">mission</p>
              <p className="header__bottom-text">faqs</p>
              <button className="header__bottom-account-icon">
                <img src={user} alt="account icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
