import Input from "../Input/Input.jsx";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({ name, children, isValid, onSubmit }) {
  return (
    <form className="profile__form" noValidate name={name} onSubmit={onSubmit}>
      {children}
      {name === "signup" ? (
        <>
      <Link to={"/"} className="autorization__button">
        Войти
      </Link>
        </>
      ) : name === "signin" ? (
        <>
              <Link to={"/"} className="autorization__button">
        Регистрация
      </Link></>
      ) : (
        <>
<Link to={"/"} className="profaile__change">
        Редактировать
      </Link>

      <Link to={"/"} className="profile__out">
        Выйти из аккаунта
      </Link>
        </>
      )}
      
    </form>
  );
}

export default Form;
