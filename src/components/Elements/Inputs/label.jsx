
const FromLabel = (props) => {
    const { label, htmlFor } = props;
    return (
        <label htmlFor={htmlFor} className="form-label">
            {label}
        </label>
    );
}
export default FromLabel;