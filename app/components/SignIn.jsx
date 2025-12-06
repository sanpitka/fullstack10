import { useFormik } from 'formik';
import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import * as yup from 'yup';

import { useNavigate } from 'react-router-native';
import useSignIn from '../hooks/useSignIn';
import theme from '../theme';
import Text from './Text';

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
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const data = await signIn(values);
        console.log(data);
        formik.resetForm();
        navigate('/');
      } catch (e) {
        console.log(e);
      }
    },
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
        <Pressable onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default SignIn;