import InputForm from "../Elements/Inputs";
import MyButton from "../Elements/Buttons";
const FormLogin = () => {
  return (
    <form>
      <InputForm label="Username" name="username" type="text" placeholder="enter your email" />
      <InputForm label="Password" name="password" type="password" placeholder="enter your password" />
      <MyButton type="submit" variant="login-btn">login</MyButton>
    </form>
  );
}

export default FormLogin;