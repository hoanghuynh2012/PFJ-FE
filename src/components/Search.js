import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLOR} from '../assets/colors';
const Search = () => {
  const [search, setSearch] = useState('');
  const updateSearch = search => {
    setSearch(search);
  };
  return (
    <View style={styles.viewSearch}>
      <EvilIcons name="search" size={16} color={COLOR.DARK} />
      <TextInput
        style={styles.input}
        onChangeText={updateSearch}
        value={search}
        placeholder="Find your plant"
        keyboardType="default"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  viewSearch: {
    padding: 6,
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    margin: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 40,
    margin: 12,
  },
});
