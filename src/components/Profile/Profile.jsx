import { Link } from "react-router-dom";
import "./Profile.css";
import Form from "../Form/Form";
import Autorization from "../Autorization/Autorization";

function Profile({ name, setLoggedIn }) {
  function outLogin() {
    setLoggedIn(false);
  }

  return (
    <section name="profile" title="Редактировать профиль" className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <Form>

      </Form>

    </section>
  );
}

export default Profile;
