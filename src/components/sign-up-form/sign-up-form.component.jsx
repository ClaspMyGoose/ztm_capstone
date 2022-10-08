import { SignUpContainer, FormTitle } from './sign-up-form.styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserDocument, registerWithEmailPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';





const SignUpForm = () => {

  const nav = useNavigate();
  const navToHome = () => {nav('/')};

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '', 
    passwordConfirm: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  
  const { displayName, password, email, passwordConfirm } = formFields; 

  const handleChange = (e) => {
    setFormFields({...formFields, [e.target.name]: e.target.value })
  }

  const createNewUser = async (e) => {
    e.preventDefault();
    
    if (password !== passwordConfirm) { 
      return alert('Passwords don\'t match!'); 
    }

    if (!password || !email || !displayName || !passwordConfirm) {
      return alert('Please fill in all required values.')
    }

    try {
      const { user } = await registerWithEmailPassword(email, password);
      await createUserDocument(user, {name: displayName}); 
      setFormFields(defaultFormFields);
      navToHome();
    } catch(error) {
      switch(error.code) {
        case 'auth/weak-password': 
          alert('Password must be 6 characters or more');
          break;
        case 'auth/email-already-in-use':
          alert('Email already in use!');
          break;
        default: 
          console.log('error creating user', error.code)
      }
    }
  }


  return (
  <SignUpContainer>
    <FormTitle>Don't have an account?</FormTitle>
    <form onSubmit={createNewUser}>
      <FormInput label='Display Name' type="text" name="displayName" required value={displayName} onChange={handleChange} />
      <FormInput label='Email' type="email" name ="email" required value={email} onChange={handleChange} />
      <FormInput label='Password' type="password" name="password" required value={password} onChange={handleChange} />
      <FormInput label='Confirm Password' type="password" name="passwordConfirm" required value={passwordConfirm} onChange={handleChange} />
      <Button type='submit'>Sign Up</Button>
    </form>
  </SignUpContainer>
  )
  
}

export default SignUpForm; 