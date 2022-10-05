import './sign-in-form.styles.scss';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { googleSignIn, createUserDocument, logWithEmailPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const SignInForm = () => {

  const nav = useNavigate();
  const navToHome = () => {nav('/')}


  const defaultFormFields = {
    email: '',
    password: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields; 

  const logGoogleUser = async (e) => {
    e.preventDefault();

    try {
      const { user } = await googleSignIn();
      await createUserDocument(user);
      navToHome('/');
    } catch(error) {
      alert(error.code); 
    }
  }


  const logInFunction = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Please enter your email and password');
    }

    try {
      await logWithEmailPassword(email, password);
      setFormFields(defaultFormFields);
      navToHome('/');
    } catch(error) {
        switch(error.code) {
          case 'auth/wrong-password': 
            alert('Incorrect password');
            break;
          case 'auth/user-not-found':
            alert('Email not found, please Sign Up!');
            break;
          default: 
            console.log(error); 
        }
    }
  }

  const onChangeHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <form onSubmit={logInFunction}>
        <FormInput label='Email' type='email' value={email} name='email' onChange={onChangeHandler} />
        <FormInput label='Password' type='password' value={password} name='password' onChange={onChangeHandler} />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button onClick={logGoogleUser} type='button' buttonType='google'>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm