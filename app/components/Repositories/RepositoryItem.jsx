import React from 'react';
import { Image, Linking, Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    paddingTop: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    marginTop: 4,
    marginLeft: 60,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 4,
    flex: 1,
  },
});

const roundToThousands = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const RepositoryItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.fullName}</Text>
          <Text style={{ fontStyle: 'italic' }}>{item.description}</Text>
        </View>
      </View>
      <View style={styles.row}>
          <Text style={styles.language}>{item.language}</Text>
      </View>
      <View style={styles.bottomRow}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{roundToThousands(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{roundToThousands(item.forksCount)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{roundToThousands(item.reviewCount)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{roundToThousands(item.ratingAverage)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
    {item.url &&
      <View style={styles.buttonRow}>
        <Pressable 
          style={styles.pressable}
          onPress={() => Linking.openURL(item.url)}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Open in GitHub</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigate(`/review/${item.id}`,
            );
          }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Review</Text>
        </Pressable>
      </View>
    }
    </View>
  );
};

export default RepositoryItem;