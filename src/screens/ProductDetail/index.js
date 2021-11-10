import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  View,
} from 'react-native';
import Header from '../../components/Header';
import ImageViewer from 'react-native-image-zoom-viewer';
import Feather from 'react-native-vector-icons/Feather';
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text>ProductDetail</Text>
            <Text>ProductDetail</Text>
            <Text>ProductDetail</Text>
          </View>

          <Image
            style={{width: 250, height: 400, resizeMode: 'cover'}}
            source={{uri: DATA[0].image}}
          />
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
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
