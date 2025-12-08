import { Pressable, TextInput, View } from 'react-native';
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
  multilineInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 4,
    padding: 8,
    textAlignVertical: 'top',
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

const ReviewForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Repository owner name"
      style={[
        styles.input,
        touched.ownerName && errors.ownerName ? { borderColor: theme.colors.errorColor } : null
      ]}
      onChangeText={handleChange('ownerName')}
      value={values.ownerName}
    />
    {touched.ownerName && errors.ownerName && (
      <Text style={styles.errorText}>{errors.ownerName}</Text>
    )}
    <TextInput
      placeholder="Repository name"
      style={[
        styles.input,
        touched.repositoryName && errors.repositoryName ? { borderColor: theme.colors.errorColor } : null
      ]}
      onChangeText={handleChange('repositoryName')}
      value={values.repositoryName}
    />
    {touched.repositoryName && errors.repositoryName && (
      <Text style={styles.errorText}>{errors.repositoryName}</Text>
    )}
    <TextInput
      placeholder="Rating (0-100)"
      style={[
        styles.input,
        touched.rating && errors.rating ? { borderColor: theme.colors.errorColor } : null
      ]}
      onChangeText={handleChange('rating')}
      value={values.rating}
    />
    {touched.rating && errors.rating && (
      <Text style={styles.errorText}>{errors.rating}</Text>
    )}
    <TextInput
      placeholder="Review"
      style={styles.multilineInput}
      multiline={true}
      onChangeText={handleChange('text')}
      value={values.text}
    />
    {touched.text && errors.text && (
      <Text style={styles.errorText}>{errors.text}</Text>
    )}
    <Pressable onPress={handleSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Create a review</Text>
    </Pressable>
  </View>
);

export default ReviewForm;