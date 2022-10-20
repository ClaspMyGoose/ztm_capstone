import { SignInContainer, ButtonsContainer, FormTitle } from './sign-in-form.styles';
import { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';

const SignInForm = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  const defaultFormFields = {
    email: '',
    password: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields; 

  const logGoogleUser = async (e) => {
    e.preventDefault();

    try {
      // const { user } = await googleSignIn();
      // await createUserDocument(user);
      
      dispatch(googleSignInStart()); 
      nav('/');
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
      // await logWithEmailPassword(email, password);
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
      nav('/');
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
    <SignInContainer>
      <FormTitle>Already have an account?</FormTitle>
      <form onSubmit={logInFunction}>
        <FormInput label='Email' type='email' value={email} name='email' onChange={onChangeHandler} />
        <FormInput label='Password' type='password' value={password} name='password' onChange={onChangeHandler} />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button onClick={logGoogleUser} type='button' buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm