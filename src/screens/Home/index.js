import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View, Image, FlatList} from 'react-native';
import {COLOR} from '../../assets/colors';

import {SliderBox} from 'react-native-image-slider-box';
import Search from '../../components/Search';
const DATA = [
  {
    id: 1,
    title: 'Kitchen',
    image:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F04%2F10%2Fkitchen-with-white-subway-tile-4dad9be7.jpg&q=85',
  },
  {
    id: 2,
    title: 'Bedroom',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/carrier-miller-bronxville-main-bedroom-jpg-1613581824.jpg',
  },
  {
    id: 3,
    title: 'Bathroom',
    image:
      'https://www.arch2o.com/wp-content/uploads/2020/07/Arch2O-10-tips-to-create-stunning-bathroom-designs-in-small-spaces.jpg',
  },
];

const Index = () => {
  const Item = ({title}) => (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItemChildren}
        keyExtractor={item => item.id}
      />
    </View>
  );
  const ItemChildren = ({item}) => (
    <View
      style={{
        margin: 8,
        marginBottom: 10,
      }}>
      <Image
        style={{width: 300, height: 250, borderRadius: 20}}
        source={{uri: item.image}}></Image>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: COLOR.WHITE,
          marginLeft: 4,
          width: '28%',
          height: '10%',
          marginBottom: 6,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'SF-ProText-Medium',
            textAlign: 'center',
            color: COLOR.BLACK,
          }}>
          {item?.title}
        </Text>
      </View>
    </View>
  );
  const renderItemChildren = ({item}) => <ItemChildren item={item} />;
  const renderItem = ({item}) => <Item title={item.title} />;
  const DATA_IMAGE = [
    'http://cdn.mos.cms.futurecdn.net/9262cnpAxWZYGozEBk8wJG.jpg',
    'https://www.huntingforgeorge.com/wp-content/uploads/Feature-Best-Winter-Plants-Hunting-for-George-Community-Journal-extra.jpg',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2019%2F04%2F12163324%2Fassorted-flower-garden-2971f4b7.jpg',
    'https://image.winudf.com/v2/image1/Y29tLmVhLmdhbWUucHZ6Ml9yb3dfc2NyZWVuXzBfMTU1MjQyMjczMV8wNzI/screen-0.jpg?fakeurl=1&type=.jpg',
  ];
  const DATA_CATEGORY = [
    {id: 1, title: 'Plant Categories'},
    {id: 2, title: 'Accessories'},
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.textHeader}>Plans from Joris</Text>
        <Image
          source={require('../../../src/assets/images/icon.png')}
          style={{width: 30, height: 30, marginLeft: 8, tintColor: COLOR.GREEN}}
        />
      </View>
      <Search />
      <View style={{flex: 4, flexDirection: 'column'}}>
        <Text style={styles.title}>Choose your plants</Text>
        <View>
          <SliderBox
            images={DATA_IMAGE}
            sliderBoxHeight={160}
            onCurrentImagePressed={index =>
              console.log(`image ${index} pressed`)
            }
            dotStyle={{width: 0, height: 0}}
            dotColor={COLOR.WHITE}
            inactiveDotColor={COLOR.WHITE}
            imageLoadingColor={COLOR.WHITE}
            autoplay={true}
            circleLoop={true}
          />
        </View>
      </View>
      <View style={{flex: 7}}>
        <FlatList
          data={DATA_CATEGORY}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    flexDirection: 'column',
  },
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
  textHeader: {
    color: COLOR.BLACK,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-Semibold',
  },
  title: {
    padding: 8,
    color: COLOR.BLACK,
    fontSize: 18,
    fontFamily: 'SF-Pro-Display-Semibold',
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
