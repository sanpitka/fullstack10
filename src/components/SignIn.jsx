import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

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
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

const SignIn = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.input} onChangeText={handleUsernameChange} value={username} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} onChangeText={handlePasswordChange} value={password} />
        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default SignIn;