import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Link } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import useSorter from '../../hooks/useSorter';
import Sorter from '../Sorter';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({ searchKeyword, setSearchKeyword }) => (
  <Searchbar
    placeholder="Search repositories"
    value={searchKeyword}
    onChangeText={setSearchKeyword}
    style={{ margin: 10, marginBottom: 0, backgroundColor: 'white' }}
  />
);

export class RepositoryListContainer extends React.Component {

  render() {
    const { repositories, searchKeyword } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    const filteredNodes = repositoryNodes.filter((repo) =>
      repo.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <FlatList
        data={filteredNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Link to={`/repository/${item.id}`}>
            <RepositoryItem item={item} />
          </Link>
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const { sorter, setSorter, orderBy, orderDirection } = useSorter();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debouncedKeyword] = useState(searchKeyword);
  
  const { repositories } = useRepositories({ 
    orderBy, 
    orderDirection,
    searchKeyword: debouncedKeyword
  });

  return (
    <View style={{ flex: 1 }}>
      <RepositoryListHeader
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Sorter sorter={sorter} setSorter={setSorter} />
      <RepositoryListContainer 
        repositories={repositories} 
        searchKeyword={searchKeyword} 
        setSearchKeyword={setSearchKeyword} 
      />
    </View>
  );
};

export default RepositoryList;