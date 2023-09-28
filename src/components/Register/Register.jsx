import Autorization from "../Autorization/Autorization";
import Input from "../Input/Input.jsx";

function Register({ name='signup' }) {

  // function onSignOut() {
  //   localStorage.removeItem("jwt");
  // }

  return (
    <Autorization name={name}>
    <Input
      name='username'
      type='text'
      title='Имя'
      minLength = '2'
    />
    <Input
      name='email'
      type='email'
      title='E-mail'
    />
    <Input
      name='password'
      type='password'
      title='Пароль'
      minLength = '3'
    />
  </Autorization>
  );
}

export default Register;
