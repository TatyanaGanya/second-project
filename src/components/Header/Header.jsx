import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import acount from "../../images/acount.svg";

function Header({ name, loggedIn }) {
  const [activeState, setActiveState] = useState(false);

  function openHeader(e) {
    e.preventDefault();
    setActiveState((prev) => !prev);
  }

  function onSignOut() {
    localStorage.removeItem("jwt");
  }

  return (
    <header
      className={`header ${name === "home" ? "header_background" : ""} ${
        activeState ? "active" : ""
      }`}
    >
      <div className={`header__content ${activeState ? "active" : ""}`}>

        <Link to={"/"}>
          <img
            src={logo}
            alt="Фильмы"
            className={`header__logo ${activeState ? "active" : ""}`}
          ></img>
        </Link>

        {name === "home" && loggedIn ? (
          <div className="header__authorized">
            <Link to={"/signup"} className="header__singup">
              Регистрация
            </Link>
            <Link to={"/signin"} className="header__singin">
              Войти
            </Link>
          </div>
        ) : (
        <>
            <label onClick={openHeader} className="toggle-menu">
              <i
                className={`header__burger-icon ${activeState ? "active" : ""}`}
              ></i>
            </label>

            <nav className={`header__nav ${activeState ? "active" : ""}`}>

              <Link
                to={"/"}
                onClick={onSignOut}
                className={`header__link header__link_main ${
                  activeState ? "active" : ""
                }`}
              >
                Главная
              </Link>

              <Link
                to={"/movies"}
                onClick={onSignOut}
                className={`header__link ${
                  name === "home" ? "header_color" : ""
                } header__link_active ${activeState ? "active" : ""}`}
              >
                Фильмы
              </Link>

              <Link
                to={"/saved-movies"}
                onClick={onSignOut}
                className={`header__link ${
                  name === "home" ? "header_color" : ""
                } ${activeState ? "active" : ""}`}
              >
                Сохранённые фильмы
              </Link>

            </nav>

            <div
              className={`header__conteiner ${activeState ? "active" : " "}`}
            >
              <Link
                to={"/profile"}
                className={`header__button ${
                  name === "home" ? "header_color" : ""
                } ${activeState ? "active" : " "}`}
                onClick={onSignOut} ///
              >
                {/* <p className={`${name === "home" ? "header_color" : ""}`}> */}
                  Акаунт
                {/* </p> */}

                <img src={acount} alt="Фильмы" className="header__acount" />
              </Link>
            </div>

            <div
              className={`header__burger ${activeState ? "active" : ""}`}
              onClick={openHeader}
            >
              <span></span>
            </div>
            </>
        )}
      </div>
    </header>
  );
}

export default Header;
