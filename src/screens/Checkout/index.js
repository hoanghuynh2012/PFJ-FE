import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../../assets/colors';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
const DATA = [
  {
    id: 1,
    name: 'Hoang Huynh',
    image: 'https://picsum.photos/200/300',
    address: `3 Newbridge Courtand. 
Chino Hills, CA 91709`,
    phone: '(+84) 395 956 275',
    email: 'hoanghuynh5555@gmail.com',
  },
];
const Index = () => {
  return (
    <View style={styles.container}>
      <Header left={true} right={false} title="Check Out" />
      <View style={{flex: 11, margin: 8}}>
        <Text style={{fontSize: 18, fontFamily: 'SF-Pro-Display-Bold'}}>
          Shipping address
        </Text>
        <View style={{flexDirection: 'row', margin: 16}}>
          <View style={{marginLeft: 16}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 20, fontFamily: 'SF-Pro-Display-Bold'}}>
                {DATA[0].name}
              </Text>
              <AntDesign name="edit" size={25} color={COLOR.DARK} />
            </View>

            <Text style={{fontSize: 14, fontFamily: 'SFProText-Medium'}}>
              {DATA[0].address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.WHITE},
});
