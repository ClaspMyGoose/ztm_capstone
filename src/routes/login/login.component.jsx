import { googleSignIn, createUserDocument } from '../../utils/firebase/firebase.utils';


const Login = () => {

  const logGoogleUser = async () => {
    const { user } = await googleSignIn();
    createUserDocument(user);
  }

  return (
    <div>
      <button onClick={logGoogleUser}>Log in with Google</button>
    </div>
  )
}; 

export default Login


