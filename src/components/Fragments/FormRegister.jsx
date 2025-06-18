import InputForm from "../Elements/Inputs";
import MyButton from "../Elements/Buttons";
const FormRegister = () => {
  return (
    <form>
      <InputForm label="Email" name="email" type="email" placeholder="enter your email" />
      <InputForm label="Password" name="password" type="password" placeholder="enter your password" />
      <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder="confirm your password" />
      <MyButton type="submit" variant="login-btn">Register</MyButton>
    </form>
  );
}

export default FormRegister;