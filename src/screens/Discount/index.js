import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../assets/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
const Index = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header title="Discount" right={true} />
      </View>
      <View style={{flex: 11}}></View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.WHITE,
  },
});
