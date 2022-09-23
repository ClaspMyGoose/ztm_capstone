import './sign-in-form.styles.scss';
import { useState } from 'react'
import { googleSignIn, createUserDocument } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const SignInForm = () => {

const defaultFormFields = {
  email: '',
  password: ''
}

const [formFields, setFormFields] = useState(defaultFormFields)

const logGoogleUser = async () => {
  const { user } = await googleSignIn();
  createUserDocument(user);
}



// TODO function does nothing 
const logInFunction = () => {}

const onChangeHandler = (e) => {
  setFormFields({ ...formFields, [e.target.name]: e.target.value })
}


const { email, password } = formFields; 



return (
  <div className="sign-in-container">
    <h2>Already have an account?</h2>
    <form onSubmit={logInFunction}>

      <FormInput label='Email' type='email' value={email} name='email' onChange={onChangeHandler} />
      <FormInput label='Password' type='password' value={password} name='password' onChange={onChangeHandler} />
      <Button type='submit'>Sign In</Button>
    </form>
    <Button onClick={logGoogleUser} buttonType='google'>Sign In with Google</Button>

  </div>
)

}

export default SignInForm