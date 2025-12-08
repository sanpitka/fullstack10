import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rating: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  ratingNumber: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review, showRepositoryName }) => (
  <View>
    <ItemSeparator />
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.ratingNumber}>{review.rating}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>
          {showRepositoryName
            ? review.repository.fullName
            : review.user.username}</Text>
        <Text style={{ color: 'gray' }}>{new Date(review.createdAt).toLocaleDateString()}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  </View>
);

export default ReviewItem;