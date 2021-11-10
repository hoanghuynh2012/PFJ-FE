import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  View,
  FlatList,
} from 'react-native';
import Header from '../../components/Header';
import ImageViewer from 'react-native-image-zoom-viewer';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOR} from '../../assets/colors';

const DATA = [
  {
    id: 1,
    title: 'Cyclamen',
    info: 'Cyclamen is a genus of 23 species of perennial flowering plants in the family Primulaceae. Cyclamen species are native to Europe and the Mediterranean Basin east to the Caucasus and Iran, with one species in Somalia. They grow from tubers and are valued for their flowers with upswept petals and variably patterned leaves.\
    It was traditionally classified in the family Primulaceae, was reclassified in the family Myrsinaceae in 2000, and finally, in 2009 with the introduction of the APG III system, was returned to the subfamily Myrsinoideae within the family Primulaceae.',
    category: 'Kitchen',
    image:
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/12/9/2/CI_NGB_Cyclamen_DixiePink.jpg.rend.hgtvcom.1280.1707.suffix/1449701306398.jpeg',
    new_price: '25',
    old_price: '35',
    type: 'Indoor',
    size: ' Medium',
    level: 'Hard',
    humidity: '3-3,5L',
    light: '18-20h',
    temperature: '7-21 \xB0C',
  },
];
const DATA_ALSO = [
  {
    id: 1,
    image:
      'https://caycanhmienbac.com/wp-content/uploads/2020/09/nha-dam-thuy-sinh-8.jpg',
  },
  {
    id: 2,
    image:
      'https://noithatmienbac.vn/images/image/kienthuc/cay-luoi-ho-vang.jpg',
  },
  {
    id: 3,
    image:
      'https://lasc.vn/wp-content/uploads/2020/09/cay-day-nhen-thuy-sinh-1-min.jpg',
  },
  {
    id: 4,
    image:
      'https://static1.cafeland.vn/cafelandnew/hinh-anh/2020/12/26/144/image-20201226094059-3.jpeg',
  },
  {
    id: 5,
    image:
      'https://d309imu7m5ntlq.cloudfront.net/wp-content/uploads/2021/08/Cay-co-trang-tri-trong-nha-tao-khuon-vien-xanh-mat-ve-dep-sang-trong.jpg',
  },
];
const images = [
  {
    url: DATA[0].image,
    props: {},
  },
];
const ProductDetail = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [more, setMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
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
  const renderItemBody = ({item}) => <ItemBody item={item} />;

  const ItemBody = ({item}) => (
    <View style={{flex: 6}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            margin: 16,
          }}>
          <View style={styles.viewItem}>
            <Ionicons name="water-outline" size={24} color={COLOR.WHITE} />
            <Text style={styles.textItem}>{item.humidity}</Text>
          </View>
          <View style={styles.viewItem}>
            <Feather name="sun" size={24} color={COLOR.WHITE} />
            <Text style={styles.textItem}>{item.light}</Text>
          </View>
          <View style={styles.viewItem}>
            <FontAwesome
              name="thermometer-half"
              size={24}
              color={COLOR.WHITE}
            />
            <Text style={styles.textItem}>{item.temperature}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image
            style={{width: 200, height: 300, resizeMode: 'cover'}}
            source={{uri: item.image}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 0, right: 0}}
          onPress={() => setVisible(true)}>
          <Feather name="zoom-in" size={24} color={COLOR.WHITE} />
        </TouchableOpacity>
        <Modal visible={visible} transparent={true}>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR.BLACK,
              borderRadius: 10,
            }}
            onPress={() => setVisible(false)}>
            <Text
              style={{
                backgroundColor: COLOR.BLACK,
                color: 'white',
                textAlign: 'center',
                fontFamily: 'SFProText-Regular',
              }}>
              Close
            </Text>
          </TouchableOpacity>
          <ImageViewer imageUrls={images} />
        </Modal>
      </View>
      <View style={{flex: 1, margin: 8}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text style={styles.titleBody}>Type</Text>
            <Text style={{fontSize: 22, color: COLOR.BLACK}}>{item.type}</Text>
          </View>
          <View>
            <Text style={styles.titleBody}>Size</Text>
            <Text style={{fontSize: 22, color: COLOR.BLACK}}>{item.size}</Text>
          </View>
          <View>
            <Text style={styles.titleBody}>Level</Text>
            <Text style={{fontSize: 22, color: COLOR.BLACK}}>{item.level}</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: COLOR.GREEN,
                fontFamily: 'SF-Pro-Display-Semibold',
              }}>
              ${item.new_price}
            </Text>
            <Text
              style={{
                fontFamily: 'SF-Pro-Display-Semibold',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                fontSize: 16,
              }}>
              ${item.old_price}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: 'SF-Pro-Display-Semibold',
            fontSize: 22,
            marginLeft: 16,
          }}>
          Description
        </Text>
        <Text numberOfLines={more ? undefined : 3} style={styles.content}>
          {item.info}
        </Text>
        <Text style={styles.more} onPress={() => setMore(!more)}>
          {more ? 'Put in order' : 'Read more ...'}
        </Text>
        <Text
          style={{
            fontFamily: 'SF-Pro-Display-Semibold',
            fontSize: 18,
            marginLeft: 16,
          }}>
          Also for the bedroom is suitable
        </Text>
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={DATA_ALSO}
          renderItem={renderItem}></FlatList>
        <View
          style={{
            flexDirection: 'row',
            height: '10%',
            justifyContent: 'space-around',
            marginTop: 8,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR.DARK,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => changeQuantity(2)}>
            <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
            {quantity}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR.DARK,
              width: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => changeQuantity(1)}>
            <Text style={{fontSize: 22, fontFamily: 'SF-Pro-Display-Semibold'}}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLOR.GREEN,
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              height: '100%',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 16, fontFamily: 'SFProText-Medium'}}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const renderItem = ({item}) => <Item item={item} />;
  const Item = ({item}) => (
    <View style={{margin: 8}}>
      <Image style={styles.itemImage} source={{uri: item.image}}></Image>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header
          left={true}
          navigation={navigation}
          title={DATA[0].title}
          right={true}></Header>
      </View>
      <View style={{flex: 11}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItemBody}
        />
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLOR.DARK,
    borderRadius: 10,
  },
  textItem: {
    fontSize: 16,
    margin: 8,
    fontFamily: 'SFProText-Medium',
    color: COLOR.WHITE,
  },
  itemImage: {width: 150, height: 150},
  titleBody: {
    fontSize: 18,
    color: COLOR.DARK,
    fontFamily: 'SFProText-Medium',
  },
  content: {
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'SFProText-Medium',
  },
  more: {
    color: COLOR.GREEN,
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'SFProText-Medium',
  },
});
