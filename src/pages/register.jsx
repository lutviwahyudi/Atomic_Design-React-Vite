import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Create a new account">
      <FormRegister />
    </AuthLayouts>
  );
}

export default RegisterPage;
