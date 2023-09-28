import "./Login.css";
import Autorization from "../Autorization/Autorization";
import Input from "../Input/Input.jsx";
function Login({ name }) {


  return (
    <Autorization>
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
    </Autorization>
  );
}

export default Login;
