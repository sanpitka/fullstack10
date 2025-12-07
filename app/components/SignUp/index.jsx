import { useNavigate } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import SignUpContainer from './SignUpContainer';

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async ({ username, password }) => {
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };
  return <SignUpContainer onSubmit={handleSubmit} />;
};

export default SignUp;