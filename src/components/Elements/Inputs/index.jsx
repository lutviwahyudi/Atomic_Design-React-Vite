import Input from "./input"
import Label from "./label"


const InputForm = (props) => {
    const { label, type, name, placeholder } = props;
   return (
   <div className="flex flex-col">
            <Label htmlFor={name}>{label}</Label>
            <Input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              required
            />
          </div>
   )
}

export default InputForm;