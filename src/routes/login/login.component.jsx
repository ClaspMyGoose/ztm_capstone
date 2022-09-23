
import { googleSignIn, createUserDocument } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const Login = () => {


  const logGoogleUser = async () => {
    const { user } = await googleSignIn();
    createUserDocument(user);
  }



  return (
    <div>
      <SignUpForm />
      <button onClick={logGoogleUser}>Log in with Google</button>
    </div>
  )
}; 

export default Login


