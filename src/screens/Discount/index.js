import React, {useState} from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {COLOR} from '../../assets/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Search from '../../components/Search';
import Header from '../../components/Header';

const DATA_CATEGORY = [
  {id: 1, title: 'All', value: 'All'},
  {id: 2, title: 'Kitchen', value: 'Kitchen'},
  {id: 3, title: 'Bedroom', value: 'Bedroom'},
  {id: 4, title: 'Bathroom', value: 'Bathroom'},
  {id: 5, title: 'Living room', value: 'Livingroom'},
  {id: 6, title: 'Balcony', value: 'Balcony'},
  {id: 7, title: 'Dining room', value: 'Dining room'},
  {id: 8, title: 'Discount', value: 'Discount'},
];
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
  },
  {
    id: 2,
    title: 'Ficus',
    info: 'Ficus ( or ) is a genus of about 850 species of woody trees, shrubs, vines, epiphytes and hemiepiphytes in the family Moraceae. Collectively known as fig trees or figs, they are native throughout the tropics with a few species extending into the semi-warm temperate zone. The common fig (F. carica) is a temperate species native to southwest Asia and the Mediterranean region (from Afghanistan to Portugal), which has been widely cultivated from ancient times for its fruit, also referred to as figs.\
     The fruit of most other species are also edible though they are usually of only local economic importance or eaten as bushfood. However, they are extremely important food resources for wildlife. Figs are also of considerable cultural importance throughout the tropics, both as objects of worship and for their many practical uses.',
    category: 'Bedroom',
    image:
      'https://bloomscape.com/wp-content/uploads/2020/05/bloomscape_ficus-altissima-std_charcoal.jpg',
    new_price: '35',
    old_price: '45',
  },
  {
    id: 3,
    title: 'Violetta',
    info: 'Viola is a genus of flowering plants in the violet family Violaceae. It is the largest genus in the family, containing between 525 and 600 species. Most species are found in the temperate Northern Hemisphere; however, some are also found in widely divergent areas such as Hawaii, Australasia, and the Andes.\
    Some Viola species are perennial plants, some are annual plants, and a few are small shrubs. Many species, varieties and cultivars are grown in gardens for their ornamental flowers. In horticulture the term pansy is normally used for those multi-colored, large-flowered cultivars which are raised annually or biennially from seed and used extensively in bedding. The terms viola and violet are normally reserved for small-flowered annuals or perennials, including the wild species.',
    category: 'Bathroom',
    image:
      'https://photo.floraccess.com/3agkqjnqsd9mhdg4863k9n07r9fv1n3gd1d3uobl_big.jpg',
    new_price: '25',
    old_price: '35',
  },
];
const Index = ({navigation}) => {
  const [index, setIndex] = useState(1);
  const [indexItem, setIndexItem] = useState('');
  const [colorHear, setColorHear] = useState(COLOR.BLACK);
  const changeHear = id => {
    setIndexItem(id);
    setColorHear(colorHear === COLOR.RED ? COLOR.BLACK : COLOR.RED);
    console.log(colorHear, indexItem);
  };
  const renderItemPlants = ({item}) => <ItemPlants item={item} />;
  const ItemPlants = ({item}) => (
    <TouchableOpacity
      style={styles.viewItemPlants}
      onPress={() => navigation.navigate('ProductDetail')}>
      <Image style={styles.imageItem} source={{uri: item.image}} />
      <View style={styles.contentItem}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 16,
            marginTop: 6,
          }}>
          <Text style={styles.titleItem}>{item.title}</Text>
          <TouchableOpacity onPress={() => changeHear(item.id)}>
            <AntDesign
              name="heart"
              size={25}
              color={indexItem === item.id ? COLOR.RED : COLOR.BLACK}
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.titleItem, {fontSize: 14, color: COLOR.DARK}]}>
          {`for ` + item.category}
        </Text>
        <Text
          numberOfLines={3}
          style={[
            styles.titleItem,
            {fontSize: 10, color: COLOR.DARK, marginRight: 16},
          ]}>
          {item.info}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 16,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: COLOR.DARK,
              marginRight: 8,
              color: COLOR.GREEN,
              fontFamily: 'SF-Pro-Display-Semibold',
            }}>
            ${item.new_price}
          </Text>
          <Text
            style={{
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
            }}>
            ${item.old_price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item item={item} />;
  const onSelect = id => {
    setIndex(id);
  };
  const Item = ({item}) => (
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
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Header left={false} title="Discount" right={false} />
      </View>
      <Search />
      <View style={{flex: 9}}>
        <View>
          <FlatList
            data={DATA_CATEGORY}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}></FlatList>
        </View>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItemPlants}></FlatList>
      </View>
    </View>
  );
};

export default Index;
