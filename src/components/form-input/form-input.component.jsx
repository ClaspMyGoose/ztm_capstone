import { LabelInputGroup, Input, Label } from './form-input.styles'; 



const FormInput = ({ label, ...otherProps }) => {


  return (
    <LabelInputGroup>
      <Input {...otherProps} />
      <Label shrink={otherProps.value.length ? true : false}>{label}</Label>
    </LabelInputGroup>
  )


}


export default FormInput; 