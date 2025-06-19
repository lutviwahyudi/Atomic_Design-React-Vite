
const FormLabel = (props) => {
    const { label, name } = props;
    return (
        <label htmlFor={name} className="text-sm text-gray-700">{label}</label>
    );
}
export default FormLabel;