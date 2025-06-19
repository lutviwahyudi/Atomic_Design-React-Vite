import '../../assets/css/index.css';
import { Link } from 'react-router-dom';
const AuthLayouts = (props) => {
  const { type, title } = props;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="font-bold text-center mb-6 text-gray-800">{title}</h2>
        {props.children}

      <div className="mt-4 text-center text-sm text-gray-600">
        {type === 'register' ? (
           <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
        )
        : (
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Register
            </Link>
          </p>
        )}
      </div>
      </div>
  </div>
  );
}
export default AuthLayouts;