import './sign-up-form.styles.scss';
import { useState } from 'react';
import { createUserDocument, registerWithEmailPassword } from '../../utils/firebase/firebase.utils';





const SignUpForm = () => {

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
    } catch(error) {
      console.log('error creating user', error);
    }
  }


  return (
  <div className="sign-up-form">
    <h1>Sign in with email and password</h1>
    <form onSubmit={createNewUser}>
      <label>Display Name</label>
      <input type="text" name="displayName" required value={displayName} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name ="email" required value={email} onChange={handleChange} />
      <label>Password</label>
      <input type="password" name="password" required value={password} onChange={handleChange} />
      <label>Confirm Password</label>
      <input type="password" name="passwordConfirm" required value={passwordConfirm} onChange={handleChange} />
      <button type='submit'>Register</button>
    </form>
  </div>
  )
  
}

export default SignUpForm; 