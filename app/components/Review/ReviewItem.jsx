import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
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
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review, myReviewsSelected, onDelete }) => {
  const navigate = useNavigate();

  return (
    <View>
      <ItemSeparator />
      <View style={styles.container}>
        <View style={styles.row}>
        <View style={styles.rating}>
          <Text style={styles.ratingNumber}>{review.rating}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>
            {myReviewsSelected
              ? review.repository.fullName
              : review.user.username}</Text>
          <Text style={{ color: 'gray' }}>{new Date(review.createdAt).toLocaleDateString()}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      {myReviewsSelected && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginTop: 10, width: '100%' }}>
          <Pressable onPress={() => 
            Alert.alert(
              'Delete review',
              'Are you sure you want to delete this review?',
              [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress:
                  () => onDelete() }
              ]
            )
          } style={[styles.button, { backgroundColor: theme.colors.errorColor, width: '48%' }]}>
            <Text style={styles.buttonText}>Delete review</Text>
          </Pressable>
          <Pressable 
            onPress={() => navigate(`/repository/${review.repository.id}`)} 
            style={[styles.button, { width: '48%' }]}
          >
            <Text style={styles.buttonText}>View repository</Text>
          </Pressable>
        </View>
      )}
    </View>
  </View>
  );
}

export default ReviewItem;