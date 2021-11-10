import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLOR} from '../../assets/colors';
const Index = ({navigation}) => {
  useEffect(() => {
    const wait = () =>
      setTimeout(() => {
        navigation.replace('BottomTab');
      }, 3000);
    wait();
    return () => {
      clearTimeout(wait);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../src/assets/images/icon.png')}
      />
      <View style={styles.viewText}>
        <Text style={styles.title}>Plants From Joris</Text>
        <Text style={styles.info}>
          For your convenience, unqiue plants are sorted by room
        </Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '30%',
    tintColor: COLOR.WHITE,
    marginTop: 200,
  },
  title: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontSize: 26,
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
  info: {
    fontFamily: 'SFProText-Medium',
    fontSize: 16,
    color: COLOR.WHITE,
    margin: 2,
    padding: 16,
    textAlign: 'center',
  },
});
