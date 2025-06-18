const MyButton = (props) => {
  const { type, variant, children} = props;
  return (
    <button type={type} className={variant}>
      {children}
    </button>
  );
};

export default MyButton;