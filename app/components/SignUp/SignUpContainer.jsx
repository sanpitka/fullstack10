import { useFormik } from 'formik';
import { Pressable, TextInput, View } from 'react-native';
import * as yup from 'yup';
import theme from '../../theme';
import Text from '../Text';

const styles = {
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 4,
    padding: 8,
  },
  errorText: {
    color: theme.colors.errorColor,
    marginBottom: 10,
    marginTop: -10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .min(5, 'Username must be at least 5 characters long')
    .max(30, 'Username must be at most 30 characters long')
    .required('Username is required'),
  password: yup.string()
    .min(5, 'Password must be at least 5 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .required('Password is required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});


const SignUpContainer = ({ onSubmit }) => {

  const handleSubmit = ({ username, password }) => {
    onSubmit({ username, password });    
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });


  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          style={[
            styles.input,
            formik.touched.username && formik.errors.username ? { borderColor: theme.colors.errorColor } : null
          ]}
          onChangeText={formik.handleChange('username')}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        )}
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={[
            styles.input,
            formik.touched.password && formik.errors.password ? { borderColor: theme.colors.errorColor } : null
          ]}
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
        <TextInput
          placeholder="Password confirmation"
          secureTextEntry={true}
          style={[
            styles.input,
            formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? { borderColor: theme.colors.errorColor } : null
          ]}
          onChangeText={formik.handleChange('passwordConfirmation')}
          value={formik.values.passwordConfirmation}
        />
        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
          <Text style={styles.errorText}>{formik.errors.passwordConfirmation}</Text>
        )}
        <Pressable onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpContainer;