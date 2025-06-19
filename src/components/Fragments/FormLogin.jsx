import InputForm from "../Elements/Inputs";
import MyButton from "../Elements/Buttons";
import FormLabel from "../Elements/Inputs/label";
import { Link } from "react-router-dom";
const FormLogin = () => {
  return (
    <form className="space-y-5">
      <FormLabel label="Email" htmlFor="email" />
            <InputForm
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
      <FormLabel label="Password" htmlFor="password" />
            <InputForm
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              />

          <MyButton
            type="submit"
            variant="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </MyButton>
    </form>
  );
}

export default FormLogin;