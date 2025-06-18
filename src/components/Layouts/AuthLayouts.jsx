import '../../assets/css/auth.css';

const AuthLayouts = (props) => {
  return (
    <div className="login-container">
        <div className="login-box">
        <h2>{props.title}</h2>
      {props.children}
      </div>
    </div>
  );
}
export default AuthLayouts;