

const Input = (props) => {
    const { type, placeholder, name } = props;
  return (
      <input type={type} placeholder={placeholder} name={name} className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
  );
};

export default Input;
