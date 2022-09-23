import './login.styles.scss';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const Login = () => {


  return (
    <div className='login-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}; 

export default Login


