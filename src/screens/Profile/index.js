import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {COLOR} from '../../assets/colors';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ToggleSwitch from 'toggle-switch-react-native';
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
const DATA_ORDER = [
  {id: 1, code: '123123', date: '19-Apr-2021, 5:10 PM', amount: 1},
  {id: 2, code: '6532423', date: '30-Apr-2021, 5:10 PM', amount: 3},
  {id: 3, code: '3242342', date: '11-Nov-2021, 5:10 PM', amount: 2},
  {id: 4, code: '21421421', date: '30-Nov-2021, 5:10 PM', amount: 4},
];
const DATA_CATEGORY = [
  {id: 1, title: 'Active', value: 'Active'},
  {id: 2, title: 'History', value: 'History'},
  {id: 3, title: '', value: ''},
  {id: 4, title: '', value: ''},
  {id: 5, title: '', value: ''},
  {id: 6, title: '', value: ''},
  {id: 7, title: '', value: ' '},
  {id: 8, title: '', value: ''},
];
const Index = ({navigation}) => {
  const [index, setIndex] = useState(1);
  const [isOnPhone, setIsOnPhone] = useState(false);
  const [isOnEmail, setIsOnEmail] = useState(true);
  const renderItemOder = ({item}) => <ItemOder item={item} />;
  const ItemOder = ({item}) => (
    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
      <Feather name="shopping-bag" size={80} color={COLOR.GREEN} />
      <View style={{marginLeft: 16, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'SF-Pro-Display-Bold'}}>
            Order#: {item.code}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'SFProText-Medium',
              marginLeft: 50,
            }}>
            {item.amount} items
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'SFProText-Medium',
          }}>
          {item.date}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'SFProText-Medium',
            color: COLOR.GREEN,
          }}>
          Estimated Delivery on 21 Apr
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item item={item} />;
  const onSelect = id => {
    setIndex(id);
  };
  const Item = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => onSelect(item.id)}
        style={styles.viewItemCategory}>
        <Text
          style={[
            styles.textItemCategory,
            {
              color: index === item.id ? COLOR.GREEN : COLOR.DARK,
              textDecorationLine: index === item.id ? 'underline' : null,
            },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header
          left={true}
          title="Profile"
          right={true}
          navigation={navigation}
        />
      </View>
      <View style={{flex: 11}}>
        <View style={{flexDirection: 'row', margin: 16}}>
          <Image
            source={{uri: DATA[0].image}}
            style={{width: 100, height: 100, borderRadius: 10}}
          />
          <View style={{marginLeft: 16}}>
            <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Bold'}}>
              {DATA[0].name}
            </Text>
            <Text style={{fontSize: 16, fontFamily: 'SFProText-Medium'}}>
              {DATA[0].address}
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 16,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: COLOR.DARK,
            margin: 8,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Feather name="phone" size={20} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'SF-Pro-Display-Bold',
                marginLeft: 16,
              }}>
              {DATA[0].phone}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Advertising and promotions</Text>
            <ToggleSwitch
              isOn={isOnPhone}
              onColor={COLOR.GREEN}
              offColor={COLOR.DARK}
              size="small"
              onToggle={isOn => {
                setIsOnPhone(isOn);
              }}
            />
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
            <Fontisto name="email" size={20} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'SF-Pro-Display-Bold',
                marginLeft: 16,
              }}>
              {DATA[0].email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Advertising and promotions</Text>
            <ToggleSwitch
              isOn={isOnEmail}
              onColor={COLOR.GREEN}
              offColor={COLOR.DARK}
              size="small"
              onToggle={isOn => {
                setIsOnEmail(isOn);
              }}
            />
          </View>
        </View>
        <View
          style={{
            padding: 16,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: COLOR.DARK,
            margin: 8,
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: 'https://taichinh.online/wp-content/uploads/2017/02/the-mastercard.png',
            }}
            style={{width: 70, height: 60, resizeMode: 'center'}}
          />
          <View style={{marginLeft: 16}}>
            <Text style={{fontSize: 20, fontFamily: 'SF-Pro-Display-Bold'}}>
              Payment
            </Text>
            <Text style={{fontSize: 18, fontFamily: 'SFProText-Medium'}}>
              **** **** **** 3275
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'SFProText-Medium',
                color: COLOR.DARK,
              }}>
              07/23
            </Text>
          </View>
        </View>
        <Text
          style={{margin: 8, fontFamily: 'SF-Pro-Display-Bold', fontSize: 18}}>
          My Order
        </Text>
        <View>
          <FlatList
            data={DATA_CATEGORY}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}></FlatList>
        </View>
        <FlatList
          data={DATA_ORDER}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemOder}></FlatList>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLOR.WHITE},
  viewItemCategory: {
    marginLeft: 8,
    marginRight: 8,
  },
  textItemCategory: {
    fontSize: 16,
    fontFamily: 'SF-Pro-Display-Bold',
  },
});
