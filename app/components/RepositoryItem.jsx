import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

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
});

const roundToThousands = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
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
    </View>
  );
};

export default RepositoryItem;