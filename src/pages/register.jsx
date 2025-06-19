import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Create a new account" type="register">
      <FormRegister />
    </AuthLayouts>
  );
}

export default RegisterPage;
