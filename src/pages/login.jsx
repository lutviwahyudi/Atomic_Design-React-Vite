import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login to your account" type="login">
      <FormLogin />
    </AuthLayouts>
  );
}

export default LoginPage;
