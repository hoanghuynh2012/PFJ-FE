import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
const Index = ({navigation}) => {
  useEffect(() => {
    const wait = () =>
      setTimeout(() => {
        navigation.replace('BottomTab');
      }, 2000);
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
