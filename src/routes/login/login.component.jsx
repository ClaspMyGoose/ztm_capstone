import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import LoginContainer from './login.styles';

const Login = () => {


  return (
    <LoginContainer>
      <SignInForm />
      <SignUpForm />
    </LoginContainer>
  )
}; 

export default Login


