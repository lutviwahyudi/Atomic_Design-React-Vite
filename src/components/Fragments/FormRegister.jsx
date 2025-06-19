import InputForm from "../Elements/Inputs";
import MyButton from "../Elements/Buttons";
import { Link } from "react-router-dom";
import FormLabel from "../Elements/Inputs/label";
const FormRegister = () => {
  return (
   <form className="space-y-4">
<FormLabel label="Email" htmlFor="email" />
  <InputForm
    label="Email"
    name="email"
    type="email"
    placeholder="Enter your email"
  />
  <FormLabel label="Password" htmlFor="password" />
  <InputForm
    label="Password"
    name="password"
    type="password"
    placeholder="Enter your password"
  />
  <FormLabel label="Confirm Password" htmlFor="confirmPassword" />
  <InputForm
    label="Confirm Password"
    name="confirmPassword"
    type="password"
    placeholder="Confirm your password"
  />
  <MyButton
            type="submit"
            variant="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Register
          </MyButton>
</form>

  );
}

export default FormRegister;