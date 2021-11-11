import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, FlatList, View} from 'react-native';
import Header from '../../components/Header';
import {COLOR} from '../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './style';
const DATA = [
  {
    id: 1,
    title: 'Cyclamen',
    category: 'bedroom',
    info: 'Cyclamen is a genus of 23 species of perennial flowering plants in the family Primulaceae. Cyclamen species are native to Europe and the Mediterranean Basin east to the Caucasus and Iran, with one species in Somalia. They grow from tubers and are valued for their flowers with upswept petals and variably patterned leaves.\
It was traditionally classified in the family Primulaceae, was reclassified in the family Myrsinaceae in 2000, and finally, in 2009 with the introduction of the APG III system, was returned to the subfamily Myrsinoideae within the family Primulaceae.',
    image:
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/12/9/2/CI_NGB_Cyclamen_DixiePink.jpg.rend.hgtvcom.1280.1707.suffix/1449701306398.jpeg',
    new_price: '25',
    old_price: '35',
    quantity: 2,
  },
  {
    id: 2,
    title: 'Ficus',
    category: 'bedroom',
    info: 'Ficus ( or ) is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae. Collectively known as fig trees or figs, they are native throughout the tropics with a few species extending into the semi-warm temperate zone. The common fig (F. carica) is a temperate species native to southwest Asia and the Mediterranean region (from Afghanistan to Portugal), which has been widely cultivated from ancient times for its fruit, also referred to as figs.\
    The fruit of most other species are also edible though they are usually of only local economic importance or eaten as bushfood. However, they are extremely important food resources for wildlife. Figs are also of considerable cultural importance throughout the tropics, both as objects of worship and for their many practical uses.',
    image:
      'https://bloomscape.com/wp-content/uploads/2020/05/bloomscape_ficus-altissima-std_charcoal.jpg',
    new_price: '35',
    old_price: '45',
    quantity: 1,
  },
];
const Index = ({navigation}) => {
  const [quantity, setQuantity] = useState(DATA[0].quantity);
  const changeQuantity = method => {
    switch (method) {
      case 1:
        setQuantity(quantity + 1);
        break;
      case 2:
        if (quantity !== 1) {
          setQuantity(quantity - 1);
          break;
        }
        break;
    }
  };
  const renderItem = ({item}) => <Item item={item} />;
  const Item = ({item}) => (
    <View style={styles.containerItem}>
      <Image
        style={{width: 150, height: 150, resizeMode: 'center'}}
        source={{uri: item.image}}></Image>
      <View style={{margin: 8, width: '60%'}}>
        <View style={styles.viewItem}>
          <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
            {item.title}
          </Text>
          <TouchableOpacity style={{marginRight: 16}}>
            <MaterialIcons name="delete" color={COLOR.DARK} size={24} />
          </TouchableOpacity>
        </View>

        <Text style={{fontSize: 16, fontFamily: 'SFProText-Medium'}}>
          for {item.category}
        </Text>
        <Text
          numberOfLines={2}
          style={{fontSize: 12, fontFamily: 'SFProText-Regular'}}>
          {item.info}
        </Text>
        <View style={styles.viewBottomItem}>
          <TouchableOpacity
            style={styles.buttonChangeQuantity}
            onPress={() => changeQuantity(2)}>
            <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
            {item.quantity}
          </Text>
          <TouchableOpacity
            style={styles.buttonChangeQuantity}
            onPress={() => changeQuantity(1)}>
            <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
              +
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'SFProText-Regular',
              color: COLOR.GREEN,
            }}>
            ${item.new_price}
          </Text>
          <Text style={styles.textOldPrice}>${item.old_price}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Header title="Cart" left={true} right={false} />
      <View style={{flex: 11}}>
        <View style={{flex: 9}}>
          <FlatList data={DATA} renderItem={renderItem} />
        </View>
        <View style={{flex: 3}}>
          <View style={styles.viewBottom}>
            <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'SFProText-Regular',
                color: COLOR.GREEN,
              }}>
              $ 145
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonBuy}
            onPress={() => navigation.navigate('CheckOut')}>
            <Text style={styles.textButtonBuy}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;
