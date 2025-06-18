import Input from "./input"
import Label from "./label"


const InputForm = (props) => {
    const { label, type, name, placeholder } = props;
   return (
    <div className="form-group">
            <Label htmlFor={name} label={label} id={name}/>
            <Input name={name} type={type} placeholder={placeholder} id={name} />
          </div>
   )
}

export default InputForm;